"use client";

import React, { useEffect, useState } from "react";
import styles from "./feature.module.css";
import { IoMdArrowBack, IoMdCart } from "react-icons/io";
import Image from "next/image";
import { RiArrowUpDoubleLine, RiBusFill } from "react-icons/ri";
import { FaPhone, FaSupple, FaWhatsapp } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { TiLocation } from "react-icons/ti";
import { useParams, useRouter } from "next/navigation";
import { maylike } from "../../../../selling.json";

const Page = () => {
  const [productclicked, setProductclicked] = useState({});
  const router = useRouter();
  const params = useParams();
  const id = params.product;

  const [count, setCount] = useState(1);
  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const swipeDistance = startX - endX;

    if (swipeDistance > 10) {
      // Increase the count by 1 when swiped left
      setCount((prev) => prev + 1);
      if (count >= 3) {
        return setCount(3);
      }
    } else if (swipeDistance < -10) {
      // Increase the count by 1 when swiped left
      setCount((prev) => prev - 1);
      if (count <= 1) {
        return setCount(1);
      }
    }
  };
  const getitem = () => {
    const productid = maylike.filter((item) => item.id === parseInt(id));
    setProductclicked(productid);
  };

  useEffect(() => {
    getitem();
  }, [id]);

  // if (count < 1) {
  //   return;
  // } else if (count > 3) {
  //   return;
  // }
  return (
    <div className={styles.feature}>
      <div className={styles.topsection}>
        <IoMdArrowBack
          className={styles.topicon}
          onClick={() => router.back()}
        />
        <h3>Detail</h3>
        <SlOptionsVertical className={styles.topicon} />
      </div>
      <div
        className={styles.abovetop}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <RiArrowUpDoubleLine className={styles.arrow} />
        <Image
          src={
            (count >= 1 &&
              count <= 3 &&
              count === 1 &&
              productclicked[0]?.img) ||
            (count === 2 && productclicked[0]?.img1) ||
            (count === 3 && productclicked[0]?.img2) ||
            (count === 4 && productclicked[0]?.img3)
          }
          alt=""
          width={500}
          height={500}
          className={styles.detailimg}
        />
      </div>
      <div className={styles.productname}>{productclicked[0]?.name}</div>
      <div className={styles.pricing}>
        <div className={styles.cashorinstall}>
          <div className={styles.box}>
            <p className={styles.method}>instant pricing</p>
            <h2 className={styles.currentname}>
              GH₵ {productclicked[0]?.oldprice}
            </h2>
            <i className={styles.oldp}> GH₵ {productclicked[0]?.newprice}</i>

            <div className={styles.discount}>-14</div>
          </div>
        </div>
        <div className={styles.cashorinstall}>
          <div className={styles.box}>
            <p className={styles.method}>Installment pricing</p>
            <h2 className={styles.currentname}> GH₵ 3,000</h2>
            <i className={styles.oldp}> GH₵ 4300</i>

            <div className={styles.discount}>+20</div>
          </div>
        </div>
      </div>

      <div className={styles.disc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        deserunt nemo corporis, quos reprehenderit vitae soluta unde ipsum
        sequi? Explicabo vero corrupti voluptates, vel autem ratione numquam
        delectus incidunt repellat.
      </div>
      <div className={styles.rating}>
        <p className={styles.stars}>6 pieces left</p>
        <p className={styles.stars}>4.0 ⭐⭐⭐⭐</p>
      </div>

      <div className={styles.sepaerate}>{count}</div>
      <div className={styles.arrivaltime}></div>
      <div className={styles.bottom}>
        <h4 className={styles.seller}>
          <FaSupple className={styles.buyicon} />
          <i>seller</i>
        </h4>
        <h4 className={styles.byechart}>
          <IoMdCart className={styles.buyicon} />
          <i>cart</i>{" "}
        </h4>
        <div className={styles.buynow}>Buy Now🚀</div>
      </div>
      <div className={styles.arr}>
        <div className={styles.location}>
          <h3> Arrivall and Picking Station</h3>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1730544645/iewu3msegp6pb2exdkmk.png"
            }
            alt=" "
            width={500}
            height={500}
            className={styles.locationimg}
          />
        </div>
        <div className={styles.location}>
          <FaWhatsapp className={styles.whatsapp} />
          <p>+233 53 1306 402</p>
        </div>
        <div className={styles.location}>
          <FaPhone className={styles.phone} />
          <p>+233 53 1306 402</p>
        </div>
        <div className={styles.location}>
          <h3>
            {" "}
            <TiLocation />{" "}
          </h3>
          <p>Cocoa Board -Oposite taxi station</p>
        </div>
        <div className={styles.location}>
          <RiBusFill className={styles.bus} />
          <p className={styles.pickform}>
            Picking method depends on how the item is purchased.
          </p>
        </div>
      </div>
      <div className={styles.sepaerate}></div>
    </div>
  );
};

export default Page;
