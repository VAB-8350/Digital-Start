import Style from './AboutUs.module.scss'

export default function AboutUs() {
  return (
    <section className={`container ${Style['about-section']}`}>
      <picture>
        <img src='/Focused_Working.png' alt='icono de quienes somos' />
      </picture>

      <div className={Style.information}>
        <h2 className='subtitle'>Quienes somos?</h2>

      <div className={Style.text}>

        <p>
          Aca tengo que poner mucho texto de relleno que diga cosas para que el cliente tenga mas confianza y sienta que me conoce, es importante dar una buena impresion.y no solo eso si no que tambien debe pensar que no existe una mejor opcion en el mercado
        </p>

        <p>
          Aca tengo que poner mucho texto de relleno que diga cosas para que el cliente tenga mas confianza y sienta que me conoce, es importante dar una buena impresion.y no solo eso si no que tambien debe pensar que no existe una mejor opcion en el mercado
        </p>
      </div>
      </div>
    </section>
  )
}
