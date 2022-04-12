import React from "react";
import style from "./Quality.module.css";
import quality1 from "../../../assets/quality1.png";
import quality2 from "../../../assets/quality2.png";
import quality3 from "../../../assets/quality3.png";
import quality4 from "../../../assets/quality4.png";
import quality5 from "../../../assets/quality5.png";

const Quality = () => {
  const logos = [quality1, quality2, quality3, quality4, quality5];

  return (
    <section className={style.quality}>
      {logos.map((item) => (
        <img src={item} alt="logo" />
      ))}
    </section>
  );
};

export default Quality;
