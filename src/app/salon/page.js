/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useState } from "react";
import styles from "./salon.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TiLocation } from "react-icons/ti";

const Page = () => {
  const [apoint, setapoint] = useState(false);
  const [name, setname] = useState("");
  const [phone, setphone] = useState();
  const [person, setperson] = useState("");
  const [time, settime] = useState("");
  const [message, setmessage] = useState("");
  const [save, setsaving] = useState(false);
  const router = useRouter();
  const [date, setdate] = useState();
  const [service, setservice] = useState();
  const [stylist, setstylist] = useState();

  const handleBookings = async () => {
    setsaving(true);
    const bookingobj = {
      name,
      date,
      service,
      stylist,
      phone,
    };
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application",
        },
        body: JSON.stringify(bookingobj),
      });
      const result = await res.json();
      if (result.success === true) {
        alert(`Thanks for booking ${stylist} at ${date}.You will recieve a call from him before the time.`);
      }
      setname(""), setphone(""), setservice(""), setdate("");
      setsaving(false);
    } catch (error) {
      alert("faild to book");
    }
  };

  return (
    <div className={styles.newbody}>
      <div className={styles.timebarbar}>
        <h4 className={styles.topic}>
          New Generation Babaring solon{" "}
          <TiLocation className={styles.location} />{" "}
          <span className={styles.span}>Cocoa board </span>
          oposite taxi station
        </h4>
      </div>
      <div className={styles.bababottom}>
        <div className={styles.banerimage}>
          <div className={styles.writings}>
            <p className={styles.para}>We know what Haircut Suits You</p>
            <h1 className={styles.maintext}>
              Making You look <br />{" "}
              <span className={styles.span}>awsome & manly</span>{" "}
            </h1>
            <button className={styles.btn}>Book Now</button>
          </div>
        </div>
        <div className={styles.populaserviceshead}>
          <div className={styles.top}>
            <h2 className={styles.popularservices}>
              Popular <span className={styles.span}>Services</span>
            </h2>
            <p className={styles.para2}>
              A wide range of male grooming services under one roof
            </p>
          </div>
          <div className={styles.bookingcard}>
            <div className={styles.onee}>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731462973/%D0%A4%D0%BE%D1%82%D0%BE%D0%B4%D0%BB%D1%8F%D0%B1%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF%D0%B0_%D0%B1%D0%B0%D1%80%D0%B1%D0%B5%D1%80_%D0%B1%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF_%D0%B1%D0%B0%D1%80%D0%B1%D0%B5%D1%80_%D1%81%D1%82%D0%B8%D0%BB%D1%8C%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8_hairstyles_haircut_hairstylesformen_bhnyck.jpg"
                }
                alt="logo"
                width={500}
                height={500}
                className={styles.oneediv}
              />
              <h3 className={styles.hairstyle}>hair styling</h3>
              <p className={styles.para1}>
                Get the best from your thick hair by choosing a great style and
                using the right products for the style you'er after.
              </p>
            </div>
            <div className={styles.onee}>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731463117/Heljestrand_Mk_133_-_7_8_sqc56i.jpg"
                }
                alt="logo"
                width={500}
                height={500}
                className={styles.oneediv}
              />
              <h3 className={styles.hairstyle}>beard trim</h3>
              <p className={styles.para1}>
                Every men want to grow out beard and see just out of curiosity
                how he looks.if this is for you ,then welcome to the club
              </p>
            </div>
            <div className={styles.onee}>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731463196/MANIC_PANIC_Psychedelic_Sunset_Hair_Dye_-_Classic_High_Voltage_-_Semi_Permanent_Hair_Color_-_Radiant_Fiery_Orange_Shade_-_Vegan_PPD_Ammonia_Free_for_Hair_Coloring_on_Men_Women_bvbdsg.jpg"
                }
                alt="logo"
                width={500}
                height={500}
                className={styles.oneediv}
              />
              <h3 className={styles.hairstyle}>hair color</h3>
              <p className={styles.para1}>
                color is an underutillized way of adding a unique style and
                aesthetic appeal to your hair.we are here for you.
              </p>
            </div>
            <div className={styles.onee}>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731463278/Soy_pH-Balanced_Hydrating_Face_Wash_-_fresh___Sephora_f1n1zj.jpg"
                }
                alt="logo"
                width={500}
                height={500}
                className={styles.oneediv}
              />
              <h3 className={styles.hairstyle}>cleansing facial </h3>
              <p className={styles.para1}>
                If you are washing your face with bar soap and water.then it's
                time to step up your skincare game
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bookingcard}>
          <div className={styles.top}>
            <h2 className={styles.popularservices}>
              Expert <span className={styles.span}>stylists</span>
            </h2>
            <p className={styles.para2}>
              Our stylist offers traditional and contemporary services along
              with our very own treatment
            </p>
          </div>

          <div className={styles.imagediv}>
            <div className={styles.image}>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731923932/WhatsApp_Image_2024-11-18_at_9.35.04_AM_cpbv7w.jpg"
                }
                alt=""
                width={500}
                height={500}
                className={styles.personimg}
              />
              <h4 className={styles.personname}>Clement</h4>
              <p className={styles.desc}>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.image}>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731774272/WhatsApp_Image_2024-11-13_at_8.38.02_AM_vtna7b.jpg"
                }
                alt=""
                width={500}
                height={500}
                className={styles.personimg}
              />
              <h4 className={styles.personname}>Micheal</h4>
              <p className={styles.desc}>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.image}>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1731924221/WhatsApp_Image_2024-11-18_at_10.01.46_AM_p9nv5j.jpg"
                }
                alt=""
                width={500}
                height={500}
                className={styles.personimg}
              />
              <h4 className={styles.personname}>Sarfo</h4>
              <p className={styles.desc}>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>

        <div className={styles.booking}>
          <div className={styles.top}>
            <h2 className={styles.popularservices}>
              we are <span className={styles.span}>Available</span>
            </h2>
            <p className={styles.para2}>
              Dedicated to providing Excellence in our service
            </p>
          </div>

          <div className={styles.openingtime}>
            <div className={styles.timeone}>
              <ul className={styles.list}>
                <li className={styles.li}>
                  {" "}
                  <span className={styles.span}>Monday - Friday</span> 7 : 30{" "}
                  <span className={styles.span}>AM</span>- 9 : 30{" "}
                  <span className={styles.span}>PM</span>{" "}
                </li>
                <li className={styles.li}>
                  <span className={styles.span}>Saturday</span> 4 : 00{" "}
                  <span className={styles.span}>Pm</span> - 9:30{" "}
                  <span className={styles.span}>PM</span>{" "}
                </li>
                <li className={styles.li}>
                  <span className={styles.span}>Sunday</span> 7 : 30{" "}
                  <span className={styles.span}>AM</span> - 9 : 30{" "}
                  <span className={styles.span}>PM</span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bookingcard}>
            <div className={styles.date}>
              <h5 className={styles.span}>Date and Time :</h5>
              <input
                type="datetime-local"
                name=""
                id=""
                value={date}
                onChange={(e) => setdate(e.target.value)}
                className={styles.selectservice}
              />
            </div>
            <div className={styles.date}>
              <h5 className={styles.span}>Service :</h5>{" "}
              <select
                name=""
                id=""
                className={styles.selectservice}
                value={service}
                onChange={(e) => setservice(e.target.value)}
              >
                <option value="">Service</option>
                <option value="Kid">Kid (GH 15)</option>
                <option value="Kid+dye">Kid+dye (GH 20)</option>
                <option value="Kid+dye+wash">Kid+dye+wash (GH 25)</option>
                <option value="Adult">Adult (GH 20)</option>
                <option value="Adult+dye">Adult+dye (GH 30)</option>
                <option value="Adult+dye+wash">Adult+dye+wash (GH 35) </option>
                <option value="Shaving">Shaving (GH 10)</option>
                <option value="Trimming">Trimming (GH 10)</option>
                <option value="Permcut">Permcut (GH 50)</option>
                <option value="Permcut+blowing">Permcut+blowing (GH 70)</option>
                <option value="Black dye only">Black dye only (GH 15)</option>
                <option value="Coloured dye only">
                  Coloured dye only (GH 30)
                </option>
                <option value="washing+waving">washing+waving (GH 50)</option>
              </select>
            </div>
            <div className={styles.date}>
              <h5 className={styles.span}>Stylist : </h5>{" "}
              <select
                name=""
                id=""
                className={styles.selectservice}
                value={stylist}
                onChange={(e) => setstylist(e.target.value)}
              >
                <option value="">stylist</option>
                <option value="Clement">Clement</option>
                <option value="Micheal">Micheal</option>
                <option value="Sarfo">Sarfo</option>
              </select>
            </div>
            <div className={styles.date}>
              <h5 className={styles.span}>Name : </h5>{" "}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className={styles.selectservice}
              />
            </div>
            <div className={styles.date}>
              <h5 className={styles.span}>Phone : </h5>{" "}
              <input
                type="number"
                placeholder="Mobile number"
                className={styles.selectservice}
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div className={styles.date}>
              <button className={styles.selectservice} onClick={handleBookings}>
                Book
              </button>
            </div>
          </div>
        </div>

        <div className={styles.testimony}>
          <div className={styles.top}>
            <h2 className={styles.popularservices}>
              Why <br />
              choose New <br />
              <span className={styles.span}>Generation Salon</span>
            </h2>
            <p className={styles.para2}>
              A cultured hair and beauty salon situated in the heart of
              paddinton
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
