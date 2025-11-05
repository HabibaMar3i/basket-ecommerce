
export default function ContactUs() {
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
                                <label for="Name" class="block mb-2 text-sm font-base text-gray-900">Name</label>
                                <input type="text" id="Name" class="bg-[#F3F4F7]   text-gray-900 text-sm rounded-sm focus:outline-[#35AFA0] focus:border-[#35AFA0] block w-full p-2.5 " required />

                            </div>

                            <div className="sm:w-1/2">
                                <label for="email" class="block mb-2 text-sm font-base text-gray-900">Email *</label>
                                <input type="text" id="email" class="bg-[#F3F4F7]  text-gray-900 text-sm rounded-sm focus:outline-[#35AFA0] block w-full p-2.5 " required />

                            </div>
                        </div>
                        <div className="my-3.5">
                            <label for="first_name" class="block mb-2 text-sm font-base text-gray-900">Phone Number</label>
                            <input type="text" id="first_name" class="bg-[#F3F4F7]  text-gray-900 text-sm rounded-sm focus:outline-[#35AFA0] block w-full p-2.5 " required />

                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-base text-gray-900">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-[#F3F4F7] rounded-sm  focus:outline-[#35AFA0] " ></textarea>

                        </div>
                        <button type="button" class="text-white w-[166px] h-[46px] bg-[#35AFA0] mt-2 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-base rounded-sm text-sm px-5 py-2.5 text-center ">Send Message</button>


                    </div>
                </form>
            </div >

        </section >
        // <section>

        // </section>

    )
}
