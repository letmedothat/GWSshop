import React, { useState } from "react";
import style from "./Navigation.module.css";
import Menu from "./menu/Menu";
import Store from "./store/Store";
import Account from "../../account/Account";
import Register from "../../account/registration/Register";

const Navigation = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const loginHandler = () => {
    setLogin(!login);
  };

  const registerHandler = () => {
    setRegister(!register);
  };
  return (
    <>
      {login ? (
        <Account
          loginHandler={loginHandler}
          registerHandler={registerHandler}
          register={register}
        />
      ) : null}

      <div className={style.navigation}>
        <Menu />
        <Store loginHandler={loginHandler} />
      </div>
    </>
  );
};

export default Navigation;
