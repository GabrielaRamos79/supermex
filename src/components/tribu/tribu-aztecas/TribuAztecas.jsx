import '../tribu-aztecas/TribuAztecas.css'
import ImgQuesadillas from '../../../assets/images/tribu-img/quesadillas.png'
import ImgNachos from '../../../assets/images/tribu-img/nachos.png'
import IconFire from '../../../assets/images/tribu-img/fire-icon-tribu.png'
import IconArrow from '../../../assets/images/tribu-img/arrow-icon-tribu.png'
import ImgSmile from '../../../assets/images/tribu-img/smile-face.png'

const TribuAztecas = () => {

  return (
    <div className='aztecas-container'>
      <section className='left section'>
        <div className='img-bottom-holder'>
          <img className='img'src={ImgNachos} alt="Foto de los nachos con guacamole" />
          <img className='fire-icon' src={IconFire} alt="Fire icon" />
          <img className='img'src={ImgQuesadillas} alt="Quesadillas con pollo y queso" />
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
        <p>Y, aunque no sea alrededor de una fogata en la aldea, es con tu tribu con quienes querrás disfrutar de este festín. </p>
        <div class="image-overlay">
          <img className='arrow-icon' src={IconArrow} alt="Arrow icon" />
        </div>
      </section>
    </div>
  )
}

export default TribuAztecas