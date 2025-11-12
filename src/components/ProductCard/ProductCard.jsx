import { Button } from "@heroui/react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../hooks/uesCart";

export default function ProductCard({ product }) {
  const location = useLocation();
  const { cart, addToCart, decreaseQuantity } = useCart();

  const cartItem = cart.find((i) => i._id === product._id);

  return (
    <div className="cardProdcutsShop h-[380px] flex flex-col justify-between  border-[1px] border-[#EDEEF5] p-5 relative cursor-pointer">
      {/* Calc sale*/}
      {product.salePrice && (
        <div className="percentage absolute bg-[#35AFA0] text-white px-2 py-1 rounded-lg text-xs font-semibold top-2 left-2">
          {Math.round(
            ((product.originalPrice - product.salePrice) /
              product.originalPrice) *
              100
          )}
          %
        </div>
      )}

      {/* Img  */}
      <div className="imgProdct flex items-center justify-center h-[155px]">
        <img
          src={product.Image.url}
          alt={product.Name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Name  */}
      <p className="text-sm font-medium text-[#202435] my-2 line-clamp-2">
        {product.Name}
      </p>

      {/* Stock */}
      <p
        className={`text-xs font-semibold ${
          product.available === "InStock" ? "text-[#00B853]" : "text-red-400"
        }`}
      >
        {product.available === "InStock" ? "In Stock" : "Out of Stock"}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`text-[10px] ${
              i < Math.floor(product.stars)
                ? "fas fa-star text-[#FFCD00]"
                : i < product.stars
                ? "fas fa-star-half-alt text-[#FFCD00]"
                : "far fa-star text-gray-300"
            }`}
          />
        ))}
        <span className="text-xs text-[#71778E] ml-1">
          {product.review} review{product.review !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Price */}
      <div className="mt-2">
        {product.salePrice ? (
          <div className="flex items-center gap-2">
            <span className="text-base line-through text-[#C2C2D3]">
              ${product.Price}
            </span>
            <span className="text-lg font-semibold text-[#D51243]">
              ${product.salePrice}
            </span>
          </div>
        ) : (
          <span className="text-lg font-semibold text-[#D51243]">
            ${product.Price}
          </span>
        )}
      </div>

      {/* add to cart*/}
      {location.pathname === "/shop" && (
        <div className="flex justify-between items-center mt-4">
          <Button
            className="bg-[#EDEEF5] min-w-[35px] h-[35px] rounded-l-lg"
            variant="light"
            radius="none"
            onPress={() => {
              decreaseQuantity(product._id);
            }}
            isDisabled={!cartItem || cartItem.quantity === 0}
          >
            {/* minus  */}
            <i class="fa-solid fa-minus"></i>
          </Button>

          <span className="flex-1 h-[35px] flex items-center justify-center border-y border-[#EDEEF5] text-sm">
            {cartItem?.quantity || 0}
          </span>

          <Button
            className="bg-[#FFCD00] min-w-[35px] h-[35px] rounded-r-lg"
            variant="light"
            radius="none"
            onPress={() => {
              addToCart(product);
            }}
          >
            {/* plus */}
            <i class="fa-solid fa-plus"></i>
          </Button>
        </div>
      )}

      {location.pathname !== "/shop" && (
        <Button
          className="bg-[#FFCD00] w-full mt-4 h-[35px] rounded-2xl"
          variant="light"
          onPress={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
}
