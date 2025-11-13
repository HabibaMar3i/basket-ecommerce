import { useContext } from "react";
import { offerContext } from "../context/offerContext";

export default function DiscountSection() {
    let { offer, loading, error } = useContext(offerContext);



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

    // Function to generate discount percentage
    const getDiscountPercentage = (index) => {
        const discounts = [25, 30, 0, 20, 20];
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
                <div className="w-full lg:w-[1170px] mb-10 h-16 rounded-[7px] bg-[#FBEACF] opacity-100 flex items-center justify-center mx-auto">
                    <h1 className="font-inter font-bold text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase text-[#202435] px-4 lg:px-0">
                        Loading offers...
                    </h1>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="mt-10">
                <div className="w-full lg:w-[1170px] mb-10 h-16 rounded-[7px] bg-red-100 opacity-100 flex items-center justify-center mx-auto">
                    <h1 className="font-inter font-bold text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase text-red-600 px-4 lg:px-0">
                        Error: {error}
                    </h1>
                </div>
            </section>
        );
    }

    // If no offers data
    if (!offer || !offer.length) {
        return (
            <section className="mt-10">
                <div className="w-full lg:w-[1170px] mb-10 h-16 rounded-[7px] bg-[#FBEACF] opacity-100 flex items-center justify-center mx-auto">
                    <h1 className="font-inter font-bold text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase text-[#202435] px-4 lg:px-0">
                        No offers available
                    </h1>
                </div>
            </section>
        );
    }

    return (
        <section className="mt-10">
            {/* title */}
            <div className="w-full lg:w-[1170px] mb-10 h-16 rounded-[7px] bg-[#FBEACF] opacity-100 flex items-center justify-center mx-auto">
                <h1 className="font-inter font-bold text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase text-[#202435] px-4 lg:px-0">Super discount for your <span className="font-inter font-black text-[14px] lg:text-[16px] leading-6 tracking-[2px] lg:tracking-[4px] text-center uppercase">first purchase.</span></h1>
            </div>

            {/* Mobile and Tablet Grid */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                {offer.map((product, index) => {
                    const discountPercentage = getDiscountPercentage(index);
                    const originalPrice = getOriginalPrice(product.Price, discountPercentage);

                    return (
                        <div key={product._id} className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-4">
                            <div
                                className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative bg-cover bg-center"
                                style={{ backgroundImage: `url(${product.Image.url})` }}
                            >
                                {discountPercentage > 0 && (
                                    <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">
                                        {discountPercentage}%
                                    </div>
                                )}
                            </div>
                            <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">
                                {product.Name}
                            </h1>
                            <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">
                                {product.available === "InStock" ? "In stock" : "Out of stock"}
                            </p>
                            <div className="mt-4 mb-1 flex items-center gap-2">
                                <div className="flex flex-row gap-0.5">
                                    {renderStars(product.review)}
                                </div>
                                <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">
                                    {product.review} review{product.review !== 1 ? 's' : ''}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                {originalPrice && (
                                    <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">
                                        {originalPrice}
                                    </h1>
                                )}
                                <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">
                                    ${product.Price.toFixed(2)}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Original horizontal layout for large screens */}
            <div className="hidden lg:block">
                {/* First Row */}
                <div className="flex">
                    {offer.slice(0, 5).map((product, index) => {
                        const discountPercentage = getDiscountPercentage(index);
                        const originalPrice = getOriginalPrice(product.Price, discountPercentage);

                        return (
                            <div key={product._id} className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border border-[#EDEEF5] border-solid px-3 py-4">
                                <div
                                    className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${product.Image.url})` }}
                                >
                                    {discountPercentage > 0 && (
                                        <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">
                                            {discountPercentage}%
                                        </div>
                                    )}
                                </div>
                                <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">
                                    {product.Name}
                                </h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">
                                    {product.available === "InStock" ? "In stock" : "Out of stock"}
                                </p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        {renderStars(product.review)}
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">
                                        {product.review} review{product.review !== 1 ? 's' : ''}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {originalPrice && (
                                        <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">
                                            {originalPrice}
                                        </h1>
                                    )}
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">
                                        ${product.Price.toFixed(2)}
                                    </h1>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Second Row */}
                <div className="flex">
                    {offer.slice(0, 5).map((product, index) => {
                        const discountPercentage = getDiscountPercentage(index);
                        const originalPrice = getOriginalPrice(product.Price, discountPercentage);

                        return (
                            <div key={`${product._id}-second`} className="w-full lg:w-[234px] h-auto lg:h-[374.5199890136719px] opacity-100 border border-[#EDEEF5] border-solid px-3 py-4">
                                <div
                                    className="w-full lg:w-[209px] h-[150px] lg:h-[187.81px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${product.Image.url})` }}
                                >
                                    {discountPercentage > 0 && (
                                        <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center">
                                            {discountPercentage}%
                                        </div>
                                    )}
                                </div>
                                <h1 className="w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435]">
                                    {product.Name}
                                </h1>
                                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">
                                    {product.available === "InStock" ? "In stock" : "Out of stock"}
                                </p>
                                <div className="mt-4 mb-1 flex items-center gap-2">
                                    <div className="flex flex-row gap-0.5">
                                        {renderStars(product.review)}
                                    </div>
                                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">
                                        {product.review} review{product.review !== 1 ? 's' : ''}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {originalPrice && (
                                        <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">
                                            {originalPrice}
                                        </h1>
                                    )}
                                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">
                                        ${product.Price.toFixed(2)}
                                    </h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}