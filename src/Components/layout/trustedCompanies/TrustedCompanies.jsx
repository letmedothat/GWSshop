import React from "react";
import style from "./TrustedCompanies.module.css";
import trust1 from "../../../assets/trust1.png";
import trust2 from "../../../assets/trust2.png";
import trust3 from "../../../assets/trust3.png";

const TrustedCompanies = () => {
  return (
    <div className={style.trustedCompanies}>
      <div className={style.trustItem}>
        <img src={trust1} alt="logo" className={style.trustLogo1} />
        <section className={style.itemTitle}>
          <h4>Fast Answer</h4>
          <p>Delivered Fast</p>
        </section>
      </div>
      <div className={style.trustItem}>
        <img src={trust2} alt="logo" className={style.trustLogo2} />
        <section className={style.itemTitle}>
          <h4>Trusted By</h4>
          <p>Our Customers</p>
        </section>
      </div>
      <div className={style.trustItem}>
        <img src={trust3} alt="logo" className={style.trustLogo3} />
        <section className={style.itemTitle}>
          <h4>Telegram Support</h4>
          <p>Fast Answer</p>
        </section>
      </div>
    </div>
  );
};

export default TrustedCompanies;
