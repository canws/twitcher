import React, { Fragment } from "react";
import Front from "@/Layouts/Front";
import __ from "@/Functions/Translate";
import { useState, useEffect, useRef } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import ChatRoom from "./ChatRoom";
import VideoJS from "./Partials/VideoJs";
import StreamInstructions from "./StreamInstructions";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import PrivateLiveSream from "@/Components/PrivateLiveSream";

export default function LiveStream({ isChannelOwner, streamUser, roomName }) {
  const [isRoomOffline, setIsRoomOffline] = useState(
    streamUser.live_status === "online" ? false : true
  );
  // const [showMessage, setShowMessage] = useState(true);
  const [liveType, setLiveType] = useState('public');
  const [userId, setUserId] = useState('');

  const { auth } = usePage().props;

  console.info(`${route("home")}/livestreams/${roomName}.m3u8`);

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fill: true,
    preload: "auto",
    fluid: true,
    sources: [
      {
        src: `${route("home")}/livestreams/${roomName}.m3u8`,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  // stream setup
  useEffect(() => {
    window.Echo.channel("LiveStreamRefresh").listen(
      ".livestreams.refresh",
      (data) => {
        console.log(`refresh livestreams`);
        Inertia.reload();
      }
    );

    // listen for live streaming events
    window.Echo.channel(`room-${streamUser?.username}`)
      .listen(".livestream.started", (data) => {
        setIsRoomOffline(false);
      })
      .listen(".private.livestream.started", (data) => {
        if (auth.user.id === data?.chat?.user_id || auth.user.id === data?.chat?.streamer_id) {
          setLiveType(data?.chat?.chat_type);
          setUserId(data?.chat?.user_id);
          setIsRoomOffline(false);
        } else {
          setLiveType('public');
          setIsRoomOffline(true);
        }
      })
      .listen(".livestream.ban", (data) => {
        window.location.href = route("channel.bannedFromRoom", {
          user: streamUser?.username,
        });
      })
      .listen(".livestream.stopped", (data) => {
        setIsRoomOffline(true);
      });
  }, []);

  return (
    <Front
      extraHeader={true}
      extraHeaderTitle={__("@:username's Live Stream", {
        username: streamUser.username,
      })}
      extraHeaderImage="/images/live-stream-icon.png"
      extraImageHeight="h-10"
    >
      <div className="sm:-mt-[70px] -mt-[110px] flex max-w-7xl flex-col lg:flex-row lg:justify-between items-start h-fit">
        <div className="w-full h-full">
          {isRoomOffline ? (
            <StreamInstructions
              streamKey={roomName}
              streamUser={streamUser.username}
            />
          ) : (
            <>

              {streamUser.username === auth?.user?.username && (
                <PrivateLiveSream />
              )}
              {liveType === 'public' ?
                (<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />)
                :
                (<>
                  {streamUser.username === auth?.user?.username || auth?.user?.id === userId ?
                    (<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />)
                    :
                    (<><h1>This Sreaming is private !</h1></>)
                  }
                </>)
              }
            </>
          )}
        </div>
        <ChatRoom streamer={streamUser} />
      </div>
    </Front>
  );
}
