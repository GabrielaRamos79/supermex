import '../tribu-aztecas/TribuAztecas.css'
import ImgQuesadillas from '../../../assets/images/tribu-img/quesadillas.png'
import ImgNachos from '../../../assets/images/tribu-img/nachos.png'
const TribuAztecas = () => {

  return (
    <div className='aztecas-container'>
      <section className='left section'>
        <img className='fire-icon' src="" alt="Fire icon" />
        <div className='img-bottom-holder'>
          <img src={ImgNachos} alt="Foto de los nachos con guacamole" />
          <img src={ImgQuesadillas} alt="Quesadillas con pollo y queso" />
        </div>

      </section>
      <section className='right section'>
        <p>Los antiguos aztecas nos regalaron sabores milenarios que aún disfrutamos hoy en día.</p>
        <p>El aroma de las tortillas calentitas, el picante sabor del guacamole, 
          el queso fundiéndose con los nachos adornados con chili y jalapeños... son una 
          fiesta para el paladar. Los tiempos han cambiado, pero la esencia y la deliciosa 
          tradición azteca perduran en cada bocado.</p>
        <p>Y, aunque no sea alrededor de una fogata en la aldea, es con tu tribu con quienes querrás disfrutar de este festín. </p>
      </section>
    </div>
  )
}

export default TribuAztecas