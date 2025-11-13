import {
  Button,
  Select,
  SelectItem,
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Pagination,
  Spinner,
} from "@heroui/react";
import { useState, useMemo } from "react";
import FilterCategories from "./FilterCategories";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { useProductById } from "../../hooks/uesGetProductId";

export default function Shop() {
  const { products, lodaing, error } = useProducts();
  console.log(products);
  // Sort data
  const [sort, setSort] = useState("a-z");

  const handelSort = (value) => {
    setSort(value);
  };
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  // Pagination
  const [curentPage, setCurentPage] = useState(1);
  const productsPerPage = 8;

  //  Filtered And Sorted Products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedCategories.includes(product?.categoryId?.name);
      });
    }

    // filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedBrands.includes(product.Brand.Name);
      });
    }

    // filter by availability
    if (selectedAvailability.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedAvailability.includes(product.available);
      });
    }
    // filter by price range
    if (priceFrom !== "" || priceTo !== "") {
      filtered = filtered.filter((product) => {
        const price = product.Price || 0;
        const from = priceFrom !== "" ? parseFloat(priceFrom) : 0;
        const to = priceTo !== "" ? parseFloat(priceTo) : Infinity;
        return price >= from && price <= to;
      });
    }

    // Sort Products

    filtered.sort((a, b) => {
      switch (sort) {
        case "a-z":
          return (a.Name || "").localeCompare(b.Name || "");
        case "z-a":
          return (b.Name || "").localeCompare(a.Name || "");
        case "low-high":
          return (parseFloat(a.Price) || 0) - (parseFloat(b.Price) || 0);
        case "high-low":
          return (parseFloat(b.Price) || 0) - (parseFloat(a.Price) || 0);
        default:
          return 0;
      }
    });
    return filtered;
  }, [
    products,
    selectedCategories,
    selectedBrands,
    selectedAvailability,
    priceFrom,
    priceTo,
    sort,
  ]);

  // Pagination calculations
  const startIndex = (curentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = filteredAndSortedProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );
  useMemo(() => {
    setCurentPage(1);
  }, [
    selectedCategories,
    selectedBrands,
    selectedAvailability,
    priceFrom,
    priceTo,
    sort,
  ]);
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

  const { fetchProductById, productById } = useProductById();

  const handleOpenModal = async (id) => {
    await fetchProductById(id);
    onModalOpen();
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className=" grid grid-cols-12 gap-4 relative">
          <div className=" max-[770px]:block hidden right-0 top-[-10px] absolute">
            <Button onPress={onDrawerOpen}>
              <i className="fa-solid fa-filter text-[#35AFA0]"></i>
            </Button>
            <Drawer isOpen={isDrawerOpen} onOpenChange={onDrawerOpenChange}>
              <DrawerContent>
                {() => (
                  <>
                    <DrawerBody>
                      <FilterCategories
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedBrands={selectedBrands}
                        setSelectedBrands={setSelectedBrands}
                        selectedAvailability={selectedAvailability}
                        setSelectedAvailability={setSelectedAvailability}
                        priceFrom={priceFrom}
                        setPriceFrom={setPriceFrom}
                        priceTo={priceTo}
                        setPriceTo={setPriceTo}
                      />
                    </DrawerBody>
                  </>
                )}
              </DrawerContent>
            </Drawer>
          </div>
          <div className="sm:col-span-12 md:col-span-4 lg:col-span-3 max-[770px]:hidden  p-2">
            <FilterCategories
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedAvailability={selectedAvailability}
              setSelectedAvailability={setSelectedAvailability}
              priceFrom={priceFrom}
              setPriceFrom={setPriceFrom}
              priceTo={priceTo}
              setPriceTo={setPriceTo}
            />
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
                  {filteredAndSortedProducts.length} products
                </p>
              </div>
              <div className="sortBy">
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
              </div>
            </div>

            {/* 
                      Show Products
                      */}
            <div className="allProsucts mt-10">
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {lodaing ? (
                  <div className="">
                    {" "}
                    <Spinner
                      color="primary"
                      label="Primary"
                      labelColor="primary"
                      size="lg"
                    />
                  </div>
                ) : error ? (
                  <p className="text-[100px]">{error}</p>
                ) : (
                  visibleProducts.map((product, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          handleOpenModal(product._id);
                        }}
                      >
                        <ProductCard product={product} />
                      </div>
                    );
                  })
                )}
                {/* 
                  Show Prodcts Detlais
                */}

                <ProductDetails
                  product={productById}
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
            page={curentPage}
            onChange={setCurentPage}
            total={totalPages}
            dotsJump={1}
          />
        </div>
      </div>
    </div>
  );
}
