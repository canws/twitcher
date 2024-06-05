import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import __ from "@/Functions/Translate";
import { MdGeneratingTokens } from "react-icons/md";
import { Inertia } from "@inertiajs/inertia";
import Front from "@/Layouts/Front";

export default function Packages({ packs }) {
    const { currency_symbol, currency_code } = usePage().props;
    return (
        <Front
            extraHeader={true}
            extraHeaderTitle={__("Subscription plan")}
            extraHeaderText={""}
            extraHeaderImage="/images/get-tokens-icon.png"
            extraImageHeight="h-12"
        >
            <Head title={__("Get Tokens")} />

            <div className=" dark:bg-zinc-900 max-w-5xl -mt-[80px] py-5">
                <div className="flex flex-col md:flex-row items-center">
                    <div>
                        <img
                            src="/images/token-packages.png"
                            alt="token packs"
                            className="h-52 lg:ml-5"
                        />
                    </div>
                    <div className="ml-5 mt-5">
                        <h3 className="text-3xl text-indigo-800 font-bold mb-3  dark:text-white">
                            {__("Subscription plan")}
                        </h3>
                        <p className="text-xl font-medium mb-3  text-gray-600 dark:text-white">
                            {__(
                                "Subscription Plan can Buy on the Monthly and yearly Basis"
                            )}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 mt-5">
                    {packs.map((pack) => (
                        <div
                            key={pack.id}
                            className="rounded-lg mt-5 mr-5 p-4 bg-slate-100 mx-auto shadow  dark:bg-zinc-700 w-full"
                        >
                            <div className="flex items-center space-x-3">
                                <div>
                                    <MdGeneratingTokens className="h-6 w-6 dark:text-white" />{" "}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold dark:text-white">
                                    {pack.subscription_name}
                                    </h3>
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <h5 className="text-lg font-light dark:text-white">
                                    {currency_symbol}
                                    {pack.subscription_price} {currency_code}
                                </h5>

                            <button
                                    onClick={(e) =>
                                        Inertia.visit(
                                            route("subscription.selectGateways", {
                                                tokenPack: pack.id,
                                            })
                                        )
                                    }
                                    className="w-full text-center bg-black hover:bg-zinc-800 text-white rounded-lg py-1.5 mt-3 dark:bg-indigo-700 dark:hover:bg-indigo-800"
                                >
                                    {__("Buy This Plan")}
                                </button>
                           
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Front>
    );
}
