import React from 'react'
import styles from "../../app/page.module.css"
import Image from 'next/image';

const Travel = () => {
  return (
    <div className={styles.three}>
      <div className={styles.title}>
        <Image
          src={
            "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731203568/pngwing.com_23_jub8va.png"
          }
          alt=""
          width={500}
          height={500}
          className={styles.playimg}
        />{" "}
        <h5>Travel recomendations for you</h5>
      </div>
      <div className={styles.gamerow}>
        <div className={styles.game1}>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731203706/Are_you_an_enthusiastic_traveler_who_loves_to_explore_new_places__But_hate_planning_your_trip_because_you_always_end_up_struggling__Let_me_tell_you_about_WayAway_a_flight_aggregator_that_provides_travelers_with_the_tdirvs.jpg"
            }
            alt=""
            height={500}
            width={500}
            className={styles.gamenu1}
          />
          <h5>Los Angeles</h5>
        </div>
      </div>
    </div>
  );
}

export default Travel
