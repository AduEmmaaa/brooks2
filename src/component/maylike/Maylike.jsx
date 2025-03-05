import React, { useState } from "react";
import styles from "./maylike.module.css";
import Image from "next/image";

import { maylike } from "../../../selling.json";
import { RiShoppingBagFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const Maylike = () => {
  const router = useRouter();

  const handleitemclick = (list) => {
    router.push(`/feature/${list.id}`);
  };

  return (
    <div className={styles.Maylike}>
      <div className={styles.verytop}>
        <i className={styles.hotdeal}>Products</i>
        <i className={styles.timecountdown}>📌</i>
      </div>
      <div className={styles.productscover}>
        {maylike?.map((list, i) => {
          return (
            <div
              className={styles.itemcard}
              key={i}
              // onClick={() => handleitemclick(list)}
            >
              <div className={styles.itemimg} onClick={() => handleitemclick(list)}>
                <Image
                  src={list.img}
                  alt="item image"
                  width={500}
                  height={500}
                  className={styles.productsimg}
                  onClick={() => handleitemclick(list)}
                />
              </div>
              <div className={styles.itemnames} onClick={() => handleitemclick(list)}>
                <p className={styles.productname}>
                  {" "}
                  {list.name.length > 20
                    ? list.name.slice(0, 25) + "..."
                    : list.name}
                </p>
                <div className={styles.pricediv}>
                  <p>
                    <i className={styles.price}>{list.oldprice}</i>
                  </p>
                  <p>
                    <i className={styles.pricenew}>{list.newprice}</i>
                  </p>
                </div>

                <div className={styles.orderdiv}>
                  <p>
                    <i className={styles.pin}>3 piece 📌 </i>
                  </p>
                </div>
              </div>
                  <FaWhatsapp
                    className={styles.shopbag}
                    onClick={() => router.push("https://wa.me/233531306402")}
                  />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Maylike;
