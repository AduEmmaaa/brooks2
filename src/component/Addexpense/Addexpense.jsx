import React, { useContext, useEffect, useState } from "react";
import styles from "./addexpense.module.css";
import { Statemanagement } from "../../../Context/Statemanagement";
import { Loading } from "..";

const Addexpense = ({ type }) => {
  const [text, settext] = useState();
  const [person, setperson] = useState("");
  const [price, setprice] = useState();
  const [load, setload] = useState(false);

  const { daynumber, monthnumber, getallexpense } = useContext(Statemanagement);

  const handlesaveexpense = async () => {
    setload(true);
    const expenseobj = {
      text,
      person,
      price: parseInt(price),
      daynumber,
      monthnumber,
    };

    const res = await fetch("/api/newincome/expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expenseobj),
    });
    const result = await res.json();
    settext("");
    setperson("");
    setprice("");
    getallexpense();
    setload(false);
  };

  return load ? (
    <Loading />
  ) : (
    <div className={styles.addexpensecard}>
      <div className={styles.addnewexpense}>
        <h4>Add new Expense</h4>
      </div>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Enter Expense"
          className={styles.input}
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <input
          type="number"
          placeholder="price(GH₵)"
          className={styles.priceinput}
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <select
          name=""
          id=""
          className={styles.person}
          value={person}
          onChange={(e) => setperson(e.target.value)}
        >
          {(type === "shop1" && (
            <>
              <option value="">person</option>
              <option value="Clement">Clement</option>
              <option value="Micheal">Micheal</option>
              <option value="Kwame">Kwame</option>
              <option value="Shop">Shop</option>
            </>
          )) ||
            (type === "shop2" && (
              <>
                <option value="">person</option>
                <option value="Emma">Emma</option>
                <option value="Sammy">Sammy</option>
                <option value="Miracle">Miracle</option>
                <option value="Shop2">Shop</option>
              </>
            )) ||
            (type === "shop3" && (
              <>
                <option value="">person</option>
                <option value="Seat1">Seat 1</option>
                <option value="Seat2">Seat 2</option>
                <option value="Seat3">Seat 3</option>
                <option value="Shop3">Shop</option>
              </>
            ))}
        </select>
        <button className={styles.savebtn} onClick={handlesaveexpense}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Addexpense;
