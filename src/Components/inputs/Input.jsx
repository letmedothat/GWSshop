import React from "react";
import style from "./Input.module.css";

const Input = ({ type, width, fontSize, label, onChange, className }) => {
  return (
    <div className={style.input} style={{ fontSize, width }}>
      <input
        type={type}
        required={true}
        onChange={onChange}
        className={className}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
