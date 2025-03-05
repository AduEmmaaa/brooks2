"use client";

import React, { useState } from "react";
import styles from "./water.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const [pin, setpin] = useState(0);
  const router = useRouter();

  const handlepinlogin = () => {
    if (parseInt(pin) === 2580) {
      alert("pincode is correct for CocoaBoard shop");
      router.push("/bosswater");
    } else if (parseInt(pin) === 7233) {
      alert("pin success for Boss");
      router.push("/bosswater/additems");
    } else if (parseInt(pin) === 19550) {
      alert("pincode is correct for Obeyeyie shop");
      router.push("/shop2bosswater");
    } else {
      alert("wrong pin");
    }
  };
  return (
    <div className={styles.waterlogin}>
      <div className={styles.formbag}>
        <Image
          src={
            "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731950094/Loader_vc429j.gif"
          }
          alt=""
          className={styles.imagepic}
          width={500}
          height={500}
        />
        <input
          type="number"
          placeholder="enter your code "
          className={styles.input}
          value={pin}
          onChange={(e) => setpin(e.target.value)}
        />
        <button className={styles.loginbtn} onClick={handlepinlogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Page;
