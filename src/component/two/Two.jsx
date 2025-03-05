"use client";

import React from "react";
import styles from "../../app/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Two = () => {
  const router = useRouter();
  return (
    <div className={styles.two}>
      {/* <div className={styles.first} onClick={() => router.push("/salon")}>
        <div className={styles.img}>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731293178/Kinggjj___mxrkyq.jpg"
            }
            alt=""
            width={500}
            height={500}
            className={styles.barbarimg}
          />
        </div>
        <h5 className={styles.salon}>
          Barbar salon <br />
          New Generation
        </h5>
      </div> */}
      {/* <div className={styles.first} onClick={() => router.push("/rent")}>
        <div className={styles.img}>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731294178/RENT_TO_OWN_HOUSE_AND_LOT_-_TOWNHOUSE_IN_QUEZON_CITY_tisbz5.jpg"
            }
            alt=""
            width={500}
            height={500}
            className={styles.barbarimg}
          />
        </div>
        <h5 className={styles.salon}>Property & house for rent</h5>
      </div> */}

      {/* <div className={styles.first} onClick={() => router.push("/OnlineShop")}>
        <div className={styles.img}>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1730810964/cld-sample-5.jpg"
            }
            alt=""
            width={500}
            height={500}
            className={styles.barbarimg}
          />
        </div>
        <h5 className={styles.salon}>Online Shop </h5>
      </div> */}
      {/* <div className={styles.first}>
        <div className={styles.img}>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1730815280/bsovr9knq7mf1xugpqde.gif"
            }
            alt=""
            width={500}
            height={500}
            className={styles.barbarimg}
          />
        </div>
        <h5 className={styles.salon}>Home delivery for anything</h5>
      </div> */}
      <div
        className={styles.first}
        onClick={() => router.push("/adminstration")}
      >
        <div className={styles.img}>
          <Image
            src={
              "/income.jpg"
            }
            alt=""
            width={500}
            height={500}
            className={styles.barbarimg}
          />
        </div>
        <h5 className={styles.salon}>BrooksCity</h5>
      </div>
      {/* <div className={styles.first} onClick={() => router.push("/water")}>
        <div className={styles.img}>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731950094/Loader_vc429j.gif"
            }
            alt=""
            width={500}
            height={500}
            className={styles.barbarimg}
          />
        </div>
        <h5 className={styles.salon}>MAAB Products</h5>
      </div> */}
    </div>
  );
};

export default Two;
