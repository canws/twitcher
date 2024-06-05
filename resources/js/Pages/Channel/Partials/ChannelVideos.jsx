import DefaultImg from '../../../../assets/images/movies/playlist/01.webp';
import SingleVideo from "@/Pages/Videos/SingleVideo";
import { useState, useEffect, memo } from "react";
import { Link } from "@inertiajs/inertia-react";
import "react-tooltip/dist/react-tooltip.css";
import { AiOutlineEye } from "react-icons/ai";
import Spinner from "@/Components/Spinner";
import { Col, Row } from "react-bootstrap";
import Modal from "@/Components/Modal";
import { toast } from "react-toastify";
import __ from "@/Functions/Translate";
import axios from "axios";

const ChannelVideos = memo(({ streamUser }) => {
    const [videos, setVideos] = useState({});
    const [loading, setLoading] = useState(true);
    const [playVideo, setPlayVideo] = useState(false);
    const [modal, setModal] = useState(false);

    const playModal = (e, video) => {
        e.preventDefault();
        setPlayVideo(video);
        setModal(true);
    };

    useEffect(() => {
        getVideos(1);
    }, []);

    const getVideos = (page) => {
        axios
            .get(
                `${route("channel.videos", {
                    user: streamUser.id,
                })}?page=${page}`
            )
            .then((resp) => {
                setVideos(resp.data);
                setLoading(false);
            })
            .catch((Err) => toast.error(Err.response?.data?.message));
    };

    return (
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
            {loading && (
                <div className="my-3">
                    <Spinner />
                </div>
            )}
            <Modal show={modal} onClose={(e) => setModal(false)}>
                {playVideo && <SingleVideo video={playVideo} inModal={true} />}
            </Modal>
            {videos?.data &&
                videos.data.map((v) => {
                    return (
                        <Col className="mb-4" key={`video-${v.id}`}>
                            <div className="watchlist-warpper card-hover-style-two">
                                <div className="block-images position-relative w-100">
                                    <div className="img-box">
                                        <img
                                            style={{ cursor: 'pointer' }}
                                            onClick={(e) => playModal(e, v)}
                                            src={v?.thumbnail}
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
                })
            }
        </Row>
    );
});

export default ChannelVideos;
