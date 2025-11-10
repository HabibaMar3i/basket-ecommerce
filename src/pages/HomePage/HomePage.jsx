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
import BestSeller from "../../components/BestSeller/BestSeller";

export default function HomePage() {
    return (
        <>
            <SpecialStore />

            <section className="mt-10 mb-30 mx-4 lg:mx-40">
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
                                className="w-full lg:w-[570px] h-[200px] lg:h-[251.17px] object-cover object-top rounded-xl"
                            />
                            <div className="absolute inset-0">
                                <div className="absolute top-8 lg:top-15 left-4 lg:left-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-dosis font-semibold text-[14px] leading-[21px] tracking-[0px] uppercase align-middle text-[#FF6048]">Weekend Discount 40%</h1>
                                        <h1 className="font-inter font-semibold text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28.8px] tracking-[-0.8px] align-middle text-[#3E445A]">Cookie and Ice Cream</h1>
                                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#3E445A]">Bacola Weekend Discount</p>
                                    </div>
                                    <Link to={'/shop'}>
                                        <button className="w-[100.13px] cursor-pointer h-[34px] mt-3 lg:mt-5 rounded-[30px] border border-[#233A95] bg-[#233A95] hover:bg-[#1c2f78] transition-colors duration-300 font-medium font-inter text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-white">Shop Now</button>
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
                                className="w-full lg:w-[570px] h-[200px] lg:h-[251.17px] object-cover object-top rounded-xl"
                            />
                            <div className="absolute inset-0">
                                <div className="absolute top-8 lg:top-15 left-4 lg:left-10">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-dosis font-semibold text-[14px] leading-[21px] tracking-[0px] uppercase align-middle text-[#FF6048]">Weekend Discount 40%</h1>
                                        <h1 className="font-inter font-semibold text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28.8px] tracking-[-0.8px] align-middle text-[#3E445A]">Cookie and Ice Cream</h1>
                                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#3E445A]">Bacola Weekend Discount</p>
                                    </div>
                                    <Link to={'/shop'}>
                                        <button className="w-[100.13px] h-[34px] rounded-[30px] border mt-3 lg:mt-5 cursor-pointer border-[#ED174A] bg-[#ED174A] opacity-100 hover:bg-[#c9103e] transition-colors duration-300 font-medium font-inter text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                {/* best sellers section */}
                <BestSeller />

                {/* super discount section */}
                <section className="mt-10">
                    {/* title */}
                    <div className="w-full lg:w-[1170px] mb-10 h-16 rounded-[7px] bg-[#FBEACF] opacity-100 flex items-center justify-center mx-auto">
                        <h1 className="font-inter font-bold text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase text-[#202435] px-4 lg:px-0">Super discount for your <span className="font-inter font-black text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase">first purchase.</span></h1>
                    </div>

                    {/* Mobile and Tablet Grid */}
                    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Product 1 */}
                        <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-4">
                            <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">25%</div>
                            </div>
                            <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Zevia Kidz Strawberry Lemonade Zero Calorie…</h1>
                            <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                            <div className="mt-4 mb-1 flex items-center gap-2">
                                <div className="flex flex-row gap-0.5">
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                </div>
                                <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$7.95</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$5.95</h1>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-4">
                            <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">30%</div>
                            </div>
                            <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Tropicana Pineapple Mango Drink</h1>
                            <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                            <div className="mt-4 mb-1 flex items-center gap-2">
                                <div className="flex flex-row gap-0.5">
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                </div>
                                <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-4">
                            <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]"></div>
                            <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">SToK Un-Sweet Black Cold Brew Iced Coffee</h1>
                            <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                            <div className="mt-4 mb-1 flex items-center gap-2">
                                <div className="flex flex-row gap-0.5">
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                </div>
                                <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$65.00</h1>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-4">
                            <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">20%</div>
                            </div>
                            <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Sol-ti Coconut Charcoal SuperAde</h1>
                            <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                            <div className="mt-4 mb-1 flex items-center gap-2">
                                <div className="flex flex-row gap-0.5">
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                </div>
                                <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                            </div>
                        </div>

                        {/* Product 5 */}
                        <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-4">
                            <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">20%</div>
                            </div>
                            <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Sol-ti Coconut Charcoal SuperAde</h1>
                            <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                            <div className="mt-4 mb-1 flex items-center gap-2">
                                <div className="flex flex-row gap-0.5">
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                </div>
                                <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                            </div>
                        </div>
                    </div>

                    {/* Original horizontal layout for large screens */}
                    <div className="hidden lg:block">
                        <div className="flex">
                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">25%</div>
                                </div>
                                <h1 className="w-full lg:w-[168.97999572753906px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Zevia Kidz Strawberry
                                    Lemonade Zero Calorie…</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$7.95</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$5.95</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border-t border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">30%</div>
                                </div>
                                <h1 className="w-full lg:w-[186.9199981689453px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Tropicana Pineapple Mango
                                    Drink</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border-t border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                </div>
                                <h1 className="w-full lg:w-[180.8699951171875px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">SToK Un-Sweet Black Cold
                                    Brew Iced Coffee</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$65.00</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border-t border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">20%</div>
                                </div>
                                <h1 className="w-full lg:w-[186.9199981689453px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Sol-ti Coconut Charcoal
                                    SuperAde</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border-t border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">20%</div>
                                </div>
                                <h1 className="w-full lg:w-[186.9199981689453px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Sol-ti Coconut Charcoal
                                    SuperAde</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">25%</div>
                                </div>
                                <h1 className="w-full lg:w-[168.97999572753906px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Zevia Kidz Strawberry
                                    Lemonade Zero Calorie…</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$7.95</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$5.95</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100  border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">30%</div>
                                </div>
                                <h1 className="w-full lg:w-[186.9199981689453px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Tropicana Pineapple Mango
                                    Drink</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100  border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                </div>
                                <h1 className="w-full lg:w-[180.8699951171875px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">SToK Un-Sweet Black Cold
                                    Brew Iced Coffee</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$65.00</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100  border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">20%</div>
                                </div>
                                <h1 className="w-full lg:w-[186.9199981689453px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Sol-ti Coconut Charcoal
                                    SuperAde</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                                </div>
                            </div>

                            <div className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100  border-b border-r border-[#EDEEF5] border-solid px-3 py-4">
                                <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">20%</div>
                                </div>
                                <h1 className="w-full lg:w-[186.9199981689453px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Sol-ti Coconut Charcoal
                                    SuperAde</h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                                        <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$3.29</h1>
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$2.29</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* last section */}
                <section className="mt-10">
                    {/* Discount banners section */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <section className="w-full lg:w-[370px] h-[218.6300048828125px] rounded-xl overflow-hidden relative">
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

                        <section className="w-full lg:w-[370px] h-[218.6300048828125px] rounded-xl overflow-hidden relative">
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

                        <section className="w-full lg:w-[370px] h-[218.6300048828125px] rounded-xl overflow-hidden relative">
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
                        <div className="w-full lg:w-[370px] flex flex-col gap-3">
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
                        <div className="w-full lg:w-[370px] flex flex-col gap-3">
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
                        <div className="w-full lg:w-[370px] flex flex-col gap-3">
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