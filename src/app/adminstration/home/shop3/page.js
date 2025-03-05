"use client";

import React, { useContext, useState } from "react";
import styles from "./shop3.module.css";
import { Statemanagement } from "../../../../../Context/Statemanagement";
import { Addexpense, Addincome, Calender, MoneyRow, Table, Timer } from "@/component";
import { IoIosCash } from "react-icons/io";
import { RiExpandWidthLine } from "react-icons/ri";

const Page = () => {
  const [income, setincome] = useState(true);

  const {
    setDaynumber,
    monthnumber,
    setMonthnumber,
    daynumber,
    allclementseat1amount3,
    allmichealamount3,
    allsarfoamountseat3,
    monthlyshop3,
    allshop3,
    dailytotal,
    setDailytotal,
    setDailyseat3,
    dailyseat3,
    allclementseat3,
    allmicheal3,
    allsarfoseat3,
    monthshop3,
    monthlyseat3micheal,
    monthlysarfoseat3,
    monthlyclementseat3,
    login,
    Expenseslist,
   
  } = useContext(Statemanagement);

  const handleexpense = () => {
    setincome(false);
  };
  const handleincome = () => {
    setincome(true);
  };

  const allexpenseclement = Expenseslist.filter(
    (list, i) => list.person === "Seat1"
  );
  const allexpensemicheal = Expenseslist.filter(
    (list, i) => list.person === "Seat2"
  );
  const allexpensesarfo = Expenseslist.filter(
    (list, i) => list.person === "Seat3"
  );
  const allexpenshop = Expenseslist.filter(
    (list, i) => list.person === "Shop3"
  );
  const allexpenseshop1 = [
    ...allexpenseclement,
    ...allexpensemicheal,
    ...allexpensesarfo,
    ...allexpenshop,
  ];

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
      <div className={styles.timer}>
        <Timer daynumber={daynumber} setDaynumber={setDaynumber} />
      </div>
      <Calender
        setDaynumber={setDaynumber}
        monthnumber={monthnumber}
        setMonthnumber={setMonthnumber}
        daynumber={daynumber}
      />
      {login != 7777 && <Addincome type="shop3" />}
      <MoneyRow
        type="shop3"
        allclementseat1amount3={allclementseat1amount3}
        allmichealamount3={allmichealamount3}
        allsarfoamountseat3={allsarfoamountseat3}
        monthlyshop3={monthlyshop3}
      />

      <MoneyRow
        type="income3"
        monthlyclementseat3={monthlyclementseat3}
        monthlyseat3micheal={monthlyseat3micheal}
        monthlysarfoseat3={monthlysarfoseat3}
        monthshop3={monthshop3}
      />

      <Table
        type="shop3"
        allshop3={allshop3}
        allclementseat3={allclementseat3}
        allmicheal3={allmicheal3}
        allsarfoseat3={allsarfoseat3}
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
      <div className={styles.calender}>
        <Calender
          setDaynumber={setDaynumber}
          monthnumber={monthnumber}
          setMonthnumber={setMonthnumber}
          daynumber={daynumber}
        />
      </div>
      <div className={styles.addnewexpense}>
        <Addexpense type="shop3" />
      </div>
      <div className={styles.table}>
        <Table type="clement" allexpenseshop1={allexpenseshop1} />
      </div>
    </div>
  );
};

export default Page;
