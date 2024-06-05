import HeaderDefault from "@/Components/New/HeaderDefault";
import FooterDefault from "@/Components/New/FooterDefault";
import HomepageHeader from "@/Components/HomepageHeader";
import { usePage, Link } from "@inertiajs/inertia-react";
import CookieConsent from "react-cookie-consent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
// import TopNavi from "@/Components/TopNavi";
import __ from "@/Functions/Translate";
import { FiEdit2 } from "react-icons/fi";



export default function Front({
    children,
    containerClass = "",
    headerShow = false,
    extraHeader = false,
    extraHeaderTitle = "",
    extraHeaderText = "",
    extraHeaderImage = "",
    extraImageHeight = "",
}) {
    const { seo_title, pages } = usePage().props;

    return (
        <div className="flex flex-col min-h-screen" style={{ background: '#000' }}>
            <ToastContainer theme="dark" />
            <HeaderDefault />
            {/* <TopNavi /> */}

            {headerShow && <HomepageHeader />}

            {extraHeader && (
                <div className="profile-box pt-[60px] mb-0 mt-[74px]" style={{ background: "#000" }}>
                    <Container fluid>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                            <div className="d-flex align-items-center gap-3">
                                <div className="account-logo d-flex align-items-center position-relative">
                                    <img
                                        src={extraHeaderImage}
                                        className={extraImageHeight}
                                        alt="profile"
                                    />
                                    <i className="bg-black" style={{ width: 20, height: 20 }}><FiEdit2 /></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h4 className="text-capitalize text-white fw-500">
                                        {extraHeaderTitle}
                                    </h4>
                                    {/* <span className="font-size-14 text-white fw-500"> */}
                                    {/* {streamUser.email} */}
                                    {/* </span>&nbsp; */}
                                    {/* <span className="font-size-14 text-white fw-500"> */}
                                    {/* @{streamUser.username} */}
                                    {/* </span> */}
                                </div>
                            </div>
                            {/* <div className="iq-button d-flex"> */}
                            {/* {auth?.user?.username === streamUser?.username && (
                                    <Link
                                        href={route("channel.livestream", {
                                            user: streamUser?.username,
                                        })}
                                        className="me-2 btn text-uppercase position-relative d-flex"
                                    >
                                        <AiFillPlayCircle className="mr-1" />
                                        {__("Start Streaming")}
                                    </Link>
                                )} */}
                            {/* <Button
                                    className="me-2 btn text-uppercase position-relative d-flex"
                                    onClick={(e) => followUser()}
                                >
                                    <FaHandSparkles className="mr-1" />
                                    <span className="button-text">{userFollowsChannel ? __("Unfollow") : __("Follow")}</span>
                                </Button>
                                <SubscribePopup
                                    user={streamUser}
                                    userIsSubscribed={userIsSubscribed}
                                /> */}
                            {/* </div> */}
                        </div>
                    </Container>
                </div>
                // <div className="w-full mt-[60px] dark:bg-black bg-light-violet border-2 dark:border-zinc-900 pl-3 lg:pl-5">
                //     <div className="bg-light-violet dark:bg-black  pt-2">
                //         <div className="flex max-w-7xl mx-auto items-center flex-wrap">
                //             <div>
                //                 <img
                //                     src={extraHeaderImage}
                //                     alt=""
                //                     className={extraImageHeight}
                //                 />
                //             </div>
                //             <div className="ml-3">
                //                 <h3 className="text-indigo-700 text-2xl font-bold dark:text-white">
                //                     {extraHeaderTitle}
                //                 </h3>

                //                 <div className="hidden lg:flex lg:items-center lg:space-x-3">
                //                     {extraHeaderText}
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
            )}

            <div className="max-w-7xl mx-auto flex-grow min-h-full px-3 w-full" style={{ background: '#000' }}>
                <div className={"mt-[100px]"}>{children}</div>
            </div>

            <CookieConsent>
                {__(
                    "This website uses cookies to enhance the user experience."
                )}
            </CookieConsent>

            <FooterDefault />

            {/* <div className="mt-10 w-full border-t dark:border-zinc-800 dark:bg-zinc-900 py-3 bg-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div>
                        <Link
                            className="font-semibold text-sm dark:text-zinc-300"
                            href={route("home")}
                        >
                            &copy; {seo_title}
                        </Link>
                    </div>
                    <div className="text-right">
                        <div className="flex flex-col md:flex-row">
                            {pages.map((p) => (
                                <Link
                                    className="mr-5 text-sm text-gray-600 dark:text-zinc-300"
                                    key={`page-${p.id}`}
                                    href={route("page", { page: p.page_slug })}
                                >
                                    {p.page_title}
                                </Link>
                            ))}

                            <Link
                                className="mr-5 text-sm text-gray-600 dark:text-zinc-300"
                                href={route("contact.form")}
                            >
                                {__("Get in Touch")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
