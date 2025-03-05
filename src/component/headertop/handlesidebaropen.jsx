"use client";

import React, { useContext } from "react";
import styles from "./headertop.module.css";
import { TiThMenu } from "react-icons/ti";
import { Statemanagement } from "../../../Context/Statemanagement";

const Handlesidebaropen = () => {
  //state from context
  const { setOpensidebar } =
    useContext(Statemanagement);

  return (
    <div className={styles.verytopleft}>
      <TiThMenu
        className={styles.logoicon}
        onClick={() => setOpensidebar(true)}
      />
    </div>
  );
};

export default Handlesidebaropen;
