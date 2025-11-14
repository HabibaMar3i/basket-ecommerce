import { useParams } from "react-router-dom";
// import { useCategories } from "../../hooks/uesCategories";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { useDisclosure } from "@heroui/react";
import { useProductById } from "../../hooks/uesGetProductId";

export default function Categories() {
  const path = useParams().id;
  const filterPath = decodeURIComponent(path).toLowerCase();
  //
  const { products } = useProducts();
  // filter products
  const filteredProducts = products.filter((product) => {
    const categoryName = product?.categoryId?.name?.toLowerCase();
    return (
      categoryName === filterPath ||
      categoryName?.includes(filterPath) ||
      filterPath.includes(categoryName)
    );
  });

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
  console.log(filteredProducts);
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {filteredProducts === 0
          ? "No products found"
          : filteredProducts?.map((p) => {
              return (
                <div className=" " onClick={() => handleOpenModal(p._id)}>
                  <ProductCard product={p} />
                </div>
              );
            })}

        {filteredProducts !== 0 ? (
          <ProductDetails
            isOpen={isModalOpen}
            product={productById}
            onOpenChange={onModalOpenChange}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
