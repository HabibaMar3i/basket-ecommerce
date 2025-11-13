import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { offerContext } from '../context/offerContext';
import { GetProductByIdContext } from '../context/contexts'; // Import the context
import ProductDetails from '../ProductDetails/ProductDetails'; // Import ProductDetails modal
import { useDisclosure } from "@heroui/react"; // Import useDisclosure from HeroUI

export default function Deals() {
    const { offerWeek, loading, error } = useContext(offerContext);
    const { fetchProductById, productById } = useContext(GetProductByIdContext); // Get the fetch function
    const { isOpen, onOpen, onOpenChange } = useDisclosure(); // Modal state

    // Function to handle product click
    const handleProductClick = async (productId) => {
        await fetchProductById(productId); // Fetch product details
        onOpen(); // Open modal
    };

    // Function to generate star ratings based on review count
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fa-solid fa-star text-[9px] text-[#FFCD00]"></i>);
        }

        const remainingStars = 5 - fullStars;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<i key={`empty-${i}`} className="fa-regular fa-star text-[9px] text-[#FFCD00]"></i>);
        }

        return stars;
    };

    // Function to generate discount percentage (using your existing pattern)
    const getDiscountPercentage = (index) => {
        const discounts = [22, 23, 19, 0, 0, 14];
        return discounts[index % discounts.length];
    };

    // Function to generate original price
    const getOriginalPrice = (currentPrice, discountPercentage) => {
        if (discountPercentage === 0) return null;
        const originalPrice = (currentPrice / (1 - discountPercentage / 100)).toFixed(2);
        return `$${originalPrice}`;
    };

    // Loading state
    if (loading) {
        return (
            <section className="mt-10">
                <section className="flex flex-col lg:flex-row gap-4 lg:gap-7">
                    {/* Loading skeleton for featured product card */}
                    <div className="w-full lg:w-[390px] h-auto lg:h-[777.78px] rounded-[7px] border-2 border-[#ED174A] opacity-100 p-5">
                        <div className="w-32 h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="flex items-center gap-1 my-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="w-12 h-12 rounded-[7px] bg-gray-200"></div>
                            ))}
                        </div>
                        <div className="w-40 h-4 bg-gray-200 rounded mb-5"></div>
                        <div className="my-5">
                            <div className="w-full lg:w-[350px] h-[200px] lg:h-[314.53px] bg-gray-200 rounded-md"></div>
                        </div>
                        <div className="w-24 h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="w-48 h-6 bg-gray-200 rounded mb-3"></div>
                        <div className="w-20 h-4 bg-gray-200 rounded mb-4"></div>
                        <div className="w-32 h-4 bg-gray-200 rounded mb-7"></div>
                        <div className="w-40 h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="flex justify-center mt-2">
                            <div className="w-full lg:w-[280.69px] h-2.5 rounded-l-xl bg-gray-200"></div>
                            <div className="w-[60px] h-2.5 rounded-r-xl bg-gray-300"></div>
                        </div>
                    </div>

                    {/* Loading skeleton for product grid */}
                    <div className="w-full lg:w-auto">
                        {[1, 2].map((row) => (
                            <div key={row} className="flex flex-col lg:flex-row">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border border-[#EDEEF5] border-solid p-5">
                                        <div className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-gray-200 rounded-md"></div>
                                        <div className="w-32 h-4 bg-gray-200 rounded mt-5 mb-2"></div>
                                        <div className="w-16 h-3 bg-gray-200 rounded mb-4"></div>
                                        <div className="w-24 h-4 bg-gray-200 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="mt-10">
                <div className="w-full lg:w-[1170px] mb-10 h-16 rounded-[7px] bg-red-100 opacity-100 flex items-center justify-center mx-auto">
                    <h1 className="font-inter font-bold text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase text-red-600 px-4 lg:px-0">
                        Error loading deals: {error}
                    </h1>
                </div>
            </section>
        );
    }

    // If no offerWeek data available
    if (!offerWeek || offerWeek.length === 0) {
        return (
            <section className="mt-10">
                <section className="flex flex-col lg:flex-row gap-4 lg:gap-7">
                    {/* No data message */}
                    <div className="w-full lg:w-[390px] h-auto lg:h-[777.78px] rounded-[7px] border-2 border-[#ED174A] opacity-100 p-5 flex items-center justify-center">
                        <h1 className="font-inter font-bold text-[16px] leading-6 text-center text-[#202435]">
                            No deals available at the moment
                        </h1>
                    </div>
                </section>
            </section>
        );
    }

    // Get the featured product (first product in offerWeek)
    const featuredProduct = offerWeek[0];
    // Get remaining products for the grid (products 2-7)
    const gridProducts = offerWeek.slice(1, 7);

    return <>
        <section className="mt-10">
            <section className="flex flex-col lg:flex-row gap-4 lg:gap-7">
                {/* Featured product card */}
                <div
                    className="w-full lg:w-[390px] h-auto lg:h-[777.78px] rounded-[7px] border-2 border-[#ED174A] opacity-100 p-5 cursor-pointer transition-transform hover:shadow-lg"
                    onClick={() => handleProductClick(featuredProduct._id)} // Add click handler
                >
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
                        <div
                            className="w-full lg:w-[350px] h-[200px] lg:h-[314.53px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] text-sm p-3 bg-cover bg-center"
                            style={{ backgroundImage: `url(${featuredProduct.Image?.url})` }}
                        >
                            <div className="w-[70px] h-[70px] rounded-[35px] bg-[#ED174A] flex items-center justify-center opacity-100 font-dosis font-semibold text-[24px] leading-9 tracking-[-0.1px] text-white">18%</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <h1 className="font-dosis font-semibold text-[20.4px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">
                            {getOriginalPrice(featuredProduct.Price, 18)}
                        </h1>
                        <h1 className="font-dosis font-semibold text-[24px] leading-9 tracking-[-0.1px] text-[#D51243]">
                            ${featuredProduct.Price?.toFixed(2)}
                        </h1>
                    </div>

                    <h1 className="font-inter font-medium text-[18px] leading-[25.2px] mt-2 mb-3 text-[#202435] w-full lg:w-[277.17px] h-auto lg:h-[46.19px] rotate-0 opacity-100">
                        {featuredProduct.Name}
                    </h1>

                    <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase text-[#00B853]">
                        {featuredProduct.available === "InStock" ? "In stock" : "Out of stock"}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                        <div className="flex flex-row gap-0.5">
                            {renderStars(featuredProduct.review || 4)}
                        </div>
                        <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">
                            {featuredProduct.review || 1} review{featuredProduct.review !== 1 ? 's' : ''}
                        </p>
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
                        {gridProducts.slice(0, 3).map((product, index) => {
                            const discountPercentage = getDiscountPercentage(index);
                            const originalPrice = getOriginalPrice(product.Price, discountPercentage);

                            return (
                                <div
                                    key={product._id}
                                    className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border border-[#EDEEF5] border-solid p-5 cursor-pointer transition-transform hover:shadow-lg"
                                    onClick={() => handleProductClick(product._id)} // Add click handler
                                >
                                    <div
                                        className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${product.Image?.url})` }}
                                    >
                                        {discountPercentage > 0 && (
                                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">
                                                {discountPercentage}%
                                            </div>
                                        )}
                                    </div>
                                    <h1 className="w-full lg:w-[153.86px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">
                                        {product.Name}
                                    </h1>
                                    <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">
                                        {product.available === "InStock" ? "In stock" : "Out of stock"}
                                    </p>
                                    <div className="mt-4 mb-1 flex items-center gap-2">
                                        <div className="flex flex-row gap-0.5">
                                            {renderStars(product.review || 4)}
                                        </div>
                                        <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">
                                            {product.review || 1} review{product.review !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {originalPrice && (
                                            <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">
                                                {originalPrice}
                                            </h1>
                                        )}
                                        <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">
                                            ${product.Price?.toFixed(2)}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Second row */}
                    <div className="flex flex-col lg:flex-row">
                        {gridProducts.slice(3, 6).map((product, index) => {
                            const discountPercentage = getDiscountPercentage(index + 3);
                            const originalPrice = getOriginalPrice(product.Price, discountPercentage);

                            return (
                                <div
                                    key={product._id}
                                    className="w-full lg:w-[250px] h-auto lg:h-[388.89px] opacity-100 border-t lg:border-r lg:border-l lg:border-b border-[#EDEEF5] border-solid p-5 cursor-pointer transition-transform hover:shadow-lg"
                                    onClick={() => handleProductClick(product._id)} // Add click handler
                                >
                                    <div
                                        className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${product.Image?.url})` }}
                                    >
                                        {discountPercentage > 0 && (
                                            <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">
                                                {discountPercentage}%
                                            </div>
                                        )}
                                    </div>
                                    <h1 className="w-full lg:w-[191.62px] h-auto lg:h-[36.6px] mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">
                                        {product.Name}
                                    </h1>
                                    <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">
                                        {product.available === "InStock" ? "In stock" : "Out of stock"}
                                    </p>
                                    <div className="mt-4 mb-1 flex items-center gap-2">
                                        <div className="flex flex-row gap-0.5">
                                            {renderStars(product.review || 4)}
                                        </div>
                                        <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">
                                            {product.review || 1} review{product.review !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {originalPrice && (
                                            <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">
                                                {originalPrice}
                                            </h1>
                                        )}
                                        <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">
                                            ${product.Price?.toFixed(2)}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Product Details Modal */}
            {productById && (
                <ProductDetails
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    product={productById}
                />
            )}
        </section>
    </>
}