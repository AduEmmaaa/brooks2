"use client"

import {
  Banner,
  Headertop,
  Links,
  Maylike,
  Sidebar,
  Timer,
  Trending,
} from "@/component";
import React, { useContext } from "react";
import styles from "../page.module.css";
import { Statemanagement } from "../../../Context/Statemanagement";

const Page = () => {
    const { opensidebar, daynumber, setDaynumber } =
      useContext(Statemanagement);

  return (
    <div>
      <div className={styles.main}>
        {opensidebar && <Sidebar />}
        <div className={styles.container}>
          <div className={styles.headertop}>
            <Headertop />
          </div>
          <div className={styles.omolink}>
            <Links />
          </div>
          {/* <div className={styles.banner}>
            <Banner />
          </div> */}

          <div className={styles.timer}>
            <Timer daynumber={daynumber} setDaynumber={setDaynumber} />
          </div>
          <div className={styles.trending}>
            <Trending />
          </div>
          <div className={styles.likes}>
            <Maylike />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
