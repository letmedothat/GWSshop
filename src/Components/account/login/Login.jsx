import React from "react";
import style from "./Login.module.css";
import Input from "../../inputs/Input";
import CloseIcon from "../../../assets/closeIcon.svg";

const Login = ({ loginHandler }) => {
  return (
    <section className={style.login}>
      <img src={CloseIcon} alt="close" onClick={loginHandler} />

      <div className={style.inputs}>
        <Input type="text" label="Username" />
        <Input type="password" label="Password" />
        <Input type="password" label="Repeat password" />
        <div className={style.loginBtn}>
          <button>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
