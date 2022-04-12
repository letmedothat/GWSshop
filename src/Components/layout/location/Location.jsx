import React from "react";
import style from "./Location.module.css";
import StoreLocation from "./loc/StoreLocation";
import WhoWeAre from "./weAre/WhoWeAre";

const Location = () => {
  return (
    <div className={style.location}>
      <StoreLocation />
      <WhoWeAre />
    </div>
  );
};

export default Location;
