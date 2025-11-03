import { Checkbox, CheckboxGroup, NumberInput } from "@heroui/react";
import React from "react";

export default function FilterCategories() {
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
  return (
    <div>
      <div className="navShop">
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
        <h2 className=" text-base uppercase font-semibold mt-6 mb-6">Brands</h2>
        <div className="brands">
          <CheckboxGroup size="sm" className="w-full space-y-1">
            {categories.brands.map((brand, i) => (
              <Checkbox key={i} value={brand.name}>
                <div className="flex justify-between w-[200px] items-center text-[#71778E]">
                  <span className="text-sm">{brand.name}</span>
                  <span className="text-xs">({brand.count})</span>
                </div>
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
        {/* 
            Price
            */}
        <h2 className=" text-base uppercase font-semibold mt-6 mb-6">Price</h2>
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
              <span className="text-[#71778E] w-[200px] flex justify-between">
                {" "}
                <span> In stock </span>
                <span> ( {categories.itemInStock.inStock} ) </span>
              </span>
            </Checkbox>
            <Checkbox value={"outOfStock"}>
              <span className="text-[#71778E] w-[200px] flex justify-between">
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
    </div>
  );
}
