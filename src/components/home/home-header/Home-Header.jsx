import React from "react";
import "./Home-Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import destello from "../../../assets/images/destello.png";
import dip from "../../../assets/images/home-img/dipqueso.png";
import tortillas from "../../../assets/images/home-img/tortillas.png";
import chili from "../../../assets/images/home-img/chili.png";
import nachos from "../../../assets/images/home-img/nachos.png";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <div className="content-wrapper">
        <div className="left-column">
          <h1>
          <img src={destello} alt="destello" className="destello-icon" />
            SIEMPRE ES <br />
            BUEN MOMENTO PARA EL DIPEO
          </h1>
        </div>
        <div className="center-column">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            loop={true} // Activa el loop
            speed={2000} // Controla la velocidad de la transición (más alto = más suave)
            autoplay={{
              delay: 1, // Intervalo de transición (1ms para simular cinta)
              disableOnInteraction: false,
            }}
            allowTouchMove={false} // Desactiva interacción manual
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
        <div className="right-column">
          <h1>UN PARA</h1>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
