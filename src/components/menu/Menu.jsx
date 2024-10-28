import "./Menu.css"
import fondo from "../../assets/images/menu-img/fondo-menu"
import spanish from "../../assets/images/español"
import english from "../../assets/images/ingles"
import logo from "../../assets/images/logo-amarillo"
import cierre from "../../assets/images/cierre"

function Menu() {
    return (
        <>
        <div className="menu">
            <img src="fondo" alt="pimientos" />
        </div>
        <div className="menu-icons">
            <img src={spanish} alt="español" />
            <img src={english} alt="ingles" />
        </div>
        <div className="logo-menu">
            <img src={logo} alt="logo" />
        </div>

        </>

    );
}