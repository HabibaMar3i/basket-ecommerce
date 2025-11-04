import image from "../../assets/owner.png"
export default function AboutUs() {
    return (
        <section>
            <main className="bg-[url('/assets/main-about.jpg')]  h-[621px] bg-center mb-12 " >
                <div className="overlay bg-black/40 w-full h-full text-white flex justify-center items-center flex-col">
                    <h1 className="font-semibold text-6xl text-center">About for Bacola</h1>
                    <p className="tracking-[4px] uppercase text-xs mt-4">We can do more for you</p>
                </div>

            </main>
            <div className="about text-[#202435]">
                <div className="container lg:max-w-[1200px] m-auto px-4">
                    <p className="font-normal text-sm  align-middle">In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
                        rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                        Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
                    <div className="pl-20 my-10">
                        <h2 className="font-semibold text-3xl  lg:w-[679px] mb-10">Quisque erat urna, congue et libero in
                            eleifend euismod velit.</h2>
                        <p className="font-normal text-sm  align-middle ">In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim.
                            Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
                            interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
                    </div>
                    <div className="flex max-xl:flex-col xl:gap-20   gap-0 relative">
                        <img src={image} alt="" className="w-full sm:w-1/2 h-auto m-auto" />
                        <div className="flex flex-col gap-2 text-sm   ">
                            <div className="job-title mt-20 mb-10 text-base">Rachel Leonard - Bacola CEO</div>
                            <h2 className="font-semibold text-3xl xl:-ml-12 mb-10">Duis convallis luctus pretium Pellentesque habitant morbi</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                facilisis.</p>
                            <p className="leading-6 mt-4">In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
                                dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
                                at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
                                bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
                                dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
                                eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
                                dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum
                                primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis
                                libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut,
                                fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
                                Curabitur fermentum dolor eu lacus consectetur varius.</p>

                        </div>
                        <p className="xl:absolute text-sm  -bottom-16 pl-[100px] py-[60px] bg-white left-26 rounded-md">In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
                            consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
                            dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit
                            ante, vel vulputate tortor blandit nec.</p>

                    </div>
                    <p className="xl:mt-[120px]">In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
                        rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                        Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
                </div>

            </div>

        </section>
    )
}
