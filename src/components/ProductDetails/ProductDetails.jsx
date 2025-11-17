import {
  Button,
  Card,
  CardBody,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@heroui/react";
import RelatedProducts from "../ProductCard/RelatedProducts";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../hooks/uesCart";
import { useWishlist } from "../../hooks/uesWishlist";
import { useEffect } from "react";

export default function ProductDetails({ isOpen, onOpenChange, product }) {
  const { products } = useProducts();
  const { addToWishlist, getWishlist, wishlist } = useWishlist();
  //
  useEffect(() => {
    getWishlist();
  }, []);
  //
  const getRelatedProducts = () => {
    if (!products || !product) return [];

    return products.filter(
      (p) =>
        p._id !== product._id && p.categoryId?.name === product.categoryId?.name
    );
  };

  const relatedProducts = getRelatedProducts();
  console.log(relatedProducts);

  const { addToCart, decreaseQuantity, getProductQuantityInCart } = useCart();
  const quantity = getProductQuantityInCart(product?._id);
  // test
  console.log(wishlist);
  return (
    <div>
      <Modal
        className="h-dvh overflow-y-scroll"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="p-5">
                  <div className="grid grid-cols-12 gap-4">
                    {/* 
                    Slider img
                    */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-7 sm:col-span-12">
                      <div className="flex gap-5">
                        <div className=""></div>
                        <div className="relative flex-1 flex items-center justify-center">
                          <Card className="w-full h-[400px] flex items-center justify-center rounded-sm shadow-none border-[1px] border-[#E7ECF0]">
                            <CardBody className="flex items-center justify-center ">
                              <Image
                                src={product?.Image?.url ?? ""}
                                alt="Main Image"
                                className="object-contain max-h-[350px]"
                                radius="none"
                              />
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>
                    {/* 
                    Product 
                    */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 sm:col-span-12">
                      {/* name  & price */}

                      <div className="">
                        <h3 className="text-2xl font-medium text-[#000000]">
                          {product?.Name}
                        </h3>
                        <h3 className="text-2xl mt-5 font-medium text-[#000000]">
                          ${product?.Price}
                        </h3>
                      </div>
                      {/* 
                        Sizes
                        */}
                      <div className="">
                        <p className="">Avilable :</p>
                        <div className="mt-2 flex gap-2">
                          <span className=" p-[5px] border-[1px] border-[#E7ECF0] rounded-sm ">
                            Small
                          </span>
                          <span className="p-[5px] border-[1px] border-[#E7ECF0] rounded-sm ">
                            {" "}
                            Medium{" "}
                          </span>
                          <span className="p-[5px] border-[1px] border-[#E7ECF0] rounded-sm ">
                            {" "}
                            Large{" "}
                          </span>
                        </div>
                      </div>
                      {/* 
                        Add to cart
                        */}
                      <div className="addToCart ">
                        <div
                          className="flex my-3
                         justify-evenly items-center w-full mt-5 bg-[#F3F5F9] h-[50px]"
                        >
                          <Button
                            className="w-[40px] h-[40px] rounded-sm bg-[transparent]"
                            onPress={() => {
                              decreaseQuantity(product._id);
                            }}
                            isDisabled={quantity === 0}
                          >
                            {/* minus  */}
                            <div className="mins">
                              <i class="fa-solid fa-minus"></i>
                            </div>
                          </Button>
                          {/* count */}
                          <div className="num text-lg font-semibold">
                            {quantity}
                          </div>
                          <Button
                            className="w-[40px] h-[40px] rounded-sm bg-[transparent]"
                            onPress={() => {
                              addToCart(product);
                            }}
                          >
                            {/* pls  */}
                            <div className="pls">
                              <i class="fa-solid fa-plus"></i>
                            </div>
                          </Button>
                        </div>
                        <div className="">
                          <Button
                            className="w-full  bg-[#35AFA0] text-[#fff] "
                            radius="sm"
                            isLoading={false}
                            onPress={() => {
                              addToCart(product);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="34"
                              height="22"
                              viewBox="0 0 34 22"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_49_1614)">
                                <mask
                                  id="mask0_49_1614"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="22"
                                  height="22"
                                >
                                  <path d="M22 0H0V22H22V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_49_1614)">
                                  <path
                                    d="M19.7998 19.0172L18.5401 4.8319C18.5131 4.51697 18.2477 4.27853 17.9373 4.27853H15.3458C15.3099 1.91207 13.3753 0 10.9998 0C8.62435 0 6.68979 1.91207 6.6538 4.27853H4.06239C3.74746 4.27853 3.48652 4.51697 3.45953 4.8319L2.19981 19.0172C2.19981 19.0352 2.19531 19.0532 2.19531 19.0712C2.19531 20.6863 3.67548 22 5.49756 22H16.5021C18.3242 22 19.8043 20.6863 19.8043 19.0712C19.8043 19.0532 19.8043 19.0352 19.7998 19.0172ZM10.9998 1.21472C12.7049 1.21472 14.0951 2.58241 14.1311 4.27853H7.86852C7.90452 2.58241 9.2947 1.21472 10.9998 1.21472ZM16.5021 20.7853H5.49756C4.35482 20.7853 3.42803 20.0294 3.41004 19.0982L4.61576 5.49775H6.6493V7.34233C6.6493 7.67975 6.91924 7.94969 7.25666 7.94969C7.59409 7.94969 7.86403 7.67975 7.86403 7.34233V5.49775H14.1311V7.34233C14.1311 7.67975 14.4011 7.94969 14.7385 7.94969C15.0759 7.94969 15.3458 7.67975 15.3458 7.34233V5.49775H17.3794L18.5896 19.0982C18.5716 20.0294 17.6403 20.7853 16.5021 20.7853Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="0.1"
                                  />
                                </g>
                              </g>
                              <defs></defs>
                            </svg>
                            Add to cart
                          </Button>
                        </div>
                      </div>
                      {/* 
                      Wishlist & Share
                      */}
                      <div className="flex gap-3 my-3">
                        <Button
                          className=" w-50 rounded-sm bg-[transparent] border-[1px] border-[#E7ECF0]"
                          onPress={() => addToWishlist(product._id)}
                        >
                          <i class="fa-regular fa-heart"></i>
                          Add to Wishlist
                        </Button>
                        <Button className="w-50 rounded-sm bg-[transparent] border-[1px] border-[#E7ECF0]">
                          <i class="fa-solid fa-share"></i>
                          Share
                        </Button>
                      </div>
                      {/* 
                      Tags : 
                      */}
                      <div className="flex my-3 gap-2 flex-col">
                        <p className="text-sm flex items-center gap-1 text-[#000]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="w-[20px] h-[20px]"
                          >
                            <g clip-path="url(#clip0_49_1652)">
                              <path
                                d="M17.125 1H12.3677C11.4662 1 10.6188 1.351 9.98123 1.98849L1.63974 10.33C1.22725 10.7425 1 11.2908 1 11.8765C1 12.4593 1.22725 13.0075 1.63974 13.42L6.58 18.3603C6.99249 18.7728 7.54075 19 8.12649 19C8.70924 19 9.2575 18.7728 9.66999 18.3603L18.0115 10.0188C18.649 9.38125 19 8.53374 19 7.63226V2.87499C19 1.8415 18.1585 1 17.125 1ZM18.25 7.63226C18.25 8.33352 17.977 8.99277 17.482 9.48777L9.13976 17.83C8.6005 18.3693 7.65476 18.373 7.111 17.83L2.17 12.889C1.89926 12.619 1.74999 12.259 1.74999 11.8735C1.74999 11.491 1.89923 11.131 2.17 10.8603L10.5115 2.51875C11.008 2.02301 11.6665 1.74999 12.3677 1.74999H17.125C17.7452 1.74999 18.25 2.25473 18.25 2.87499V7.63226Z"
                                fill="#999999"
                                stroke="#999999"
                                stroke-width="0.5"
                              />
                              <path
                                d="M14.875 3.25C13.8415 3.25 13 4.0915 13 5.12499C13 6.15848 13.8415 6.99998 14.875 6.99998C15.9085 6.99998 16.75 6.15851 16.75 5.12499C16.75 4.0915 15.9085 3.25 14.875 3.25ZM14.875 6.24999C14.2547 6.24999 13.75 5.74525 13.75 5.12499C13.75 4.50473 14.2547 3.99999 14.875 3.99999C15.4953 3.99999 16 4.50473 16 5.12499C16 5.74525 15.4952 6.24999 14.875 6.24999Z"
                                fill="#999999"
                                stroke="#999999"
                                stroke-width="0.5"
                              />
                            </g>
                            <defs></defs>
                          </svg>
                          Category :
                        </p>
                        <div className="">
                          <span className="py-1 m-0.5 px-2 rounded-sm bg-[transparent] border-[1px] border-[#E7ECF0] ">
                            {product?.categoryId?.name}
                          </span>
                        </div>
                      </div>
                      {/* 
                      Product Description
                      */}
                      <div className="mt-3 flex flex-col gap-2">
                        <p className="text-base font-semibold text-[#000]">
                          Product Details:
                        </p>
                        <p className="text-[#595959]">
                          Sugar, Unbleached Enriched Flour (Wheat Flour, Niacin,
                          Reduced Iron, Thiamine Mononitrate Vitamin B1 ,
                          Riboflavin Vitamin B2 , Folic Acid), Palm and/or
                          Canola Oil, Cocoa (Processed with Alkali), High
                          Fructose Corn Syrup, Leavening (Baking Soda and/or
                          Calcium Phosphate), Cornstarch, Salt,...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <RelatedProducts products={relatedProducts} />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
