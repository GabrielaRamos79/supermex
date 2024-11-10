import React, { useState, useEffect } from 'react';
import '../navbar/NavBar.css'
import { NavLink } from 'react-router-dom';

import logoAmarillo from '../../assets/images/navbar/logo/logo-amarillo.svg';
import logoAzul from '../../assets/images/navbar/logo/logo-azul.svg';
import logoCeleste from '../../assets/images/navbar/logo/logo-celeste.svg';
import logoMorado from '../../assets/images/navbar/logo/logo-morado.svg';
import logoRosa from '../../assets/images/navbar/logo/logo-rosa.svg';


function NavBar() {

    //cambiamos logo cada vez cuando renderizamos la pagina
    const logos = [logoAmarillo, logoAzul, logoCeleste, logoMorado, logoRosa];
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

    useEffect(() => {
        setCurrentLogoIndex(Math.floor(Math.random() * logos.length));
    }, []);

    //cambiamos css class para boton menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        toggleMenu();
    }, [])

    return (
        <nav className="navbar">

            <div className="lang-switch-container">
                <div className='lang-btn es'>ES</div>
                <div className='lang-btn en'>EN</div>
            </div>


            <div className="logo">
                <NavLink to="/">
                    <img src={logos[currentLogoIndex]} alt="logo" />
                </NavLink>
            </div>


            <NavLink to={isMenuOpen ? '/' : '/menu'}>
                <div className={isMenuOpen ? 'menu-btn menu-close' : 'menu-btn menu-open'}
                    onClick={toggleMenu}>
                </div>
            </NavLink>

        </nav>
    )
}

export default NavBar;