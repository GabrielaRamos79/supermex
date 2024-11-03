import './Menu.css';
import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <div className="container">
            <div className="containerList">
 {/*FIXME flujo no tiene info a donde tiene que llevarte "Productos" por ahora dejo a Home*/} 
                <NavLink to="/" className="item">
                    <p className="text">PRODUCTOS</p>
                </NavLink>
                
                <NavLink to="/tribu" className="item">
                    <p className="text">LA TRIBU</p>
                </NavLink>
                
                <NavLink to="/recetas" className="item">
                    <p className="text">RECETAS</p>
                </NavLink>
                
                <NavLink to="/contacto" className="item">
                    <p className="text">CONTACTO</p>
                </NavLink>
                
                <NavLink to="/noticias" className="item">
                    <p className="text">NOTICIAS</p>
                </NavLink>
            </div>
        </div>
    );
}
export default Menu;
