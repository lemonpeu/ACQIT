import React from "react";
import styles from "./input.module.scss";

const Input = ({ placeholder, name, value, onChange }) => {
  return (
    <input
      autoComplete="off"
      className={styles.input}
      id="email"
      name={name}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
