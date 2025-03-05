"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Sliderbox = () => {
  const router = useRouter();
  //   const progressCircle = useRef(null);
  //   const progressContent = useRef(null);
  //   const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   };
  return (
    <>
      <div class="swipersection">
        <div class="sectionwraper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1716666177/r6jrjdkkj2dmj9inm0ug.jpg"
                }
                alt=" "
                width={500}
                height={500}
                class="img"
              />
              <div>2</div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1716666177/r6jrjdkkj2dmj9inm0ug.jpg"
                }
                alt=" "
                width={500}
                height={500}
                class="img"
              />
              <div>2</div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={
                  "https://res.cloudinary.com/dzzmqi5hn/image/upload/v1716666177/r6jrjdkkj2dmj9inm0ug.jpg"
                }
                alt=" "
                width={500}
                height={500}
                class="img"
              />
              <div>2</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>{" "}
    </>
  );
};

export default Sliderbox;
