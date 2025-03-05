"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "../boss.module.css";
import { Calender, WaterInput } from "@/component";
import { Statemanagement } from "../../../../../Context/Statemanagement";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaDoorClosed, FaList } from "react-icons/fa";

const Page = () => {
  const [instock, setinstock] = useState([]);
  const [instocktable, setinstocktable] = useState(true);
  const [clickedinstockitem, setclickinstockitem] = useState({});
  const [dailysales, setdailysales] = useState([]);
  const [delecting, setDelecting] = useState(false);
  const router = useRouter();
  const { daynumber, setMonthnumber, monthnumber, setDaynumber } =
    useContext(Statemanagement);

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
  }, [instocktable]);

  const total = instock?.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  const dailytotal = dailysales
    ?.filter((l) => l.daynumber === daynumber)
    .reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  const handleinstockclick = (list, i) => {
    setclickinstockitem(list);
  };

  const handledelet = async (list) => {
    setDelecting(true);
    const res = await fetch(`/api/water/finditems/${list.id}`);
    const result = await res.json();
    getwaters();
    setDelecting(true);
    alert(result?.msg);
  };

  return (
    <div className={styles.Addwaterwrapper}>
      <div className={styles.back1} onClick={() => router.push("/bosswater")}>
        <IoArrowBack className={styles.back} /> shop kepper
      </div>

      <div className={styles.calender}>
        <Calender
          setDaynumber={setDaynumber}
          monthnumber={monthnumber}
          setMonthnumber={setMonthnumber}
          daynumber={daynumber}
        />
      </div>
      <div className={styles.money}>
        <div className={styles.cover}>
          <h5>Stock total</h5>
          <div className={styles.round}>
            <h5> GH₵ </h5> <h4> {total}</h4>
          </div>
        </div>
        <div className={styles.cover}>
          <h5>Today {daynumber}</h5>
          <div className={styles.round}>
            <h5> GH₵ </h5> <h4> {dailytotal}</h4>
          </div>
        </div>
      </div>

      <div className={styles.aftercalender}>
        <div className={styles.adddiv}>
          <WaterInput
            type="AddNewwater"
            getdaysale={getdaysale}
            getwaterforall={getwaters}
          />
        </div>
        <div className={styles.instocklist}>
          <div
            className={styles.addbtn}
            onClick={() => setinstocktable((pre) => !pre)}
          >
            {instocktable ? (
              <FaList className={styles.plus} />
            ) : (
              <FaDoorClosed className={styles.plus} />
            )}{" "}
            <p className={styles.instockname}>Stock Table</p>
          </div>
        </div>
        {instocktable && (
          <div className={styles.stocktable}>
            <div className={styles.trow}>
              <ul className={styles.list}>
                <li className={styles.li11}>i</li>
                <li className={styles.li22}>Name</li>
                <li className={styles.li33}>S</li>
                <li className={styles.li44}>Q</li>
                <li className={styles.li55}>Price </li>
                <li className={styles.li66}>Total </li>
              </ul>
            </div>
            {instock?.map((list, i) => {
              return (
                <div className={styles.trow} key={i}>
                  <ul
                    className={styles.list2}
                    onClick={() => handleinstockclick(list, i)}
                  >
                    <li className={styles.li1}>{i + 1}</li>
                    <li className={styles.li2}>{list.name}</li>
                    <li className={styles.li3}>{list.size}</li>
                    {!(clickedinstockitem.id === list.id) ? (
                      <>
                        <li className={styles.li4}> {list.quantity}</li>
                        <li className={styles.li5}>GH₵ {list.price}</li>
                        <li className={styles.li6}>
                          GH₵ {list.price * list.quantity}
                        </li>
                      </>
                    ) : (
                      <>
                        <button
                          className={styles.delectbtn}
                          onClick={() => handledelet(list)}
                        >
                          {delecting ? "delect..." : "delete"}
                        </button>
                      </>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
