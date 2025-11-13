import SpecialStore from "../../components/SpecialStore/SpecialStore";
import mainhome from '../../assets/main-home.jpg'
import mainhome2 from '../../assets/main-home-2.png'
import discount1 from '../../assets/discount1.png'
import discount2 from '../../assets/discount2.png'
import discount3 from '../../assets/discount3.png'
import home1 from '../../assets/home-1.png'
import home2 from '../../assets/home-2.png'
import home3 from '../../assets/home-3.png'

import { Link } from "react-router-dom";
import Category from "../../components/Category/Category";
import Deals from "../../components/Deals/Deals";
import BestSellers from "../../components/BestSellers/BestSellers";
import DiscountSection from "../../components/DiscountSection/DiscountSection";

export default function HomePage() {
    return (
        <>
            <SpecialStore />

            <section className="mt-10 mb-30 px-4 lg:px-8">
                {/* category section */}
                <Category />

                {/* product deals section */}
                <Deals />

                {/* weekend discount section */}
                <section className="mt-10 flex flex-col lg:flex-row gap-4 lg:gap-0">
                    <section className="w-full lg:w-1/2 overflow-hidden relative">
                        <section>
                            <img
                                src={mainhome}
                                alt="Home"
                                className="w-full h-[200px] lg:h-[251.17px] object-cover object-top rounded-xl"
                            />
                            <div className="absolute inset-0">
                                <div className="absolute top-8 lg:top-15 left-4 lg:left-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-dosis font-semibold text-[14px] leading-[21px] tracking-[0px] uppercase align-middle text-[#FF6048]">Weekend Discount 40%</h1>
                                        <h1 className="font-inter font-semibold text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28.8px] tracking-[-0.8px] align-middle text-[#3E445A]">Cookie and Ice Cream</h1>
                                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#3E445A]">Bacola Weekend Discount</p>
                                    </div>
                                    <Link to={'/shop'}>
                                        <button className="px-4 py-2 cursor-pointer mt-3 lg:mt-5 rounded-[30px] border border-[#233A95] bg-[#233A95] hover:bg-[#1c2f78] transition-colors duration-300 font-medium font-inter text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section className="w-full lg:w-1/2 overflow-hidden relative">
                        <section>
                            <img
                                src={mainhome2}
                                alt="Home"
                                className="w-full h-[200px] lg:h-[251.17px] object-cover object-top rounded-xl"
                            />
                            <div className="absolute inset-0">
                                <div className="absolute top-8 lg:top-15 left-4 lg:left-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-dosis font-semibold text-[14px] leading-[21px] tracking-[0px] uppercase align-middle text-[#FF6048]">Weekend Discount 40%</h1>
                                        <h1 className="font-inter font-semibold text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28.8px] tracking-[-0.8px] align-middle text-[#3E445A]">Cookie and Ice Cream</h1>
                                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#3E445A]">Bacola Weekend Discount</p>
                                    </div>
                                    <Link to={'/shop'}>
                                        <button className="px-4 py-2 rounded-[30px] border mt-3 lg:mt-5 cursor-pointer border-[#ED174A] bg-[#ED174A] opacity-100 hover:bg-[#c9103e] transition-colors duration-300 font-medium font-inter text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                {/* best sellers section */}
                <BestSellers />

                {/* super discount section */}
                <DiscountSection />

                {/* last section */}
                <section className="mt-10">
                    {/* Discount banners section */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <section className="w-full lg:flex-1 lg:max-w-[370px] h-[218.6300048828125px] rounded-xl overflow-hidden relative">
                            <img
                                src={discount1}
                                alt="Home"
                                className="w-full h-[200px] lg:h-[251.17px] object-cover object-top rounded-xl"
                            />
                            <div className="absolute inset-0">
                                <div className="absolute top-8 lg:top-10 left-4 lg:left-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-dosis font-semibold text-[14px] leading-[21px] uppercase text-[#00B853]">Weekend Discount 40%</h1>
                                        <h1 className="font-inter font-semibold text-[20px] lg:text-[24px] leading-6 lg:leading-[28.8px] tracking-[-0.8px] align-middle text-[#3E445A]">Natural Eggs</h1>
                                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] text-[#9B9BB4]">Eat one every day</p>
                                    </div>
                                    <Link to={'/shop'}>
                                        <button className="w-[100.13px] cursor-pointer h-[34px] mt-3 lg:mt-5 rounded-[30px] border border-[#C2C2D3] bg-[#C2C2D3] hover:bg-[#a9a9bb] transition-colors duration-300 font-medium font-inter text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="w-full lg:flex-1 lg:max-w-[370px] h-[218.6300048828125px] rounded-xl overflow-hidden relative">
                            <img
                                src={discount2}
                                alt="Home"
                                className="w-full h-[200px] lg:h-[251.17px] object-cover object-top rounded-xl"
                            />
                            <div className="absolute inset-0">
                                <div className="absolute top-8 lg:top-10 left-4 lg:left-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-dosis font-semibold text-[14px] leading-[21px] uppercase text-[#00B853]">Weekend Discount 40%</h1>
                                        <h1 className="font-inter font-semibold text-[20px] lg:text-[24px] leading-6 lg:leading-[28.8px] tracking-[-0.8px] align-middle text-[#3E445A]">Taste the Best</h1>
                                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] text-[#9B9BB4]">Shine the morning</p>
                                    </div>
                                    <Link to={'/shop'}>
                                        <button className="w-[100.13px] cursor-pointer h-[34px] mt-3 lg:mt-5 rounded-[30px] border border-[#C2C2D3] bg-[#C2C2D3] hover:bg-[#a9a9bb] transition-colors duration-300 font-medium font-inter text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="w-full lg:flex-1 lg:max-w-[370px] h-[218.6300048828125px] rounded-xl overflow-hidden relative">
                            <img
                                src={discount3}
                                alt="Home"
                                className="w-full h-[200px] lg:h-[251.17px] object-cover object-top rounded-xl"
                            />
                            <div className="absolute inset-0">
                                <div className="absolute top-8 lg:top-10 left-4 lg:left-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-dosis font-semibold text-[14px] leading-[21px] uppercase text-[#00B853]">Weekend Discount 40%</h1>
                                        <h1 className="font-inter font-semibold text-[20px] lg:text-[24px] leading-6 lg:leading-[28.8px] tracking-[-0.8px] align-middle text-[#3E445A]">Taste the Best</h1>
                                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] text-[#9B9BB4]">Shine the morning</p>
                                    </div>
                                    <Link to={'/shop'}>
                                        <button className="w-[100.13px] cursor-pointer h-[34px] mt-3 lg:mt-5 rounded-[30px] border border-[#C2C2D3] bg-[#C2C2D3] hover:bg-[#a9a9bb] transition-colors duration-300 font-medium font-inter text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Blog posts section */}
                    <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Blog Post 1 */}
                        <div className="w-full lg:flex-1 flex flex-col gap-3">
                            <img
                                src={home1}
                                className="w-full h-[200px] lg:h-[259px] opacity-100 object-cover rounded-xl"
                                alt="bottle"
                            />
                            <h3 className="font-dosis font-semibold text-[13px] leading-[19.5px] tracking-[-0.1px] uppercase align-middle text-[#9B9BB4]">Grocery</h3>
                            <h1 className="w-full lg:w-[350.54px] h-auto lg:h-12 font-inter font-semibold text-[18px] lg:text-[20px] leading-[24px] lg:leading-6 tracking-[0] align-middle text-[#202435]">
                                But I must explain to you how all this mistaken idea
                            </h1>
                            <h3 className="font-inter font-medium text-[14px] leading-[21px] tracking-[-0.1px] align-middle text-[#71778E]">Jan 13 2025</h3>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="w-full lg:flex-1 flex flex-col gap-3">
                            <img
                                src={home2}
                                className="w-full h-[200px] lg:h-[259px] opacity-100 object-cover rounded-xl"
                                alt="bottle"
                            />
                            <h3 className="font-dosis font-semibold text-[13px] leading-[19.5px] tracking-[-0.1px] uppercase align-middle text-[#9B9BB4]">Grocery</h3>
                            <h1 className="w-full lg:w-[350.54px] h-auto lg:h-12 font-inter font-semibold text-[18px] lg:text-[20px] leading-[24px] lg:leading-6 tracking-[0] align-middle text-[#202435]">
                                The Problem With Typefaces on the Web
                            </h1>
                            <h3 className="font-inter font-medium text-[14px] leading-[21px] tracking-[-0.1px] align-middle text-[#71778E]">Jan 13 2025</h3>
                        </div>

                        {/* Blog Post 3 */}
                        <div className="w-full lg:flex-1 flex flex-col gap-3">
                            <img
                                src={home3}
                                className="w-full h-[200px] lg:h-[259px] opacity-100 object-cover rounded-xl"
                                alt="bottle"
                            />
                            <h3 className="font-dosis font-semibold text-[13px] leading-[19.5px] tracking-[-0.1px] uppercase align-middle text-[#9B9BB4]">Grocery</h3>
                            <h1 className="w-full lg:w-[350.54px] h-auto lg:h-12 font-inter font-semibold text-[18px] lg:text-[20px] leading-[24px] lg:leading-6 tracking-[0] align-middle text-[#202435]">
                                English Breakfast Tea With Tasty Donut Desserts
                            </h1>
                            <h3 className="font-inter font-medium text-[14px] leading-[21px] tracking-[-0.1px] align-middle text-[#71778E]">Jan 13 2025</h3>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}