import TextInput from "@/Components/TextInput";
import __ from "@/Functions/Translate";
import { BsChatText } from "react-icons/bs";
import { MdSettingsInputAntenna } from "react-icons/md";
import { FaGrinStars, FaBan, FaHandSparkles } from "react-icons/fa";
import { toast } from "react-toastify";
import { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
import TipPopup from "./Partials/TipPopup";
import PrivateChat from "./PrivateChat";
import PrivateChatList from "./PrivateChatList";
import { usePage } from "@inertiajs/inertia-react";
import SecondaryButton from "@/Components/SecondaryButton";
import { Inertia } from "@inertiajs/inertia";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import Timer from "./Timer";

export default function ChatRoom({ streamer, forceScroll = false }) {
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState("");
    const [isScrolling, setIsScrolling] = useState(false);
    const [chatScrollHeight, setChatScrollHeight] = useState(0);
    const { auth, pusher } = usePage().props;
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [confirmBanUserId, setConfirmBanUserId] = useState(null);
    const [roomName , setRoomName ] = useState(`room-${streamer.username}`);
    const [chatTypeData , setChatTypeData ] = useState('public');
    const [fromChatId , setFromChatId] = useState('');
    const [timerData , setTimerData] = useState('');
    const { coins_sound } = usePage().props;
    const tipSound = new Audio(coins_sound);

    // set ref to chat scroll div
    const chatScroll = useRef();


 
    const userInfoModal = (userId) => {

        if (auth?.user?.id !== streamer.id) {
            return;
        }

        if (streamer.id === userId) {
            return;
        }
        // reset ban user id and confirm
        setConfirmBanUserId(null);
        setUserInfo(null);
        setIsUserInfoModalOpen(!isUserInfoModalOpen);

        axios.post(route("profile.modalUserInfo", { user: userId }))
            .then((response) => {
                setUserInfo(response.data);
            })
            .catch(Error => toast.error(__("Error loading user infos for the modal")));
    };

    // ban user
    const banUser = (e, userId) => {
        e.preventDefault();

        axios.post(route("channel.banUserFromRoom", { user: userId }))
            .then((response) => {
                toast.success(__("User has been banned!"));
                setUserInfo(null);
                setConfirmBanUserId(null);
                setIsUserInfoModalOpen(!isUserInfoModalOpen);
            }).catch(Error => toast.error(__("Error banning user")));
    }

    // set chat scrolling position
    const updateScrollPosition = (target) => {
        const totalScroll = target.scrollTop + target.clientHeight;

        if (totalScroll == target.scrollHeight) {
            setIsScrolling(false);
        } else {
            setIsScrolling(true);
        }

        setChatScrollHeight(totalScroll);
    };

    // scroll the chat
    const scrollTheChat = () => {
        if (!isScrolling) {
            const { offsetHeight, scrollHeight, scrollTop } =
                chatScroll.current;
            chatScroll.current?.scrollTo(0, scrollHeight);
        }
    };

    // autoscroll live chat
    useEffect(() => {
        scrollTheChat();
    }, [messages]);

    // livechat
    useEffect(() => {
        // initially load the latest messages for this room
        axios
            .get(route("chat.latestMessages", { roomName }))
            .then((response) => {
                setMessages(response.data);
            })
            .catch((Error) =>
                toast.error(`Loading latest messages: ${Error.message}`)
            );

            window.Echo.channel(roomName).listen(".livechat", (data) => {
                if(auth.user.id === data.chat.user_id){
                    setChatTypeData(data.chat.chat_type);
                    setFromChatId(data.chat.user_id);
                    setMessages((messages) => [...messages, data.chat]);
                }else{
                    setMessages((messages) => [...messages, data.chat]);
                }

                if (data.chat.tip > 0) {
                    tipSound.play();
                }
            });

            
            window.Echo.channel(roomName)
            .listen('.private-chat-message', (data) => {

                if(auth.user.id === data?.chat?.user_id){
                    setChatTypeData(data?.chat?.chat_type);
                    setFromChatId(data?.chat?.user_id);
                    setMessages((messages) => [...messages, data?.chat]);
                    setTimerData( data?.streamerData);
                }else{
                    setMessages((messages) => [...messages, data?.chat]);
                }
                if (data?.chat?.tip > 0) {
                    tipSound.play();
                }
                // console.log('Received private chat message:', data.chat);
                // console.log('Streamer Data:', data.streamerData); // Access the streamer data
               
            });
        


        if (forceScroll) {
            scrollTheChat();
        }
    }, []);

    const receiveDataFromChild = (dataFromChild) => {
        // console.log('Data received from child:', dataFromChild);
        setMessages(dataFromChild.chatMessage); // Update parent component state with received data
        setChatTypeData(dataFromChild.chatType);// Update parent component state with received data
        // console.log("dataFromChild.chatType",dataFromChild.chatType)
        setTimerData(dataFromChild?.streamerData);
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        const streamerId = streamer.id;
        
        try {
            await axios.post(route("chat.sendMessage", { user: streamerId }), {
                message: msg,
                chatType: chatTypeData,
            });
            setMsg("");
            scrollTheChat();
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    };


    return (
        <div className="flex flex-col w-full lg:w-[400px] h-[270px] sm:h-[360px] lg:h-[536px] bg-white dark:bg-zinc-900 dark:border-zinc-900 ">

            <Modal
                show={isUserInfoModalOpen}
                onClose={(e) => setIsUserInfoModalOpen(false)}
            >
                {!userInfo && __("Loading user infos..")}

                {userInfo && (
                    <div className="p-5 text-gray-600 dark:text-gray-100 text-lg">
                        <div className="flex items-center">
                            <div>
                                <img
                                    src={userInfo.profile_picture}
                                    alt=""
                                    className="rounded-full w-20 border-2 border-indigo-100"
                                />
                            </div>
                            <div className="pl-3 flex-grow">
                                <h3 className="text-lg font-semibold">
                                    {userInfo.name}
                                </h3>
                                <p className="text-sm">@{userInfo.username}</p>
                                <p className="text-sm flex">
                                    {userInfo.channel_follower ? (
                                        <>
                                            <FaHandSparkles className="mt-0.5 mr-1" />
                                            {__("Follows your channel")}
                                        </>
                                    ) : (
                                        <>
                                            <FaHandSparkles className="mt-0.5 mr-1" />
                                            {__("Doesn't follow your channel")}
                                        </>
                                    )}
                                </p>
                                <p className="text-sm flex">
                                    {userInfo.channel_follower ? (
                                        <>
                                            <FaGrinStars className="mt-0.5 mr-1" />
                                            {__("Subscribed on Tier: :tier", { tier: userInfo.membership_tier })}
                                        </>
                                    ) : (
                                        <>
                                            <FaGrinStars className="mt-0.5 mr-1" />
                                            {__("Not subscribed to your channel")}
                                        </>
                                    )}
                                </p>
                            </div>
                            <div className="justify-end">
                                {userInfo.is_user_banned ? (
                                    <p>{__("Banned on :date", { date: userInfo.banned_date })}</p>
                                ) : (
                                    confirmBanUserId === null ? (
                                        <PrimaryButton onClick={(e) => setConfirmBanUserId(userInfo.id)}>
                                            <FaBan className="mr-1" />
                                            {__("Ban User")}
                                        </PrimaryButton>
                                    ) : (
                                        <>
                                            {__("Are you sure?")}
                                            <br />
                                            <button onClick={(e) => banUser(e, userInfo.id)} className="text-red-600 hover:underline font-semibold">
                                                {__("Yes, ban")}
                                            </button>
                                            <button onClick={(e) => setConfirmBanUserId(null)} className="ml-2 text-indigo-500 hover:underline font-semibold">
                                                {__("Cancel")}
                                            </button>
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            <div
                ref={chatScroll}
                onScroll={(e) => updateScrollPosition(e.currentTarget)}
                className="flex-grow  text-gray-700 text-sm dark:text-white pl-2  relative overflow-scroll"
            >
                <h3 className="font-semibold pt-5 text-lg flex items-center justify-center">
                    <BsChatText className="mr-2" />
                    {__("Live Chat")}
                    {chatTypeData !== 'public' ? <Timer timerData = {timerData} sendDataToParentTimer={receiveDataFromChild}/> : ''}
                </h3>

                    {messages.map((m, i) => (
                        <Fragment key={`msg-${m.id}-${i}`}>
                            {chatTypeData === m.chat_type ? (
                            <p
                            className={`py-2 ${m.tip > 0 && "bg-yellow-200 rounded-lg p-2 text-gray-900 my-2"}`}
                            key={`msg-${m.id}-${i}`}
                        >
                            {m.user_id === streamer.id && (
                                <span>
                                    <MdSettingsInputAntenna
                                        data-tooltip-content={__("Channel Owner")}
                                        data-tooltip-id={`chatmsg-follower-${m.id}`}
                                        className="-mt-0.5 mr-1 inline text-pink-600"
                                    />
                                </span>
                            )}
                            {m.isFollower && (
                                <span>
                                    <FaHandSparkles
                                        data-tooltip-content={__("Channel Follower")}
                                        data-tooltip-id={`chatmsg-follower-${m.id}`}
                                        className="mr-1 inline text-cyan-600"
                                    />
                                </span>
                            )}
                            {m.isSubscriber && (
                                <span>
                                    <FaGrinStars
                                        data-tooltip-content={__("Channel Subscriber")}
                                        data-tooltip-id={`chatmsg-subscriber-${m.id}`}
                                        className="mr-1 inline text-fuchsia-500"
                                    />
                                </span>
                            )}


                            <Tooltip anchorSelect="svg" />

                            <span
                                onClick={(e) => userInfoModal(m.user_id)}
                                className={`font-semibold cursor-pointer ${m.user_id === streamer.id
                                    ? "text-pink-600"
                                    : "text-indigo-500 dark:text-indigo-400"
                                    }`}
                            >
                                {m.user.username}
                                {": "}
                            </span>
                            {m.tip > 0 && __("Just tipped :tip tokens! ", { tip: m.tip })}
                            <span className="break-all">{m.message}</span>
                        </p>
                            ) : null}
                        </Fragment>
                    ))}

            </div>
            <div className="py-5 px-2 flex items-center">
                <div className="mr-2 flex-grow">
                    {auth.user && (
                        <form onSubmit={sendMessage}>
                            <TextInput
                                name="chat_message"
                                className="w-full"
                                placeholder={__("Enter message & press enter")}
                                value={msg}
                                handleChange={(e) => setMsg(e.target.value)}
                            />
                        </form>
                    )}
                    {!auth.user && (
                        <SecondaryButton
                            className="w-full py-3"
                            onClick={(e) => Inertia.visit(route("login"))}
                        >
                            {__("Login to Chat")}
                        </SecondaryButton>
                    )}
                </div>
                <div>
                    <TipPopup streamer={streamer} />
                </div>
                <div>
                    {auth?.user?.is_streamer === 'no' ?
                    <PrivateChat streamer={streamer}/>:
                    <PrivateChatList streamer={streamer} sendDataToParent={receiveDataFromChild}/>
                     }
                    
                </div>
                
            </div>
        </div>
    );
}
