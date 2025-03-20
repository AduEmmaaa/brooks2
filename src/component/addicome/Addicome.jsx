import React, { useContext, useState } from "react";
import styles from "./addincome.module.css";
import { Statemanagement } from "../../../Context/Statemanagement";
import { Loading } from "..";
import Head from "next/head";

const Addicome = ({ type }) => {
  const [errormessage1, setErrormessage1] = useState("");
  const [specialcut, setspecialcut] = useState(false);

  const {
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
    getallincome,
    daynumber,
    monthnumber,
  } = useContext(Statemanagement);
  if (service === "Kid") {
    setAmount(15);
  } else if (service === "Kid+dye") {
    setAmount(20);
  } else if (service === "Kid+dye+wash") {
    setAmount(25);
  } else if (service === "Adult") {
    setAmount(20);
  } else if (service === "Adult+dye") {
    setAmount(30);
  } else if (service === "Adult+dye+wash") {
    setAmount(35);
  } else if (service === "Shaving") {
    setAmount(10);
  } else if (service === "Trimming") {
    setAmount(10);
  } else if (service === "Permcut") {
    setAmount(50);
  } else if (service === "Permcut+blowing") {
    setAmount(70);
  } else if (service === "Black dye only") {
    setAmount(15);
  } else if (service === "Coloured dye only") {
    setAmount(30);
  } else if (service === "washing+waving") {
    setAmount(50);
  }

  const handlesavenewincome = async () => {
    setLoading(true);

    const newincome = {
      time,
      service,
      person,
      amount: parseInt(amount),
      daynumber: parseInt(daynumber),
      monthnumber: parseInt(monthnumber),
    };

    if (!time) {
      setLoading(false);
      return setErrormessage1("No Time Entered");
    }

    const res = await fetch("/api/newincome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newincome),
    });
    const result = await res.json();
    getallincome();
    setPerson("");
    setTime("");
    setService("");
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Head>
        {/* Prevents zooming in on inputs when focused on mobile */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <div className={styles.income}>
        <div className={styles.spcebtn}>
          <button
            className={styles.speialbtn}
            onClick={() => setspecialcut((pre) => !pre)}
          >
            special cut
          </button>
        </div>
        <h4>{errormessage1}</h4>
        <div className={styles.time}>
          <input
            placeholder="Time"
            type="time"
            className={styles.timei}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {specialcut && (
          <div className={styles.specialcut}>
            <input
              placeholder="Service"
              type="text"
              className={styles.selectservice}
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
            <input
              placeholder="price (GH₵)"
              type="text"
              className={styles.selectservice}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        )}
        {!specialcut && (
          <>
            {" "}
            <div className={styles.service}>
              <select
                name=""
                id=""
                className={styles.selectservice}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Service</option>
                <option value="Kid">Kid (GH 15)</option>
                <option value="Kid+dye">Kid+dye (GH 20)</option>
                <option value="Kid+dye+wash">Kid+dye+wash (GH 25)</option>
                <option value="Adult">Adult (GH 20)</option>
                <option value="Adult+dye">Adult+dye (GH 30)</option>
                <option value="Adult+dye+wash">Adult+dye+wash (GH 35) </option>
                <option value="Shaving">Shaving (GH 10)</option>
                <option value="Trimming">Trimming (GH 10)</option>
                <option value="Permcut">Permcut (GH 50)</option>
                <option value="Permcut+blowing">Permcut+blowing (GH 70)</option>
                <option value="Black dye only">Black dye only (GH 15)</option>
                <option value="Coloured dye only">
                  Coloured dye only (GH 30)
                </option>
                <option value="washing+waving">washing+waving (GH 50)</option>
              </select>
            </div>
          </>
        )}
        <div
          className={styles.person}
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        >
          {(type === "shop1" && (
            <select name="" id="" className={styles.selectservice}>
              <option value="">person</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="A">C</option>
            </select>
          )) ||
            (type === "shop2" && (
              <select name="" id="" className={styles.selectservice}>
                <option value="">person</option>
                <option value="Emma">Emma</option>
                <option value="Sammy">Sammy</option>
                <option value="Miracle">Akwasi</option>
              </select>
            )) ||
            (type === "shop3" && (
              <select name="" id="" className={styles.selectservice}>
                <option value="">person</option>
                <option value="Yes1">Seat 1</option>
                <option value="Yes2">Seat 2</option>
                <option value="Yes3">Seat 3</option>
              </select>
            ))}
        </div>
        <div className={styles.save}>
          <button className={styles.savebtn} onClick={handlesavenewincome}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Addicome;
