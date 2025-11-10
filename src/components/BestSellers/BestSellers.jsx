import React from 'react'
import { Link } from "react-router-dom";

export default function BestSellers() {
    return <>
        <section className="mt-10">
            {/* title */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-dosis font-semibold text-[20px] leading-6 tracking-[0] uppercase text-[#202435]"> Best Sellers</h1>
                    <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#9B9BB4]">Do not miss the current offers until the end of March.</p>
                </div>
                <Link to={'/shop'}>
                    <button className="w-[112.3px] h-[34px] rounded-[30px] border border-[#D9D9E9] opacity-100 font-inter font-medium text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#9B9BB4] flex items-center justify-center gap-2 cursor-pointer me-7 transition-all duration-300 hover:bg-[#EDEEF5] hover:text-[#555770] hover:border-[#EDEEF5]">
                        View All <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </Link>
            </div>
            {/* products */}
            <div className="mt-10 relative">
                <div className="hidden lg:block w-10 h-10 rounded-[20px] border border-[#EDEEF5] bg-[#FFFFFF] opacity-100 shadow-[0px_2px_4px_0px_#00000012] absolute top-57 -left-7 cursor-pointer items-center justify-center">
                    <i className="fa-solid fa-angle-left text-4xl"></i>
                </div>

                {/* Grid for mobile and tablet */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Product 1 */}
                    <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-5">
                        <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative">
                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">22%</div>
                        </div>
                        <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">All Natural Italian-Style Chicken Meatballs</h1>
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
                            <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$9.35</h1>
                            <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$7.25</h1>
                        </div>
                        <button className="w-full h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>

                    {/* Product 2 */}
                    <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-5">
                        <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative">
                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">23%</div>
                        </div>
                        <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Angie's Boomchickapop Sweet & Salty Kettle Corn</h1>
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
                        <button className="w-full h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>

                    {/* Product 3 */}
                    <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-5">
                        <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative">
                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">19%</div>
                        </div>
                        <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Field Roast Chao Cheese Creamy Original</h1>
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
                        <button className="w-full h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>

                    {/* Product 4 */}
                    <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-5">
                        <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]"></div>
                        <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Blue Diamond Almonds Lightly Salted</h1>
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
                        <button className="w-full h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>
                </div>

                {/* Original horizontal layout for large screens */}
                <div className="hidden lg:flex relative">
                    <div className="w-full lg:w-[235px] h-auto lg:h-[429.4100036621094px] opacity-100 border border-[#EDEEF5] border-solid p-5">
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
                            <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$9.35</h1>
                            <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$7.25</h1>
                        </div>
                        <button className="w-[194px] h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>

                    <div className="w-full lg:w-[235px] h-auto lg:h-[429.4100036621094px] opacity-100 border-t border-r border-b border-[#EDEEF5] border-solid p-5">
                        <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">23%</div>
                        </div>
                        <h1 className="w-full lg:w-[171.2953643798828px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Angie's Boomchickapop
                            Sweet & Salty Kettle Corn</h1>
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
                        <button className="w-[194px] h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>

                    <div className="w-full lg:w-[235px] h-auto lg:h-[429.4100036621094px] opacity-100 border-t border-r border-b border-[#EDEEF5] border-solid p-5">
                        <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">19%</div>
                        </div>
                        <h1 className="w-full lg:w-[167.4397735595703px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Field Roast Chao Cheese
                            Creamy Original
                        </h1>
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
                        <button className="w-[194px] h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>

                    <div className="w-full lg:w-[235px] h-auto lg:h-[429.4100036621094px] opacity-100 border-t border-r border-b border-[#EDEEF5] border-solid p-5">
                        <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                        </div>
                        <h1 className="w-full lg:w-[167.4397735595703px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Blue Diamond Almonds
                            Lightly Salted
                        </h1>
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
                        <button className="w-[194px] h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>

                    <div className="w-full lg:w-[235px] h-auto lg:h-[429.4100036621094px] opacity-100 border-t border-r border-b border-[#EDEEF5] border-solid p-5">
                        <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4]">
                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">14%</div>
                        </div>
                        <h1 className="w-full lg:w-[187.94175720214844px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">Nestle Original Coffee-Mate
                            Coffee Creamer</h1>
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
                            <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">$13.99</h1>
                            <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">$11.99</h1>
                        </div>
                        <button className="w-[194px] h-[34px] rounded-[30px] border border-transparent mt-2 bg-[#FFCD00] text-[#202435] text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition duration-300 hover:bg-[#e6ba00] cursor-pointer">Add to cart</button>
                    </div>
                </div>

                <div className="hidden lg:block w-10 h-10 rounded-[20px] border border-[#EDEEF5] bg-[#FFFFFF] opacity-100 shadow-[0px_2px_4px_0px_#00000012] absolute top-57 right-0 cursor-pointer items-center justify-center">
                    <i className="fa-solid fa-angle-right text-4xl"></i>
                </div>
            </div>
        </section>
    </>
}
