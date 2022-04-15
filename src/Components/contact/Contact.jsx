import React from "react";
import style from "./Contact.module.css";
import ProductSection from "../../layout/products/productSection/ProductSection";

const Contact = () => {
  return (
    <div className={style.contact}>
      <ProductSection />
      <div className={style.btn}>
        <button className={style.loadMore}>Load More</button>
      </div>
    </div>
  );
};

export default Contact;
