import React from "react";
import styles from "./headertop.module.css";
import { IoMdCut, IoMdPerson, IoMdSearch } from "react-icons/io";
import { Handlesidebar } from "..";

const Headertop = () => {
  return (
    <div>
      <div className={styles.topbar}>
        <div className={styles.verytop}>
          <Handlesidebar />
          <div className={styles.verytopmiddle}>
            <div className={styles.letter}>
              <i>
                <h1>N</h1>
              </i>
            </div>
            <div className={styles.logo}>
              <i>
                <p className={styles.logoword}>ew generation</p>
              </i>
              <p className={styles.logoword2}>Online Store and business🛒</p>
            </div>
          </div>
          <div className={styles.verytopright}>
            <IoMdPerson className={styles.logoicon} />
          </div>
        </div>
        <div className={styles.verydown}>
          <IoMdSearch className={styles.searchicon} />
          <input
            type="text"
            placeholder="search product"
            className={styles.searchinput}
          />
          <IoMdCut className={styles.searchiconcut} />
        </div>
      </div>
    </div>
  );
};

export default Headertop;
