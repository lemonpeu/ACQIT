import React, { useEffect, useState } from "react";
import styles from "./input.module.scss";

const Input = ({ placeholder, name, value, onChange, autofocus }) => {
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    if (autofocus) {
      setTimeout(() => {
        setIsFocused(false);
      }, 4000);
    }
  }, [autofocus]);

  return (
    <input
      autoComplete="off"
      className={`${styles.input} ${isFocused ? styles.isFocused : ""}`}
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
