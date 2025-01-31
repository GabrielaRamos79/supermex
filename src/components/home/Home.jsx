import React from "react";
import HomeHeader from './home-header/Home-Header';
import HomeNoticias from './home-noticias/Home-Noticias';
import HomeProductos from './home-productos/Home-Productos';
import HomeRecetas from './home-recetas/Home-Recetas';
import Footer from '../footer/Footer';

const Home = () => {
    return (
      <div className="home">
        <HomeHeader />
        <HomeProductos />
        <HomeNoticias />
        <HomeRecetas />
        <Footer />
      </div>
    );
  };
  
  export default Home;