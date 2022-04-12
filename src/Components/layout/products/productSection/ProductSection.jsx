import React from "react";
import style from "./ProductSection.module.css";
import Product from "./product/Product";

const ProductSection = () => {
  return (
    <div className={style.productSection}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductSection;
