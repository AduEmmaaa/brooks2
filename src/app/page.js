"use client";

import { useContext } from "react";
import styles from "./page.module.css";
import {
  Banner,
  Game,
  Headertop,
  Links,
  Maylike,
  Popularsearch,
  Sidebar,
  Sliderbox,
  Timer,
  Travel,
  Trending,
  Two,
} from "@/component";
import { Statemanagement } from "../../Context/Statemanagement";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  //state from context
  const { opensidebar, daynumber, setDaynumber } = useContext(Statemanagement);
  return (
    <>
      <div className={styles.newbody}>
        <div
          className={styles.support}
          onClick={() => router.push("https://wa.me/233531306402")}
        >
          <i>Support</i>
          <FaWhatsapp className={styles.whatsappicon} />
        </div>
        <div className={styles.time}>
          <h5>Today ,January {daynumber}</h5>
        </div>
        <div className={styles.down}>
          {/* <div className={styles.one}>
            <Sliderbox />
          </div> */}

          <h4 className={styles.head}>BrookSCity</h4>
          <Two />
          {/* <Game />
          <Travel /> */}
          {/* <Popularsearch /> */}
        </div>
      </div>

      {/* <div className={styles.main}>
        {opensidebar && <Sidebar />}
        <div className={styles.container}>
          <div className={styles.headertop}>
            <Headertop />
          </div>
          <div className={styles.omolink}>
            <Links />
          </div>
          <div className={styles.banner}>
            <Banner />
          </div>

          <div className={styles.trending}>
            <Trending />
          </div>
          <div className={styles.likes}>
            <Maylike />
          </div>
        </div>
      </div> */}
    </>
  );
}
