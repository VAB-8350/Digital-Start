import Style from './Characteristics.module.scss'

const characteristicsInfo = [
  {
    img: '/characteristics/1.png',
    text: 'El sitio es construido con las mejores tecnologias, todas nuestras plantillas son originales y estan constroidas con modulos, por lo que es posible agregar o quitar elementos.'
  },
  {
    img: '/characteristics/2.png',
    text: 'Si lo deseas puedes contar con analiticas para saber cuantas personas entran a tu web y ver de que forma es utilizada, esto te puede permitir mejorar tu estrategia de venta y tu contenido'
  },
  {
    img: '/characteristics/3.png',
    text: 'Ofrecemos una solucion economica para que puedas comenzar cuanto antes, esto te permitira ahorar dinero '
  },
  {
    img: '/characteristics/4.png',
    text: 'Una cualidad de estas plantillas es suresponsividad, se vera fantastica tanto en telefonos como en computadoras, cuidando el disenio en cada momento.'
  },
  {
    img: '/characteristics/5.png',
    text: 'Por un pequeño costo de mantenimiento puedes contar con un mantenimiento de tu web aplicando actualizaciones y algunos cambios menores al sitio'
  },
  {
    img: '/characteristics/6.png',
    text: 'Desde el momento en el que confirma hasta que tienes tu web es muy rapido ya que al tener plantillas personalisables solo necesitamos tu informacion y tu estilo.'
  }
]

export default function Characteristics() {

  return (
    <section className={`container ${Style['characteristics-section']}`}>
      <h2 className='subtitle'>Caracteristicas</h2>

      <div className={Style.characteristics}>
        {
          characteristicsInfo.map((characteristic, index) => (
            <article key={index}>

              <picture>
                <img src={characteristic.img} alt='icono de caracteristica' />
              </picture>

              <p>{characteristic.text}</p>

            </article>
          ))
        }
      </div>
    </section>
  )
}
