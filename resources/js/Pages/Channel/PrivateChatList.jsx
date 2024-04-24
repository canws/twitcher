import __ from "@/Functions/Translate";
import { MdGeneratingTokens ,MdCancel ,MdCheckCircleOutline  } from "react-icons/md";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import Modal from "@/Components/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import TextInput from "@/Components/TextInput";


export default function PrivateChatList({ streamer }) {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [streamingId, setStreamingId ]= useState("");
    const [stream , setStream] = useState([]);

    const sendPrivateChat = (e) => {
        e.preventDefault();
       
        axios
            .post(route("chat.start"), {
                streamingId,
            })
            .then((resp) => {
                if (resp.data.status === true) {
                    toast.success(resp.data.message);
                    setShow(false);
                } else {
                    toast.error(resp.data.message);
                }
            })
            .catch((Error) => {
                const errors = Error.response.data?.errors;

                Object.keys(errors).forEach((key) => {
                    console.log(errors[key][0]);
                    toast.error(errors[key][0]);
                });
            });
    };

    const fetchStreamList = async () => {
        try {
        axios
            .get(route("chat.getPrivateRequest"), {
                streamingId,
                message,
            })
            .then((resp) => {
                if (resp.data.status === true) {
                    setShow(true);
                    setStream(resp.data.data);
                    console.log("resp.data.data",resp.data.data);
                    toast.success(resp.data.message);
                } else {
                    toast.error(resp.data.message);
                }
            })

        } catch (error) {
          toast.error('Error fetching streaming data:', error);
        }
      };
      const handleRadioChange = (e) => {
        setStreamingId(parseInt(e.target.value));
      };
   
      const requestCancel = (id) =>{
        try{
            axios.get(route('chat.requestCacel' ,{id}))
            .then((resp) => {
                if (resp.data.status === true) {
                    setShow(true);
                    fetchStreamList();
                    console.log("resp.data.data",resp.data.data);
                    toast.success(resp.data.message);
                } else {
                    toast.error(resp.data.message);
                }
            });
        }catch(error){
            toast.error('error fetching treaming data:',error);
        }
      };
      const requestAccept = (id) =>{
        try{
            axios.get(route('chat.requestAccept' ,{id}))
            .then((resp) => {
                if (resp.data.status === true) {
                    setShow(true);
                    fetchStreamList();
                    console.log("resp.data.data",resp.data.data);
                    toast.success(resp.data.message);
                } else {
                    toast.error(resp.data.message);
                }
            });
        }catch(error){
            toast.error('error fetching treaming data:',error);
        }
      };
    return (
        <>
            <Modal show={show} onClose={(e) => setShow(false)} maxWidth="xl">
                <div className="p-5 text-center">
                    <h3 className="text-lg mb-3 justify-center flex items-center font-semibold dark:text-white">
                        <MdGeneratingTokens className="mr-2 h-6 w-6" />
                        {__("Private Chat Request !")}
                    </h3>
                    <div className="my-3">
                    {stream && stream.length > 0 ? (
                        <table className="table-fixed">
                            <thead>
                            <tr>
                                <th className="border px-1 py-2">Select</th>
                                <th className="border px-1 py-2">Sr.No.</th>
                                <th className="border px-2 py-2">Name</th>
                                <th className="border px-2 py-2">Time </th>
                                <th className="border px-2 py-2">Tokens </th>
                                <th className="border px-2 py-2">Message </th>
                                <th className="border px-1 py-2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {stream.map((item, index) => (
                                
                                <tr key={index}>
                                <td className="border px-1 py-2">
                                    <input type="radio" name="select-stream" value={item?.id} onChange={handleRadioChange} />
                                </td>
                                <td className="border px-1 py-2">{index}</td>
                                <td className="border px-2 py-2" >{item?.get_users_info?.username}</td>
                                
                                <td className="border px-2 py-2">{item?.stream_time}</td> 
                                <td className="border px-2 py-2">{item?.tokens}</td>
                                <td className="border px-2 py-2">{item?.message}</td>
                                <td className="border px-1 py-2">
                                    <div className="inline-flex">
                                    {item?.status === 'pending' ? (
                                            <div>
                                               <button className="hover:text-green-400 text-gray-800 font-bold py-2 px-1 rounded-l" onClick={() => requestAccept(item?.id)}>
                                                    <MdCheckCircleOutline className="mr-2 h-6 w-6" />
                                                </button>
                                                <button className="hover:text-red-400 text-gray-800 font-bold py-2 px-1 rounded-r" onClick={() => requestCancel(item?.id)}>
                                                    <MdCancel className="mr-2 h-6 w-6" />
                                                </button>
                                            </div>
                                        ) : item?.status === 'accept' && (
                                            <button className=" text-green-400 font-bold py-2 px-1 rounded-l">
                                                <MdCheckCircleOutline className="mr-2 h-6 w-6"/>
                                            </button>
                                        )}
                                    </div>
                                </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ):(
                        <h4>Data not found !</h4>
                        )}
                    </div>

                    <form onSubmit={sendPrivateChat}>
                        
                    <TextInput
                        type="hidden"
                        name="tokens"
                        min={1}
                        className="w-full mt-2 h-0 overflow-hidden"
                        value={streamingId}
                        handleChange={(e) => setStreamingId(e.target.value)}
                        />

                        <PrimaryButton className="mt-5">
                            {__("Send Request")}
                        </PrimaryButton>
                    </form>
                </div>
            </Modal>
            
            <PrimaryButton
                onClick={(e) => fetchStreamList()}
                className="py-3 mx-2 inline-flex items-center"
            >
                 {__("List")}
                 
            </PrimaryButton>
        </>
    );
}
