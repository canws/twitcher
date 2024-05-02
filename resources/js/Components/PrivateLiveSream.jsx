import React, { Fragment } from 'react'
import __ from "@/Functions/Translate";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PrivateLiveSream() {
    const [showMessage, setShowMessage] = useState(true);
    const stopStreaming = async (e) => {
        e.preventDefault();
    
            axios.get(route("chat.stope-streaming"))
            .then((resp) => {
                console.log("resp",resp);
                if(resp.data.status === true){
                    toast.success(__(resp.data.message));
                }
            }).catch(Error => toast.error(__("Error banning user")));
        };
  return (
    <Fragment>
         <div
            className={`${
            showMessage ? "flex" : "hidden"
            } mb-3 mt-5 lg:mt-0 p-3 bg-white dark:bg-zinc-800 dark:text-white text-indigo-700 font-medium`}
        >
            {__(
            "If you just started streaming in OBS, refresh this page after 30 seconds to see your stream."
            )}
            <button
            className="ml-2 border-b border-indigo-700 dark:border-white"
            onClick={(e) => setShowMessage(false)}
            >
            {__("Close message")}
            </button>
        </div>
        <div class="flex justify-end my-3">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={stopStreaming}>
                Stop Steaming
            </button>
        </div>
    </Fragment>
  )
}
