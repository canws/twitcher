import __ from "@/Functions/Translate";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Textarea from "@/Components/Textarea";
import PrimaryButton from "@/Components/PrimaryButton";
import { usePage, useForm, Head, Link } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SecondaryButton from "@/Components/SecondaryButton";
import AccountNavi from "../Channel/Partials/AccountNavi";

export default function EditStreamer({ streamerData }) {
    const { currency_symbol } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        token_amount: streamerData?.token_amount,
        streaming_time: streamerData?.get_streamer_price?.streaming_time,
        streamering_id:streamerData?.id
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
        post(route("streaming.update"));
    };

    return (
        <AuthenticatedLayout>
            <Head title={__("Channel Membership Tiers")} />

            <div className="lg:flex lg:space-x-10 w-full">
                <AccountNavi active={"tiers"} />
                <div className="p-4 sm:p-8 bg-white w-full dark:bg-zinc-900 shadow sm:rounded-lg">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            {__("Update Streamer")}
                        </h2>

                        <p className="mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400">
                            {__(
                                "Update the Streamer prices and tokens"
                            )}
                        </p>

                        <Link href={route("getStreamingList")}>
                            <SecondaryButton>{__("<< Back")}</SecondaryButton>
                        </Link>
                    </header>

                    <hr className="my-5" />
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <input type="hidden" value={data.streamering_id} onChange={onHandleChange} />
                            <InputLabel
                                for="streaming_time"
                                value={__("Streamer Time")}
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
                                for="token_amount"
                                value={__("Tokens")}
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
                                {__("Update")}
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
