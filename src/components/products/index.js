import Link from "next/link";
import Product from "./product";

const Products = ({ productsData }) => {
  console.log("productsData", productsData);

  // if (isEmpty(productsData) || !isArray(productsData)) {
  //   return <h2>Something is wrong</h2>;
  // }

  return (
    <>
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        {productsData.products.length
          ? productsData.products.map((product) => {
              return (
                <Product key={ product?.id } product={product} />
              );
            })
          : null}
      </div>
    </>
  );
};

export default Products;
