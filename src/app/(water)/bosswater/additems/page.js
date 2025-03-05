"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "../boss.module.css";
import { Calender, WaterInput } from "@/component";
import { Statemanagement } from "../../../../../Context/Statemanagement";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaDoorClosed, FaList } from "react-icons/fa";

const Page = () => {
  const [instock, setinstock] = useState([]);
  const [instock2, setinstock2] = useState([]);
  const [instocktable, setinstocktable] = useState(false);
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
    setinstock2(result?.msg2);
  };

  const shop1Items = dailysales?.filter((item) => item.shop === "shop1");
  const shop2Items = dailysales?.filter((item) => item.shop === "shop2");

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
  const total2 = instock2?.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );


  const totalshop1 = shop1Items?.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  const totalshop2 = shop2Items?.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );



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

  const handledelet2 = async (list) => {
    setDelecting(true);
    const res = await fetch(`/api/water/finditems2/${list.id}`);
    const result = await res.json();
    getwaters();
    setDelecting(true);
    alert(result?.msg);
  };

  const [board, setboard] = useState(false);
  const [beyeyie, setbeyeyie] = useState(false);

  const handlecocoaboard = () => {
    setboard(true);
    setbeyeyie(false);
  };

  const handleobeyeyie = () => {
    setbeyeyie(true);
    setboard(false);
  };

  return (
    <div className={styles.Addwaterwrapper}>
      <div className={styles.toparrows}>
        <div className={styles.back1} onClick={() => router.push("/bosswater")}>
          <IoArrowBack className={styles.back} /> Alafia
        </div>
        <div
          className={styles.back1}
          onClick={() => router.push("/shop2bosswater")}
        >
          <IoArrowForward className={styles.back} /> Obeyeyie
        </div>
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
          <h5>Alafia</h5>
          <div className={styles.round}>
            <h5> GH₵ </h5> <h4> {total}</h4>
          </div>
    
        </div>
        <div className={styles.cover}>
          <h5>Obeyeyie</h5>
          <div className={styles.round}>
            <h5> GH₵ </h5> <h4> {total2}</h4>
          </div>
    
        </div>
        <div className={styles.cover}>
          <h5>A-sales</h5>
          <div className={styles.round}>
            <h5> GH₵ </h5> <h4> {totalshop1}</h4>
          </div>
        </div>
        <div className={styles.cover}>
          <h5>O-sales</h5>
          <div className={styles.round}>
            <h5> GH₵ </h5> <h4> {totalshop2}</h4>
          </div>
        </div>
      </div>

      <div className={styles.aftercalender}>
        <div className={styles.adddivholder}>
          <div className={styles.adddiv}>
            <WaterInput
              type="AddNewwater"
              getdaysale={getdaysale}
              getwaterforall={getwaters}
              shop="shop1"
            />
          </div>

          <div className={styles.adddiv}>
            <WaterInput
              type="AddNewwater"
              getdaysale={getdaysale}
              getwaterforall={getwaters}
              shop="shop2"
            />
          </div>
        </div>
        <div className={styles.instocklist}>
          <div
            className={styles.addbtn}
            onClick={() => setinstocktable((pre) => !pre)}
          >
            {instocktable ? (
              <>
                <FaList className={styles.plus} />
              </>
            ) : (
              <>
                <FaDoorClosed className={styles.plus} />
              </>
            )}
          </div>
          <div className={styles.choose}>
            <button
              className={board ? styles.btn2 : styles.btn}
              onClick={handlecocoaboard}
            >
              Cocoa-Board
            </button>
            <button
              className={beyeyie ? styles.btn2 : styles.btn}
              onClick={handleobeyeyie}
            >
              Obeyeyie
            </button>
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
            {(board &&
              instock?.map((list, i) => {
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
              })) ||
              (beyeyie &&
                instock2?.map((list, i) => {
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
                              onClick={() => handledelet2(list)}
                            >
                              {delecting ? "delect..." : "delete"}
                            </button>
                          </>
                        )}
                      </ul>
                    </div>
                  );
                }))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
