import React from "react";
import "./Home-Header.css";
import destello from "../../../assets/images/destello.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Opcional, si usas navegación
import "swiper/css/pagination"; // Opcional, si usas paginación
import dip from "../../../assets/images/home-img/dipqueso.png";
import tortillas from "../../../assets/images/home-img/tortillas.png";
import chili from "../../../assets/images/home-img/chili.png";
import nachos from "../../../assets/images/home-img/nachos.png";

const HomeHeader = () => {
  return (
    <header className="home-header">
      
      <div className="tagline">
        <h1>
          <img src={destello} alt="destello" className="destello-icon" />{" "}
          SIEMPRE ES UN BUEN MOMENTO PARA EL DIPEO
        </h1>
      </div>

       {/* Carrusel vertical */}
       <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="vertical-carousel"
      >
        <SwiperSlide>
          <img src={nachos} alt="nachos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chili} alt="chili" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tortillas} alt="tortillas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dip} alt="dip" />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};
export default HomeHeader;
