"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./income.module.css";
import { Statemanagement } from "../../../../../Context/Statemanagement";
import { Calender, Loading, MoneyRow, Table, Timer } from "@/component";

const Page = () => {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [apointed, setapointed] = useState([]);
  const {
    monthnumber,
    setMonthnumber,
    daynumber,
    setDaynumber,
    getallincome,
    loading,

    monthlyclement,
    monthlymicheal,
    monthlysarfo,
    monthlyshop1,
    monthlysarfoseat2,
    monthlyseat2micheal,
    monthlyclementseat1,
    monthlyshop2,
    totalmonthlyforshop1,

    monthlyclementseat3,
    monthlyseat3micheal,
    monthlysarfoseat3,
    monthshop3,
    allshop1,
    allclement,
    allmicheal,
    allsarfo,
    allshop2,
    allclementseat1,
    allmichealseat2,
    allsarfoseat2,
    getallexpense,
    Expenseslist,
  } = useContext(Statemanagement);

  const getallapoint = async () => {
    const res = await fetch("/api/bookings/allapointment");
    const result = await res.json();
    setapointed(result.msg);
  };

  useEffect(() => {
    //all income
    getallincome();

    //all expense
    getallexpense();

    //all
    getallapoint();
  }, [monthnumber]);

  const allexpenseclementamount1 = Expenseslist.filter(
    (list, i) => list.person === "Emma"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpensemichealamount1 = Expenseslist.filter(
    (list, i) => list.person === "Sammy"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpensesarfoamount1 = Expenseslist.filter(
    (list, i) => list.person === "Miracle"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const allexpenshopamount1 = Expenseslist.filter(
    (list, i) => list.person === "Shop2"
  ).reduce((acc, curr) => acc + curr.price, 0);

  const shop2expense =
    allexpenshopamount1 +
    allexpensesarfoamount1 +
    allexpensemichealamount1 +
    allexpenseclementamount1;

  //clement expense
  const allexpenseclementamount = Expenseslist.filter(
    (list, i) => list.person === "Clement"
  ).reduce((acc, curr) => acc + curr.price, 0);
  //micheal expense
  const allexpensemichealamount = Expenseslist.filter(
    (list, i) => list.person === "Micheal"
  ).reduce((acc, curr) => acc + curr.price, 0);
  //sarfo expense
  const allexpensesarfoamount = Expenseslist.filter(
    (list, i) => list.person === "Kwame"
  ).reduce((acc, curr) => acc + curr.price, 0);

  //expense for shop
  const allexpenshopamount = Expenseslist.filter(
    (list, i) => list.person === "Shop"
  ).reduce((acc, curr) => acc + curr.price, 0);

  //total expense
  const totalexpenseshope1 =
    allexpenshopamount +
    allexpensesarfoamount +
    allexpensemichealamount +
    allexpenseclementamount;

  const shop2length = allshop2.length;
  const shop1length = allshop1.length;
  let itemsWithDye = allshop1.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });
  let itemsWithDye2 = allshop2.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });

  const allclementmonth = allshop1.filter((l) => l.person === "Clement");
  const allmichealmonth = allshop1.filter((l) => l.person === "Micheal");
  const allsarfomonth = allshop1.filter((l) => l.person === "Kwame");
  const allEmmafomonth = allshop2.filter((l) => l.person === "Emma");
  const allSammymonth = allshop2.filter((l) => l.person === "Sammy");
  const allMiraclemonth = allshop2.filter((l) => l.person === "Miracle");
  let itemsWithDye3 = allclementmonth.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });
  let itemsWithDye4 = allmichealmonth.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });
  let itemsWithDye5 = allsarfomonth.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });
  let itemsWithDye6 = allEmmafomonth.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });
  let itemsWithDye7 = allSammymonth.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });
  let itemsWithDye8 = allMiraclemonth.filter((item) => {
    // Assuming item is an object and you need to check its properties
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes("dye")
    );
  });

  const withdye = itemsWithDye.length;
  const withdye2 = itemsWithDye2.length;
  const allclementmonthlist = allclementmonth.length;
  const allmichealmonthlist = allmichealmonth.length;
  const allsarfomonthlist = allsarfomonth.length;
  const allemmamonthlist = allEmmafomonth.length;
  const allsammymonthlist = allSammymonth.length;
  const allMiraclemonthlist = allMiraclemonth.length;
  const clementdye = itemsWithDye3.length;
  const michealdye = itemsWithDye4.length;
  const sarfodye = itemsWithDye5.length;
  const emmadye = itemsWithDye6.length;
  const sammydye = itemsWithDye7.length;
  const miracledye = itemsWithDye8.length;
  return (
    <div className={styles.incomewrapper}>
      {/* <div className={styles.verytop}></div>
      <div className={styles.verytop2}></div> */}
      {/* <div className={styles.timer}>
        <Timer daynumber={daynumber} setDaynumber={setDaynumber} />
      </div> */}
      <Calender
        setDaynumber={setDaynumber}
        monthnumber={monthnumber}
        setMonthnumber={setMonthnumber}
        daynumber={daynumber}
      />
      <div className={styles.moneey}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <MoneyRow
              type="income1"
              totalmonthlyforshop1={totalmonthlyforshop1}
              monthlyclement={monthlyclement}
              monthlymicheal={monthlymicheal}
              monthlysarfo={monthlysarfo}
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
            <MoneyRow
              type="income3"
              monthlyclementseat3={monthlyclementseat3}
              monthlyseat3micheal={monthlyseat3micheal}
              monthlysarfoseat3={monthlysarfoseat3}
              monthshop3={monthshop3}
            />
          </>
        )}
      </div>
      <div className={styles.table}>
        <h2 className={styles.topic}>Details on Tables for Cocoa Board</h2>
        <div className={styles.twobox}>
          <div
            className={A ? styles.forAactive : styles.forA}
            onClick={() => {
              setA((pre) => !pre);
              setB(false);
            }}
          >
            <h3 className={styles.head}>Cocoa Board</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{shop1length}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{withdye}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>{shop1length - withdye}</h2>
              </div>
            </div>
          </div>
        </div>
        {A && (
          <Table
            type="shop1"
            allshop1={allshop1}
            allclement={allclement}
            allmicheal={allmicheal}
            allsarfo={allsarfo}
          />
        )}
        <div className={styles.twobox}>
          <div className={styles.forA}>
            <h3 className={styles.head}>Clement</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{allclementmonthlist}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{clementdye}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>
                  {allclementmonthlist - clementdye}
                </h2>
              </div>
            </div>
          </div>
          <div
            className={styles.forA}
            // onClick={() => {
            //   setB((pre) => !pre);
            //   setA(false);
            // }}
          >
            <h3 className={styles.head}>Micheal</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{allmichealmonthlist}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{michealdye}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>
                  {allmichealmonthlist - michealdye}
                </h2>
              </div>
            </div>
          </div>
          <div
            className={styles.forA}
            // onClick={() => {
            //   setB((pre) => !pre);
            //   setA(false);
            // }}
          >
            <h3 className={styles.head}>Kwame</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{allsarfomonthlist}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{sarfodye}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>
                  {allsarfomonthlist - sarfodye}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for shop2 */}
      <div className={styles.table}>
        <h2 className={styles.topic}>Details on Tables for Obeyeyie</h2>
        <div className={styles.twobox}>
          <div
            className={B ? styles.forAactive : styles.forA}
            onClick={() => {
              setB((pre) => !pre);
              setA(false);
            }}
          >
            <h3 className={styles.head}>Obeyeyie</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{shop2length}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{withdye2}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>{shop2length - withdye2}</h2>
              </div>
            </div>
          </div>
        </div>

        {B && (
          <Table
            type="shop2"
            allshop2={allshop2}
            allclementseat1={allclementseat1}
            allmichealseat2={allmichealseat2}
            allsarfoseat2={allsarfoseat2}
          />
        )}

        <div className={styles.twobox}>
          <div className={styles.forA}>
            <h3 className={styles.head}>Emma</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{allemmamonthlist}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{emmadye}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>
                  {allemmamonthlist - emmadye}
                </h2>
              </div>
            </div>
          </div>
          <div
            className={styles.forA}
            // onClick={() => {
            //   setB((pre) => !pre);
            //   setA(false);
            // }}
          >
            <h3 className={styles.head}>Sammy</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{allsammymonthlist}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{sammydye}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>
                  {allsammymonthlist - sammydye}
                </h2>
              </div>
            </div>
          </div>
          <div
            className={styles.forA}
            // onClick={() => {
            //   setB((pre) => !pre);
            //   setA(false);
            // }}
          >
            <h3 className={styles.head}>Sarfo</h3>
            <div className={styles.box}>
              <div>
                cust
                <h2 className={styles.customers}>{allMiraclemonthlist}</h2>
              </div>
              <div>
                +dye
                <h2 className={styles.customers}>{miracledye}</h2>
              </div>
              <div>
                Nodye
                <h2 className={styles.customers}>
                  {allMiraclemonthlist - miracledye}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pay}>
        <h2 className={styles.topic}>Payment</h2>.
        <div className={styles.one}>
          <div className={styles.eachpay}>
            <p>Clement</p>
            <div className={styles.amount}>
              GH {parseInt(monthlyclement / 3)}
            </div>
          </div>
          <div className={styles.eachpay}>
            <p>Micheal</p>
            <div className={styles.amount}>
              GH {parseInt(monthlymicheal / 3)}
            </div>
          </div>
          <div className={styles.eachpay}>
            <p>Kwame</p>
            <div className={styles.amount}>
              {" "}
              GH {parseInt(monthlysarfo / 3)}
            </div>
          </div>
          <div className={styles.eachpay}>
            <p>Emma</p>
            <div className={styles.amount}>
              GH {parseInt(monthlyclementseat1 / 3)}
            </div>
          </div>
          <div className={styles.eachpay}>
            <p>Sammy</p>
            <div className={styles.amount}>
              GH {parseInt(monthlyseat2micheal / 3)}
            </div>
          </div>
          <div className={styles.eachpay}>
            <p>Sarfo</p>
            <div className={styles.amount}>
              GH {parseInt(monthlysarfoseat2 / 3)}
            </div>
          </div>
        </div>
      </div>
      <MoneyRow
        type="Expense1"
        allexpenshopamount={totalexpenseshope1}
        allexpenseclementamount={allexpenseclementamount}
        allexpensemichealamount={allexpensemichealamount}
        allexpensesarfoamount={allexpensesarfoamount}
      />

      <MoneyRow
        type="Expense2"
        allexpenseclementamount={allexpenseclementamount1}
        allexpensemichealamount={allexpensemichealamount1}
        allexpensesarfoamount={allexpensesarfoamount1}
        allexpenshopamount={shop2expense}
      />

      <div className={styles.apointment}>
        <div className={styles.beforlist}>
          <li className={styles.listitem1}>Name</li>
          <li className={styles.listitem1}>Phone</li>
          <li className={styles.listitem1}>stylist</li>
          <li className={styles.listitem1}>date</li>
        </div>
        {apointed.map((list, i) => {
          return (
            <div className={styles.haha} key={i}>
              <h5 className={styles.listitem1}>{list.name}</h5>
              <h5 className={styles.listitem1}>{list.phone}</h5>
              <h5 className={styles.listitem1}>{list.stylist}</h5>
              <h5 className={styles.listitem1}>{list.date}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
