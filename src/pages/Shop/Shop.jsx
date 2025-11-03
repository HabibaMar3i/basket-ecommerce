import {
  Button,
  Checkbox,
  CheckboxGroup,
  NumberInput,
  Select,
  SelectItem,
} from "@heroui/react";
import { useState } from "react";

export default function Shop() {
  const [sort, setSort] = useState("a-z");
  const handelSort = (value) => {
    setSort(value);
  };
  const categories = {
    productCategories: [
      {
        name: "Beverages",
      },
      {
        name: "Breads & Bakery",
      },
      {
        name: "Breakfast & Dairy",
      },
      {
        name: "Frozen Foods",
      },
      {
        name: "Fruits & Vegetables",
      },
      {
        name: "Grocery & Staples",
      },
      {
        name: "Household Needs",
      },
      {
        name: "Meats & Seafood",
      },
    ],
    brands: [
      {
        name: "Frito Lay",
        count: 8,
      },
      {
        name: "Quaker",
        count: 36,
      },
      {
        name: "Cola",
        count: 1,
      },
      {
        name: "Welch's",
        count: 1,
      },
      {
        name: "Oreo",
        count: 16,
      },
    ],
    itemInStock: {
      inStock: 62,
      outOfStock: 0,
    },
    sortBy: {
      options: [
        "Price: Low to High",
        "Price: High to Low",
        "Name: A to Z",
        "Name: Z to A",
        "Best Selling",
        "Newest",
      ],
    },
  };
  const products = [
    {
      name: "100% Butter French Croissants",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: "S144",
      originalPrice: 10,
      salePrice: null,
      reviews: 24,
      stars: 4.2,
    },
    {
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: null,
      originalPrice: 9.35,
      salePrice: 7.25,
      reviews: 156,
      stars: 4.7,
    },
    {
      name: "American Cheese Singles",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: null,
      originalPrice: 8.29,
      salePrice: 3.29,
      reviews: 89,
      stars: 3.9,
    },
    {
      name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: null,
      originalPrice: 4.29,
      salePrice: 3.29,
      reviews: 312,
      stars: 4.8,
    },
    {
      name: "Blue Diamond Almonds Lightly Salted",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: null,
      originalPrice: 11.68,
      salePrice: null,
      reviews: 67,
      stars: 4.1,
    },
    {
      name: "Blueberries – 1 Pint Package",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: null,
      originalPrice: 4.49,
      salePrice: 3.99,
      reviews: 203,
      stars: 4.5,
    },
    {
      name: "Canada Dry Ginger Ale - 2 L Bottle",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: null,
      originalPrice: 6.45,
      salePrice: 3.85,
      reviews: 178,
      stars: 4.3,
    },
    {
      name: "Challenge Spreadable Butter",
      image: "https://placehold.co/172x155",
      status: "IN STOCK",
      code: null,
      originalPrice: 7.58,
      salePrice: null,
      reviews: 42,
      stars: 4.0,
    },
  ];
  return (
    <div>
      <div className="container mx-auto">
        <div className=" grid grid-cols-12 gap-4">
          <div className="navShop hidden sm:block sm:col-span-12 md:col-span-4 lg:col-span-3  p-2">
            {/* 
            Product Categories
            */}
            <h2 className=" text-base uppercase font-semibold mt-6 mb-6">
              Product Categories
            </h2>
            <div className="productCategories">
              <CheckboxGroup size="sm">
                {categories.productCategories.map((categoriy, i) => {
                  return (
                    <Checkbox key={i} value={categoriy.name}>
                      {" "}
                      <span className="text-[#71778E]"> {categoriy.name} </span>
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            </div>
            {/* 
            Brands
            */}
            <h2 className=" text-base uppercase font-semibold mt-6 mb-6">
              Brands
            </h2>
            <div className="brands">
              <CheckboxGroup size="sm" className="w-full">
                {categories.brands.map((brand, i) => {
                  return (
                    <Checkbox key={i} value={brand.name} className="w-full">
                      <div className="flex justify-between w-full">
                        <span className="text-[#71778E]"> {brand.name} </span>
                        <span className="text-[#71778E] ">
                          {" "}
                          ( {brand.count} ){" "}
                        </span>
                      </div>
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            </div>
            {/* 
            Price
            */}
            <h2 className=" text-base uppercase font-semibold mt-6 mb-6">
              Price
            </h2>
            <div className="price">
              <div className="flex items-center gap-4">
                <NumberInput
                  size="sm"
                  className="max-w-xs"
                  placeholder="0.00"
                  label="Form"
                  labelPlacement="outside"
                />
                <span className="mt-4">-</span>
                <NumberInput
                  size="sm"
                  className="max-w-xs"
                  placeholder="0.00"
                  label="to"
                  labelPlacement="outside"
                />
              </div>
            </div>
            {/* 
            Availability
            */}
            <h2 className=" text-base uppercase font-semibold mt-6 mb-6">
              Availability
            </h2>
            <div className="productCategories">
              <CheckboxGroup size="sm">
                <Checkbox value={"inStock"}>
                  <span className="text-[#71778E]">
                    {" "}
                    <span> In stock </span>
                    <span> ( {categories.itemInStock.inStock} ) </span>
                  </span>
                </Checkbox>
                <Checkbox value={"outOfStock"}>
                  <span className="text-[#71778E]">
                    <span> Out of stock </span>
                    <span> ( {categories.itemInStock.outOfStock} ) </span>
                  </span>
                </Checkbox>
              </CheckboxGroup>
            </div>
            <div className="bannarFilter mt-5">
              <img
                src="/src/assets/Widget-Banner.png"
                alt=""
                className="w-[270px] h-[400px] "
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9  p-2">
            {/* 
                      Banner Shop
                      */}
            <div className="banarShop text-[#202435] w-full h-[265px] bg-center bg-cover bg-no-repeat  bg-[url(/src/assets/bacola-banner-18.jpg)] flex  items-center justify-center gap-3">
              <div className="textBanner flex flex-col gap-1 ">
                <p className="text-2xl font-extralight ">
                  Organic Meals Prepared
                </p>
                <p className="text-3xl font-semibold">
                  {" "}
                  Delivered to <span className="text-[#00B853]">
                    your Home
                  </span>{" "}
                </p>
                <p className="text-xs font-normal text-[#9B9BB4]">
                  Fully prepared & delivered nationwide.
                </p>
              </div>
            </div>
            {/* 
                      Sort BY
                      */}
            <div className="sort mt-6 h-[55px] w-full bg-[#F7F8FD] flex   items-center justify-between flex-row p-2">
              <div className="countProducts">
                <p className="text-[#9B9BB4] font-normal text-xs">
                  62 products
                </p>
              </div>
              <div className="sortBy">
                <p className="text-[#9B9BB4] font-normal text-xs">
                  <Select
                    key={"dsds"}
                    className="w-[250px]  bg-transparent"
                    label="Sort By"
                    labelPlacement={"outside-left"}
                    selectedKeys={[sort]}
                    onChange={(e) => handelSort(e.target.value)}
                  >
                    <SelectItem key="a-z">Alphabetically, A-Z</SelectItem>
                    <SelectItem key="z-a">Alphabetically, Z-A</SelectItem>
                    <SelectItem key="low-high"> Low to High</SelectItem>
                    <SelectItem key="high-low"> High to Low</SelectItem>
                  </Select>
                </p>
              </div>
            </div>
            {/* 
                      Show Products
                      */}
            <div className="allProsucts mt-10">
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => {
                  return (
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
                        <p className="text-sm font-medium text-[#202435]">
                          {product.name}
                        </p>
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
