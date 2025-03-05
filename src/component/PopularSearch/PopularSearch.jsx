import React from 'react'
import styles from "../../app/page.module.css"
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const PopularSearch = () => {
  return (
    <div className={styles.three}>
      <div className={styles.title}>
        <Image
          src={
            "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731288962/pngwing.com_24_aiknee.png"
          }
          alt=""
          width={500}
          height={500}
          className={styles.playimg}
        />{" "}
        <h5>Trending Search</h5>
      </div>
      <div className={styles.popularsearchholder}>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
        <div className={styles.popularsearch}>
          <FaSearch />
          <h5>Name of search</h5>
        </div>
      </div>
    </div>
  );
}

export default PopularSearch
