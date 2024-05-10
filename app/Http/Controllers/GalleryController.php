<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\VideoCategories;
use App\Models\GallerySales;
use App\Notifications\NewGallerySale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File as FileFacade;
use Illuminate\Http\File;
use App\Models\Commission;
use App\Models\User;
use Auth;

class GalleryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')
                ->except(['browse', 'videoPage', 'increaseViews']);
    }

    public function myGallery(Request $request)
    {
         $gallery = $request->user()
                        ->purchasedGallery()
                        ->with('streamer')
                        ->latest();

        if ($request->has('search_term')) {
            $gallery->where('title', 'LIKE', '%'.$request->search_term.'%');
        }

        $gallery = $gallery->paginate(4);

        return Inertia::render('Gallery/OrderedGallery', compact('gallery'));
    }

    public function galleryPage(Gallery $gallery, String $slug, Request $request)
    {
        $video->load('streamer');

        return Inertia::render('Gallery/SingleGallery', compact('gallery'));
    }

    public function unlockGallery(Gallery $gallery, Request $request)
    {

        $gallery->load('streamer');

        if ($gallery->canBePlayed) {
            return back()->with('message', __('You already have access to this Gallery'));
        }


        return Inertia::render('Gallery/Unlock', compact('gallery'));
    }

    public function purchaseGallery(Gallery $gallery, Request $request)
    {
        $user = Auth::user();
        $admin = User::where('is_supper_admin', 'yes')->first();
       
        if ($gallery->canBePlayed) {
            return back()->with('message', __('You already have access to this Gallery'));
        }
    
        if ($gallery->price < $user->tokens) {
            $tokens = $gallery->price;
            $admin_token = $tokens * 0.25;
            $streamer_token = $tokens * 0.75;
    
            Commission::create([
                'type' => 'Buy Gallery',
                'video_id' => $gallery->id,
                'streamer_id' => $gallery->user_id,
                'tokens' => $admin_token,
                'admin_id' => $admin->id,
            ]);
    
         $gallerySale = GallerySales::create([
                'gallery_id' => $gallery->id,
                'streamer_id' => $gallery->user_id,
                'user_id' => $request->user()->id,
                'price' => $streamer_token,
            ]);
    
            $user->decrement('tokens', $gallery->price);
            User::where('id', $gallery->user_id)->increment('tokens', $streamer_token);
            $admin->increment('tokens', $admin_token);
    
            $gallery->streamer->notify(new NewGallerySale($gallerySale));
    
            return redirect(route('gallery.ordered'))->with('message', __("Thank you, you can now play the Gallery!"));
        }
    }
    

    public function increaseViews(Gallery $gallery, Request $request)
    {
        $sessionName = ip2long($request->ip()) . '_' . $gallery->id . '_viewed';

        if (!$request->session()->has($sessionName)) {
            // only increase views if the user didn't already play the video this session
            $video->increment('views');

            // set the session to avoid increasing again
            $request->session()->put($sessionName, date('Y-m-d H:i:s'));

            // return the result
            return response()->json(['result' => 'INCREASED', 'session' => $sessionName]);
        } else {
            return response()->json(['result' => 'ALREADY VIEWED THIS SESSION, NOT INCREASING VIEW COUNT']);
        }
    }

    public function browse(VideoCategories $videocategory = null, String $slug = null)
    {
        $request = request();

        if (!$videocategory) {
            $gallery = Gallery::with(['category', 'streamer']);
        } else {
            $gallery = $videocategory->gallery()->with(['category', 'streamer']);
        }

        switch ($request->sort) {
            case 'Most Viewed':
            default:
                $gallery = $gallery->orderByDesc('views');
                break;

            case 'Recently Uploaded':
                $gallery = $gallery->orderByDesc('created_at');
                break;

            case 'Older Gallery':
                $gallery = $gallery->orderBy('created_at');
                break;

            case 'Highest Price':
                $gallery = $gallery->orderByDesc('price');
                break;

            case 'Lowest Price':
                $gallery = $gallery->orderBy('price');
                break;

            case 'Only Free':
                $gallery = $gallery->where('price', 0)->orderByDesc('views');
                break;
        }

        // if keyword
        if ($request->filled('search')) {
            $gallery->where('title', 'LIKE', '%' . $request->search . '%');
        }

        // case categories
        if ($request->filled('selectedCategories')) {
            $gallery->whereHas('category', function ($query) use ($request) {
                $query->whereIn('category_id', $request->selectedCategories);
            });
        }

        // fetch videos
        $gallery = $gallery->paginate(12)->appends($request->query());

        // the image
        $exploreImage = asset('images/browse-videos-icon.png');

        // all video categories
        $categories = VideoCategories::orderBy('category')->get();

        // assing to simple category
        $category = $videocategory;


        // render the view
        return Inertia::render('Gallery/BrowseGallery', compact('gallery', 'category', 'exploreImage', 'categories'));
    }

    public function galleryManager(Request $request)
    {
  
           Gate::authorize('channel-settings');

              $gallery = $request->user()->gallery()
                            ->with('category')
                            ->withSum('sales', 'price')
                            ->orderByDesc('id')
                            ->paginate(9);


        return Inertia::render('Gallery/MyGallery', compact('gallery'));
    }

    public function uploadGallery(Request $request)
    {
        Gate::authorize('channel-settings');

        $gallery = ['id' => null,
                    'title' => '',
                    'category_id' => '',
                    'price' => 0,
                    'free_for_subs' => 'no'];

        $categories = VideoCategories::orderBy('category')->get();

        return Inertia::render('Gallery/Partials/UploadGallery', compact('gallery', 'categories'));
    }

    public function editGallery(Gallery $gallery)
    {
        Gate::authorize('channel-settings');

         $categories = VideoCategories::orderBy('category')->get();

        return Inertia::render('Gallery/Partials/UploadGallery', compact('gallery', 'categories'));
    }

    public function save(Request $request)
    {
        Gate::authorize('channel-settings');
        $request->validate([
            'title' => 'required|min:2',
            'price' => 'required|numeric',
            'free_for_subs' => 'required|in:yes,no',
            'thumbnail' => 'required|mimes:png,jpg',
            'category_id' => 'required|exists:video_categories,id'
        ]);

        // resize & upload thumbnail
        $thumbnail = Image::make($request->file('thumbnail'))->fit(640, 320)->stream();
        $thumbFile = 'thumbnails/' . uniqid() . '-' . auth()->id() . '.' . $request->file('thumbnail')->getClientOriginalExtension();
        Storage::disk(env('FILESYSTEM_DISK'))->put($thumbFile, $thumbnail);
        Storage::disk(env('FILESYSTEM_DISK'))->setVisibility($thumbFile, 'public');

        // create video entry
        $request->user()->gallery()->create([
            'title' => $request->title,
            'price' => $request->price,
            'free_for_subs' => $request->free_for_subs,
            'thumbnail' => $thumbFile,
            'disk' => env('FILESYSTEM_DISK'),
            'category_id' => $request->category_id
    ]);
        return to_route('gallery.list')->with('message', __('Image  successfully uploaded'));
    }


    public function updateGallery(Gallery $gallery, Request $request)
    {
        Gate::authorize('channel-settings');

        $request->validate([
            'title' => 'required|min:2',
            'price' => 'required|numeric',
            'free_for_subs' => 'required|in:yes,no',
            'category_id' => 'required|exists:video_categories,id'
        ]);

        if ($request->user()->id !== $gallery->user_id) {
            abort(403, __("You do not seem to be the owner of this video"));
        }

   

        // resize & upload thumbnail
        if ($request->hasFile('thumbnail')) {
            $thumbnail = Image::make($request->file('thumbnail'))->fit(640, 320)->stream();
            $thumbFile = 'thumbnails/' . uniqid() . '-' . auth()->id() . '.' . $request->file('thumbnail')->getClientOriginalExtension();

            Storage::disk(env('FILESYSTEM_DISK'))->put($thumbFile, $thumbnail);
            Storage::disk(env('FILESYSTEM_DISK'))->setVisibility($thumbFile, 'public');

            $gallery->thumbnail = $thumbFile;
            $gallery->save();
        }

        // create video entry
        $gallery->update([
            'title' => $request->title,
            'price' => $request->price,
            'free_for_subs' => $request->free_for_subs,
            'disk' => env('FILESYSTEM_DISK'),
            'category_id' => $request->category_id
        ]);


        return back()->with('message', __('Gallery successfully updated'));
    }

    //  // attach video upload
    //  public function uploadChunkedGallery(Request $request)
    //  {
    //      $file = $request->file;
    //      $is_last = $request->is_last;

    //      // temp chunks path
    //      $path = Storage::disk('public')->path("chunks/{$file->getClientOriginalName()}");

    //      // filename without .part in it
    //      $withoutPart = basename($path, '.part');

    //      // set file name inside path without .part
    //      $renamePath = public_path('chunks/' . $withoutPart);

    //      // set allowed extensions
    //      $allowedExt = ['ogg', 'wav', 'mp4', 'webm', 'mov', 'qt'];
    //      $fileExt = explode('.', $withoutPart);
    //      $fileExt = end($fileExt);
    //      $fileExt = strtolower($fileExt);

    //      // preliminary: validate allowed extensions
    //      // we're validating true mime later, but just to avoid the effort if fails from the begining
    //      if (!in_array($fileExt, $allowedExt)) {
    //          Storage::disk('public')->delete($renamePath);
    //          throw new \Exception('Invalid extension');
    //      }

    //      // build allowed mimes
    //      $allowedMimes = [
    //                         'video/mp4',
    //                         'video/webm',
    //                         'video/mov',
    //                         'video/ogg',
    //                         'video/qt',
    //                         'video/quicktime'
    //                     ];

    //      // append chunk to the file
    //      FileFacade::append($path, $file->get());


    //      // finally, let's make the file complete
    //      if ($is_last == "true") {
    //          // rename the file to original name
    //          FileFacade::move($path, $renamePath);

    //          // set a ref to local file
    //          $localFile = new File($renamePath);

    //          try {
    //              // first, lets get the mime type
    //              $finfo = new \finfo();
    //              $mime = $finfo->file($renamePath, FILEINFO_MIME_TYPE);
    //          } catch(\Exception $e) {
    //              $mime = null;
    //          }

    //          // validate allowed mimes
    //          if ($mime) {
    //              if (!in_array($mime, $allowedMimes) && $mime != 'application/octet-stream') {
    //                  throw new \Exception('Invalid file type: ' . $mime);
    //              }

    //              // this is from chunks, keep it as it passed the other validation
    //              if ($mime == 'application/octet-stream') {
    //                  $mime = 'video';
    //              }
    //          } else {
    //              $mime = 'video';
    //          }


    //          // set file destination
    //         $fileDestination = 'gallery';

    //          // Move this thing
    //          $fileName = Storage::disk(env('FILESYSTEM_DISK'))->putFile($fileDestination, $localFile, 'public');

    //          // remove it from chunks folder
    //          FileFacade::delete($renamePath);

    //          //  $video->video = $fileName;
    //          //  $video->restore();

    //          return response()->json(['result' => $fileName]);
    //      }// if is_last
    //  }

     public function delete(Request $request)
     {
         Gate::authorize('channel-settings');

         // find video
         $gallery = $request->user()->gallery()->findOrFail($request->gallery);

         // delete file from disk
        //  Storage::disk($gallery->disk)->delete($gallery->video);
         Storage::disk($gallery->disk)->delete($gallery->thumbnail);

         // delete video sales
        //  $gallery->sales()->delete();

         // delete video
         $gallery->delete();

         return back()->with('message', __('Image removed'));
     }
}