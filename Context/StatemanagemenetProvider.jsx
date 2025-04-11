"use client";

import { useEffect, useState } from "react";
import moment from "moment";

const { Statemanagement } = require("./Statemanagement");

const StatemanagementProvider = ({ children }) => {
  //pincode
  const [pin, setPin] = useState();
  const [login, setlogin] = useState();

  //loading state
  const [loading, setLoading] = useState(false);

  //open sidebar
  const [opensidebar, setOpensidebar] = useState(false);

  //new income state
  const [service, setService] = useState("");
  const [person, setPerson] = useState("");
  const [time, setTime] = useState("");
  const [amount, setAmount] = useState();

  const getdaynumber = async () => {
    if (!monthnumber) { // Only set if it's not already set
      const currentDate = moment();
      setMonthnumber(parseInt(currentDate.format("M"), 10));
    }
  
    const currentDate = moment();
    setDaynumber(parseInt(currentDate.format("D"), 10));
  };
    const [monthnumber, setMonthnumber] = useState();
    const [daynumber, setDaynumber] = useState();
  
  //table
  const [allincome, setAllincome] = useState([]);
  const [allsuccess, setAllsuccess] = useState([]);

  const getallincome = async () => {
    const res = await fetch("/api/alldecember");
    const result = await res.json();
    const alldecembe = result?.msg.filter(
      (list) => list.monthnumber === monthnumber
    );
    setAllincome(alldecembe);
  };

  useEffect(() => {
   
    getdaynumber().then(() => getallincome());

  }, [monthnumber]);

  // function for all about shop1
  function getPersonData(daynumber, person) {
    return allincome.filter(
      (l) => l.person === person && l.daynumber === daynumber
    );
  }
  //daily seat1
  const allclement = getPersonData(daynumber, "A");
  const allclementamount = allclement.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  //daily seat1 shop2
  const allclementseat1 = getPersonData(daynumber, "Emma");
  const allclementseat1amount = allclementseat1.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  //daily seat1 shop3
  const allclementseat3 = getPersonData(daynumber, "Yes1");
  const allclementseat1amount3 = allclementseat3.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  //monthly clement & shop1
  const monthlyclement = allincome
    .filter((item) => item.person === "A")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const monthlyclementseat1 = allincome
    .filter((item) => item.person === "Emma")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const monthlyclementseat3 = allincome
    .filter((item) => item.person === "Yes1")
    .reduce((acc, curr) => acc + curr.amount, 0);

  //daily shop2s
  const allmichealseat2 = getPersonData(daynumber, "Sammy");
  const allmichealseat2amount = allmichealseat2.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const allmicheal = getPersonData(daynumber, "B");
  const allmichealamount = allmicheal.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  //shop3 for mich
  const allmicheal3 = getPersonData(daynumber, "Yes2");
  const allmichealamount3 = allmicheal3.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  //monthly micheal and seat2
  const monthlymicheal = allincome
    .filter((item) => item.person === "B")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const monthlyseat2micheal = allincome
    .filter((item) => item.person === "Sammy")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const monthlyseat3micheal = allincome
    .filter((item) => item.person === "Yes2")
    .reduce((acc, curr) => acc + curr.amount, 0);

  //daily
  const allsarfo = getPersonData(daynumber, "C");
  const allsarfoamount = allsarfo.reduce((acc, curr) => acc + curr.amount, 0);
  //daily shop2
  const allsarfoseat2 = getPersonData(daynumber, "B");
  const allsarfoamountseat2 = allsarfoseat2.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  //daily shop2
  const allsarfoseat3 = getPersonData(daynumber, "Yes3");
  const allsarfoamountseat3 = allsarfoseat3.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  //monthly monthly sarfo
  const monthlysarfo = allincome
    .filter((item) => item.person === "C")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const monthlysarfoseat2 = allincome
    .filter((item) => item.person === "Miracle")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const monthlysarfoseat3 = allincome
    .filter((item) => item.person === "Yes3")
    .reduce((acc, curr) => acc + curr.amount, 0);

  //all array for shop 1
  const allshop1 = [...allclement, ...allmicheal, ...allsarfo];
  const allshop1amount = allshop1.reduce((acc, curr) => acc + curr.amount, 0);

  //all array for shop 1
  const allshop2 = [...allclementseat1, ...allmichealseat2, ...allsarfoseat2];
  const allshop2amount = allshop1.reduce((acc, curr) => acc + curr.amount, 0);

  //all shop 2
  const allshop3 = [...allclementseat3, ...allmicheal3, ...allsarfoseat3];
  const allshop3amount = allshop3.reduce((acc, curr) => acc + curr.amount, 0);

  //monly for all shop1
  const totalmonthlyforshop1 = monthlyclement + monthlysarfo + monthlymicheal;
  const monthlyshop2 =
    allmichealseat2amount + allmichealseat2amount + allsarfoamountseat2;
  const monthlyshop3 =
    allclementseat1amount3 + allmichealamount3 + allsarfoamountseat3;

  //monthly for shop 3
  const monthshop3 =
    monthlyclementseat3 + monthlyseat3micheal + monthlysarfoseat3;

  //shope3 daiilytotal
  const [dailytotal, setDailytotal] = useState(true);
  const [dailyseat3, setDailyseat3] = useState(false);
  const [dailyseat2, setDailyseat2] = useState(false);
  const [dailyseat1, setDailyseat1] = useState(false);

  ///expense
  //expense
  const [Expenseslist, setExpenseList] = useState([]);
  const [load, setload] = useState(false);
  const getallexpense = async () => {
    try {
      setload(true);
      const res = await fetch("/api/newincome/allexpense");
      const result = await res.json();

      // Filter the expenses for the specified month
      const filteredExpenses = result?.msg.filter(
        (list) => list.monthnumber === monthnumber
      );


      // Update the state with the filtered expenses
      setExpenseList(filteredExpenses);
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    } finally {
      setload(false); // Always reset the loading state
    }
  };

  return (
    <Statemanagement.Provider
      value={{
        getallexpense,
        Expenseslist,
        setExpenseList,
        load,
        setload,
        setDailyseat3,
        dailyseat3,
        setDailyseat1,
        dailyseat1,
        setDailyseat2,
        dailyseat2,
        opensidebar,
        setOpensidebar,
        monthnumber,
        setMonthnumber,
        daynumber,
        setDaynumber,
        service,
        setService,
        person,
        setPerson,
        time,
        setTime,
        amount,
        setAmount,
        loading,
        setLoading,
        allincome,
        getallincome,
        allsuccess,
        allclementamount,
        allmichealamount,
        allshop1amount,
        allshop1,
        allshop1amount,
        monthlyclement,
        monthlymicheal,
        monthlysarfo,
        monthlysarfoseat2,
        monthlyseat2micheal,
        monthlyclementseat1,
        monthlyshop2,
        allclementseat1,
        allsarfoamount,
        allclementseat1amount,
        allmichealseat2amount,
        allsarfoamountseat2,
        allclementseat1amount3,
        allmichealamount3,
        allsarfoamountseat3,
        monthlyshop3,
        totalmonthlyforshop1,
        allclementseat3,
        monthlyclementseat3,
        monthlyseat3micheal,
        monthlysarfoseat3,
        allshop3,
        monthshop3,
        allshop2,
        dailytotal,
        setDailytotal,
        allclement,
        allmicheal,
        allsarfo,
        allmichealseat2,
        allclementseat3,
        allmicheal3,
        allsarfoseat3,
        allsarfoseat2,
        loading,
        pin,
        setPin,
        login,
        setlogin,
      }}
    >
      {children}
    </Statemanagement.Provider>
  );
};

export default StatemanagementProvider;
