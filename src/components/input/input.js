import React from "react";
import styles from "./input.module.scss";

const Input = () => {
  return (
    <section>
      <input type="text" placeholder="Enter word" />
      <input type="button" value="submit" />
    </section>
  );
};

export default Input;
