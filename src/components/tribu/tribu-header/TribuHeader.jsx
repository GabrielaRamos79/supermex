import '../tribu-header/TribuHeader.css'
import imgNacho from '../../../assets/images/home-producto-chips.png'

//TODO translation on EN
//FIXME cambiar las img por unas correctas
function TribuHeader() {
    return (
        <div className="containerTribu">
            <div className="containerRow">
                <div className="row 1">
                    <div className="word">
                        <p>ADÉNTRATE</p>
                    </div>
                    <div className="img-container scale-top">
                        <img src={imgNacho} alt="Foto del burito" />
                    </div>
                    <div className="word">
                        <p>EN</p>
                    </div>
                </div>

                <div className="row 2">
                    <div className="img-container">
                        <img src={imgNacho} alt="Foto de las tortillas" />
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