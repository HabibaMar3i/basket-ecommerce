import {
  Button,
  Select,
  SelectItem,
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Pagination,
} from "@heroui/react";
import { useState } from "react";
import FilterCategories from "./FilterCategories";
import { Link } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Shop() {
  // Drawer state
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onOpenChange: onDrawerOpenChange,
  } = useDisclosure();

  // Modal state
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();

  const [sort, setSort] = useState("a-z");
  const handelSort = (value) => {
    setSort(value);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleOpenModal = (e, product) => {
    e.preventDefault();
    setSelectedProduct(product);
    onModalOpen();
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className=" grid grid-cols-12 gap-4 relative">
          <div className=" max-[770px]:block hidden right-0 top-[-10px] absolute">
            <Button onPress={onDrawerOpen}>
              <i class="fa-solid fa-filter text-[#35AFA0]"></i>
            </Button>
            <Drawer isOpen={isDrawerOpen} onOpenChange={onDrawerOpenChange}>
              <DrawerContent>
                {() => (
                  <>
                    <DrawerBody>
                      <FilterCategories />
                    </DrawerBody>
                  </>
                )}
              </DrawerContent>
            </Drawer>
          </div>
          <div className="sm:col-span-12 md:col-span-4 lg:col-span-3 max-[770px]:hidden  p-2">
            <FilterCategories />
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
                    classNames={{
                      trigger: "bg-transparent shadow-none ",
                    }}
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
                {products.map((product, i) => {
                  return (
                    <Link onClick={(e) => handleOpenModal(e, product)}>
                      <ProductCard product={product} key={i} />
                    </Link>
                  );
                })}
                {/* 
                  Show Prodcts Detlais
                */}
                <ProductDetails
                  product={selectedProduct}
                  onOpenChange={onModalOpenChange}
                  isOpen={isModalOpen}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 flex justify-center my-10">
          <Pagination
            classNames={{
              wrapper: "gap-0  h-8 border-none ",
              item: "w-8 h-8 text-small rounded-none bg-transparent outline-none shadow-none",
              cursor: "text-[#fff] bg-[#35AFA0] rounded-full ",
            }}
            total={20}
            dotsJump={1}
          />
        </div>
      </div>
    </div>
  );
}
