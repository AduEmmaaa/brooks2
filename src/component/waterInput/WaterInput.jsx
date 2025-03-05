import { Item } from "../../../selling.json";

import React, { useContext, useEffect, useState } from "react";
import styles from "../../app/(water)/bosswater/boss.module.css";
import { Statemanagement } from "../../../Context/Statemanagement";
import { FaMinus, FaPlus, FaSellcast } from "react-icons/fa";
import { MdSell } from "react-icons/md";

const WaterInput = ({
  type,
  itemitem,
  getwater,
  getwaterforall,
  getdaysale,
  shop,
}) => {
  const [save, setsave] = useState(false);
  const [mtn, setmtn] = useState(false);
  const [water, setwater] = useState(true);
  const [name, setname] = useState("");
  const [size, setsize] = useState("");
  const [addnewwater, setaddnewwater] = useState(false);
  const { daynumber, setDaynumber, monthnumber, setMonthnumber } =
    useContext(Statemanagement);

  const [itemId, setitem] = useState("");
  const [quantity, setquantity] = useState(0);
  const [price, setprice] = useState();
  const [sell, setsell] = useState(false);

  const handlemtn = () => {
    setmtn(true);
    setwater(false);
  };
  const handlewater = () => {
    setwater(true);
    setmtn(false);
  };
  const handleSave = async () => {
    setsell(true);
    const saveobj = {
      itemId,
      quantity: parseInt(quantity),
      daynumber,
      monthnumber,
      shop,
    };

    try {
      if (shop === "shop2") {
        const res = await fetch("/api/water/daysale2", {
          method: "POST",
          headers: {
            "Content-Type": "applicatio/json",
          },
          body: JSON.stringify(saveobj),
        });
        const result = await res.json();
        setitem("");
        setquantity(0);
        getdaysale();
        getwater();
        setsell(false);
      } else if (shop === "shop1") {
        const res = await fetch("/api/water/daysale", {
          method: "POST",
          headers: {
            "Content-Type": "applicatio/json",
          },
          body: JSON.stringify(saveobj),
        });
        const result = await res.json();
        setitem("");
        setquantity(0);
        getdaysale();
        getwater();
        setsell(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleaddnewwater = async () => {
    setsave(true);
    const newonj = {
      name,
      size,
      quantity: parseInt(quantity),
      price: parseInt(price),
      daynumber,
      monthnumber,
      shop,
    };
    try {
      const res = await fetch("/api/water", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newonj),
      });
      const result = await res.json();
      setname("");
      setsize("");
      setquantity("");
      setprice("");
      setsave(false);
      getwaterforall();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    (type === "watersale" && (
      <div className={styles.inputs}>
        <lable className={styles.lable}>
          Item Name
          <select
            className={styles.selectitem}
            value={itemId}
            onChange={(e) => setitem(e.target.value)}
          >
            <option value=""></option>
            {itemitem?.map((list, i) => (
              <option className={styles.option} key={i} value={list.id}>
                {list.name +
                  " " +
                  " " +
                  list.size +
                  " " +
                  "GH₵" +
                  " " +
                  list.price}
              </option>
            ))}
          </select>
        </lable>
        <lable className={styles.lable}>
          Quantity
          <input
            type="number"
            className={styles.number}
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
          />
        </lable>
        <lable>
          <button className={styles.send} onClick={handleSave}>
            {sell ? "selling..." : "sell"} <MdSell />
          </button>
        </lable>
      </div>
    )) ||
    (type === "AddNewwater" && (
      <>
        <div
          className={styles.topic}
          onClick={() => setaddnewwater((pre) => !pre)}
        >
          {!addnewwater ? (
            shop === "shop1" ? (
              <>
                <FaPlus className={styles.plus} />
                <p>Add product Cocoa-Board</p>
              </>
            ) : (
              shop === "shop2" && (
                <>
                  <FaPlus className={styles.plus} />
                  <p>Add product obeyeyie </p>
                </>
              )
            )
          ) : (
            <>
              <FaMinus className={styles.plus} />
            </>
          )}
        </div>
        {addnewwater ? (
          <div className={styles.inputs}>
            <lable className={styles.lable}>
              Name
              <input
                type="text"
                className={styles.number}
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </lable>
            <lable className={styles.lable}>
              size
              <input
                type="text"
                className={styles.number}
                value={size}
                onChange={(e) => setsize(e.target.value)}
              />
            </lable>
            <lable className={styles.lable}>
              Quantity
              <input
                type="number"
                className={styles.number}
                value={quantity}
                onChange={(e) => setquantity(e.target.value)}
              />
            </lable>
            <lable className={styles.lable}>
              Price GH₵
              <input
                type="number"
                className={styles.number}
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </lable>
            <lable>
              <button className={styles.sendnew} onClick={handleaddnewwater}>
                {save ? (
                  "saving..."
                ) : (
                  <p>
                    Add <FaPlus />
                  </p>
                )}
              </button>
            </lable>
          </div>
        ) : (
          ""
        )}
      </>
    ))
  );
};

export default WaterInput;
