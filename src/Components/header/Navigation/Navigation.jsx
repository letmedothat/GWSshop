import React, { useState } from "react";
import style from "./Navigation.module.css";
import Menu from "./menu/Menu";
import Store from "./store/Store";
import Account from "../../account/Account";

const Navigation = () => {
  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    console.log("test");
    setLogin(!login);
  };
  return (
    <>
      {login ? <Account loginHandler={loginHandler} /> : null}
      <div className={style.navigation}>
        <Menu />
        <Store loginHandler={loginHandler} />
      </div>
    </>
  );
};

export default Navigation;
