"use client";
import { Item } from "../../../../selling.json";

import React, { useContext, useEffect, useState } from "react";
import styles from "./boss.module.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Statemanagement } from "../../../../Context/Statemanagement";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { WaterInput } from "@/component";
const Page = () => {
  const [mtn, setmtn] = useState(false);
  const [water, setwater] = useState(true);
  const [instock, setinstock] = useState([]);
  const [dailysales, setdailysales] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const { daynumber, setDaynumber } = useContext(Statemanagement);

  const handlemtn = () => {
    setmtn(true);
    setwater(false);
  };
  const handlewater = () => {
    setwater(true);
    setmtn(false);
    setrefresh((pre) => !pre);
  };

  const getwaters = async () => {
    const res = await fetch("/api/water/finditems");
    const result = await res.json();
    setinstock(result?.msg);
  };

  const getdaysale = async () => {
    const res = await fetch("/api/water/daysale/daysalefindall");
    const result = await res.json();
    setdailysales(result?.msg);
  };
  useEffect(() => {
    getwaters();
    getdaysale();
  }, [refresh]);

  async function delettheone(list) {
    try {
      const res = await fetch(`/api/water/daysale/${list.id}`);
      const result = await res.json();
      getwaters();
      getdaysale();
    } catch (error) {
      console.log(error);
    }
  }

  const shop1Items = instock?.filter((item) => item.shop === "shop1");
  const daiisal = dailysales?.filter((item) => item.shop === "shop1");

  const dailyamount = daiisal.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div className={styles.waterlogin}>
      <div className={styles.tabs}>
        <div className={mtn ? styles.momo : styles.onemomo} onClick={handlemtn}>
          shop 1
        </div>
        <div
          className={water ? styles.waterone : styles.onewater}
          onClick={handlewater}
        >
          Products
        </div>
      </div>
      {(water && (
        <div className={styles.water}>
          <div className={styles.top}>
            <div className={styles.totalcash}>
              <h4>Total Balance</h4>
              <h1 className={styles.span}>GH₵ {dailyamount}</h1>
            </div>
          </div>
          <div className={styles.top}>
            <div className={styles.container}>
              {shop1Items?.map((list, i) => (
                <div className={styles.container1} key={1}>
                  <div className={styles.headerwrapper}>
                    <h3 className={styles.itemname}>{list.name}</h3>
                    <h3 className={styles.itemsize}>{list.size}</h3>
                  </div>
                  <div className={styles.sold}>
                    <div className={styles.each}>
                      <h4 className={styles.si}>Total</h4>
                      <p>{list.quantity + list.sold}</p>
                    </div>
                    <div className={styles.each}>
                      <h4 className={styles.si}>Left</h4>
                      <p>{list.quantity}</p>
                    </div>
                    <div className={styles.each}>
                      <h4 className={styles.si}>sold</h4>
                      <p>{list.sold}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <WaterInput
            type="watersale"
            shop="shop1"
            itemitem={shop1Items}
            getwater={getwaters}
            getdaysale={getdaysale}
          />
          <div className={styles.table}>
            <div className={styles.ha}>
              <h4>Today , November {daynumber}</h4>
              <div className={styles.arrow}>
                <FaArrowAltCircleLeft
                  className={styles.icon}
                  onClick={() => setDaynumber(daynumber - 1)}
                />
                <FaArrowAltCircleRight
                  className={styles.icon}
                  onClick={() => setDaynumber(daynumber + 1)}
                />
              </div>
            </div>

            <div className={styles.tableheader}>
              <h2 className={styles.t111}>
                <RiDeleteBin2Line />
              </h2>
              <h2 className={styles.t1}>i</h2>
              <h2 className={styles.t112}> Name</h2>
              <h2 className={styles.t1}>size</h2>
              <h2 className={styles.t1}>Quantity</h2>
              <h2 className={styles.t1}>price </h2>
            </div>
            {daiisal?.map((list, i) => {
              return (
                <>
                  <div className={styles.tableheader1}>
                    <h2
                      className={styles.t111}
                      onClick={() => delettheone(list)}
                    >
                      <RiDeleteBin2Line />
                    </h2>
                    <h2 className={styles.t11}>{i + 1}</h2>
                    <h2 className={styles.t113}> {list.name}</h2>
                    <h2 className={styles.t11}>{list.size}</h2>
                    <h2 className={styles.t11}>{list.quantity}</h2>
                    <h2 className={styles.t11}>
                      GH₵ {list.quantity * list.price}
                    </h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )) ||
        (mtn && (
          <>
            <h1>For Shop 1</h1>
          </>
        ))}
    </div>
  );
};

export default Page;
