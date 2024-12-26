import '../tribu-aztecas/TribuAztecas.css';
import React, { useState, useEffect, useRef } from 'react';
import ImgQuesadillas from '../../../assets/images/tribu-img/quesadillas.png';
import ImgNachos from '../../../assets/images/tribu-img/nachos.png';
import IconFire from '../../../assets/images/tribu-img/fire-icon-tribu.png';
import IconArrow from '../../../assets/images/tribu-img/arrow-icon-tribu.png';
import ImgSmile from '../../../assets/images/tribu-img/smile-face.png';

const TribuAztecas = () => {
  const [scrollPercent, setScrollPercent] = useState(0.5);
  const [isVisible, setIsVisible] = useState([false, false, false]); // Para cada <p>
  const refs = [useRef(null), useRef(null), useRef(null)]; // Ref para parrafos

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(scrollTop / scrollHeight, 1);
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateRotation = (baseRotation, scrollPercent) => {
    if (scrollPercent <= 0.5) {
      return baseRotation * (1 - scrollPercent * 2);
    } else {
      return (baseRotation * -1) * ((scrollPercent - 0.5) * 2);
    }
  };

  //visibilidad <p>

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newState = [...prev];
              newState[index] = true; // cambiamos visibilidad
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 } // Elemento es visible, si ocupa 10% de su area en la pantalla
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  return (
    <div className='aztecas-container'>
      <section className='left section'>
        <div className='img-bottom-holder'>
          <img
            className='img'
            loading="lazy"
            style={{ transform: `rotate(${calculateRotation(-10, scrollPercent)}deg)` }}
            src={ImgNachos}
            alt="Foto de los nachos con guacamole"
          />

          <img
            className='fire-icon'
            loading="lazy"
            src={IconFire}
            alt="Fire icon"
          />

          <img
            className='img'
            loading="lazy"
            style={{ transform: `rotate(${calculateRotation(13, scrollPercent)}deg)` }}
            src={ImgQuesadillas}
            alt="Quesadillas con pollo y queso"
          />
        </div>
      </section>

      <section className='right section'>

        <p ref={refs[0]}
          className={`paragraph ${isVisible[0] ? 'fade-in' : ''}`}
        >Los antiguos aztecas nos regalaron sabores milenarios que aún disfrutamos hoy en día.
        </p>

        <div className='emoji-holder'>
          <img src={ImgSmile} alt="Emoji smile" />
        </div>

        <p ref={refs[1]}
          className={`paragraph ${isVisible[1] ? 'fade-in' : ''}`}>
          El aroma de las tortillas calentitas, el picante sabor del guacamole,
          el queso fundiéndose con los nachos adornados con chili y jalapeños... son una
          fiesta para el paladar. Los tiempos han cambiado, pero la esencia y la deliciosa
          tradición azteca perduran en cada bocado.
        </p>

        <p ref={refs[2]}
          className={`paragraph ${isVisible[2] ? 'fade-in' : ''}`}>
          Y, aunque no sea alrededor de una fogata en la aldea, es con tu tribu con quienes querrás disfrutar de este festín.
        </p>

        <div className="image-overlay">
          <img className='arrow-icon' src={IconArrow} alt="Arrow icon" />
        </div>

      </section>
    </div>
  );
};

export default TribuAztecas;


/*
import '../tribu-aztecas/TribuAztecas.css';
import React, { useState, useEffect } from 'react';
import ImgQuesadillas from '../../../assets/images/tribu-img/quesadillas.png';
import ImgNachos from '../../../assets/images/tribu-img/nachos.png';
import IconFire from '../../../assets/images/tribu-img/fire-icon-tribu.png';
import IconArrow from '../../../assets/images/tribu-img/arrow-icon-tribu.png';
import ImgSmile from '../../../assets/images/tribu-img/smile-face.png';

const TribuAztecas = () => {
  const [scrollPercent, setScrollPercent] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(scrollTop / scrollHeight, 0.9); 
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='aztecas-container'>
      <section className='left section'>
        <div className='img-bottom-holder'>
          <img 
            className='img'
            style={{ transform: `rotate(${scrollPercent * -7}deg)` }}
            src={ImgNachos} 
            alt="Foto de los nachos con guacamole" 
          />

          <img 
            className='fire-icon' 
            src={IconFire} 
            alt="Fire icon" 
          />

          <img 
            className='img'
            style={{ transform: `rotate(${10 + scrollPercent * 5}deg)` }}
            src={ImgQuesadillas} 
            alt="Quesadillas con pollo y queso" 
          />
        </div>
      </section>

      <section className='right section'>
        <p>Los antiguos aztecas nos regalaron sabores milenarios que aún disfrutamos hoy en día.</p>
        <div className='emoji-holder'>
          <img src={ImgSmile} alt="Emoji smile" />
        </div>
        <p>El aroma de las tortillas calentitas, el picante sabor del guacamole,
          el queso fundiéndose con los nachos adornados con chili y jalapeños... son una
          fiesta para el paladar. Los tiempos han cambiado, pero la esencia y la deliciosa
          tradición azteca perduran en cada bocado.</p>
        <p>Y, aunque no sea alrededor de una fogata en la aldea, es con tu tribu con quienes querrás disfrutar de este festín.</p>
        <div className="image-overlay">
          <img className='arrow-icon' src={IconArrow} alt="Arrow icon" />
        </div>
      </section>
    </div>
  );
};

export default TribuAztecas;

*/