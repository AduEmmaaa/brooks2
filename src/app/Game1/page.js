"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./game1.module.css";
import Image from "next/image";
import { IoMdPerson } from "react-icons/io";
import { Timer } from "@/component";
import { Statemanagement } from "../../../Context/Statemanagement";

const Page = () => {
  const { daynumber, setDaynumber } = useContext(Statemanagement);
  const [winnumber, setwinnumber] = useState();
  const [cash, setcash] = useState(10);
  const [cash2, setcash2] = useState(10);
  const [accountbalance, setaccountbalance] = useState(200);
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
  const [result, setResult] = useState([]);
  const [loader, setLoader] = useState(false);
  const [apply, setapply] = useState();
  const [logincard, setlogincard] = useState(false);
  const [register, setRegister] = useState(false);
  const [loginc, setloginc] = useState(false);
  const [depo, setdepo] = useState(false);
  const [withdraw, setwithdraw] = useState(false);
  const [username, setusername] = useState();
  const [useremail, setuseremail] = useState();
  const [userphone, setuserphone] = useState();
  const [member, setmember] = useState({});

  const logedinusergames = result?.filter((l) => l.userId === member.id);
  console.log(logedinusergames);
  const handleBoxClick = (index) => {
    setSelectedBoxIndex(index);
  };

  const handlePlay = async () => {
    if (selectedBoxIndex === null) {
      alert("No Gift selected");
      return;
    }

    setLoader(true);

    // Determine the winning gift
    const winningGift = Math.floor(Math.random() * 3);

    // Prepare the play object
    const playobj = {
      winningGift,
      selectedBoxIndex,
      cash: cash,
      cash2: cash2,
      accountbalance,
      userId: member.id,
    };

    try {
      // Send the fetch request immediately
      const res = await fetch("/api/game1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playobj),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const answer = await res.json();
      console.log(answer);

      // Update game history immediately

      // Simulate a delay in updating the results visually
      setTimeout(() => {
        if (selectedBoxIndex === winningGift) {
          console.log(
            `Congratulations! You won the gift in Box ${selectedBoxIndex}!`
          );
          setcash((prev) => prev + 3);
          setcash2((prev) => prev - 1);

          alert("You won 3 gh");
        } else {
          console.log(
            `Sorry, the gift in Box ${selectedBoxIndex} wasn't the winner.`
          );
          setcash((prev) => prev - 1);
          setcash2((prev) => prev + 3);
          alert("you lost 1 gh");
        }

        // Update UI states after the delay
        setwinnumber(winningGift);
        setSelectedBoxIndex(null);
        setLoader(false);
        getallgame();
      }, 3000); // 3-second delay for visual result
    } catch (error) {
      console.error("Error with API request:", error);
      setLoader(false);
    }
  };
  const getallgame = async () => {
    const res = await fetch("/api/game1/getgame");
    const result1 = await res.json();
    setResult(result1?.msg);

    const lastItem = result1?.msg[result1?.msg.length - 1];
    setapply(lastItem);
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      getallgame();
    }, 500); // 500ms delay

    return () => clearTimeout(timer); // Clean up the timer on component unmount or dependency change
  }, []); // Empty array ensures this runs only once when the component mounts

  const loginperson = () => {
    setlogincard((prev) => !prev);
  };

  return (
    <div className={styles.newbody}>
      <div className={styles.header}>
        <h4>
          Welcome! <br />
          To The Gift Game!
        </h4>
      </div>
      <Timer daynumber={daynumber} setDaynumber={setDaynumber} />

      <div className={styles.cashbig}>
        <p>Account balance</p>
        <h1>
          GH₵
          {/* Add a check to handle undefined `logedinusergames` or `cash` */}
          {logedinusergames?.length
            ? logedinusergames[logedinusergames.length - 1]?.cash || 0
            : 0}
        </h1>
      </div>

      <div className={styles.depocard}>
        <div className={styles.depo}>
          {
            (logedinusergames[logedinusergames.length - 1]?.cash ===
              undefined &&
              "register& make a deposit to chose a box and win x3 if you choose correct in each play.max deposit is 10gh and max withdrawal is 10gh ") ||
              (logedinusergames[logedinusergames.length - 1]?.cash >= 200 &&
                "Automatic withdraw") ||
              (member?.name &&
                logedinusergames[logedinusergames.length - 1]?.cash <= 0 &&
                "Deposite") ||
              (logedinusergames[logedinusergames.length - 1]?.cash > 0 &&
                "play")
            // (cash < 200 && (
            //   <>
            //     <i>P1</i>
            //     <IoMdPerson className={styles.moneyicon} />
            //     <h4>₵ {apply ? apply?.cash1 : "demo"}</h4>
            //   </>
          }
        </div>
        <div className={styles.depo1} onClick={loginperson}>
          {
            <>
              <i>{member?.name ? member?.name : "Register / login"}</i>
              <IoMdPerson className={styles.moneyicon1} />
            </>
          }
        </div>
      </div>
      {logincard && (
        <div className={styles.lo}>
          <div className={styles.loginhere}>
            <h4>
              {(register && "Register") ||
                (loginc && "Login") ||
                (depo && "Deposite") ||
                (withdraw && "Withdraw")}
            </h4>
            <div className={styles.demologin}>
              {(register && (
                <>
                  {" "}
                  <div className={styles.name}>
                    <i>Name :</i>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      className={styles.put}
                    />
                  </div>
                  <div className={styles.name}>
                    <i>Email :</i>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={useremail}
                      onChange={(e) => setuseremail(e.target.value)}
                      className={styles.put}
                    />
                  </div>
                  <div className={styles.name}>
                    <i>Phone :</i>
                    <input
                      type="phone"
                      value={userphone}
                      onChange={(e) => setuserphone(e.target.value)}
                      placeholder="Phone Number"
                      className={styles.put}
                    />
                  </div>
                </>
              )) ||
                (loginc && (
                  <>
                    <div className={styles.name}>
                      <i>Phone :</i>
                      <input
                        type="phone"
                        placeholder="Phone Number"
                        value={userphone}
                        onChange={(e) => setuserphone(e.target.value)}
                        className={styles.put}
                      />
                    </div>
                  </>
                )) ||
                (depo && (
                  <>
                    <i>Amount :</i>
                    <input
                      type="number"
                      placeholder="min 10"
                      className={styles.put}
                    />
                    <i>Dail *170# and transfer to the system O53 1306 402</i>
                  </>
                )) ||
                (withdraw && (
                  <>
                    <div className={styles.name}>
                      <i>Amount :</i>
                      <input
                        type="number"
                        placeholder="max 10"
                        className={styles.put}
                      />
                    </div>
                  </>
                ))}
              <div className={styles.name}>
                <i
                  className={styles.register}
                  onClick={async () => {
                    setRegister(true);
                    setloginc(false);
                    setdepo(false);
                    setwithdraw(false);
                    const regobj = {
                      username,
                      useremail,
                      userphone: parseInt(userphone),
                    };
                    const res = await fetch("/api/game1/user", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(regobj),
                    });
                    const userresult = await res.json();
                    if (userresult?.success === true) {
                      alert("Registered success");
                    } else {
                      alert(userresult?.msg);
                    }
                    setuseremail("");
                    setusername("");
                    setuserphone("");
                    setloginc(true);
                  }}
                >
                  register
                </i>
                <i
                  className={styles.login}
                  onClick={async () => {
                    setloginc(true);
                    setRegister(false);
                    setdepo(false);
                    setwithdraw(false);
                    const regobj = {
                      userphone: parseInt(userphone),
                    };
                    const res = await fetch("/api/game1/user/finduser", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(regobj),
                    });
                    const userresult = await res.json();
                    if (userresult?.success === true) {
                      setmember(userresult?.msg);
                    }
                    setuserphone("");
                    if (userresult?.success === false) {
                      alert(userresult?.msg);
                    }
                    getallgame();
                  }}
                >
                  Login
                </i>
                <i
                  className={styles.deposite}
                  onClick={() => {
                    setdepo(true);
                    setRegister(false);
                    setloginc(false);
                    setwithdraw(false);
                  }}
                >
                  Deposit
                </i>
                <i
                  className={styles.withdraw}
                  onClick={() => {
                    setwithdraw(true);
                    setRegister(false);
                    setloginc(false);
                    setdepo(false);
                  }}
                >
                  withdraw
                </i>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.box}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`${styles.eachbox} ${
              selectedBoxIndex === index ? styles.selectedBox : ""
            }`}
            onClick={() => handleBoxClick(index)}
          >
            {selectedBoxIndex != index && (
              <div className={styles.innerbox}>
                <Image
                  src={`${winnumber === index ? "/income.png" : "/gift.png"}`}
                  alt={`Gift ${index + 1}`}
                  width={500}
                  height={500}
                  className={styles.img}
                />
              </div>
            )}

            <div className={winnumber === index ? styles.won : styles.button}>
              {"Box " + index}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.loaderouter}>
        <div className={styles.loaderinside}>
          <div className={loader ? styles.loader2 : styles.loader}></div>
        </div>
      </div>
      <div className={styles.buttondiv}>
        <div className={styles.playBtn} onClick={handlePlay}>
          {loader ? "waiting for next play" : "play"}
        </div>
      </div>

      <div className={styles.table}>
        <h3 className={styles.history}>Game History</h3>

        <div className={styles.trow}>
          <h4 className={styles.row1}>Round</h4>
          <h4 className={styles.row1}>SelectedBbox</h4>
          <h4 className={styles.row1}>winningBox</h4>
          <h4 className={styles.row1}>Win/lose</h4>
        </div>
        <div className={styles.scrolltrow}>
          {logedinusergames
            ?.slice()
            .reverse()
            .map((list, i) => {
              return (
                <div className={styles.trow} key={i}>
                  <h4 className={styles.row1}>{result.length - i}</h4>
                  <h4 className={styles.row1}>{list.selectedBoxIndex}</h4>
                  <h4 className={styles.row1}>{list.winningGift}</h4>
                  <h4
                    className={
                      list.winningGift === list.selectedBoxIndex
                        ? styles.numwin
                        : styles.row1
                    }
                  >
                    {list.winningGift === list.selectedBoxIndex
                      ? "Won"
                      : "lost"}
                  </h4>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
