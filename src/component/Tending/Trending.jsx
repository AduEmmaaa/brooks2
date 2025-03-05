import React from "react";
import styles from "./trending.module.css";
import Image from "next/image";
import { Deal } from "../../../selling.json";
import { useRouter } from "next/navigation";

const Trending = () => {
  const router=useRouter()
  return (
    <div className={styles.trending}>
      <div className={styles.verytop}>
        <i className={styles.hotdeal}>Product Features</i>
        <i className={styles.timecountdown}>🔥 </i>
      </div>
      <div className={styles.items}>
        {Deal?.map((list, i) => {
          return (
            <div className={styles.itemdiv} key={i} onClick={()=>router.push(`/deals/${list.name}`)}>
              <Image
                src={list.itempic}
                alt="item "
                width={500}
                height={500}
                className={styles.hotdealimg}
              />
              <i className={styles.itemname}>{list.name }🔥 </i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
