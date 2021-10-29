import React from "react";
import styles from "./input.module.scss";

const Input = ({ placeholder }) => {
  return (
    <input
      autoComplete="off"
      className={styles.input}
      id="name"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
