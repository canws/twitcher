import { Container, Nav, Tab, Button } from "react-bootstrap";
import { FaHandSparkles, FaGrinStars } from "react-icons/fa";
import { usePage, Link } from "@inertiajs/inertia-react";
import SubscribePopup from "./Partials/SubscribePopup";
import ChannelVideos from "./Partials/ChannelVideos";
import { AiFillPlayCircle } from "react-icons/ai";
import ScheduleTab from "./Partials/ScheduleTab";
import { MdVideoLibrary } from "react-icons/md";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Tiers from "./Partials/TiresTab";
import { toast } from "react-toastify";
import __ from "@/Functions/Translate";
import Front from "@/Layouts/Front";
import axios from "axios";

export default function StartStream({
    user,
    streamUser,
    userFollowsChannel,
    userIsSubscribed,
}) {
    const { auth } = usePage().props;

    const followUser = () => {
        if (!user) {
            toast.error(__("Please login to follow this channel"));
        } else {
            axios
                .get(route("follow", { user: streamUser.id }))
                .then((apiRes) => {
                    console.log(
                        Inertia.reload({
                            only: ["userFollowsChannel", "streamUser"],
                        })
                    );
                })
                .catch((Error) => toast.error(Error.response?.data?.error));
        }
    };

    return (
        <Front>
            <Head
                title={__(":channelName's channel (:handle)", {
                    channelName: streamUser.name,
                    handle: `@${streamUser.username}`,
                })}
            >
                <meta property="og:title" content="The Rock" />
                <meta
                    property="og:url"
                    content="https://www.imdb.com/title/tt0117500/"
                />
                <meta
                    property="og:image"
                    content="https://ia.media-imdb.com/images/rock.jpg"
                />
            </Head>
            <div className="section-padding-bottom">
                <div className="profile-box pt-[60px]" style={{ background: "#000" }}>
                    <Container fluid>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                            <div className="d-flex align-items-center gap-3">
                                <div className="account-logo d-flex align-items-center position-relative">
                                    <img
                                        src={streamUser.profile_picture}
                                        alt="profile"
                                        className="img-fluid object-cover rounded-3"
                                    />
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </div>
                                <div>
                                    <h6 className="font-size-18 text-capitalize text-white fw-500">
                                        {streamUser.name}
                                    </h6>
                                    <span className="font-size-14 text-white fw-500">
                                        {streamUser.email}
                                    </span>&nbsp;
                                    <span className="font-size-14 text-white fw-500">
                                        @{streamUser.username}
                                    </span>
                                </div>
                            </div>
                            <div className="iq-button d-flex">
                                {auth?.user?.username === streamUser?.username && (
                                    <Link
                                        href={route("channel.livestream", {
                                            user: streamUser?.username,
                                        })}
                                        className="me-2 btn text-uppercase position-relative d-flex"
                                    >
                                        <AiFillPlayCircle className="mr-1" />
                                        {__("Start Streaming")}
                                    </Link>
                                )}
                                <Button
                                    className="me-2 btn text-uppercase position-relative d-flex"
                                    onClick={(e) => followUser()}
                                >
                                    <FaHandSparkles className="mr-1" />
                                    <span className="button-text">{userFollowsChannel ? __("Unfollow") : __("Follow")}</span>
                                </Button>
                                <SubscribePopup
                                    user={streamUser}
                                    userIsSubscribed={userIsSubscribed}
                                />
                            </div>
                        </div>
                    </Container>
                </div>
                <Container fluid>
                    <div className="content-details iq-custom-tab-style-two">
                        <Tab.Container defaultActiveKey="first">
                            <Nav className="d-flex justify-content-center nav nav-pills tab-header">
                                <Nav className="mb-5" id="nav-tab" role="tablist">
                                    <Nav.Link
                                        className="text-white"
                                        eventKey="first"
                                        variant=" d-flex align-items-center"
                                        id="nav-playlist-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-playlist"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-playlist"
                                        aria-selected="true"
                                    >
                                        Videos
                                    </Nav.Link>
                                    <Nav.Link
                                        className="text-white"
                                        eventKey="second"
                                        variant=""
                                        id="nav-watchlist-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-watchlist"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-watchlist"
                                        aria-selected="false"
                                    >
                                        Tiers
                                    </Nav.Link>
                                    <Nav.Link
                                        className="text-white"
                                        eventKey="third"
                                        variant=""
                                        id="nav-favourite-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-favourite"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-favourite"
                                        aria-selected="false"
                                    >
                                        Schedule
                                    </Nav.Link>
                                    <Nav.Link
                                        className="text-white"
                                        eventKey="fourth"
                                        variant=""
                                        id="nav-favourite-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-favourite"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-favourite"
                                        aria-selected="false"
                                    >
                                        About
                                    </Nav.Link>
                                </Nav>
                            </Nav>
                            <Tab.Content className="p-0">
                                <Tab.Pane
                                    className=" fade show"
                                    eventKey="first"
                                    id="nav-playlist"
                                    role="tabpanel"
                                    aria-labelledby="nav-playlist-tab"
                                >
                                    <div className="overflow-hidden animated fadeInUp">
                                        <ChannelVideos user={user} streamUser={streamUser} />
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane
                                    className="fade show"
                                    eventKey="second"
                                    id="nav-playlist"
                                    role="tabpanel"
                                    aria-labelledby="nav-playlist-tab"
                                ><Tiers user={streamUser} /></Tab.Pane>
                                <Tab.Pane
                                    className="fade show"
                                    eventKey="third"
                                    id="nav-playlist"
                                    role="tabpanel"
                                    aria-labelledby="nav-playlist-tab"
                                ><ScheduleTab user={streamUser} /></Tab.Pane>
                                <Tab.Pane
                                    className="fade show"
                                    eventKey="fourth"
                                    id="nav-playlist"
                                    role="tabpanel"
                                    aria-labelledby="nav-playlist-tab"
                                >
                                    <div className="flex mt-4">
                                        <div className="flex flex-col items-center mr-4">
                                            <div className="shadow bg-white dark:bg-zinc-900 dark:text-white rounded-lg p-5 mb-5 w-full">
                                                <h3 className="text-2xl justify-center flex items-center dark:text-white  text-gray-600">
                                                    <FaHandSparkles className="w-10 h-10 mr-1" />
                                                </h3>
                                                <p className="mt-2 font-medium text-center dark:text-white text-gray-600">
                                                    {streamUser.followers_count === 1
                                                        ? __("1 Followers")
                                                        : __(":count Followers", {
                                                            count: streamUser.followers_count,
                                                        })}
                                                </p>
                                            </div>
                                            <div className="shadow bg-white dark:bg-zinc-900 rounded-lg p-5 mb-5 w-full">
                                                <h3 className="text-2xl justify-center flex items-center dark:text-white  text-gray-600">
                                                    <FaGrinStars className="w-10 h-10 mr-1" />
                                                </h3>

                                                <p className="mt-2 font-medium text-center dark:text-white text-gray-600">
                                                    {streamUser.subscribers_count === 1
                                                        ? __("1 Subscriber")
                                                        : __(":count Subscribers", {
                                                            count: streamUser.subscribers_count,
                                                        })}
                                                </p>
                                            </div>
                                            <div className="shadow bg-white dark:bg-zinc-900 rounded-lg p-5 w-full">
                                                <h3 className="text-2xl justify-center flex items-center dark:text-white  text-gray-600">
                                                    <MdVideoLibrary className="w-10 h-10 mr-1" />
                                                </h3>
                                                <p className="mt-2 font-medium text-center dark:text-white text-gray-700">
                                                    {streamUser.videos_count === 1
                                                        ? __("1 Video")
                                                        : __(":count Videos", {
                                                            count: streamUser.videos_count,
                                                        })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" flex-grow">
                                            {streamUser?.about ? (
                                                <div
                                                    className="dark:text-zinc-200 dark:bg-zinc-900 bg-white rounded-lg shadow p-3"
                                                    dangerouslySetInnerHTML={{
                                                        __html: sanitizeHtml(streamUser.about, {
                                                            allowedTags:
                                                                sanitizeHtml.defaults.allowedTags.concat(
                                                                    ["img", "br"]
                                                                ),
                                                        }),
                                                    }}
                                                />
                                            ) : (
                                                <div className="bg-white dark:bg-zinc-900 dark:text-white rounded-lg shadow px-3 py-5 text-gray-600">
                                                    {__(
                                                        "Add channel description in Channel Settings page."
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </div>
                </Container>
            </div>
        </Front>
    );
}
