import axios from "axios";
import { useState, useContext } from "react";
import { tokenContext } from "../../components/context/tokenContext";
import { toast } from "react-toastify";

export default function ContactUs() {
    const [contact, setContact] = useState({
        Name: "",
        Phone: "",
        Email: "",
        Message: "",
    });
    const { token } = useContext(tokenContext);
    
    async function createMessage() {
        try {
            const domain = 'https://e-commarce-website-eight.vercel.app';
            const { data } = await axios.post(
                `${domain}/api/v1/contact-us/add-ContactUs`,
                contact,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Message sent successfully!");
            setContact({ Name: "", Phone: "", Email: "", Message: "" });
        } catch (err) {
            const msg = err?.response?.data?.message || "Something went wrong";
            
            if (msg.includes("Phone_1 dup key")) {
                toast.error("This phone number is already registered");
            } else if (msg.includes("Email_1 dup key")) {
                toast.error("This email is already registered");
            } else {
                toast.error(msg);
            }
        }
    }
    return (
        <section className="pb-28">
            <div className="container m-auto lg:max-w-[1200px] px-4">
                <h1 className="text-center text-4xl capitalize text-[#202435] mb-2">get in touch</h1>
                <p className="text-center max-w-[440px] m-auto text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
                    quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
                    veniam vel.</p>

                <div className="flex justify-between text-center max-lg:flex-col max-lg:items-center m-auto  gap-5  my-16">
                    <div className=" contact w-full  max-w-[370px] h-[200px] max-sm:p-5  bg-[#F3F3F6] rounded-md flex flex-col justify-center items-center sm:w-[370px] sm:h-[202px]  text-[#202435]">
                        <i class="fa-solid fa-location-dot  text-[#35AFA0] text-3xl " aria-hidden="true"></i>
                        <h2 className="mt-6 mb-5 font-medium text-[15px]">102 Street 2714 Donovan</h2>
                        <p>Lorem ipsum dolar site amet discont</p>
                    </div>
                    <div className="contact w-full max-w-[370px] h-[200px] max-sm:p-5 bg-[#F3F3F6] rounded-md flex flex-col justify-center items-center sm:w-[370px] sm:h-[202px] text-[#202435]">
                        <i class="fa-solid fa-phone-volume  text-[#35AFA0] text-3xl " aria-hidden="true"></i>

                        <h2 className="mt-6 mb-5 font-medium text-[15px]">102 Street 2714 Donovan</h2>
                        <p>Lorem ipsum dolar site amet discont</p>
                    </div>
                    <div className="contact w-full max-w-[370px] h-[200px] max-sm:p-5 bg-[#F3F3F6] rounded-md flex flex-col justify-center items-center sm:w-[370px] sm:h-[202px] text-[#202435]">
                        <i class="fa-solid fa-envelope  text-[#35AFA0] text-3xl " aria-hidden="true"></i>
                        <h2 className="mt-6 mb-5 font-medium text-[15px]">102 Street 2714 Donovan</h2>
                        <p>Lorem ipsum dolar site amet discont</p>
                    </div>
                </div>
                <form action="" className="lg:px-[202px] lg:py-[91px] p-10 border border-white shadow-[0_0_60px_0] shadow-black/20 rounded-md">
                    <h2 className="text-center text-4xl capitalize text-[#202435] mb-2">Send Us</h2>
                    <p className="text-center  text-sm">
                        Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact
                        offices.
                    </p>
                    <hr className="my-14  text-[#EDEEF5]" />
                    <div className="group">
                        <div className="flex max-sm:flex-col w-full gap-5">
                            <div className="sm:w-1/2">
                                <label for="Name" class="block mb-2 text-sm font-base text-gray-900">Name </label>
                                <input onChange={(e) => setContact({ ...contact, Name: e.target.value })}
                                    value={contact.Name} type="text" id="Name" class="bg-[#F3F4F7]   text-gray-900 text-sm rounded-sm focus:outline-[#35AFA0] focus:border-[#35AFA0] block w-full p-2.5 " required />

                            </div>

                            <div className="sm:w-1/2">
                                <label for="email" class="block mb-2 text-sm font-base text-gray-900">Email *</label>
                                <input onChange={(e) => setContact({ ...contact, Email: e.target.value })}
                                    value={contact.Email} type="email" id="email" class="bg-[#F3F4F7]  text-gray-900 text-sm rounded-sm focus:outline-[#35AFA0] block w-full p-2.5 " required />

                            </div>
                        </div>
                        <div className="my-3.5">
                            <label for="Phone_Number" class="block mb-2 text-sm font-base text-gray-900">Phone Number</label>
                            <input onChange={(e) => setContact({ ...contact, Phone: e.target.value })}
                                value={contact.Phone} type="text" id="Phone_Number" class="bg-[#F3F4F7]  text-gray-900 text-sm rounded-sm focus:outline-[#35AFA0] block w-full p-2.5 " required />

                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-base text-gray-900">Your message</label>
                            <textarea onChange={(e) => setContact({ ...contact, Message: e.target.value })}
                                value={contact.Message} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-[#F3F4F7] rounded-sm  focus:outline-[#35AFA0] " ></textarea>

                        </div>
                        <button onClick={createMessage} type="button" class="text-white w-[166px] h-[46px] bg-[#35AFA0] mt-2 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-base rounded-sm text-sm px-5 py-2.5 text-center ">Send Message</button>


                    </div>
                </form>
            </div >

        </section >


    )
}
