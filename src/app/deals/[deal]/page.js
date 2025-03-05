"use client";
import Image from "next/image";
import styles from "./deal.module.css";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack, IoMdCart } from "react-icons/io";
import { products } from "../../../../selling.json";
const Page = () => {
  const router = useRouter();
  return (
    <div className={styles.deals}>
      <div className={styles.topsection}>
        <IoMdArrowBack
          className={styles.topicon}
          onClick={() => router.back()}
        />
        <input
          type="text"
          placeholder="Search related Products"
          className={styles.topsearh}
        />
        <IoMdCart className={styles.topicon} />
      </div>
      <div className={styles.separarte}></div>

      {products.map((list, i) => {
        return (
          <div className={styles.eachproduct} key={i}>
            <div className={styles.discount}>-10</div>
            <div className={styles.img}>
              <Image
                src={list.itempic}
                alt=""
                width={500}
                height={500}
                className={styles.productimg}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>
                <h5 className={styles.itemname}>{list.name} </h5>
              </div>
              <div className={styles.price}>
                <h4 className={styles.cashp}>
                  GH₵ 30,000 <i className={styles.instan}>instant</i>{" "}
                </h4>
                <h4 className={styles.install}>
                  GH₵ 40,000 <i className={styles.inst}>Installmenet</i>
                </h4>
                <h6 className={styles.oldp}> GH₵ 29,000</h6>
              </div>
              <div className={styles.rating}>
                <h2 className={styles.stars}>⭐⭐⭐⭐</h2>
                <h3 className={styles.order}>21 order</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
