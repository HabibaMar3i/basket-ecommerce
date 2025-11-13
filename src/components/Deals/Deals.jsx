import React from 'react'
import { Link } from "react-router-dom";

export default function Deals() {
    return <>
        <section className="mt-10">
            <section className="flex flex-col lg:flex-row gap-4 lg:gap-7">
                {/* Featured product card */}
                <div className="w-full lg:w-[390px] h-auto lg:h-[777.78px] rounded-[7px] border-2 border-[#ED174A] opacity-100 p-5">
                    <h1 className="font-inter font-normal text-[20px] leading-6  text-[#233A95]">Deals of the <span className="font-inter font-bold text-[20px] leading-6 ">week!</span></h1>

                    <div className="flex items-center gap-1 my-2">
                        <div className="w-12 h-12 rounded-[7px] bg-[#ED174A] opacity-100 font-dosis font-semibold text-[20px] leading-[30px] tracking-[-0.1px] text-white flex items-center justify-center">70</div>
                        <p className="font-dosis font-semibold text-[16px] leading-6 tracking-[-0.1px] text-[#202435]">:</p>
                        <div className="w-12 h-12 rounded-[7px] bg-[#ED174A] opacity-100 font-dosis font-semibold text-[20px] leading-[30px] tracking-[-0.1px] text-white flex items-center justify-center">14</div>
                        <p className="font-dosis font-semibold text-[16px] leading-6 tracking-[-0.1px] text-[#202435]">:</p>
                        <div className="w-12 h-12 rounded-[7px] bg-[#ED174A] opacity-100 font-dosis font-semibold text-[20px] leading-[30px] tracking-[-0.1px] text-white flex items-center justify-center">41</div>
                        <p className="font-dosis font-semibold text-[16px] leading-6 tracking-[-0.1px] text-[#202435]">:</p>
                        <div className="w-12 h-12 rounded-[7px] bg-[#ED174A] opacity-100 font-dosis font-semibold text-[20px] leading-[30px] tracking-[-0.1px] text-white flex items-center justify-center">11</div>
                    </div>

                    <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] text-[#C2C2D3]">Remains until the end of the offer</p>

                    <div className="my-5">
                        <div className="w-full lg:w-[350px] h-[200px] lg:h-[314.53px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] text-sm p-3">
                            <div className="w-[70px] h-[70px] rounded-[35px] bg-[#ED174A] flex items-center justify-center opacity-100 font-dosis font-semibold text-[24px] leading-9 tracking-[-0.1px] text-white">18%</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <h1 className="font-dosis font-semibold text-[20.4px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$5.49</h1>
                        <h1 className="font-dosis font-semibold text-[24px] leading-9 tracking-[-0.1px] text-[#D51243]">$4.49</h1>
                    </div>

                    <h1 className="font-inter font-medium text-[18px] leading-[25.2px] mt-2 mb-3 text-[#202435] w-full lg:w-[277.17px] h-auto lg:h-[46.19px] rotate-0 opacity-100">Chobani Complete Vanilla Greek Yogurt</h1>

                    <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase text-[#00B853]">79 in stock</p>

                    <div className="mt-4 flex items-center gap-2">
                        <div className="flex flex-row gap-0.5">
                            <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                            <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                            <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                            <i className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>
                            <i className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>
                        </div>
                        <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                    </div>

                    <h1 className="font-dosis font-semibold text-[11px] mt-7 leading-[16.5px] tracking-[-0.1px] uppercase text-right text-[#C2C2D3]">Available: <span className="font-dosis font-semibold text-[16px] leading-6 tracking-[-0.1px] uppercase text-right text-[#233A95]"> 79</span> </h1>
                    <div className="flex justify-center mt-2">
                        <div className="w-full lg:w-[280.69px] h-2.5 rounded-l-xl opacity-100 bg-linear-to-r from-[#D51243] via-[#FF6048] to-[#FFCD00]"></div>
                        <div className="w-[60px] h-2.5 rounded-r-xl opacity-100 bg-[#EDEEF5]"></div>
                    </div>
                </div>

                {/* Product grid */}
                <div className="w-full lg:w-auto">
                    {/* First row */}
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border border-[#EDEEF5] border-solid p-5">
                            <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">22%</div>
                            </div>
                            <h1 className="w-full lg:w-[153.86px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">All Natural Italian-Style Chicken Meatballs</h1>
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
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$5.49</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$4.49</h1>
                            </div>
                        </div>

                        <div className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border-t lg:border-t lg:border-r lg:border-b border-[#EDEEF5] border-solid p-5">
                            <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">23%</div>
                            </div>
                            <h1 className="w-full lg:w-[207.92px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Angie's Boomchickapop Sweet & Salty Kettle Corn</h1>
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
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$4.29</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$3.29</h1>
                            </div>
                        </div>

                        <div className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border-t lg:border-r lg:border-t lg:border-b border-[#EDEEF5] border-solid p-5">
                            <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">19%</div>
                            </div>
                            <h1 className="w-full lg:w-[167.44px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Field Roast Chao Cheese Creamy Original</h1>
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
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$24.00</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$19.50</h1>
                            </div>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border-t lg:border-r lg:border-l lg:border-b border-[#EDEEF5] border-solid p-5">
                            <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]"></div>
                            <h1 className="w-full lg:w-[191.62px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Foster Farms Takeout Crispy Classic Buffalo Wings</h1>
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
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$49.99</h1>
                            </div>
                        </div>

                        <div className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border-t lg:border-r lg:border-b border-[#EDEEF5] border-solid p-5">
                            <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]"></div>
                            <h1 className="w-full lg:w-[204.26px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Blue Diamond Almonds Lightly Salted</h1>
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
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$11.68</h1>
                            </div>
                        </div>

                        <div className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border-t lg:border-r lg:border-b border-[#EDEEF5] border-solid p-5">
                            <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                                <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">11%</div>
                            </div>
                            <h1 className="w-full lg:w-[204.26px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Blueberries – 1 Pint Package</h1>
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
                                <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$4.49</h1>
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$3.99</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </>
}
