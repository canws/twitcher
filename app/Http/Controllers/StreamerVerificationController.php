<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\StreamerVerification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use App\Models\StreamingPrice;
use App\Models\StreamingTime;
use Auth;

class StreamerVerificationController extends Controller
{
    // auth
    public function __construct(){
        $this->middleware('auth');
    }

    // form
    public function verifyForm(){
        Gate::authorize('channel-settings');
        return Inertia::render('Channel/StreamerVerification');
    }

    // pending message
    public function pendingVerification(){
        Gate::authorize('channel-settings');
        return Inertia::render('Channel/VerificationPending');
    }

    // process
    public function submitVerification(Request $request)
    {
        Gate::authorize('channel-settings');

        $request->validate(['document' => 'required|mimes:jpg,png']);

        // temporary upload to be able to attach in mail
        // it gets deleted in the Event Listener
        $doc = $request->file('document')->store('streamer-vdocs');

        $request->session()->flash('message', __("Your verification request will be processed and you will be notified by email."));

        // find admin
        $admin = User::where('is_admin', 'yes')->firstOrFail();
        $admin->notify(new StreamerVerification($doc));

        // set pending
        $request->user()->update(['streamer_verification_sent' => true]);

        return to_route('streamer.pendingVerification');
    }

    public function getStreamingList(Request $request)
    {
        $user =  Auth::user();
         $streamerData = StreamingPrice::where('streamer_id',$user->id)->with('getStreamerPrice')->get();
        return Inertia::render('Streaming/addStreaming', compact('streamerData'));
    }
      // process
    public function addStreaming(Request $request){
        $request->validate([
            'token_amount' => 'required|numeric',
            'streaming_time' => 'required|date_format:H:i', // H:i format represents hours and minutes (24-hour format)
        ]);
        $user =  Auth::user();
        $data = [
            'streamer_id' => $user->id ?? '',
            'streaming_time' => $request->streaming_time ?? '',
        ];
       $StreamingTimeData = StreamingTime::create($data);
        $data = [
            'streamer_id' => $user->id ?? '',
            'token_amount' => $request->token_amount ?? '',
            'streamer_time_id' => $StreamingTimeData->id ?? '',
        ];
        StreamingPrice::create($data);
        $request->session()->flash('message', __("Streaming add successfully !"));
        return back();
    }

    public function editStreaming($id){
          $streamerData = StreamingPrice::where('id',$id)->with('getStreamerPrice')->first();
        return Inertia::render('Streaming/EditStreamer', compact('streamerData'));
    }

    public function updateStreaming(Request $request)
    {
        $request->validate([
            'token_amount' => 'required|numeric',
            'streaming_time' => 'required|date_format:H:i', // H:i format represents hours and minutes (24-hour format)
        ]);

       $dataDetails =   StreamingPrice::find($request->streamering_id);

        $data = [
            'streaming_time' => $request->streaming_time ?? '',
        ];

       $StreamingTimeData = StreamingTime::where('id',$dataDetails->streamer_time_id)->update($data);
        $data = [
            'token_amount' => $request->token_amount ?? '',
        ];
        $StreamingTimeData = StreamingPrice::where('id',$request->streamering_id)->update($data);

        return to_route('getStreamingList')->with('message', __('Streaming succesfully updated'));
    }
    public function deleteStreaming(Request $request ){
        $dataDetails =   StreamingPrice::find($request->id);
        if($dataDetails){
           StreamingTime::where('id',$dataDetails->streamer_time_id)->delete();
           StreamingPrice::where('id',$request->id)->delete();
        }
        return back()->with('message', __('Streaming succesfully deleted'));
    }


    // ============================== Api ===============================================
    
    public function getStreamingListApi($id){
        $user = Auth::user();
        $streamerData = StreamingPrice::where('streamer_id', $id)->with('getStreamerPrice')->get();
        return response()->json([
            'streamerData' => $streamerData,
            'status'       => true,
        ], 200);
    }

    
}
