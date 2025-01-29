import React from "react";
import "./Home-Header.css";
import destello from "../../../assets/images/destello.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Importa el módulo Autoplay
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
      <div className="content-wrapper">
        {/* Primera columna (Texto a la izquierda) */}
        <div className="left-column">
          <h1>
            <img src={destello} alt="destello" className="destello-icon" />
            SIEMPRE ES BUEN MOMENTO EL DIPEO
          </h1>
        </div>

        {/* Segunda columna (Carrusel) */}
        <div className="center-column">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
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
        </div>

        {/* Tercera columna (Texto a la derecha) */}
        <div className="right-column">
          <h1>UN PARA</h1>
        </div>
      </div>
    </header>
  );
};
export default HomeHeader;
