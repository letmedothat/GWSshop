import React from "react";
import Login from "./login/Login";
import style from "./Account.module.css";
import Register from "./registration/Register";

const Account = ({ loginHandler, registerHandler, register }) => {
  console.log(register);
  return (
    <section className={style.account}>
      {!register ? (
        <Login loginHandler={loginHandler} registerHandler={registerHandler} />
      ) : (
        <Register
          loginHandler={loginHandler}
          registerHandler={registerHandler}
        />
      )}
    </section>
  );
};

export default Account;
