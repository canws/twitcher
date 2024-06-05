import { Col, Container, Row, Nav, Tab, Button, Modal, Form } from "react-bootstrap";
import DefaultImg from '../../../assets/images/movies/playlist/01.webp';
import React, { Fragment, memo, useState } from "react";
import { FaGrinStars, FaUsers } from "react-icons/fa";
import { Link } from "@inertiajs/inertia-react";
import { MdVideoLibrary } from "react-icons/md";
import { BsTagFill } from "react-icons/bs";
//react-router-dom

//function

const Playlist = memo(({ channels }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <div className="section-padding-bottom">
                <Container fluid>
                    <div className="content-details iq-custom-tab-style-two">
                        <Tab.Container defaultActiveKey="first">
                            <Tab.Content className="p-0">
                                <Tab.Pane
                                    className=" fade show"
                                    eventKey="first"
                                    id="nav-playlist"
                                    role="tabpanel"
                                    aria-labelledby="nav-playlist-tab"
                                >
                                    <div className="overflow-hidden animated fadeInUp">
                                        <div className="d-flex align-items-center justify-content-between my-4">
                                            <h5 className="main-title text-capitalize mb-0 text-white">Discover Channels</h5>
                                        </div>
                                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                                            {channels.map((item, index) => {
                                                return (
                                                    <Col className="mb-4" key={index}>
                                                        <div className="watchlist-warpper card-hover-style-two">
                                                            <div className="block-images position-relative w-100">
                                                                <div className="img-box">
                                                                    <Link
                                                                        to="/watchlist-detail"
                                                                        className="position-absolute top-0 bottom-0 start-0 end-0"
                                                                    ></Link>
                                                                    <img
                                                                        src={DefaultImg}
                                                                        alt="movie-card"
                                                                        className="img-fluid object-cover w-100 d-block border-0"
                                                                    />
                                                                </div>
                                                                <div className="card-description">
                                                                    <h5 className="text-capitalize fw-500">
                                                                        <Link to="/watchlist-detail" className="text-white">
                                                                            {item.name}
                                                                        </Link>
                                                                    </h5>
                                                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                        {(item.categories?.length > 0) &&
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
                                                                            <i className="fa-regular fa-eye text-primary"></i>
                                                                            <span className="text-white fw-semibold text-capitalize">
                                                                                {item.followers_count} {item.followers_count === 1
                                                                                    ? "follower" : "followers"}
                                                                            </span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-1 font-size-12">
                                                                            <FaGrinStars className="text-primary" />
                                                                            <span className="text-white fw-semibold text-capitalize">
                                                                                {item.subscribers_count} {item.subscribers_count === 1
                                                                                    ? "subscriber" : "subscribers"}
                                                                            </span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-1 font-size-12">
                                                                            <MdVideoLibrary className="text-primary" />
                                                                            <span className="text-white fw-semibold text-capitalize">
                                                                                {item.videos_count} {item.videos_count === 1
                                                                                    ? "video" : "videos"}
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
                                        <div className="text-center">
                                            <div className="iq-button">
                                                <Link
                                                    href={route("channels.browse")}
                                                    type="button"
                                                    className="btn text-uppercase position-relativ"
                                                >
                                                    <span className="button-text">View All Channels</span>
                                                    <i className="fa-solid fa-play"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            size="lg"
                            contentClassName="border-0"
                        >
                            <Modal.Header closeButton className="border-0">
                                <div>
                                    <Modal.Title as="h1" className="text-capitalize fs-5 fw-500">
                                        Create New Playlist
                                    </Modal.Title>
                                    <p className="mb-0">
                                        Please fill in all information below to create new playlist.
                                    </p>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label className="text-white fw-500 mb-2">
                                            Name *
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label className="text-white fw-500 mb-2">
                                            Description
                                        </Form.Label>
                                        <textarea className="form-control" cols="5"></textarea>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label className="text-white fw-500 mb-2">
                                            Privacy
                                        </Form.Label>
                                        <Form.Select className="form-control">
                                            <option>Public</option>
                                            <option>Private</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label className="text-white fw-500">
                                            Playlist Thumbnail
                                        </Form.Label>
                                        <small className="d-block my-2">
                                            Support *.webp, *webp, *.gif, *.webp. Maximun upload file
                                            size: 5mb.
                                        </small>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group className="form-group d-flex align-items-center gap-3">
                                        <Button
                                            className="btn btn-sm btn-light text-uppercase fw-medium"
                                            onClick={handleClose}
                                        >
                                            cancel
                                        </Button>
                                        <Button
                                            className="btn btn-sm btn-primary text-uppercase fw-medium"
                                            onClick={handleClose}
                                        >
                                            save
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Container>

                {/*  */}
            </div>
        </Fragment>
    );
});

export default Playlist;
