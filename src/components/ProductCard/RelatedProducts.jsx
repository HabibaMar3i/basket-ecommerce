import React from "react";
import { Button, useDisclosure } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useProductById } from "../../hooks/uesGetProductId";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useCart } from "../../hooks/uesCart";

export default function RelatedProducts({ products }) {
  const { addToCart } = useCart();

  // Modal state
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();

  const { fetchProductById, productById } = useProductById();

  const handleOpenModal = async (id) => {
    await fetchProductById(id);
    onModalOpen();
  };

  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-xl font-bold mb-4 text-start text-[#000000]">
        Related Products
      </h2>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        // pagination={{ clickable: true }}
        breakpoints={{
          300: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper p-3"
      >
        {products.map((product, i) => {
          return (
            <SwiperSlide
              key={product._id || i}
              onClick={() => handleOpenModal(product._id)}
            >
              <div className="relatedProducts shadow-md p-4 rounded-sm relative flex h-[335px] flex-wrap flex-col  itmes-center">
                {/* 
                        sale or not
                          */}
                {product.salePrice ? (
                  <div className="percentage absolute top-[20px] bg-[#35AFA0] text-[#fff] px-2 py-1 rounded-lg text-xs font-semibold ">
                    On Sale
                  </div>
                ) : (
                  ""
                )}
                {/* 
                          img products
                          */}
                <div className="imgProdct flex  items-center justify-center">
                  <img
                    src={product.Image.url}
                    className="w-[200px] h-[200px]"
                    alt=""
                  />
                </div>
                {/* 
          Price
          */}
                <div className="mt-1">
                  {product.salePrice ? (
                    <div className="discount_price flex gap-2 items-center">
                      <span
                        className="font-semibold
                            text-base
                            text-[#000000]"
                      >
                        ${product.salePrice}
                      </span>
                      <span
                        className="
                            font-semibold
                            text-base
                            line-through
                            text-black/70
                            "
                      >
                        ${product.Price}
                      </span>
                    </div>
                  ) : (
                    <span
                      className="font-semibold
                            text-lg
                            text-[#000000]"
                    >
                      ${product.Price}
                    </span>
                  )}
                </div>
                {/* 
        Title
        */}
                <div className="title  my-1">
                  <p className="text-[15px] font-normal text-[#000000]">
                    {product.Name}
                  </p>
                </div>
                <div className="count">
                  <p className="text-sm text-[#595959] font-normal">1 Bag</p>
                </div>
                {/* 
        Add to cart btn
        */}
                <div className="">
                  <Button
                    className="bg-[#35AFA0] w-[40px] h-[40px]  text-white rounded-[50%] right-[10px] top-[180px] shadow-none absolute"
                    isIconOnly
                    onPress={() => {
                      addToCart(product);
                    }}
                    disabled={product.available !== "InStock"}
                  >
                    {product.available === "InStock" ? (
                      <i class="fa-solid fa-plus"></i>
                    ) : (
                      <i class="fa-solid fa-eye"></i>
                    )}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <ProductDetails
          isOpen={isModalOpen}
          product={productById}
          onOpenChange={onModalOpenChange}
        />
      </Swiper>
    </div>
  );
}
