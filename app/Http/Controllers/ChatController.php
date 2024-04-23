<?php

namespace App\Http\Controllers;

use App\Events\ChatMessageEvent;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chat;
use Redirect;

class ChatController extends Controller
{
    // latest messages
    public function latestMessages(String $roomName)
    {
        $messages = Chat::where('roomName', $roomName)
                        ->latest()
                        ->take(50)
                        ->get();

        return $messages->reverse()
                        ->flatten();
    }

    // send message
    public function sendMessage(User $user, Request $request)
    {
        if (!auth()->check()) {
            return abort(403, __("You must be logged in to chat!"));
        }

        $request->validate(['message' => 'required']);

        $roomName = 'room-' . $user->username;

        $tokens = $user->tokens ?? '';
        if(empty($tokens) || $tokens < 0){
            return Redirect::route('token.packages')->with('message', __('By Token Packages .'));
        }
        $chat = Chat::create([
            'roomName' => $roomName,
            'user_id' => $request->user()->id,
            'streamer_id' => $user->id,
            'message' => $request->message
        ]);


        broadcast(new ChatMessageEvent($chat));

        return response()->json(['result' => $chat->id]);
    }

    public function sendPrivateRequest(Request $request)
    {
        return  $request;
        $request->validate([
            'streamer' => 'required|exists:users,id',
            'message' => 'required',
            'tip' => 'required|numeric|min:1',
        ]);

        // don't tip yourself
        if ($request->user()->id == $request->streamer) {
            return response()->json(['result' => __("Do not tip yourself!")]);
        }

        // validate balance is enough
        if ($request->tip > $request->user()->tokens) {
            return response()->json([
                'result' =>__("Your balance of :tokens tokens is not enough for a tip of :tip", [
                    'tokens' => $request->user()->tokens,
                    'tip' => $request->tip
                ])
            ]);
        }

        // get streamer
        $streamer = User::findOrFail($request->streamer);

        // record tip
        $tip = new Tips();
        $tip->user_id = $request->user()->id;
        $tip->streamer_id = $streamer->id;
        $tip->tokens = $request->tip;
        $tip->save();

        // subtract tipper balance
        $request->user()->decrement('tokens', $request->tip);

        // increment streamer balance
        $streamer->increment('tokens', $request->tip);

        // broadcast message
        $message = new Chat();
        $message->roomName = 'room-' . $streamer->username;
        $message->streamer_id = $streamer->id;
        $message->user_id = $request->user()->id;
        $message->tip = $request->tip;
        $message->message = $request->message;
        $message->save();

        broadcast(new ChatMessageEvent($message));

        return response()->json(['result' => 'ok']);
    }
}
