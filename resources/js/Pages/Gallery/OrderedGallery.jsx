import __ from "@/Functions/Translate";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { AiOutlineEye } from "react-icons/ai";
import "react-tooltip/dist/react-tooltip.css";
import { useState } from "react";
import Modal from "@/Components/Modal";
import { BsTagFill } from "react-icons/bs";
import TextInput from "@/Components/TextInput";
import AccountNavi from "../Channel/Partials/AccountNavi";

export default function GalleryOrdered({ gallery }) {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteId, setDeleteId] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const { auth } = usePage().props;

    // active tab class
    const activeTabClass =
        "text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800";
    const inactiveTabClass =
        "text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";

    const searchVideos = (e) => {
        e.preventDefault();

        console.log(
            `Would visit: ${route("gallery.ordered")}?search_term=${searchTerm}`
        );
        Inertia.visit(`${route("gallery.ordered")}?search_term=${searchTerm}`, {
            method: "GET",
            preserveState: true,
            only: gallery,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title={__("Purchased Gallery")} />

            <div className="lg:flex lg:space-x-10">
                <AccountNavi active={"gallery"} />

                <div className="ml-0 w-full">
                    {auth.user.is_streamer == "yes" && (
                        <div className="mb-5">
                            <Link
                                href={route("gallery.list")}
                                className={inactiveTabClass}
                            >
                                {__("Upload Gallery")}
                            </Link>
                            <Link
                                href={route("gallery.ordered")}
                                className={activeTabClass}
                            >
                                {__("Gallery Ordered")}
                            </Link>
                        </div>
                    )}

                    <div className="p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow sm:rounded-lg">
                        <header>
                            <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-100">
                                {__("My Purchased Gallery")}
                            </h2>

                            <p className="mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400">
                                {__("Access to Gallery you've purchased")}
                            </p>

                            <form onSubmit={searchVideos}>
                                <div className="flex items-center">
                                    <TextInput
                                        name="search_term"
                                        placeholder={__("Search Images")}
                                        value={searchTerm}
                                        handleChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                    />
                                    <PrimaryButton
                                        className="ml-2 py-3"
                                        onClick={(e) => searchVideos(e)}
                                    >
                                        {__("GO")}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </header>

                        <hr className="my-5" />

                        {gallery?.total === 0 && (
                            <div className="text-gray-600 dark:text-white">
                                {__("No Image to show.")}
                            </div>
                        )}

                        {gallery?.total !== 0 && (
                            <div className="">
                                {gallery?.data.map((v) => (
                                    <div
                                        key={`gallery-${v.id}`}
                                        className={"w-full mt-10"}
                                    >
                                        <div className="flex items-start">
                                            <div className="mr-5 flex flex-col items-center flex-shrink-0">
                                                <Link
                                                    href={route("channel", {
                                                        user: v.streamer
                                                            ?.username,
                                                    })}
                                                >
                                                    <img
                                                        src={
                                                            v.streamer
                                                                ?.profile_picture
                                                        }
                                                        className="w-14 h-14 rounded-full"
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-2xl font-light text-gray-600 dark:text-white">
                                                    {v.title}
                                                </h3>

                                                <div className="flex items-center flex-wrap md:space-x-2 mt-1">
                                                    <Link
                                                        href={route("channel", {
                                                            user: v.streamer
                                                                ?.username,
                                                        })}
                                                        className="text-sm text-gray-600 mr-2  dark:text-white"
                                                    >
                                                        @{v.streamer?.username}
                                                    </Link>

                                                    <Link
                                                        href={route(
                                                            "gallery.browse",
                                                            {
                                                                videocategory:
                                                                    v.category
                                                                        .id,
                                                                slug: `-${v.category.slug}`,
                                                            }
                                                        )}
                                                        className="text-gray-600 mr-2  inline-flex items-center space-x-1 dark:text-zinc-100 text-sm"
                                                    >
                                                        <BsTagFill className="w-3" />
                                                        <span>
                                                            {
                                                                v.category
                                                                    .category
                                                            }
                                                        </span>
                                                    </Link>

                                                    <span className="text-gray-600 inline-flex items-center space-x-1 dark:text-zinc-100 text-sm mr-2   ">
                                                        <AiOutlineEye className="w-5 h-5 mr-1" />
                                                        {v.views === 1
                                                            ? __("1 view")
                                                            : __(
                                                                  ":viewsCount views",
                                                                  {
                                                                      viewsCount:
                                                                          v.views,
                                                                  }
                                                              )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            className="w-full rounded-lg aspect-video"
                                            src={v.thumbnail}
                                            alt="Thumbnail"
                                        />

                                    </div>
                                ))}
                            </div>
                        )}

                        {gallery?.last_page > 1 && (
                            <>
                                <hr className="my-5" />

                                <div className="flex text-gray-600 my-3 text-sm">
                                    {__("Page: :pageNumber of :lastPage", {
                                        pageNumber: gallery?.current_page,
                                        lastPage: gallery?.last_page,
                                    })}
                                </div>

                                <SecondaryButton
                                    processing={
                                        gallery?.prev_page_url ? false : true
                                    }
                                    className="mr-3"
                                    onClick={(e) =>
                                        Inertia.visit(gallery?.prev_page_url)
                                    }
                                >
                                    {__("Previous")}
                                </SecondaryButton>

                                <SecondaryButton
                                    processing={
                                        gallery?.next_page_url ? false : true
                                    }
                                    onClick={(e) =>
                                        Inertia.visit(gallery?.next_page_url)
                                    }
                                >
                                    {__("Next")}
                                </SecondaryButton>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
