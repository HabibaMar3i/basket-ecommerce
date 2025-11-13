import React from 'react';
import { useCategories } from '../../hooks/uesCategories';

export default function Category() {
    const { categories: category } = useCategories();

    return (
        <>
            {/* category section */}
            <section className="flex flex-col lg:flex-row">
                {category && category.length > 0 ? (
                    <>
                        {/* First big card */}
                        <div className="w-full lg:w-[233.59px] h-[290.39px] border border-[#E4E5EE] opacity-100 rotate-0 flex flex-col items-center justify-center mb-4 lg:mb-0">
                            {/* image placeholder */}
                            <div className="w-[192.59px] h-[192.59px] bg-[#F3F4F6] rounded-md flex items-center justify-center text-[#9B9BB4] text-sm overflow-hidden">
                                {category[0]?.Image?.url ? (
                                    <img
                                        src={category[0].Image.url}
                                        alt={category[0]?.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </div>
                            <div className="mt-5">
                                <h1 className="font-Inter font-semibold text-[14px] leading-[16.8px] text-center align-middle text-[#202435]">
                                    {category[0]?.name}
                                </h1>
                                <p className="font-Inter mt-2 font-light text-[12px] leading-[18px] tracking-[-0.1px] text-center align-middle text-[#202435]">
                                    11 Items
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <div className="flex flex-col lg:flex-row">
                                {category.slice(1, 5).map((cat) => (
                                    <div
                                        key={cat._id}
                                        className="w-full lg:w-[233.59px] h-[145.19px] border-[#E4E5EE] border lg:border-r lg:border-t lg:border-b opacity-100 rotate-0 flex gap-7 px-7 py-8"
                                    >
                                        <div className="w-[70px] h-[70px] bg-[#F3F4F6] rounded-md flex items-center justify-center text-[#9B9BB4] text-sm overflow-hidden">
                                            {cat.Image?.url ? (
                                                <img
                                                    src={cat.Image.url}
                                                    alt={cat.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                        </div>
                                        <div>
                                            <h1 className="w-[66.5px] mt-2 h-[33.79px] font-inter font-semibold text-[14px] leading-[16.8px] align-middle text-[#202435] opacity-100 rotate-0">
                                                {cat.name}
                                            </h1>
                                            <p className="font-inter font-light mt-3 text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#202435]">
                                                6 Items
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col lg:flex-row">
                                {category.slice(5, 9).map((cat) => (
                                    <div
                                        key={cat._id}
                                        className="w-full lg:w-[233.59px] h-[145.19px] border-[#E4E5EE] border lg:border-r lg:border-t lg:border-b opacity-100 rotate-0 flex gap-7 px-7 py-8"
                                    >
                                        <div className="w-[70px] h-[70px] bg-[#F3F4F6] rounded-md flex items-center justify-center text-[#9B9BB4] text-sm overflow-hidden">
                                            {cat.Image?.url ? (
                                                <img
                                                    src={cat.Image.url}
                                                    alt={cat.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                        </div>
                                        <div>
                                            <h1 className="w-[66.5px] mt-2 h-[33.79px] font-inter font-semibold text-[14px] leading-[16.8px] align-middle text-[#202435] opacity-100 rotate-0">
                                                {cat.name}
                                            </h1>
                                            <p className="font-inter font-light mt-3 text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#202435]">
                                                6 Items
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center w-full py-10 text-[#9B9BB4]">Loading categories...</p>
                )}
            </section>
        </>
    );
}
