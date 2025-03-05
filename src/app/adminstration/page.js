"use client";

import React, { useContext, useState } from "react";
import styles from "./admin.module.css";
import Link from "next/link";
import { TiArrowBack, TiCloudStorageOutline, TiPin } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { Statemanagement } from "../../../Context/Statemanagement";

const Page = () => {
  const router = useRouter();
  const { pin, setPin, login, setlogin } = useContext(Statemanagement);
  const [loadingadmin, setLoadingAdmin] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const handleloginpin = async () => {
    setLoadingAdmin(true);
    if (!pin) {
      setLoadingAdmin(false);
      return setErrormessage("No Pin Entered");
    }
    try {
      const res = await fetch("/api/pincode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pin),
      });
      const result = await res.json();
      setlogin(result?.msg.passcode);
      if (result.msg?.passcode === 2580) {
        router.push("/adminstration/home/shop1");
      } else if (result.msg?.passcode === 19550) {
        router.push("/adminstration/home/shop2");
      } else if (result.msg?.passcode === 3333) {
        router.push("/adminstration/home/shop3");
      } else if (result.msg?.passcode === 7233) {
        router.push("/adminstration/home");
      } else if (result?.msg === "Wrong Pin!") {
        setErrormessage("Wrong Pin!");
      }
      if (result.msg?.passcode === 3535) {
        router.push("/adminstration/home/shop2");
      }
     

      if (result.msg?.passcode === 5555) {
        router.push("/adminstration/home/shop1");
      } else {
        return;
      }
      console.log(result.msg);
      setLoadingAdmin(false);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className={styles.adminwrapper}>
      <div className={styles.form}>
        <div className={styles.verytop}>
          <Link href={"/"} className={styles.goback}>
            <TiArrowBack className={styles.backicon} />{" "}
            <i>Go back To main Page</i>
          </Link>
        </div>
        <div className={styles.loginadmin}>
          <h1 className={styles.Admin}>
            <i>A</i>
          </h1>
          <p className={styles.admin}>
            <i>dminstrator Only</i>
          </p>
        </div>
        <div className={styles.inputfield}>
          <TiPin className={styles.pinicon} />
          <input
            placeholder="Enter pin"
            type="number"
            className={styles.inputdield}
            value={pin}
            onChange={(e) => setPin(parseInt(e.target.value))}
          />
          <TiCloudStorageOutline className={styles.piniconcheck} />
        </div>
        <div className={styles.loginbtn}>
          <button className={styles.btnlogin} onClick={handleloginpin}>
            {loadingadmin ? "please wait" : "Login"}
          </button>
        </div>
      </div>
      {errormessage.length > 0 && (
        <h3 className={styles.errormessage}>{errormessage}</h3>
      )}
    </div>
  );
};

export default Page;
