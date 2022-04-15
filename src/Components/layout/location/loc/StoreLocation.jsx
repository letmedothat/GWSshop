import React from "react";
import style from "../Location.module.css";
import LocationIcon from "../../../../assets/locationIcon.svg";

const StoreLocation = () => {
  return (
    <div className={style.storeLocation}>
      <h3>Store Location</h3>
      <div className={style.store}>
        <img src={LocationIcon} alt="loc" />
        <p>Telegram : @GWSShop</p>
      </div>
      <div className={style.storeLink}>
        <a href="https://t.me/gwsshop" target="blank">
          Telegram
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default StoreLocation;
