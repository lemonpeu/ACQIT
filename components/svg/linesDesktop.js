import React from "react";
import { Line1Blue, Line2Blue, Line3Blue } from "./line";
import styles from "./linesDesktop.module.scss";

const LinesDesktop = ({ showAnimation }) => {
  return (
    <div className={`${styles.container} ${showAnimation && "lines"}`}>
      <div className={styles.line1}>
        <Line1Blue />
      </div>
      <div className={styles.line2}>
        <Line2Blue />
      </div>
    </div>
  );
};

export default LinesDesktop;
