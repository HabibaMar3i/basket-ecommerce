import { Link } from 'react-router-dom'
import mainhome from '../../assets/main-home.jpg'

export default function SpecialStore() {
    return <>
        {/* special section */}
        <section className="w-full overflow-hidden relative">
            <img
                src={mainhome}
                alt="Home"
                className="w-full h-[40vh] md:h-auto md:max-h-[580px] object-cover object-top"
            />
            <div className="absolute inset-0 ">
                <div className='flex flex-col gap-2 absolute left-4 lg:left-80 top-4 md:top-8 lg:top-22 w-[90%] lg:w-auto max-w-[363.2px]'>
                    <div className='flex items-center gap-2'>
                        <h1 className='font-Dosis font-medium text-[12px] leading-[18px] tracking-[1px] uppercase align-middle text-[#202435]'>
                            Exclusive Offer
                        </h1>
                        <div className='w-[87.97px] h-[31px] rounded-[40px] opacity-100 bg-linear-to-r from-[rgba(0,184,83,0.2)] to-[rgba(32,55,88,0)] flex items-center justify-center'>
                            <h1 className='font-Dosis font-semibold text-[14px] leading-[21px] tracking-[1px] uppercase text-[#038E42] align-middle'>-20% Off</h1>
                        </div>
                    </div>
                    <h1 className='font-Inter font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-[33.6px] md:leading-[43.2px] lg:leading-[57.6px] tracking-[-0.7px] text-[#202435] align-middle w-full lg:w-[363.2px] h-auto lg:h-[116.59px] rotate-0 opacity-100'>
                        Specialist in the grocery store
                    </h1>
                    <p className='font-Inter font-normal text-[14px] md:text-[16px] leading-5 md:leading-6 tracking-[-0.1px] text-[#202435] align-middle'>Only this week. Don't miss...</p>

                    <h1 className='font-Dosis font-semibold text-[24px] md:text-[30px] lg:text-[36px] leading-9 md:leading-[45px] lg:leading-[54px] tracking-[-0.1px] text-[#D51243]'>
                        <span className='font-Inter font-normal text-[14px] md:text-[16px] leading-5 md:leading-6 tracking-[-0.1px] text-[#202435]'>from </span>$7.99
                    </h1>
                    <Link to={'/shop'} className='w-[133.94px] h-10 bg-[#35AFA0] hover:bg-[#2e9c8e] flex items-center justify-center gap-2 rounded-[30px] font-[Inter] font-medium text-[14px] leading-[21px] tracking-[-0.1px] text-white align-middle opacity-100 rotate-0 transition duration-300'>
                        Shop Now <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    </>
}