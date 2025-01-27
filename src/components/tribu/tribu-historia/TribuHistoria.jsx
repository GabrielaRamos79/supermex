import '../tribu-historia/TribuHistoria.css';
import ImgBurrito from '../../../assets/images/tribu-img/burrito.png';
import ImgNachosTomato from '../../../assets/images/tribu-img/nachos-with-tomato-salsa.png';
import ImgTacoLime from '../../../assets/images/tribu-img/tacos-lime.png';
import ImgNachos from '../../../assets/images/tribu-img/nachos-pattern.png';
import IconPinkStar from '../../../assets/images/tribu-img/estrella-rosa.png';

const TribuHistoria = () => {
    return (
        <div className="history-container">
            <section className="section-history top-section">
                <div className="text-holder">
                    <img src={IconPinkStar} alt="Icono de la estrella rosa" />
                    <div className='text-box'>
                    <p>¿Conoces nuestra historia?</p>
                    </div>
                </div>

                <div className="img-holder">
                    <div className='img-box'>
                        <img src={ImgBurrito} alt="Burrito" />
                        <img src={ImgTacoLime} alt="Nachos-with-tomato-salsa" />
                        <img src={ImgNachos} alt="Nachos" />
                    </div>

                </div>
            </section>

            <section className="section-history center-section">
                <div>
                    <img src="" alt="Icono de la pequeña estrella rosa" />
                    <p>En Supermex llevamos desde XXXX compartiendo los mejores productos mexicanos y tex-mex para que triunfes con tus recetas.
                    </p>
                </div>

                <div>
                    <p>Comenzamos esta gran aventura en XXXX de la mano de dos familias americanas que llegaron hasta el Puerto de Santa María, en Cádiz. El producto que comenzamos fabricando y distribuyendo fueron nuestras populares tortilla chips, conocidas comúnmente en España como “nachos”.
                    </p>
                </div>
            </section>

            <section className="section-history bottom-section">
                <div>
                    <img src="" alt="Icono de la estrella amarillo" />
                    <img src="" alt="Nachos con la salsa de los tomates" />
                </div>
                <div>
                    <p>Pero, nachos es el nombre que lleva el plato formado por tortilla chips, carne picada, jalapeños, queso fundido, pico de gaño...</p>
                    <p>Ya lo sabías, ¿verdad?</p>
                    <p>Gracias al delicioso sabor, y la gran calidad de nuestros productos, hemos crecido hasta convertirnos en un proveedor internacional de gran variedad de comida mexicana y tex-mex. </p>
                    <p>Contamos con el más avanzado sistema de producción y de control de calidad, obteniendo, además, numerosos premios que aplauden nuestro sabor y compromiso con la creación de productos de gran calidad.</p>
                </div>
            </section>

        </div>
    )
}

export default TribuHistoria;