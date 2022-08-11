import React from "react";
import "../componentes-css/Swiper.css";
import movie from "./imagenes";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";

export default function Swipe() {
  return (
    <div className="contenedor">
      <Swiper
        className="sliders"
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        // effect="fade"
        // scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          480: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          1280: {
            spaceBetween: 10,
            slidesPerView: 6,
          },
        }}
      >
        {movie.map((movi, id) => (
          <SwiperSlide key={id}>
            {<img src={movi} className="imagen" alt="imagen" />}
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
}
