import React from "react";
import { Checkbox, CheckboxGroup, NumberInput } from "@heroui/react";
import { useCategories } from "../../hooks/uesCategories";
import { useProducts } from "../../hooks/useProducts";

export default function FilterCategories() {
  // import categories & products from context
  const { categories } = useCategories();
  const { products } = useProducts();

  // Calc Brands Count
  const brandCounts = products.reduce((acc, product) => {
    const brand = product.Brand.Name || "Unknown";
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

  const brandsArray = Object.entries(brandCounts).map(([brand, count]) => ({
    brand,
    count,
  }));

  // calc availability

  const availabilityCounts = products.reduce((acc, product) => {
    const status = product.available || "Unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const availabilityArray = Object.entries(availabilityCounts).map(
    ([status, count]) => ({
      status,
      count,
    })
  );
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
            {categories.map((categoriy) => {
              return (
                <Checkbox key={categoriy._id} value={categoriy.name}>
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
            {brandsArray.map((product, i) => (
              <Checkbox key={i} value={product.name}>
                <div className="flex justify-between w-[200px] items-center text-[#71778E]">
                  <span className="text-sm">{product.brand}</span>
                  <span className="text-xs">({product.count})</span>
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
            {availabilityArray.map((st) => {
              return (
                <Checkbox value={"inStock"}>
                  <span className="text-[#71778E] w-[200px] flex justify-between">
                    {" "}
                    <span className="text-sm"> {st.status} </span>
                    <span className="text-xs"> ({st.count}) </span>
                  </span>
                </Checkbox>
              );
            })}
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
