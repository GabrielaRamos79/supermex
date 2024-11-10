import React, { useState, useEffect } from 'react';
import '../navbar/NavBar.css'
import {Link, useLocation, } from 'react-router-dom';

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

    const location = useLocation();
    const isMenuPage = location.pathname === '/menu';

    return (
        <nav className="navbar">

            <div className="lang-switch-container">
                <div className='lang-btn es'>ES</div>
                <div className='lang-btn en'>EN</div>
            </div>


            <div className="logo">
                <Link to="/">
                    <img src={logos[currentLogoIndex]} alt="logo" />
                </Link>
            </div>

            <div className="menu-btn">
                {isMenuPage ? (
                    <Link to="/">
                        <div className="menu-btn menu-close"></div>
                    </Link>
                ) : (
                    <Link to="/menu">
                        <div className="menu-btn menu-open"></div>
                    </Link>
                )}
            </div>
        </nav>
    )
}
export default NavBar;