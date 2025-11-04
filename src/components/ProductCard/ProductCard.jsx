import { Button } from "@heroui/react";
import { useLocation } from "react-router-dom";

export default function ProductCard({ product }) {
  const location = useLocation();

  return (
    <div>
      <div className="cardProdcutsShop border-[1px] border-[#EDEEF5] p-5 relative">
        {/* 
                          percentage sale
                          */}
        {product.salePrice ? (
          <div className="percentage absolute bg-[#35AFA0] text-[#fff] px-2 py-1 rounded-lg text-xs font-semibold ">
            {Math.round(
              ((product.originalPrice - product.salePrice) /
                product.originalPrice) *
                100
            )}
            %
          </div>
        ) : (
          ""
        )}
        {/* 
                          img products
                          */}
        <div className="imgProdct flex  items-center justify-center">
          <img src={product.image} alt="" />
        </div>
        <div className="title h-[40px] my-2">
          <p className="text-sm font-medium text-[#202435]">{product.name}</p>
        </div>
        <div className="stokOrNo">
          {
            <p
              className={`${
                product.status === "IN STOCK"
                  ? "text-[#00B853]"
                  : "text-red-300"
              }
                            font-semibold
                            text-xs
                            `}
            >
              {" "}
              {product.status}{" "}
            </p>
          }
        </div>
        {/* 
                           Rating 
                           */}
        <div className="flex gap-2  mt-4">
          <div className="">
            {[...Array(5)].map((_, i) => {
              const value = i + 1;
              return (
                <i
                  key={value}
                  className={`w-[10px] h-[10px] ${
                    value <= Math.floor(product.stars)
                      ? "fas fa-star text-[#FFCD00]"
                      : value - product.stars < 1
                      ? "fas fa-star-half-alt text-[#FFCD00]"
                      : "far fa-star text-gray-300"
                  }`}
                ></i>
              );
            })}
          </div>
          <span
            className="font-semibold
                            text-xs
                            text-[#71778E]"
          >
            {" "}
            {product.reviews} review
          </span>
        </div>
        {/* 
                           Price
                           */}
        <div className="mt-2">
          {product.salePrice ? (
            <div className="discount_price flex gap-2 items-center">
              <span
                className="
                            font-semibold
                            text-base
                            line-through
                            text-[#C2C2D3]
                            "
              >
                ${product.originalPrice}
              </span>
              <span
                className="font-semibold
                            text-lg
                            text-[#D51243]"
              >
                ${product.salePrice}
              </span>
            </div>
          ) : (
            <span
              className="font-semibold
                            text-lg
                            text-[#D51243]"
            >
              ${product.originalPrice}
            </span>
          )}
        </div>
        {/* 
                          add to cart
                          */}
        {location.pathname === "/shop" ? (
          <div className=" flex justify-between  items-center mt-5">
            <Button
              className="bg-[#EDEEF5] min-w-[35px] h-[35px] rounded-l-lg "
              variant="light"
              radius="none"
              isDisabled={true}
            >
              -
            </Button>

            <span
              className="border-y-1 border-[#EDEEF5] text-[#202435] text-sm font-normal 
                        h-[35px]
                        w-full
                        flex
                        justify-center
                          items-center
                        "
            >
              {" "}
              0{" "}
            </span>
            <Button
              className="bg-[#FFCD00] min-w-[35px] h-[35px] rounded-r-lg"
              variant="light"
              radius="none"
            >
              +
            </Button>
          </div>
        ) : (
          <Button
            className="bg-[#FFCD00] w-full mt-5 h-[35px] rounded-2xl"
            variant="light"
            radius="none"
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}
