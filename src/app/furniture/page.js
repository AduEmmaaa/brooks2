import React from "react";
import styles from "./furinture.module.css"
import { SlLocationPin } from "react-icons/sl";

const page = () => {
  return (
    <div className={styles.furinture}>
      <h1>Page Not Active Now.</h1>
      <p>
        Please call <span className={styles.span}>053 1306 402</span> if you
        need a furniture to buy at cocoa board and near places
      </p>
      <a href="https://wa.me/233531306402" target="_blank">
        <button className={styles.chat}>Chat with us on WhatsApp</button>
      </a>
      <h4>
        <SlLocationPin /> Cocoa Board -oposite the taxi station.
        <br />
        New generation babaring Shop
      </h4>
    </div>
  );
};

export default page;
