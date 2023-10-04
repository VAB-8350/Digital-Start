import ActionBtn from '@/Components/ActionBtn/ActionBtn'
import Style from './Faqs.module.scss'

const faqsInfo = [
  {
    question: 'Como pago la pagina?',
    answer: 'Este servicio se abona la mitad por adelantado y el restante al entregar el producto, se paga atravez de -----'
  },
  {
    question: 'Como pago la pagina?',
    answer: 'Este servicio se abona la mitad por adelantado y el restante al entregar el producto, se paga atravez de -----'
  },
  {
    question: 'Como pago la pagina?',
    answer: 'Este servicio se abona la mitad por adelantado y el restante al entregar el producto, se paga atravez de -----'
  },
  {
    question: 'Como pago la pagina?',
    answer: 'Este servicio se abona la mitad por adelantado y el restante al entregar el producto, se paga atravez de -----'
  },
  {
    question: 'Como pago la pagina?',
    answer: 'Este servicio se abona la mitad por adelantado y el restante al entregar el producto, se paga atravez de -----'
  },
  {
    question: 'Como pago la pagina?',
    answer: 'Este servicio se abona la mitad por adelantado y el restante al entregar el producto, se paga atravez de -----'
  },
]

export default function Faqs() {
  return (
    <section className={`container ${Style['faq-section']}`}>
      <h2 className='subtitle'>Preguntas Frecuentes</h2>

      <div>
        {
          faqsInfo.map((faq, index) => (
            <article key={index}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </article>
          ))
        }
      </div>

      <ActionBtn />
    </section>
  )
}
