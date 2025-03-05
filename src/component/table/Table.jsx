import React, { useContext, useEffect, useState } from "react";
import styles from "./table.module.css";
import { Statemanagement } from "../../../Context/Statemanagement";
import { RiDeleteBin2Line } from "react-icons/ri";

const Table = ({
  type,
  allshop1,
  allshop3,
  allshop2,
  allclement,
  allmicheal,
  allsarfo,
  allclementseat1,
  allmichealseat2,
  allsarfoseat2,
  allclementseat3,
  allmicheal3,
  allsarfoseat3,
  allexpenseshop1,
  allexpenseshop2,
}) => {
  const [loading, setLoading] = useState(false);
  const [delet, setDelet] = useState(false);
  const {
    getallincome,
    allincome,
    dailytotal,
    dailyseat1,
    dailyseat2,
    dailyseat3,
    daynumber,
    login,
    monthnumber,
  } = useContext(Statemanagement);

  useEffect(() => {
    getallincome();
  }, []);

  const handletableclick = async (list) => {
    setDelet(true);
    const emma = list.id;
    const listobj = {
      emma,
      daynumber,
      monthnumber,
    };
    try {
      const res = await fetch("/api/eachline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listobj),
      });
      const result = await res.json();
      setDelet(false);
      getallincome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.table}>
      <h4 className={styles.tabletittle}>
        {(type === "clement" && "Expense table") || "Service table"}
      </h4>
      <div className={styles.tablerow}>
        <ul className={styles.list}>
          {(type === "clement" && (
            <>
              <li className={styles.listitem1}>i</li>
              <li className={styles.listitem1}>Date</li>
              <li className={styles.listitem2}>Expense</li>
              <li className={styles.listitem1}>p</li>
              <li className={styles.listitem3}>cash</li>{" "}
            </>
          )) ||
            (type === "clement2" && (
              <>
                <li className={styles.listitem1}>i</li>
                <li className={styles.listitem1}>Date</li>
                <li className={styles.listitem2}>Expense</li>
                <li className={styles.listitem1}>p</li>
                <li className={styles.listitem3}>cash</li>{" "}
              </>
            )) ||
            (type != "clement" && (
              <>
                {(login === 2580 && (
                  <li className={styles.listitem1}>
                    <RiDeleteBin2Line />
                  </li>
                )) ||
                  (login === 19550 && (
                    <li className={styles.listitem1}>
                      <RiDeleteBin2Line />
                    </li>
                  ))}
                <li className={styles.listitem1}>I</li>
                <li className={styles.listitem1}>T</li>
                <li className={styles.listitem2}>Service</li>
                <li className={styles.listitem1}>p</li>
                <li className={styles.listitem3}>cash</li>
              </>
            ))}
        </ul>
        {loading || delet
          ? "Table is loading"
          : (dailytotal &&
              type === "shop1" &&
              allshop1.map((list, i) => {
                return (
                  <ul className={styles.list1} key={i}>
                    {(login ===2580  && (
                      <li
                        className={styles.listitem1}
                        onClick={() => handletableclick(list)}
                      >
                        <RiDeleteBin2Line
                          className={styles.deleticon}
                          onClick={() => handletableclick(list)}
                        />
                      </li>
                    )) ||
                      (login === 19550 && (
                        <li
                          className={styles.listitem1}
                          onClick={() => handletableclick(list)}
                        >
                          {" "}
                          <RiDeleteBin2Line
                            className={styles.deleticon}
                            onClick={() => handletableclick(list)}
                          />{" "}
                        </li>
                      ))}

                    <li className={styles.listitem11}>{i}</li>
                    <li className={styles.listitem11}>{list.time}</li>
                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat1 &&
              type === "shop1" &&
              allclement.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat2 &&
              type === "shop1" &&
              allmicheal.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat3 &&
              type === "shop1" &&
              allsarfo.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailytotal &&
              type === "shop2" &&
              allshop2.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    {login === 19550 && (
                      <li
                        className={styles.listitem1}
                        onClick={() => handletableclick(list)}
                      >
                        <RiDeleteBin2Line
                          className={styles.deleticon}
                          onClick={() => handletableclick(list)}
                        />
                      </li>
                    )}
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>
                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>
                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat1 &&
              type === "shop2" &&
              allclementseat1.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat2 &&
              type === "shop2" &&
              allmichealseat2.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat3 &&
              type === "shop2" &&
              allsarfoseat2.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailytotal &&
              type === "shop3" &&
              allshop3.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li
                      className={styles.listitem1}
                      onClick={() => handletableclick(list)}
                    >
                      <RiDeleteBin2Line
                        className={styles.deleticon}
                        onClick={() => handletableclick(list)}
                      />
                    </li>
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat1 &&
              type === "shop3" &&
              allclementseat3.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat2 &&
              type === "shop3" &&
              allmicheal3.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (dailyseat3 &&
              type === "shop3" &&
              allsarfoseat3.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.time}</li>

                    <li className={styles.listitem22}>{list.service}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>

                    <li className={styles.listitem33}>{list.amount}</li>
                  </ul>
                );
              })) ||
            (type === "clement2" &&
              allexpenseshop2?.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.daynumber}</li>

                    <li className={styles.listitem22}>{list.expense}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>
                    <li className={styles.listitem11}>{list.price}</li>
                  </ul>
                );
              })) ||
            (type === "clement" &&
              allexpenseshop1?.map((list, i) => {
                return (
                  <ul
                    className={styles.list1}
                    key={i}
                    // onClick={() => handletableclick(list)}
                  >
                    <li className={styles.listitem11}>{i + 1}</li>
                    <li className={styles.listitem11}>{list.daynumber}</li>

                    <li className={styles.listitem22}>{list.expense}</li>
                    <li className={styles.listitem11}>
                      {list.person.charAt(0)}
                    </li>
                    <li className={styles.listitem11}>{list.price}</li>
                  </ul>
                );
              }))}
      </div>
    </div>
  );
};

export default Table;
