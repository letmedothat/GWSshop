import React from "react";
import style from "./Login.module.css";
import Input from "../../inputs/Input";
import CloseIcon from "../../../assets/closeIcon.svg";

const Login = ({ loginHandler, registerHandler }) => {
  return (
    <section className={style.login}>
      <img src={CloseIcon} alt="close" onClick={loginHandler} />

      <div className={style.inputs}>
        {/* <form> */}
        <Input type="text" label="Username" required />
        <Input type="password" label="Password" required />
        <div className={style.loginBtn}>
          <button className={style.loginBtnn}>Login</button>
          <button className={style.registerBtn} onClick={registerHandler}>
            Register
          </button>
        </div>
        {/* </form> */}
      </div>
    </section>
  );
};

export default Login;
