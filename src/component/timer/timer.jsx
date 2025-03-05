
"use client";

import React, { useEffect, useState } from "react";
import styles from "./timer.module.css";

const Timer = ({ daynumber, setDaynumber }) => {
  const [Days, setDays] = useState(0);
  const [Hours, setHours] = useState(0);
  const [Mins, setMins] = useState(0);
  const [Secs, setSecs] = useState(0);

  const startDate = new Date("March 1, 2025").getTime(); // Start date in milliseconds
  const deadline = new Date("March 31, 2025").getTime(); // Target deadline date in milliseconds

  const counter = () => {
    const currentTime = Date.now();
    const timeElapsed = currentTime - startDate;

    // Update the time only if we're before the deadline
    if (currentTime < deadline) {
      setDays(Math.floor(timeElapsed / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeElapsed / (1000 * 60 * 60)) % 24));
      setMins(Math.floor((timeElapsed / (1000 * 60)) % 60));
      setSecs(Math.floor((timeElapsed / 1000) % 60));
    }
  };



  useEffect(() => {
    const interval = setInterval(counter, 1000);
    return () => clearInterval(interval);
  }, [Mins]);

  return (
    <div className={styles.timer}>
      <div className={styles.timccon}>
        <i className={styles.days}>Days</i>
        <h3 className={styles.count}>{Days < 10 ? "0" + Days : Days}</h3>
      </div>
      <div className={styles.timccon}>
        <i className={styles.days}>Hours</i>
        <h3 className={styles.count}>{Hours < 10 ? "0" + Hours : Hours}</h3>
      </div>
      <div className={styles.timccon}>
        <i className={styles.days}>Mins</i>
        <h3 className={styles.count}>{Mins < 10 ? "0" + Mins : Mins}</h3>
      </div>
      <div className={styles.timccon}>
        <i className={styles.days}>Secs</i>
        <h3 className={styles.count}>{Secs < 10 ? "0" + Secs : Secs}</h3>
      </div>
    </div>
  );
};

export default Timer;
