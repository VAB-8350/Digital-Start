import ActionBtn from '@/Components/ActionBtn/ActionBtn'
import Style from './Steps.module.scss'

const stepsInfo = [
  {
    img: '/steps/1.png',
    title: 'Selecciona tu plantilla',
    text: 'Ve a ver nuestros increibles disenios a la seccion demo para seleccionar el que mas se ajuste a tus necesidades.'
  },
  {
    img: '/steps/2.png',
    title: 'Contactanos',
    text: 'Ponte en contacto con nosotros para compartirnos informacion de tu negocio y cual plantilla es la que escoges'
  },
  {
    img: '/steps/3.png',
    title: 'Disfruta tu nuevo sitio web',
    text: 'Es hora de invitar a tus clientes a que visiten tu web, y conozcan todos tus fantasticos productos y servicios.'
  }
]

export default function Steps() {

  const structureStep = ({img, title, text, index}) => {

    return (
      <article className={`${Style.step} ${Style[`step-${index}`]}`}>
        <picture>
          <img src={img} alt='imagen del paso a seguir' />
        </picture>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    )
  }

  return (
    <section className={`container ${Style['steps-section']}`}>
      <h2 className='subtitle'>Como obtengo mi web?</h2>

      <div className={Style.steps}>
        {
          stepsInfo.map((step, index) => structureStep(step, index))
        }
      </div>

      <ActionBtn />
    </section>
  )
}
