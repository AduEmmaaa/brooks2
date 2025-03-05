import React from "react";
import styles from "./banner.module.css";
import Sliderbox from "./Sliderbox";

const Banner = ({ type }) => {
  return (
    <>
      <div className={styles.bannercover}>
        <Sliderbox />
      </div>
    </>
  );
};

export default Banner;
