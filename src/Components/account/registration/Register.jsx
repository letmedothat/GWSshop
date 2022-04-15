import React from "react";
import style from "./Register.module.css";
import Input from "../../inputs/Input";
import CloseIcon from "../../../assets/closeIcon.svg";

const Register = ({ loginHandler, registerHandler }) => {
  return (
    <section className={style.register}>
      <img src={CloseIcon} alt="close" onClick={loginHandler} />

      <div className={style.inputs}>
        <Input type="text" label="Username" />
        <Input type="password" label="Password" />
        <Input type="password" label="Repeat password" />
        <div className={style.loginBtn}>
          <button onClick={registerHandler} className={style.loginBtnn}>
            Log In
          </button>
          <button className={style.registerBtn}>Register</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
