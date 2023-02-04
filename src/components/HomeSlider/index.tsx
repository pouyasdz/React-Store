import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";

import { Paper, Typography } from "@mui/material";
import { slider } from "../../constant";
import { Link } from "react-router-dom";

function HomeSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      style={{
        height: "40vh",
      }}
    >
      {slider.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Paper
              sx={{ width: "100%", height: "35vh", borderRadius: "0" }}
              elevation={8}
            >
              <Link to={item.link}>
                <img
                  src={`/images/${item.bgImage}.jpg`}
                  alt=""
                  style={{ width: "100%", height: "35vh", objectFit: "cover" }}
                />
              </Link>
            </Paper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HomeSlider;
