import React from "react";
import styles from "../../app/adminstration/home/income/income.module.css";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";

const Calendar = ({ setDaynumber, monthnumber, setMonthnumber, daynumber }) => {
  const handleMonthBack = () => {
    setMonthnumber(Math.max(0, monthnumber - 1)); // Prevents going below 0 (January)
  };

  const handleMonthForward = () => {
    setMonthnumber(Math.min(11, monthnumber + 1)); // Prevents going beyond 11 (December)
  };

  const getMonthName = () => {
    const months = [
      "January, 2025",
      "February, 2025",
      "March, 2025",
      "April, 2025",
      "May, 2025",
      "June, 2025",
      "July, 2025",
      "August, 2025",
      "September, 2025",
      "October, 2025",
      "November, 2025",
      "December, 2025",
    ];
    return months[monthnumber - 1];
  };

  const getDaysInMonth = () => {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return days[monthnumber - 1]; // Corrected array indexing
  };

  const getFirstDayOfMonth = () => {
    // First day of each month in 2025 (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const firstDays = [3, 6, 6, 2, 4, 7, 2, 5, 1, 3, 6, 1]; // Corrected based on 2025 calendar
    return firstDays[monthnumber - 1];
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth();
    const firstDay = getFirstDayOfMonth();
    const days = [];

    // Add empty placeholders before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<li key={`empty-${i}`} className={styles.listitems} />);
    }

    // Add actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <li
          key={day}
          className={daynumber === day ? styles.active : styles.listitems}
          onClick={() => setDaynumber(day)}
        >
          {day}
        </li>
      );
    }

    // Fill remaining slots to complete the last row
    while (days.length % 7 !== 0) {
      days.push(
        <li key={`empty-end-${days.length}`} className={styles.listitems} />
      );
    }

    return days;
  };

  return (
    <>
      <div className={styles.monthname}>
        <div className={styles.left}>
          <TiArrowBack className={styles.arrow} onClick={handleMonthBack} />
        </div>
        <h1 className={styles.monthnameletter}>
          <i>{getMonthName()}</i>
        </h1>
        <div className={styles.right}>
          <TiArrowForward
            className={styles.arrow}
            onClick={handleMonthForward}
          />
        </div>
      </div>

      <div className={styles.down}>
        <div className={styles.card}>
          <div className={styles.row}>
            <ul className={styles.ul}>
              <li className={styles.listitem}>SUN</li>
              <li className={styles.listitem}>MON</li>
              <li className={styles.listitem}>TUE</li>
              <li className={styles.listitem}>WED</li>
              <li className={styles.listitem}>THU</li>
              <li className={styles.listitem}>FRI</li>
              <li className={styles.listitem}>SAT</li>
            </ul>
          </div>

          {Array.from(
            { length: Math.ceil(renderCalendar().length / 7) },
            (_, i) => (
              <div key={i} className={styles.row}>
                <ul className={styles.ul}>
                  {renderCalendar().slice(i * 7, (i + 1) * 7)}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Calendar;
