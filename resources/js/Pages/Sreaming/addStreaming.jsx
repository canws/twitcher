import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import __ from "@/Functions/Translate";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Textarea from "@/Components/Textarea";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { Inertia } from "@inertiajs/inertia";
import AccountNavi from "../Channel/Partials/AccountNavi";
import { FaGrinStars } from "react-icons/fa";

export default function addStreaming({ auth, streamerData }) {
    const { currency_symbol } = usePage().props;

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteId, setDeleteId] = useState(0);

    const { data, setData, post, processing, errors, reset } = useForm({
        token_amount: "",
        streaming_time: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("addStreaming"), {
            onSuccess: () => {
                setShowAddModal(false), reset();
            },
        });
    };
    const confirmDelete = (e, id) => {
        e.preventDefault();

        setShowDeleteConfirmation(true);
        setDeleteId(id);
    };

    const deleteStreamer = () => {
        console.log("Will delete #" + deleteId);

        Inertia.visit(route("streaming.delete"), {
            method: "POST",
            data: { id: deleteId },
            preserveState: false,
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title={__("Add Sreaming")} />

            <div className="lg:flex lg:space-x-10">
                <AccountNavi active={"tiers"} />

                <div className="p-4 flex-shrink sm:p-8 bg-white dark:bg-zinc-900 shadow sm:rounded-lg">
                    <header>
                        <h2 className="text-lg inline-flex items-center md:text-xl font-medium text-gray-600 dark:text-gray-100">
                            <FaGrinStars className="mr-2" />
                            {__("Add Sreaming")}
                        </h2>

                        <p className="mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400">
                            {__(
                                "Set the Streaming tokens and time for your channel"
                            )}
                        </p>

                        <PrimaryButton onClick={(e) => setShowAddModal(true)}>
                            {__("+Add Streming")}
                        </PrimaryButton>
                       
                    </header>

                    <hr className="my-5" />
                    <Modal
                        show={showAddModal}
                        onClose={(e) => setShowAddModal(false)}
                    >
                        <div className="p-5">
                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <InputLabel
                                        for="streaming_time"
                                        value={__("Streaming Time")}
                                    />

                                    <input
                                        type="time"
                                        id="streaming_time"
                                        name="streaming_time"
                                        value={data.streaming_time}
                                        onChange={onHandleChange}
                                        required
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                    <InputError
                                        message={errors.streaming_time}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <InputLabel
                                        for="token"
                                        value={__("token_amount")}
                                    />

                                    <TextInput
                                        name="token_amount"
                                        value={data.token_amount}
                                        handleChange={onHandleChange}
                                        required
                                        className="mt-1 block w-full"
                                    />

                                    <InputError
                                        message={errors.token_amount}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex justify-between items-center">
                                    <PrimaryButton processing={processing}>
                                        {__("Save")}
                                    </PrimaryButton>

                                    <a
                                        className="cursor-pointer ml-2 text-sm text-rose-600 hover:text-rose-800"
                                        onClick={(e) => setShowAddModal(false)}
                                    >
                                        {__("Cancel")}
                                    </a>
                                </div>
                            </form>
                        </div>
                    </Modal>

                    <Modal
                        show={showDeleteConfirmation}
                        onClose={(e) => setShowDeleteConfirmation(false)}
                    >
                        <div className="px-5 py-10 text-center">
                            <h3 className="text-xl mb-3 text-zinc-700 dark:text-white">
                                {__(
                                    "Are you sure you want to remove this Streaming?"
                                )}
                            </h3>
                            <DangerButton onClick={(e) => deleteStreamer()}>
                                {__("Yes")}
                            </DangerButton>
                            <SecondaryButton
                                className="ml-3"
                                onClick={(e) =>
                                    setShowDeleteConfirmation(false)
                                }
                            >
                                {__("No")}
                            </SecondaryButton>
                        </div>
                    </Modal>

                    <span className="text-gray-600">
                        {!streamerData.length &&
                            __("You did't create any membership tiers yet.")}
                    </span>

                    {streamerData.length && (
                        <div className="relative overflow-x-auto mt-5">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-400">
                                    <tr>
                                        <th className="px-16 py-3">
                                            {__("Streaming Time")}
                                        </th>
                                        <th className="px-16 py-3">
                                            {__("Token")}
                                        </th>
                                        <th className="px-16 py-3">Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {streamerData.map((t) => (
                                        <tr
                                            key={t.id}
                                            className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-700"
                                        >
                                           
                                            <td className="px-16 py-4 text-lg font-semibold">
                                                {t.get_streamer_price.streaming_time}
                                            </td>
                                            <td className="px-16 py-4 text-lg font-semibold">
                                                {t.token_amount}
                                            </td>
                                            <td className="px-16 py-4">
                                                <div className="flex items-center">
                                                    <Link
                                                        href={route(
                                                            "streaming.edit",
                                                            { id: t.id }
                                                        )}
                                                    >
                                                        <AiOutlineEdit className="w-6 h-6 mr-2 text-sky-600" />
                                                    </Link>
                                                    <button
                                                        onClick={(e) =>
                                                            confirmDelete(
                                                                e,
                                                                t.id
                                                            )
                                                        }
                                                    >
                                                        <RiDeleteBin5Line className="text-red-600 w-5 h-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
