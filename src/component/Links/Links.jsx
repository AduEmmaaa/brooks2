import React from "react";
import styles from "./links.module.css";
import { useRouter } from "next/navigation";

const links = [
  { id: 1, name: "All", pathname: "/" },
  { id: 2, name: "Haircut", pathname: "/salon" },
  { id: 4, name: "Electrical&Electronics", pathname: "/" },
  { id: 5, name: "Manufacturing&processing", pathname: "/" },
  { id: 6, name: "Auto,Motorcycle&parts", pathname: "/" },
  { id: 7, name: "Construction&decoration", pathname: "/" },
  { id: 8, name: "Furniture", pathname: "/" },
  { id: 9, name: "Light-Industry&daily-Use", pathname: "/" },
  { id: 10, name: "Apparel & Accessories", pathname: "/" },
  { id: 11, name: "Consumer Elctrnics", pathname: "/" },
  { id: 12, name: "All", pathname: "/" },
];

const Links = () => {
  const router = useRouter();
  return (
    <div className={styles.listcontainer}>
      {links &&
        links.map((list, i) => {
          return (
            <div
              className={styles.links}
              key={i}
              onClick={() => router.push(list.pathname)}
            >
              <i>
                {" "}
                <p className={styles.listname}>{list.name}</p>{" "}
              </i>
            </div>
          );
        })}
    </div>
  );
};

export default Links;
