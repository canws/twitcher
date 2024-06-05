import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Textarea from "@/Components/Textarea";
import __ from "@/Functions/Translate";
import { usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

export default function StreamInstructions({ streamKey, streamUser }) {
    const { auth, rtmp_url } = usePage().props;
    const [tab, setTab] = useState("desktop");

    if (auth?.user?.username !== streamUser) {
        return __("Streamer Private or  offline!");
        toast.success("Streamer Private or  offline!");
    }

    const reStartStreaming = async (e) => {
        e.preventDefault();

        axios.get(route("chat.re-start-streaming"))
            .then((resp) => {
                console.log("resp", resp);
                if (resp.data.status === true) {
                    toast.success(__(resp.data.message));
                }
            }).catch(Error => toast.error(__("Error banning user")));
    };
    return (
        <div className="bg-dark border mb-5 dark:bg-zinc-900 mr-10 p-5">
            <div className="my-5">
                <button
                    onClick={(e) => setTab("desktop")}
                    className={`text-xl text-primary font-bold hover:text-indigo-800 dark:hover:text-indigo-600 ${tab === "desktop"
                        ? "text-indigo-700 dark:text-indigo-500 underline"
                        : "text-gray-700 dark:text-white"
                        }`}
                >
                    {__("Desktop Instructions")}
                </button>
                <button
                    onClick={(e) => setTab("mobile")}
                    className={`ml-3 text-white text-xl font-bold hover:text-indigo-800 dark:hover:text-indigo-600 ${tab === "mobile"
                        ? "text-indigo-700 dark:text-indigo-500 underline"
                        : "text-gray-700 dark:text-white"
                        }`}
                >
                    {__("Mobile Instructions")}
                </button>
                <div class="flex justify-end">
                    <Button className="me-2 btn text-uppercase position-relative d-flex" onClick={reStartStreaming}>
                        Public Steaming
                    </Button>
                    {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={reStartStreaming}>
                        Public Steaming
                    </button> */}
                </div>
            </div>

            <h2 className="text-2xl pb-2 mt-5 border-b dark:border-b-zinc-800 font-semibold text-white text-gray-700">
                {__("RTMP Server URL")}
            </h2>
            <TextInput
                className="text-xl mt-3 w-full"
                value={
                    tab === "desktop" ? rtmp_url : `${rtmp_url}/${streamKey}`
                }
            />

            {tab == "desktop" ? (
                <>
                    <h2 className="text-xl pb-2 mt-5 border-b dark:border-b-zinc-800 font-semibold text-white text-gray-700">
                        {__("RTMP Streaming Key")}
                    </h2>
                    <Textarea className="text-xl w-full" value={streamKey} />

                    <h2 className="mt-5 text-2xl pb-2 border-b dark:border-b-zinc-800 font-semibold text-white text-gray-700">
                        {__("Download OBS - Open Broadcaster Software")}
                    </h2>
                    <a
                        className="flex text-primary text-xl hover:underline"
                        target="blank"
                        href="https://obsproject.com/"
                    >
                        https://obsproject.com
                    </a>

                    <h2 className="text-2xl pb-2 mt-5 border-b dark:border-b-zinc-800 font-semibold text-white text-gray-700">
                        {__("Go to OBS->Settings->Stream")}
                    </h2>

                    <img src="/images/obs.png" alt="obs.png" />

                    <h2 className="text-2xl pb-2 mt-5 border-b dark:border-b-zinc-800 font-semibold text-white text-gray-700">
                        {__("Happy Streaming!")}
                    </h2>
                </>
            ) : (
                <>
                    <h2 className="text-2xl pb-2 mt-5 border-b dark:border-b-zinc-800 font-semibold text-white text-gray-700">
                        {__(
                            "Get a Mobile RTMP Ingesting App (ex. Larix Broadcaster)"
                        )}
                    </h2>

                    <a
                        className="flex my-5 text-primary text-xl hover:underline"
                        target="blank"
                        href="https://apps.apple.com/us/app/larix-broadcaster/id1042474385"
                    >
                        Larix Broadcaster iOS
                    </a>

                    <a
                        className="flex my-5 text-primary text-xl hover:underline"
                        target="blank"
                        href="https://play.google.com/store/apps/details?id=com.wmspanel.larix_broadcaster&hl=en&gl=US&pli=1"
                    >
                        Larix Broadcaster Android
                    </a>

                    <p className="text-white text-gray-700">
                        {__(
                            "Click Settings Cog -> Connections -> New Connection"
                        )}
                    </p>

                    <a
                        href="https://www.youtube.com/watch?v=Dhj0_QbtfTw&t=24s"
                        target="_blank"
                    >
                        <img src="/images/larix.jpeg" alt="larix app" />
                    </a>
                </>
            )}
        </div>
    );
}
