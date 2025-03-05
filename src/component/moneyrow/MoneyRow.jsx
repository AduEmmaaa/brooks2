import React, { useContext, useState } from "react";
import styles from "../../app/adminstration/home/income/income.module.css";
import { Statemanagement } from "../../../Context/Statemanagement";
import { IoMdArrowDropdown } from "react-icons/io";

const MoneyRow = ({
  type,
  allclementamount,
  allmichealamount,
  allsarfoamount,
  allshop1amount,
  monthlyclement,
  allmichealseat2amount,
  monthlyshop2,
  allsarfoamountseat2,
  allclementseat1amount3,
  allmichealamount3,
  allsarfoamountseat3,
  monthlyshop3,
  monthlymicheal,
  monthlysarfo,
  totalmonthlyforshop1,
  monthlyclementseat1,
  monthlyseat2micheal,
  monthlysarfoseat2,
  monthshop2,
  allclementseat3,
  monthlyclementseat3,
  monthlyseat3micheal,
  monthlysarfoseat3,
  monthshop3,
  allclementseat1amount,
  allsarfoseat2,
  //expense shope1
  allexpenseclementamount,
  allexpensemichealamount,
  allexpensesarfoamount,
  allexpenshopamount,
}) => {
  const {
    monthnumber,
    daynumber,
    setDailyseat3,
    dailyseat3,
    setDailyseat2,
    dailyseat2,
    setDailyseat1,
    dailyseat1,
    dailytotal,
    setDailytotal,
  } = useContext(Statemanagement);
  const handlesmallcard = () => {
    setDailytotal(true);
    setDailyseat3(false);
    setDailyseat2(false);
    setDailyseat1(false);
  };
  const handlesmallcardseat3 = () => {
    setDailyseat3(true);
    setDailyseat2(false);
    setDailyseat1(false);
    setDailytotal(false);
  };
  const handlesmallcardseat2 = () => {
    setDailyseat2(true);
    setDailyseat1(false);
    setDailyseat3(false);
    setDailytotal(false);
  };
  const handlesmallcardseat1 = () => {
    setDailyseat1(true);
    setDailyseat2(false);
    setDailyseat3(false);
    setDailytotal(false);
  };

  return (
    <div className={styles.rowmoney}>
      <div className={styles.date}>
        <h5 className={styles.dateletter}>
          {(type === "shop1" && `${daynumber} /${monthnumber} / 2025`) ||
            (type === "shop2" && `${daynumber} /${monthnumber} / 2025`) ||
            (type === "shop3" && `${daynumber} /${monthnumber} / 2025`) ||
            (type === "income1" && "New Generation") ||
            (type === "income2" && "Obeyeyie") ||
            (type === "income3" && "Manhia") ||
            (type === "Expense1" && "Cocoa Board Expenses") ||
            (type === "Expense2" && "Obeyeyie Expenses")}
        </h5>
      </div>
      <div className={styles.moneycard}>
        <div
          className={
            type === "income1" || type === "income2" || type === "income3"
              ? styles.smallcard
              : dailytotal
              ? styles.smallcardactive
              : styles.smallcard
          }
          onClick={handlesmallcard}
        >
          <p className={styles.moneycarhead}>
            {(type === "shop1" && "Today total") ||
              (type === "shop2" && "Today total") ||
              (type === "income1" && "Monthly ") ||
              (type === "income2" && "Monthly") ||
              (type === "income3" && "Monthly") ||
              (type === "shop3" && "Today total") ||
              (type === "Expense1" && "Total") ||
              (type === "Expense2" && "Total")}
          </p>
          <div
            className={
              type === "income1" || type === "income2" || type === "income3"
                ? styles.moneyround
                : dailytotal
                ? styles.moneyroundactive
                : styles.moneyround
            }
          >
            {/* <IoMdArrowDropdown className={styles.moneyicon} /> */}
            <i className={styles.cedis}>GH₵</i>
            <p
              className={
                dailytotal ? styles.actualmoneyactive : styles.actualmoney
              }
            >
              {(type === "shop1" && allshop1amount) ||
                (type === "shop2" && monthlyshop2) ||
                (type === "income1" && totalmonthlyforshop1) ||
                (type === "income2" && monthshop2) ||
                (type === "income3" && monthshop3) ||
                (type === "shop3" && monthlyshop3) ||
                (type === "Expense1" && allexpenshopamount) ||
                (type === "Expense2" && allexpenshopamount)}
            </p>
          </div>
        </div>
        <div
          className={
            type === "income1" || type === "income2" || type === "income3"
              ? styles.smallcard
              : dailyseat1
              ? styles.smallcardactive
              : styles.smallcard
          }
          onClick={handlesmallcardseat1}
        >
          {" "}
          <h1 className={styles.moneycarhead}>
            {(type === "shop1" && "Clement") ||
              (type === "shop2" && "Emma") ||
              (type === "income1" && "Clement") ||
              (type === "income2" && "Emma") ||
              (type === "income3" && "seat 1") ||
              (type === "shop3" && "seat 1") ||
              (type === "Expense1" && "Clement ") ||
              (type === "Expense2" && "Emma ")}
          </h1>
          <div
            className={
              type === "income1" || type === "income2" || type === "income3"
                ? styles.moneyround
                : dailyseat1
                ? styles.moneyroundactive
                : styles.moneyround
            }
          >
            {" "}
            {/* <IoMdArrowDropdown className={styles.moneyicon} /> */}
            <i className={styles.cedis}>GH₵</i>
            <p
              className={
                dailyseat1 ? styles.actualmoneyactive : styles.actualmoney
              }
            >
              {" "}
              {(type === "shop1" && allclementamount) ||
                (type === "income1" && monthlyclement) ||
                (type === "income2" && monthlyclementseat1) ||
                (type === "income3" && monthlyclementseat3) ||
                (type === "shop2" && allclementseat1amount) ||
                (type === "shop3" && allclementseat1amount3) ||
                (type === "Expense1" && allexpenseclementamount) ||
                (type === "Expense2" && allexpenseclementamount)}
            </p>
          </div>
        </div>
        <div
          className={
            type === "income1" || type === "income2" || type === "income3"
              ? styles.smallcard
              : dailyseat2
              ? styles.smallcardactive
              : styles.smallcard
          }
          onClick={handlesmallcardseat2}
        >
          {" "}
          <h1 className={styles.moneycarhead}>
            {(type === "shop1" && "Micheal") ||
              (type === "shop2" && "Sammy") ||
              (type === "income1" && "Micheal") ||
              (type === "income2" && "Sammy") ||
              (type === "income3" && "seat 2") ||
              (type === "shop3" && "seat 2") ||
              (type === "Expense1" && "Micheal") ||
              (type === "Expense2" && "Sammy")}
          </h1>
          <div
            className={
              type === "income1" || type === "income2" || type === "income3"
                ? styles.moneyround
                : dailyseat2
                ? styles.moneyroundactive
                : styles.moneyround
            }
          >
            {" "}
            {/* <IoMdArrowDropdown className={styles.moneyicon} /> */}
            <i className={styles.cedis}>GH₵</i>
            <p
              className={
                dailyseat2 ? styles.actualmoneyactive : styles.actualmoney
              }
            >
              {(type === "shop1" && allmichealamount) ||
                (type === "income1" && monthlymicheal) ||
                (type === "income2" && monthlyseat2micheal) ||
                (type === "income3" && monthlyseat3micheal) ||
                (type === "shop2" && allmichealseat2amount) ||
                (type === "shop3" && allmichealamount3) ||
                (type === "Expense1" && allexpensemichealamount) ||
                (type === "Expense2" && allexpensemichealamount)}
            </p>
          </div>
        </div>
        <div
          className={
            type === "income1" || type === "income2" || type === "income3"
              ? styles.smallcard
              : dailyseat3
              ? styles.smallcardactive
              : styles.smallcard
          }
          onClick={handlesmallcardseat3}
        >
          <h1 className={styles.moneycarhead}>
            {(type === "shop1" && "Kwame") ||
              (type === "shop2" && "Sarfo") ||
              (type === "income1" && "Seat 3") ||
              (type === "income2" && "Sarfo") ||
              (type === "income3" && "seat 3") ||
              (type === "shop3" && "seat 3") ||
              (type === "Expense1" && "Kwame") ||
              (type === "Expense2" && "Sarfo")}
          </h1>
          <div
            className={
              type === "income1" || type === "income2" || type === "income3"
                ? styles.moneyround
                : dailyseat3
                ? styles.moneyroundactive
                : styles.moneyround
            }
          >
            {/* <IoMdArrowDropdown className={styles.moneyicon} /> */}
            <i className={styles.cedis}>GH₵</i>
            <p
              className={
                dailyseat3 ? styles.actualmoneyactive : styles.actualmoney
              }
            >
              {(type === "shop1" && allsarfoamount) ||
                (type === "income1" && monthlysarfo) ||
                (type === "income2" && monthlysarfoseat2) ||
                (type === "income3" && monthlysarfoseat3) ||
                (type === "shop2" && allsarfoamountseat2) ||
                (type === "shop3" && allsarfoamountseat3) ||
                (type === "Expense1" && allexpensesarfoamount) ||
                (type === "Expense2" && allexpensesarfoamount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyRow;
