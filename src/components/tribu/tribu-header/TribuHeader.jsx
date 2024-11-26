import React, { useState, useEffect } from 'react';
import '../tribu-header/TribuHeader.css';
import imgTaco from '../../../assets/images/tribu-img/taco-without-border.png';
import imgRoti from '../../../assets/images/tribu-img/indian-roti-without-border.png';

function TribuHeader() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(scrollTop / scrollHeight, 0.5); // Finaliza la animación al 50% del scroll
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="containerTribu">
      <div className="containerRow">
        <div
          className="row first"
          style={{ transform: `translateX(calc(30vw * ${scrollPercent}))` }}
        >
          <div className="word">
            <p>ADÉNTRATE</p>
          </div>
          <div className="img-container scale-top">
            <img src={imgTaco} alt="Foto del taco mexicano" />
          </div>
          <div className="word">
            <p>EN</p>
          </div>
        </div>

        <div
          className="row second"
          style={{ transform: `translateX(calc(-30vw * ${scrollPercent}))` }}
        >
          <div className="img-container">
            <img src={imgRoti} alt="Foto de los indian roti" />
          </div>
          <div className="word">
            <p>NUESTRA</p>
          </div>
        </div>

        <div
          className="row last"
          style={{ transform: `translateX(calc(30vw * ${scrollPercent}))` }}
        >
          <div className="word">
            <p>TRIBU...</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>y</p>
        <p>forma</p>
        <p>parte</p>
        <p>de</p>
        <p>ella</p>
        <p>desde</p>
        <p>el</p>
        <p>primer</p>
        <p>bocado</p>
      </div>
    </div>
  );
}

export default TribuHeader;
