import DefaultImg from '../../../../assets/images/movies/playlist/01.webp';
import { MdGeneratingTokens } from "react-icons/md";
import { Link } from "@inertiajs/inertia-react";
import "react-tooltip/dist/react-tooltip.css";
import { AiOutlineEye } from "react-icons/ai";
import { BsTagFill } from "react-icons/bs";
import SingleVideo from "../SingleVideo";
import { Tooltip } from "react-tooltip";
import __ from "@/Functions/Translate";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function VideosLoop({ videos }) {
    const [playVideo, setPlayVideo] = useState(false);
    const [modal, setModal] = useState(false);

    const playModal = (e, video) => {
        e.preventDefault();
        setPlayVideo(video);
        setModal(true);
    };

    return (
        <>
            <Modal show={modal} onClose={(e) => setModal(false)}>
                {playVideo && <SingleVideo video={playVideo} inModal={true} />}
            </Modal>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {videos && videos.map((v) => (
                    <div
                        className="border dark:border-zinc-800 shadow-sm rounded-lg pb-2 bg-white dark:bg-zinc-900"
                        key={`vid-${v?.id}`}
                    >
                        <div className="relative">
                            <button onClick={(e) => playModal(e, v)}>
                                <img
                                    src={v?.thumbnail}
                                    className="rounded-tl-lg rounded-tr-lg mb-3 "
                                    alt=""
                                />
                            </button>
                            <div className="absolute top-5 left-0 bg-indigo-800 text-white font-bold text-sm uppercase rounded-tr rounded-br px-2 py-1">
                                {v?.price < 1 ? (
                                    __("Free")
                                ) : (
                                    <div className="flex items-center">
                                        <MdGeneratingTokens className="h-4 w-4 mr-1" />
                                        {v?.price}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="inline-flex items-center px-3">
                            <div className="w-10 flex-shrink-0 mr-2">
                                <Link
                                    href={route("channel", {
                                        user: v?.streamer?.username,
                                    })}
                                >
                                    <img
                                        src={v?.streamer?.profile_picture}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Link>
                            </div>
                            <div>
                                <div className="h-5 overflow-hidden">
                                    <Link
                                        data-tooltip-content={v?.title}
                                        data-tooltip-id={`tooltip-${v?.id}`}
                                        onClick={(e) => playModal(e, v)}
                                        className="font-semibold  dark:text-gray-100 hover:text-gray-800 text-gray-600 dark:hover:text-gray-400"
                                    >
                                        {v?.title}
                                    </Link>
                                </div>

                                <div className="mt-1.5 flex items-center text-xs text-gray-500 dark:text-gray-200"></div>
                                <div className="mt-1.5 mb-1 flex items-center text-xs text-gray-500 dark:text-gray-200">
                                    <div>
                                        <Link
                                            href={route("channel", {
                                                user: v?.streamer?.username,
                                            })}
                                        >
                                            @{v?.streamer?.username}
                                        </Link>

                                        <Tooltip anchorSelect="a" />
                                    </div>
                                    <div className="inline-flex items-center ml-2">
                                        <BsTagFill className="mr-0.5" />
                                        {v?.category?.category}
                                    </div>
                                    <div className="ml-2 inline-flex items-center">
                                        <AiOutlineEye className="w-4 h-4 mr-0.5" />
                                        {v?.views === 1
                                            ? __("1 view")
                                            : __(":viewsCount views", {
                                                viewsCount: v?.views,
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                <Modal show={modal} onClose={(e) => setModal(false)}>
                    {playVideo && <SingleVideo video={playVideo} inModal={true} />}
                </Modal>
                {videos.map((v) => {
                    return (
                        <Col className="mb-4" key={`video-${v.id}`}>
                            <div className="watchlist-warpper card-hover-style-two">
                                <div className="block-images position-relative w-100">
                                    <div className="img-box">
                                        <img
                                            style={{ cursor: 'pointer' }}
                                            onClick={(e) => playModal(e, v)}
                                            src={v.thumbnail}
                                            alt="movie-card"
                                            className="img-fluid object-cover w-100 d-block border-0"
                                        />
                                        {/* <img
                                            src={v.thumbnail}
                                            alt="movie-card"
                                            className="img-fluid object-cover w-100 d-block border-0"
                                        /> */}
                                    </div>
                                    <div className="card-description">
                                        <h5 className="text-capitalize fw-500">
                                            <Link onClick={(e) => playModal(e, v)} className="text-white">
                                                {v.title}
                                            </Link>
                                        </h5>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            {(v.categories?.length > 0) &&
                                                <div className="d-flex align-items-center gap-1 font-size-12 text-white">
                                                    <BsTagFill className="fa-solid fa-earth-americas text-primary" />
                                                    {item.categories.map((item) => {
                                                        return (
                                                            <span className="text-white fw-semibold text-capitalize" key={item?.id}>
                                                                {item.category}
                                                            </span>
                                                        )
                                                    })

                                                    }
                                                </div>
                                            }
                                            <div className="d-flex align-items-center gap-1 font-size-12">
                                                <span className="text-primary" >@</span>
                                                <span className="text-white fw-semibold text-capitalize">
                                                    {v.streamer.username}
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1 font-size-12">
                                                <AiOutlineEye className="text-primary" />
                                                <span className="text-white fw-semibold text-capitalize">
                                                    {v.views === 1
                                                        ? __("1 view")
                                                        : __(":viewsCount views", {
                                                            viewsCount: v.views,
                                                        })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}
