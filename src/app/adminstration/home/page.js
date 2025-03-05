"use client";

import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MoneyRow } from "@/component";
import { TiLocation, TiLocationArrow, TiLocationOutline } from "react-icons/ti";

const Page = () => {
  const router = useRouter();
  return (
    <div className={styles.adminhomewrapper}>
      <div className={styles.verytop}></div>
      <div className={styles.verytop2}></div>
      <div className={styles.verydown2}>
        <h5>General Things</h5>
        <div className={styles.containerholder}>
          <div
            className={styles.container}
            onClick={() => router.push("/adminstration/home/income")}
          >
            <Image
              src={"/income.png"}
              alt=""
              width={500}
              height={500}
              className={styles.generalitemimg}
              onClick={() => router.push("/adminstration/home/income")}
            />
            <i
              onClick={() => router.push("/adminstration/home/income")}
              className={styles.name}
            >
              Income
            </i>
          </div>
          <div className={styles.container}>
            <Image
              src={"/expense.png"}
              alt=""
              width={500}
              height={500}
              className={styles.generalitemimg}
            />
            <i className={styles.name}>Expense</i>
          </div>
          <div className={styles.container}>
            <Image
              src={"/drink.png"}
              alt=""
              width={500}
              height={500}
              className={styles.generalitemimg}
            />
            <i className={styles.name}>Materials</i>
          </div>
        </div>
      </div>
      <div className={styles.verydown2}>
        <h5>
          <TiLocation /> Cocoa Board / Alafia{" "}
        </h5>
        <div className={styles.containerholder}>
          <div
            className={styles.container}
            onClick={() => router.push("/adminstration/home/shop1")}
          >
            <Image
              src={"/income.png"}
              alt=""
              width={500}
              height={500}
              className={styles.generalitemimg}
              onClick={() => router.push("/adminstration/home/shop1")}
            />
            <i
              onClick={() => router.push("/adminstration/home/shop1")}
              className={styles.name}
            >
              Shop 1
            </i>
          </div>
        </div>
      </div>
      <div className={styles.verydown2}>
        <h5>
          <TiLocationArrow />
          Obeyeyie{" "}
        </h5>
        <div className={styles.containerholder}>
          <div
            className={styles.container}
            onClick={() => router.push("/adminstration/home/shop2")}
          >
            <Image
              src={"/income.png"}
              alt=""
              width={500}
              height={500}
              className={styles.generalitemimg}
              onClick={() => router.push("/adminstration/home/shop2")}
            />
            <i
              onClick={() => router.push("/adminstration/home/shop2")}
              className={styles.name}
            >
              shop 2
            </i>
          </div>
        </div>
      </div>
      <div className={styles.verydown2}>
        <h5>
          <TiLocationOutline />
          Manhia
        </h5>
        <div className={styles.containerholder}>
          <div
            className={styles.container}
            onClick={() => router.push("/adminstration/home/shop3")}
          >
            <Image
              src={"/income.png"}
              alt=""
              width={500}
              height={500}
              className={styles.generalitemimg}
              onClick={() => router.push("/adminstration/home/shop3")}
            />
            <i
              onClick={() => router.push("/adminstration/home/shop3")}
              className={styles.name}
            >
              shop 3
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
