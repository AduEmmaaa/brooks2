"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./shop2.module.css";
import {
  Addexpense,
  Addincome,
  Calender,
  MoneyRow,
  Table,
  Timer,
} from "@/component";
import { Statemanagement } from "../../../../../Context/Statemanagement";
import { RiExpandWidthLine } from "react-icons/ri";
import { IoIosCash } from "react-icons/io";

const Page = () => {
  const [income, setincome] = useState(true);

  const {
    setDaynumber,
    monthnumber,
    setMonthnumber,
    daynumber,
    allclementseat1,
    allclementseat1amount,
    allmichealseat2amount,
    allsarfoamountseat2,
    monthlyshop2,
    allshop2,
    allmichealseat2,
    allsarfoseat2,
    monthlyclementseat1,
    monthlyseat2micheal,
    monthlysarfoseat2,
    login,
    getallexpense,
    Expenseslist,
  } = useContext(Statemanagement);

  const handleexpense = () => {
    setincome(false);
  };
  const handleincome = () => {
    setincome(true);
  };

  useEffect(() => {
    getallexpense();
  }, [monthnumber]);

  //expense

  const allexpenseclement = Expenseslist.filter(
    (list, i) => list.person === "Emma"
  );
  const allexpenseclementamount = Expenseslist.filter(
    (list, i) => list.person === "Emma"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpensemicheal = Expenseslist.filter(
    (list, i) => list.person === "Sammy"
  );
  const allexpensemichealamount = Expenseslist.filter(
    (list, i) => list.person === "Sammy"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpensesarfo = Expenseslist.filter(
    (list, i) => list.person === "Miracle"
  );
  const allexpensesarfoamount = Expenseslist.filter(
    (list, i) => list.person === "Miracle"
  ).reduce((acc, curr) => acc + curr.price, 0);
  const allexpenshop = Expenseslist.filter(
    (list, i) => list.person === "Shop2"
  );
  const allexpenshopamount = Expenseslist.filter(
    (list, i) => list.person === "Shop2"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const shop2expense =
    allexpenshopamount +
    allexpensesarfoamount +
    allexpensemichealamount +
    allexpenseclementamount;
  const allexpenseshop2 = [
    ...allexpenseclement,
    ...allexpensemicheal,
    ...allexpensesarfo,
    ...allexpenshop,
  ];

  const dayExpenses = Array.from({ length: 31 }, (_, i) =>
    allexpenseshop2?.filter((l) => l.daynumber === i + 1)
  );
  return income ? (
    <div className={styles.adminstratorwrapper}>
      {/* <div className={styles.verytop}></div> */}
      <div className={styles.verytop2}>
        <div className={styles.verytop2}>
          <div className={income ? styles.incomediv : expensediv}>
            <IoIosCash />
            Income
          </div>

          <div
            className={income ? styles.expensediv : styles.incomediv}
            onClick={handleexpense}
          >
            <RiExpandWidthLine />
            Expense
          </div>
        </div>
      </div>
      {/* <div className={styles.timer}>
        <Timer daynumber={daynumber} setDaynumber={setDaynumber} />
      </div> */}
      <Calender
        setDaynumber={setDaynumber}
        monthnumber={monthnumber}
        setMonthnumber={setMonthnumber}
        daynumber={daynumber}
      />
      {login === 19550 && <Addincome type="shop2" />}
      <MoneyRow
        type="shop2"
        allsarfoseat2={allsarfoseat2}
        allclementseat1amount={allclementseat1amount}
        allmichealseat2amount={allmichealseat2amount}
        allsarfoamountseat2={allsarfoamountseat2}
        monthlyshop2={
          allclementseat1amount + allmichealseat2amount + allsarfoamountseat2
        }
      />
      <MoneyRow
        type="income2"
        monthlyclementseat1={monthlyclementseat1}
        monthlyseat2micheal={monthlyseat2micheal}
        monthlysarfoseat2={monthlysarfoseat2}
        monthlyshop2={monthlyshop2}
        monthshop2={
          monthlyclementseat1 + monthlyseat2micheal + monthlysarfoseat2
        }
      />

      <Table
        type="shop2"
        allshop2={allshop2}
        allclementseat1={allclementseat1}
        allmichealseat2={allmichealseat2}
        allsarfoseat2={allsarfoseat2}
      />
    </div>
  ) : (
    <div className={styles.adminstratorwrapper}>
      <div className={styles.verytop2}>
        <div
          className={income ? styles.incomediv : styles.expensediv}
          onClick={handleincome}
        >
          <IoIosCash onClick={handleincome} />
          Income
        </div>
        <div
          className={income ? styles.expensediv : styles.incomediv}
          onClick={handleexpense}
        >
          <RiExpandWidthLine onClick={handleexpense} />
          Expense
        </div>
      </div>
      <div className={styles.timer}>
        <Timer daynumber={daynumber} setDaynumber={setDaynumber} />
      </div>
      <div className={styles.calender}>
        <Calender
          setDaynumber={setDaynumber}
          monthnumber={monthnumber}
          setMonthnumber={setMonthnumber}
          daynumber={daynumber}
        />
      </div>

      <MoneyRow
        type="Expense2"
        allexpenseclementamount={allexpenseclementamount}
        allexpensemichealamount={allexpensemichealamount}
        allexpensesarfoamount={allexpensesarfoamount}
        allexpenshopamount={shop2expense}
      />

      <div className={styles.newexpense}>
        <Addexpense type="shop2" />
      </div>
      <div className={styles.table}>
        <Table type="clement2" allexpenseshop2={allexpenseshop2} />
      </div>
    </div>
  );
};

export default Page;
