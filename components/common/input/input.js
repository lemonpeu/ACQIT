import React from "react";
import styles from "./input.module.scss";

const Input = ({ placeholder, name }) => {
  return (
    <input
      autoComplete="off"
      className={styles.input}
      id="name"
      name={name}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
