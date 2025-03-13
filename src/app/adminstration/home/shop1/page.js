"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "../income/income.module.css";
import {
  Addexpense,
  Addincome,
  Calender,
  Loading,
  MoneyRow,
  Table,
  Timer,
} from "@/component";
import { Statemanagement } from "../../../../../Context/Statemanagement";
import { IoIosCash } from "react-icons/io";
import { RiExpandWidthLine } from "react-icons/ri";

const Page = () => {
  const [income, setincome] = useState(true);
  const {
    setDaynumber,
    monthnumber,
    setMonthnumber,
    daynumber,
    allclementamount,
    allmichealamount,
    allsarfoamount,
    allshop1amount,
    monthlyclement,
    allclement,
    allmicheal,
    allsarfo,
    allshop1,
    totalmonthlyforshop1,
    monthlymicheal,
    monthlysarfo,
    login,
    Expenseslist,
    load,
    getallexpense,
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

  const allexpenseclement = Expenseslist.filter(
    (list, i) => list.person === "Clement"
  );
  //expensamount
  const allexpenseclementamount = Expenseslist.filter(
    (list, i) => list.person === "Clement"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpensemicheal = Expenseslist.filter(
    (list, i) => list.person === "Micheal"
  );

  //expense ammount
  const allexpensemichealamount = Expenseslist.filter(
    (list, i) => list.person === "Micheal"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpensesarfo = Expenseslist.filter(
    (list, i) => list.person === "Kwame"
  );
  const allexpensesarfoamount = Expenseslist.filter(
    (list, i) => list.person === "Kwame"
  ).reduce((acc, curr) => acc + curr.price, 0);
  const allexpenshop = Expenseslist.filter((list, i) => list.person === "Shop");
  const allexpenshopamount = Expenseslist.filter(
    (list, i) => list.person === "Shop"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpenseshop1 = [
    ...allexpenseclement,
    ...allexpensemicheal,
    ...allexpensesarfo,
    ...allexpenshop,
  ];

  const totalexpenseshope1 =
    allexpenshopamount +
    allexpensesarfoamount +
    allexpensemichealamount +
    allexpenseclementamount;

  const dayExpenses = Array.from({ length: 31 }, (_, i) =>
    allexpenseshop1?.filter((l) => l.daynumber === i + 1)
  );

  return income ? (
    <div className={styles.adminstratorwrapper}>
      {/* <div className={styles.verytop}></div> */}
      <div className={styles.verytop2}>
        <div className={styles.incomediv}>
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
      {/* <div className={styles.timer}>
        <Timer daynumber={daynumber} setDaynumber={setDaynumber} />
      </div> */}
      <Calender
        setDaynumber={setDaynumber}
        monthnumber={monthnumber}
        setMonthnumber={setMonthnumber}
        daynumber={daynumber}
      />
      {login === 9994 && <Addincome type="shop1" />}

      <MoneyRow
        type="shop1"
        allclementamount={allclementamount}
        allmichealamount={allmichealamount}
        allsarfoamount={allsarfoamount}
        allshop1amount={allshop1amount}
      />

      <MoneyRow
        type="income1"
        totalmonthlyforshop1={totalmonthlyforshop1}
        monthlyclement={monthlyclement}
        monthlymicheal={monthlymicheal}
        monthlysarfo={monthlysarfo}
      />

      <Table
        type="shop1"
        allshop1={allshop1}
        allclement={allclement}
        allmicheal={allmicheal}
        allsarfo={allsarfo}
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

      <MoneyRow
        type="Expense1"
        allexpenshopamount={totalexpenseshope1}
        allexpenseclementamount={allexpenseclementamount}
        allexpensemichealamount={allexpensemichealamount}
        allexpensesarfoamount={allexpensesarfoamount}
      />

      <div className={styles.addexpense}>
        <Addexpense type="shop1" />
      </div>
      <div className={styles.table}>
        {load ? (
          <Loading />
        ) : (
          <Table type="clement" allexpenseshop1={allexpenseshop1} />
        )}{" "}
      </div>
    </div>
  );
};

export default Page;
