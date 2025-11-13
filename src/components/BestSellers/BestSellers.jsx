import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { ProductContext } from '../context/productContext';
import { GetProductByIdContext, CartContext } from '../context/contexts';
import ProductDetails from '../ProductDetails/ProductDetails';
import { useDisclosure } from "@heroui/react";

export default function BestSellers() {
    const { bestSeller, loading } = useContext(ProductContext);
    const { fetchProductById, productById } = useContext(GetProductByIdContext);
    const { addToCart, cart } = useContext(CartContext); // Get cart to check if product is already added
    const [currentSlide, setCurrentSlide] = useState(0);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [addingProductId, setAddingProductId] = useState(null);
    const [addedProducts, setAddedProducts] = useState(new Set()); // Track recently added products
    const [isAnimating, setIsAnimating] = useState(false);

    // Function to handle product click
    const handleProductClick = async (productId) => {
        await fetchProductById(productId);
        onOpen();
    };

    // Function to handle add to cart
    const handleAddToCart = async (e, product) => {
        e.stopPropagation();

        setAddingProductId(product.productId);

        try {
            const cartProduct = {
                _id: product.productId,
                name: product.name,
                price: product.price,
                image: product.image,
            };

            addToCart(cartProduct);

            // Add to recently added set for visual feedback
            setAddedProducts(prev => new Set(prev).add(product.productId));

            // Remove from recently added set after 2 seconds
            setTimeout(() => {
                setAddedProducts(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(product.productId);
                    return newSet;
                });
            }, 2000);

        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setAddingProductId(null);
        }
    };

    // Check if product is in cart (for persistent state)
    const isProductInCart = (productId) => {
        return cart.some(item => item._id === productId);
    };

    // Check if product was recently added (for temporary visual feedback)
    const isProductRecentlyAdded = (productId) => {
        return addedProducts.has(productId);
    };

    // Function to generate star ratings
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
        const discounts = [22, 23, 19, 0, 14];
        return discounts[index % discounts.length];
    };

    // Function to generate original price
    const getOriginalPrice = (currentPrice, discountPercentage) => {
        if (discountPercentage === 0) return null;
        const originalPrice = (currentPrice / (1 - discountPercentage / 100)).toFixed(2);
        return `$${originalPrice}`;
    };

    // Create duplicated products for the slider
    const getSliderProducts = () => {
        if (!bestSeller || bestSeller.length === 0) return [];
        return [...bestSeller, ...bestSeller, ...bestSeller];
    };

    const sliderProducts = getSliderProducts();
    const productsPerSlide = 5;
    const totalSlides = Math.ceil(sliderProducts.length / productsPerSlide);

    // Smooth slider navigation functions
    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Get products for current slide
    const getCurrentSlideProducts = () => {
        const startIndex = currentSlide * productsPerSlide;
        return sliderProducts.slice(startIndex, startIndex + productsPerSlide);
    };

    const ProductCard = ({ product, index, isMobile = false }) => {
        if (!product) return null;

        const discountPercentage = getDiscountPercentage(index);
        const originalPrice = getOriginalPrice(product.price, discountPercentage);
        const isAdding = addingProductId === product.productId;
        const isInCart = isProductInCart(product.productId);
        const isRecentlyAdded = isProductRecentlyAdded(product.productId);

        // Determine button state and styling
        const getButtonState = () => {
            if (isAdding) {
                return {
                    text: 'Adding...',
                    bgColor: 'bg-[#FFCD00]',
                    textColor: 'text-[#202435]',
                    icon: 'fa-solid fa-spinner fa-spin'
                };
            }
            if (isInCart || isRecentlyAdded) {
                return {
                    text: 'Added to Cart',
                    bgColor: 'bg-[#00B853]',
                    textColor: 'text-white',
                    icon: 'fa-solid fa-check'
                };
            }
            return {
                text: 'Add to cart',
                bgColor: 'bg-[#FFCD00]',
                textColor: 'text-[#202435]',
                icon: 'fa-solid fa-cart-plus'
            };
        };

        const buttonState = getButtonState();

        return (
            <div
                className={`w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-5 cursor-pointer transition-transform hover:shadow-lg ${!isMobile ? 'lg:w-[235px] lg:h-[429.4100036621094px]' : ''}`}
                onClick={() => handleProductClick(product.productId)}
            >
                <div className={`w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative ${!isMobile ? 'lg:w-[209px] lg:h-[187.81px]' : ''}`}
                    style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {discountPercentage > 0 && (
                        <div className="w-[45.22px] h-6 rounded-sm bg-[#35AFA0] opacity-100 flex items-center justify-center font-dosis font-semibold text-[12px] leading-3 text-white uppercase text-center absolute top-2 left-2">
                            {discountPercentage}%
                        </div>
                    )}
                </div>
                <h1 className={`w-full h-auto mt-5 mb-2 opacity-100 flex items-center font-inter font-medium text-[14px] leading-[19.6px] text-[#202435] ${!isMobile ? 'lg:h-[36.6px]' : ''}`}>
                    {product.name}
                </h1>
                <p className="font-dosis font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase align-middle text-[#00B853]">In stock</p>
                <div className="mt-4 mb-1 flex items-center gap-2">
                    <div className="flex flex-row gap-0.5">
                        {renderStars(4)}
                    </div>
                    <p className="font-dosis font-semibold text-[13px] leading-[18.2px] tracking-[-0.1px] text-[#71778E]">1 review</p>
                </div>
                <div className="flex items-center gap-2">
                    {originalPrice && (
                        <h1 className="font-dosis font-semibold text-[15.3px] leading-[30.6px] tracking-[-0.1px] text-[#C2C2D3] line-through">
                            {originalPrice}
                        </h1>
                    )}
                    <h1 className="font-dosis font-semibold text-[18px] leading-9 tracking-[-0.1px] text-[#D51243]">
                        ${product.price.toFixed(2)}
                    </h1>
                </div>
                <button
                    className={`w-full h-[34px] rounded-[30px] border border-transparent mt-2 ${buttonState.bgColor} ${buttonState.textColor} text-center align-middle font-inter font-medium text-[12px] leading-[18px] tracking-[0%] opacity-100 transition-all duration-300 hover:opacity-90 cursor-pointer flex items-center justify-center gap-2 ${isAdding ? 'opacity-50 cursor-not-allowed' : ''
                        } ${!isMobile ? 'lg:w-[194px]' : ''}`}
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={isAdding}
                >
                    <i className={buttonState.icon}></i>
                    {buttonState.text}
                </button>
            </div>
        );
    };

    const LoadingSkeleton = () => (
        <div className="w-full h-auto opacity-100 border border-[#EDEEF5] border-solid p-5">
            <div className="w-full h-[150px] bg-[#F3F4F6] rounded-md text-[#9B9BB4] relative"></div>
            <div className="w-full h-4 bg-gray-200 rounded mt-5 mb-2"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
            <div className="mt-4 mb-1 flex items-center gap-2">
                <div className="flex flex-row gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-gray-200 rounded"></div>
                    ))}
                </div>
                <div className="w-12 h-3 bg-gray-200 rounded"></div>
            </div>
            <div className="w-20 h-6 bg-gray-200 rounded"></div>
            <div className="w-full h-8 bg-gray-200 rounded mt-2"></div>
        </div>
    );

    const SectionTitle = () => (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="font-dosis font-semibold text-[20px] leading-6 tracking-[0] uppercase text-[#202435]">Best Sellers</h1>
                <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#9B9BB4]">Do not miss the current offers until the end of March.</p>
            </div>
            <Link to={'/shop'}>
                <button className="w-[112.3px] h-[34px] rounded-[30px] border border-[#D9D9E9] opacity-100 font-inter font-medium text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#9B9BB4] flex items-center justify-center gap-2 cursor-pointer me-7 transition-all duration-300 hover:bg-[#EDEEF5] hover:text-[#555770] hover:border-[#EDEEF5]">
                    View All <i className="fa-solid fa-arrow-right"></i>
                </button>
            </Link>
        </div>
    );

    const NavigationArrows = () => (
        <>
            <div
                className={`hidden lg:flex w-10 h-10 rounded-[20px] border border-[#EDEEF5] bg-[#FFFFFF] opacity-100 shadow-[0px_2px_4px_0px_#00000012] absolute top-57 -left-7 cursor-pointer items-center justify-center z-10 transition-all duration-300 hover:bg-[#FFCD00] hover:border-[#FFCD00] hover:text-white ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
                onClick={prevSlide}
            >
                <i className="fa-solid fa-angle-left text-2xl"></i>
            </div>
            <div
                className={`hidden lg:flex w-10 h-10 rounded-[20px] border border-[#EDEEF5] bg-[#FFFFFF] opacity-100 shadow-[0px_2px_4px_0px_#00000012] absolute top-57 -right-6 cursor-pointer items-center justify-center z-10 transition-all duration-300 hover:bg-[#FFCD00] hover:border-[#FFCD00] hover:text-white ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
                onClick={nextSlide}
            >
                <i className="fa-solid fa-angle-right text-2xl"></i>
            </div>
        </>
    );

    // Loading state
    if (loading || !bestSeller) {
        return (
            <section className="mt-10">
                <SectionTitle />
                <div className="mt-10 relative">
                    <NavigationArrows />
                    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map(item => <LoadingSkeleton key={item} />)}
                    </div>
                    <div className="hidden lg:flex relative">
                        {[1, 2, 3, 4, 5].map(item => <LoadingSkeleton key={item} />)}
                    </div>
                </div>
            </section>
        );
    }

    const currentProducts = getCurrentSlideProducts();

    return (
        <section className="mt-10">
            <SectionTitle />
            <div className="mt-10 relative">
                <NavigationArrows />

                {/* Mobile/Tablet View */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {bestSeller.slice(0, 4).map((product, index) => (
                        <ProductCard
                            key={product.productId}
                            product={product}
                            index={index}
                            isMobile={true}
                        />
                    ))}
                </div>

                {/* Desktop View - Smooth Slider */}
                <div className="hidden lg:flex relative overflow-hidden">
                    <div
                        className="flex w-full justify-between transition-all duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="flex w-full justify-between shrink-0">
                                {sliderProducts.slice(
                                    slideIndex * productsPerSlide,
                                    slideIndex * productsPerSlide + productsPerSlide
                                ).map((product, index) => (
                                    <ProductCard
                                        key={`slide-${slideIndex}-${product.productId}-${index}`}
                                        product={product}
                                        index={index}
                                        isMobile={false}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Details Modal */}
            {productById && (
                <ProductDetails
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    product={productById}
                />
            )}
        </section>
    );
}