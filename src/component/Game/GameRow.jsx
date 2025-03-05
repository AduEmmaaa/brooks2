import React from "react";
import styles from "../../app/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GameRow = () => {
  const router = useRouter();
  return (
    <div className={styles.three}>
      <div className={styles.title}>
        <Image
          src={
            "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731201989/pngwing.com_21_zcvf85.png"
          }
          alt=""
          width={500}
          height={500}
          className={styles.playimg}
        />{" "}
        <h5>Games for you</h5>
      </div>
      <div className={styles.gamerow}>
        <div className={styles.game1} onClick={() => router.push("/Game1")}>
          <Image
            src={
              "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731774289/WhatsApp_Image_2024-11-16_at_4.22.56_PM_syid9v.jpg"
            }
            alt=""
            height={500}
            width={500}
            className={styles.gamenu1}
          />
          <h5>Box Challenge</h5>
        </div>
      </div>
    </div>
  );
};

export default GameRow;
