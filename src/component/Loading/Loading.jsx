import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <div className={styles.counter}></div>

      </div>
      <i>Please wait ....</i>
    </div>
  );
};

export default Loading;
