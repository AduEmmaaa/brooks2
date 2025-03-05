// "use client";

// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { house } from "../../../../selling.json";
// import Image from "next/image";
// import styles from "./iner.module.css";
// import { RiLoopLeftFill } from "react-icons/ri";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// const Page = () => {
//   const [one, setone] = useState(1);

//   const [productclicked, setProductclicked] = useState();
//   const params = useParams();
//   const id = params.rent;

//   const getitem = (id) => {
//     const productid = house.filter((item) => item.id === parseInt(id));
//     setProductclicked(productid[0]);
//   };

//   useEffect(() => {
//     getitem(id);
//   }, [id]);

//   const handleleft = () => {
//     if (one > 10) {
//       setone(10);
//     } else {
//       setone((pre) => pre - 1);
//     }
//   };
//   const handleright = () => {
//     if (one <= 0) {
//       setone(1);
//     } else {
//       setone((pre) => pre + 1);
//     }
//   };

//   return (
//     <div>
//       <div className={styles.leftright}>
//         <FaArrowAltCircleRight className={styles.right} onClick={handleright} />
//         <FaArrowAltCircleLeft className={styles.left} onClick={handleleft} />
//       </div>
//       {(one === 1 && (
//         <>
//           <Image
//             src={productclicked?.img}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         </>
//       )) ||
//         (one === 2 && (
//           <Image
//             src={productclicked?.img2}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 3 && (
//           <Image
//             src={productclicked?.img3}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 4 && (
//           <Image
//             src={productclicked?.img4}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 5 && (
//           <Image
//             src={productclicked?.img5}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 6 && (
//           <Image
//             src={productclicked?.img6}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 7 && (
//           <Image
//             src={productclicked?.img7}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 8 && (
//           <Image
//             src={productclicked?.img8}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 9 && (
//           <Image
//             src={productclicked?.img9}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         )) ||
//         (one === 10 && (
//           <Image
//             src={productclicked?.img10}
//             alt=""
//             height={500}
//             width={500}
//             className={styles.img}
//           />
//         ))}

//       <div className={styles.dots}>
//         <div className={one === 1 ? styles.activeone : styles.one}></div>
//         <div className={one === 2 ? styles.activeone : styles.one}></div>
//         <div className={one === 3 ? styles.activeone : styles.one}></div>
//         <div className={one === 4 ? styles.activeone : styles.one}></div>
//         <div className={one === 5 ? styles.activeone : styles.one}></div>
//         <div className={one === 6 ? styles.activeone : styles.one}></div>
//         <div className={one === 7 ? styles.activeone : styles.one}></div>
//         <div className={one === 8 ? styles.activeone : styles.one}></div>
//         <div className={one === 9 ? styles.activeone : styles.one}></div>
//         <div className={one === 10 ? styles.activeone : styles.one}></div>
//       </div>

//       <div className={styles.name}>{productclicked?.name}</div>

//       <div className={styles.infor}>
//         {(one === 1 && (
//           <>
//             <p>
//               Don’t miss out on this fantastic opportunity to make this
//               3-bedroom apartment your new home! Contact us today to schedule a
//               viewing
//             </p>
//           </>
//         )) ||
//           (one === 2 && (
//             <p>
//               The apartment boasts a spacious and inviting hall that serves as
//               the heart of the home. With ample room for both a cozy seating
//               area and a dining space, the hall is perfect for hosting family
//               gatherings or relaxing after a long day. Large windows fill the
//               room with natural light, while the [mention flooring type, e.g.,
//               polished hardwood or sleek tiles] adds a touch of modern elegance.
//               The neutral-toned walls provide the perfect canvas to personalize
//               your living space
//             </p>
//           ))}
//       </div>

//       <div className={styles.contact}>
//         <div className={styles.chat}>+233 53 1306 402</div>
//       </div>
//     </div>
//   );
// };

// export default Page;


"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { house } from "../../../../selling.json";
import Image from "next/image";
import styles from "./iner.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Page = () => {
  const [one, setOne] = useState(1);
  const [productClicked, setProductClicked] = useState(null);

  const params = useParams();
  const id = params.rent;

  useEffect(() => {
    const product = house.find((item) => item.id === parseInt(id));
    setProductClicked(product);
  }, [id]);

  const handleNavigation = (direction) => {
    setOne((prev) => {
      const newValue = direction === "left" ? prev - 1 : prev + 1;
      return newValue < 1 ? 10 : newValue > 10 ? 1 : newValue;
    });
  };

  const images = Array.from(
    { length: 10 },
    (_, index) => productClicked?.[`img${index + 1}`]
  );

  const descriptions = [
    "Don’t miss out on this fantastic opportunity to make this 3-bedroom apartment your new home! Contact us today to schedule a viewing.",
    "The apartment boasts a spacious and inviting hall that serves as the heart of the home. With ample room for both a cozy seating area and a dining space, the hall is perfect for hosting family gatherings or relaxing after a long day. Large windows fill the room with natural light, while the polished hardwood adds a touch of modern elegance.",
  ];

  return (
    <div>
      <div className={styles.leftright}>
        <FaArrowAltCircleLeft
          className={styles.left}
          onClick={() => handleNavigation("left")}
        />
        <FaArrowAltCircleRight
          className={styles.right}
          onClick={() => handleNavigation("right")}
        />
      </div>

      <Image
        src={images[one - 1] || "/placeholder.png"} // Handle undefined images gracefully
        alt={`Image ${one}`}
        height={500}
        width={500}
        className={styles.img}
      />

      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={one === index + 1 ? styles.activeone : styles.one}
          ></div>
        ))}
      </div>

      <div className={styles.name}>{productClicked?.name}</div>

      <div className={styles.infor}>
        <p>
          {descriptions[one - 1] ||
            "No description available for this section."}
        </p>
      </div>

      <div className={styles.contact}>
        <div className={styles.chat}>+233 53 1306 402</div>
      </div>
    </div>
  );
};

export default Page;
