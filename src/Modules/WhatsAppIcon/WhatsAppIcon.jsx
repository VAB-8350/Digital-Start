// External Modules
import Image from 'next/image'

// Internal Modules
import Style from './WhatsAppIcon.module.scss'

export default function WhatsAppIcon() {
  return (
    <a className={Style.whatsapp} href='https://api.whatsapp.com/send?phone=543584235967&text=Test%20Message' target='_blank'>
      <img src='/WhatsApp.png' alt='Contactanos por WhatsApp' width={70} height={70}/>
    </a>
  )
}
