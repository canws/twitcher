import __ from "@/Functions/Translate";
import { MdGeneratingTokens } from "react-icons/md";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import Textarea from "@/Components/Textarea";
import NumberInput from "@/Components/NumberInput";
import axios from "axios";
import { toast } from "react-toastify";
import TextInput from "@/Components/TextInput";


export default function PrivateChat({ streamer }) {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [streamingId, setStreamingId ]= useState("");
    const [stream , setStream] = useState([]);

    const sendPrivateChat = (e) => {
        e.preventDefault();
       
        axios
            .post(route("chat.privateRequest"), {
                streamingId,
                message,
            })
            .then((resp) => {
                if (resp.data.status === true) {
                    setMessage("");
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

    const fetchStreamingData = async () => {
        try {
          const response = await axios.get('/streamer/get-streming-list/'+streamer.id);
          const streamingData = response.data.streamerData;
            if(response.data.status === true){
                setStream(streamingData);
                setShow(true);
            }
        } catch (error) {
          toast.error('Error fetching streaming data:', error);
        }
      };
      const handleRadioChange = (e) => {
        setStreamingId(parseInt(e.target.value));
      };
   
    return (
        <>
            <Modal show={show} onClose={(e) => setShow(false)} maxWidth="xs">
                <div className="p-5 text-center">
                    <h3 className="text-lg mb-3 justify-center flex items-center font-semibold dark:text-white">
                        <MdGeneratingTokens className="mr-2 h-6 w-6" />
                        {__("Send Private Chat Request !")}
                    </h3>
                    <div className="my-3">
                        <table className="table-fixed">
                            <thead>
                            <tr>
                                <th>Select</th>
                                <th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>Tokens</th>
                            </tr>
                            </thead>
                            <tbody>
                            {stream.map((item, index) => (
                                <tr key={index}>
                                <td>
                                    <input type="radio" name="select-stream" value={item?.id} onChange={handleRadioChange} />
                                </td>
                                <td>{item?.get_streamer_price?.streaming_time}</td> 
                                <td>{item?.token_amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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


                        <InputLabel
                            className="text-base mt-4"
                            forInput={"message"}
                            value={__("Message")}
                        />

                        <Textarea
                            className="w-full mt-2"
                            value={message}
                            required
                            handleChange={(e) => setMessage(e.target.value)}
                        />

                        <PrimaryButton className="mt-5">
                            {__("Send Request")}
                        </PrimaryButton>
                    </form>
                </div>
            </Modal>
            
            <PrimaryButton
                onClick={(e) => fetchStreamingData()}
                className="py-3 mx-2 inline-flex items-center"
            >
                 {__("Private")}
            </PrimaryButton>
        </>
    );
}
