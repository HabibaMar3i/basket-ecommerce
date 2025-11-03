
import footerImage from '../../assets/Footer_Image.png'
export default function Newsletter() {
    return <>
        {/* discount section */}
        <section className="w-full max-w-[1536px] h-auto min-h-[353.38px] rotate-0 opacity-100 bg-[#35AFA0] mx-auto">
            {/* main section */}
            <main className='flex flex-col lg:flex-row gap-8 lg:gap-50 justify-center items-center lg:items-start relative lg:top-19 pt-8 lg:py-0 px-4 lg:px-0'>
                {/* left section */}
                <section className="w-full lg:w-auto text-center lg:text-left">
                    <div className='lg:flex items-center gap-1 '>
                        <span className="font-inter font-light text-base leading-[19.2px] tracking-normal align-middle underline decoration-solid text-white decoration-auto underline-offset-3 ">$20 discount</span>  <h2 className="text-[#FFFFFF] font-inter font-light text-base leading-[19.2px] tracking-normal align-middle "> for your first order</h2>
                    </div>
                    <h1 className="font-inter font-semibold text-[26px] leading-[31.2px] tracking-normal align-middle text-white mt-2">Join our newsletter and get...</h1>
                    <p className="w-full lg:w-[287.67px] h-auto lg:h-10 rotate-0 opacity-50 font-inter font-normal text-[13px] leading-6 tracking-normal align-middle text-white mt-4 mx-auto lg:mx-0">Join our email subscription now to get updates
                        on promotions and coupons.</p>
                    <form className="relative w-full lg:w-auto mt-6 lg:mt-8">
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email address"
                            className="w-full lg:w-[470px] h-[62px] rounded border border-[#E4E5EE] bg-white font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] align-middle text-[#9595A9] ps-13 pl-12 pr-28 lg:pr-28 outline-none transition-all duration-300 focus:border-[#35AFA0] focus:ring-2 focus:ring-[#35AFA0]/40 focus:shadow-md" />
                        <i className="fa-regular fa-envelope text-[#C2C2D3] text-xl absolute top-1/2 transform -translate-y-1/2 left-4"></i>
                        <button
                            type="submit"
                            className="w-full lg:w-[102.84px] h-[54px] absolute lg:absolute lg:top-1 lg:left-91 left-0 top-full mt-2 lg:mt-0 cursor-pointer rounded bg-[#35AFA0] font-inter font-medium text-[13px] leading-[19.5px] text-center text-white hover:bg-[#2e978a] transition-colors duration-300">
                            Subscribe
                        </button>
                    </form>
                </section>
                {/* right section {image} */}
                <img src={footerImage} className='w-full max-w-[400px] lg:max-w-none lg:w-[510px] h-auto lg:h-[277.44px] rotate-0 opacity-100 mt-8 lg:mt-0' alt="discount image" />

            </main>
        </section>
    </>
}
