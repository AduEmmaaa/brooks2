"use client";

import React from "react";
import styles from "./rent.module.css";
import { SlLocationPin } from "react-icons/sl";
import { FaHouseUser, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { IoMdPricetag } from "react-icons/io";
import { house } from "../../../selling.json";
import {  useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  

  const handleonehouse = (list) => {
    router.push(`/rent/${list.id}`);
    console.log(list.id);
  };
  return (
    <div className={styles.renthouse}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <i className={styles.loicon}>
            Veodev <br />
            buy&rent
          </i>
        </div>
        <div className={styles.nav}>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Properties</li>
            <li>Agents</li>
          </ul>
        </div>
        <div className={styles.find}>find a house</div>
      </div>

      <div className={styles.banner}>
        <div className={styles.bannercover}>
          <h1 className={styles.head}>
            Find A House <br />
            <span className={styles.span}>That Suits You</span>
          </h1>
        </div>
        <p className={styles.para}>
          Want to find a home? we are ready to help you find one that suits your
          lifestyle and needs
        </p>
      </div>

      <div className={styles.afterbanner}>
        <h4>
          <FaHouseUser />
          Listing Property
        </h4>
      </div>

      <div className={styles.property}>
        {house.map((list, i) => (
          <div className={styles.eachp} key={i}>
            <Image
              src={list.img1}
              alt="pro"
              width={500}
              height={500}
              className={styles.proimg}
              onClick={() => handleonehouse(list)}
            />
            <div className={styles.info} onClick={() => handleonehouse(list)}>
              <h3 className={styles.housename}>{list.name} </h3>
              <div className={styles.loca}>
                <SlLocationPin className={styles.span} /> <i>{list.location}</i>
              </div>
              <div className={styles.pri}>
                <IoMdPricetag className={styles.span} />{" "}
                <i>GH₵ {list.price} per month</i>
              </div>
            </div>

            <div className={styles.whatsapp}>
              <div
                className={styles.support}
                onClick={() => router.push("https://wa.me/233531306402")}
              >
                <i>Agent</i>
                <FaWhatsapp className={styles.whatsappicon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div className={styles.rent}>
    //   <h1>Page Not Active Now.</h1>
    //   <p>
    //     Please call <span className={styles.span}>053 1306 402</span> if you
    //     need a house to rent at cocoa board and near places
    //   </p>
    //   <a href="https://wa.me/233531306402" target="_blank">
    //     <button className={styles.chat}>Chat with us on WhatsApp</button>
    //   </a>
    //   <h4>
    //     <SlLocationPin /> Cocoa Board -oposite the taxi station.
    //     <br />
    //     New generation babaring Shop
    //   </h4>
    // </div>
  );
};

export default Page;
