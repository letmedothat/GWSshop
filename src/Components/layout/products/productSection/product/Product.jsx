import React, { useState } from "react";
import style from "./Product.module.css";
import plan from "../../../../../assets/Amnesia.jpg";
import gel from "../../../../../assets/gel.svg";
import cardAdd from "../../../../../assets/cardAdd.svg";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";

const Product = () => {
  const [value, setValue] = useState(2);

  return (
    <div className={style.product}>
      <div className={style.imgSection}>
        <div className={style.overlay}>
          <a href="#">
            <img src={cardAdd} alt="add" />
          </a>
          <p>Add to cart</p>
        </div>
        <img src={plan} alt="plan" className={style.productImage} />
      </div>

      <div className={style.rating}>
        <h4>
          <img src={gel} alt="Gel" /> 1200
        </h4>
        <Box>
          <Rating name="read-only" value={value} readOnly />
        </Box>
      </div>

      <h2>Critical Kush</h2>
      <p className={style.type}>
        Type : <span>Sativa</span>
      </p>
      <p className={style.thc}>
        Avg THC: <span>19%</span>
      </p>
    </div>
  );
};

export default Product;
