import './Menu.css';
import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function Menu() {
    const { t } = useTranslation("menu");
    return (
        <div className="container">
            <div className="containerList">
 {/*FIXME flujo no tiene info a donde tiene que llevarte "Productos" por ahora dejo a Home*/} 
                <NavLink to="/" className="item">
                    <p className="text">{t("productos")}</p>
                </NavLink>
                
                <NavLink to="/tribu" className="item">
                    <p className="text">{t("tribu")}</p>
                </NavLink>
                
                <NavLink to="/recetas" className="item">
                    <p className="text">{t("recetas")}</p>
                </NavLink>
                
                <NavLink to="/contacto" className="item">
                    <p className="text">{t("contacto")}</p>
                </NavLink>
                
                <NavLink to="/noticias" className="item">
                    <p className="text">{t("noticias")}</p>
                </NavLink>
            </div>
        </div>
    );
}
export default Menu;
