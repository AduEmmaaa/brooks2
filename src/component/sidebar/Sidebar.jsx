import React, { useContext } from "react";
import styles from "./sidebar.module.css";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import { Statemanagement } from "../../../Context/Statemanagement";

import Link from "next/link";
import { FaBook, FaChair, FaHouseUser } from "react-icons/fa";
const Sidebar = () => {
  const { setOpensidebar } = useContext(Statemanagement);
  return (
    <div className={styles.sidebaropen}>
      <div className={styles.sidebarwrapper}>
        <div className={styles.verytop}>
          <IoMdClose
            className={styles.closeicon}
            onClick={() => setOpensidebar(false)}
          />
        </div>
        <div className={styles.sidebarmenu}>
          <ul className={styles.sidebarlist}>
            <Link href={"/adminstration"} className={styles.listitem}>
              <li className={styles.listitem}>
                {" "}
                <IoMdSettings className={styles.listicons} /> Adminstartor
              </li>
            </Link>
            <Link href={"/salon"} className={styles.listitem}>
              <li className={styles.listitem}>
                <FaBook className={styles.listicons} /> Book a Hairstylist
              </li>
            </Link>
            <Link href={"/rent"} className={styles.listitem}>
              <li className={styles.listitem}>
                <FaHouseUser className={styles.listicons} /> house for rent
              </li>
            </Link>
            <Link href={"/furniture"} className={styles.listitem}>
              <li className={styles.listitem}>
                <FaChair className={styles.listicons} /> Furnitures for sale
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
