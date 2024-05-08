<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SendMail;
use App\Models\User;
use Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMutiEmail;
use App\Jobs\SendEmailJob;

class SendEmailController extends Controller
{
    public function index(Request $request){
        $mailData = SendMail::latest()->get();
        return view('admin.SendMails.index',compact('mailData'));
    }

    public function create(Request $request){
         $all = User::where('is_admin','no')->get();
        return view('admin.SendMails.create',compact('all'));
    }

    public function store(Request $request){
        $validated = $request->validate([
            'receiver_email' => 'required|array', 
            'message' => 'required',
        ]);

        $user = Auth::user();

        // Loop through each receiver email and send an email
        foreach ($request->receiver_email as $receiverEmail) {
            $mailData = [
                'title' => 'Mail from love248.com',
                'body' => $request->message,
            ];
            // Send email to the receiver email
            // Mail::to($receiverEmail)->send(new SendMutiEmail($mailData));
            SendEmailJob::dispatch($receiverEmail, $mailData);  
        }

        // Save data to the database after sending emails
        $data = [
            'receiver_email' => json_encode($request->receiver_email),
            'message' => $request->message ?? '',
            'send_email' => $user->email ?? '',
        ];
        SendMail::create($data);

        return redirect()->route('admin.send-mail.index')->with('msg', 'Emails sent successfully.');
    }

  
    public function destory($id){
        $tagPixel = SendMail::findOrFail($id);
        if($tagPixel){
            $tagPixel->delete();
        }
        return back()->with('msg', 'Successfully removed emails');
    }
}


