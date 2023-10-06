'use client'
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import {IconMail, IconBrandInstagram, IconPhone, IconBrandFacebook} from '@tabler/icons-react';

import Style from './ContactUs.module.scss'

export default function ContactUs() {

  const [message, setMessage] = useState('')
  const [load, setLoad]       = useState(false)

  const formRef = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoad(true)

    const form = new FormData(formRef.current)
    const data = {
      name: form.get('from_name'),
      email: form.get('email_id'),
      message: form.get('message')
    }

    const res = validate(data)

    if (res.success) {
      emailjs.sendForm('service_lez93bu', 'template_xae4axj', formRef.current, 'zaTFH0rBAWvpOMguG')
        .then(() => setMessage('El mensaje fue enviado con exito'))
        .catch(() => setMessage('Ups! ocurrio un error al enviar su mensaje'))
        .finally(() => setLoad(false))
    }

  }

  const validate = data => {

    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const name    = data.name.length >= 2
    const email   = regex.test(data.email)
    const message = data.message.length >= 10

    !message && setMessage('The message must contain more than 10 characters')
    !email   && setMessage('Wrong email format')
    !name    && setMessage('The name must contain more than 2 characters')

    if (name && email && message) return {success:true , data}
    return {success:false , data}
  }

  return (
    <section className={`container ${Style['contact-section']}`}>

      <form id='contact-us' ref={formRef} onSubmit={sendEmail} className={Style.form}>
        <div>
          <label htmlFor="from_name">Nombre</label>
          <input type="text" name="from_name" id="from_name" placeholder='Andres Barilin' />
        </div>

        <div>
          <label htmlFor="email_id">Mail</label>
          <input type="text" name="email_id" id="email_id" placeholder='andresbarilin@gmail.com' />
        </div>

        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea name='message' placeholder='Escribe tu mensaje en esta sección.'/>
        </div>

        <button type="submit" id="button">
          Enviar
        </button>
      </form>

      <div className={Style['icon-section']}>
        <h2 className='subtitle'>Información de contacto</h2>
        <a target='_blank' href='mailto:victor.barilin2014@gmail.com'><IconMail /> victor.barilin@gmail.com</a>
        <a target='_blank' href='#'><IconPhone /> 3584235967</a>
        <a target='_blank' href='#'><IconBrandInstagram /> @andres_barilin</a>
        <a target='_blank' href='#'><IconBrandFacebook /> andres barilin</a>
      </div>

    </section>
  )
}
