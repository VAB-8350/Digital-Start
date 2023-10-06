'use client'
import { useState, useEffect } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

import Style from './Header.module.scss'

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {

    window.addEventListener('click', handleClickOutside)

    return () => {

      window.removeEventListener('click', handleClickOutside)

    }

  }, [openMenu])

  const sectionScroll = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView(true)
    setOpenMenu(false)
  }

  const handleClickOutside = (event) => {

    if (openMenu && !event.target.closest('#navigation') && !event.target.closest('#button-toggle')) setOpenMenu(false)

  }

  return (
    <header className={Style.header}>
      <a href="" className={Style.logo}>
        <h2>Digital Start</h2>
      </a>

      <nav id='navigation' className={`${Style['header-nav']} ${openMenu ? Style.show : Style.hidden}`}>
        <ul>
          <li><button onClick={() => sectionScroll('about-us')}>Sobre Nosotros</button></li>
          <li><button onClick={() => sectionScroll('demos')}>Demos</button></li>
          <li><button onClick={() => sectionScroll('characteristics')}>Características</button></li>
          <li><button onClick={() => sectionScroll('faqs')}>Preguntas Frecuentes</button></li>
          <li><button onClick={() => sectionScroll('contact-us')}>Contacto</button></li>
        </ul>
      </nav>

      <button id='button-toggle' onClick={() => setOpenMenu(!openMenu)}  className={Style['toggle-menu']}>
        <IconMenu2 />
      </button>
    </header>
  )
}
