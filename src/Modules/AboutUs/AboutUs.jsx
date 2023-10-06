import Style from './AboutUs.module.scss'

export default function AboutUs() {
  return (
    <section className={`container ${Style['about-section']}`}>
      <picture>
        <img src='/Focused_Working.png' alt='icono de quienes somos' />
      </picture>

      <div className={Style.information}>
        <h2 id='about-us' className='subtitle'>¿Quiénes somos?</h2>

      <div className={Style.text}>

        <p>
          En Digital Start, somos apasionados por la belleza y el bienestar. Nos especializamos en la creación de sitios web a medida para spas y salones de belleza. Nuestra misión es ayudar a que tu negocio destaque en línea, brindando una presencia digital que refleje la esencia y la calidad de tus servicios. Con diseño elegante y funcionalidad excepcional, estamos aquí para impulsar tu éxito en la web y conectar a tus clientes con la belleza y la relajación que ofreces.
        </p>

        <p>
          Creemos que cada spa y salón de belleza tiene una historia única y hermosa que contar. Nuestra visión es convertir esa historia en una experiencia digital cautivadora. Desde la presentación de tus servicios hasta la facilidad para los clientes en línea, trabajamos incansablemente para que tu sitio web sea una extensión perfecta de tu negocio. Confía en nosotros para llevar tu presencia en línea al siguiente nivel, porque tu éxito es nuestra pasión.
        </p>
      </div>
      </div>
    </section>
  )
}
