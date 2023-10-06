'use client'
import { IconPlayerPlayFilled } from '@tabler/icons-react';

import Style from './ActionBtn.module.scss'

export default function ActionBtn() {

  const sectionScroll = () => {
    const element = document.getElementById('contact-us')
    element.scrollIntoView(false)
  }

  return (
    <button onClick={sectionScroll} className={Style['action-btn']}>
      <IconPlayerPlayFilled /> Comenzar
    </button>
  )
}
