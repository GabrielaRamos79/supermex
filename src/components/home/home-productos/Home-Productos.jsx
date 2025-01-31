import React from "react";
import "./Home-Productos.css";
import estrella from "../../../assets/images/estrella.png";

const HomeProductos = () => {
  return (
    <section className="home-productos">
      <p>TORTILLA CHIPS <img src={estrella} alt="estrella" className="estrella-icon" /> SALSA DIP <img src={estrella} alt="estrella" className="estrella-icon" /> TORTILLAS </p>
      <p><img src={estrella} alt="estrella" className="estrella-icon" /> SAZONADORES<img src={estrella} alt="estrella" className="estrella-icon" /></p>
    </section>
  );
};

export default HomeProductos;
