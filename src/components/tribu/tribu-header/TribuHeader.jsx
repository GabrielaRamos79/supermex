import '../tribu-header/TribuHeader.css'
import imgTaco from '../../../assets/images/tribu-img/taco-without-border.png'
import imgRoti from '../../../assets/images/tribu-img/indian-roti-without-border.png'


//TODO translation on EN
//FIXME cambiar las img por unas de formato svg sin border
function TribuHeader() {
    return (
        <div className="containerTribu">
            <div className="containerRow">
                <div className="row 1">
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

                <div className="row 2">
                    <div className="img-container">
                        <img src={imgRoti} alt="Foto de los indian roti" />
                    </div>
                    <div className="word">
                        <p>NUESTRA</p>
                    </div>
                </div>

                <div className="row last">
                    <div className="word">
                        <p>TRIBU...</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>y forma parte de ella desde el primer bocado</p>
            </div>
        </div>
    )
}
export default TribuHeader