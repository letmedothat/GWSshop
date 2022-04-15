import React from "react";
import style from "./ProductList.module.css";
import ProductSection from "../../layout/products/productSection/ProductSection";

const ProductList = () => {
  return (
    <div className={style.productList}>
      <ProductSection />
      <div className={style.btn}>
        <button className={style.loadMore}>Load More</button>
      </div>
    </div>
  );
};

export default ProductList;
