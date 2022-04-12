import React from "react";
import Login from "./login/Login";
import style from "./Account.module.css";

const Account = ({ loginHandler }) => {
  return (
    <section className={style.account}>
      <Login loginHandler={loginHandler} />
    </section>
  );
};

export default Account;
