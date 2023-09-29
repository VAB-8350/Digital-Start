'use client'
import { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

import Style from './Header.module.scss'

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className={Style.header}>
      <a href="" className={Style.logo}>
        <h2>Digital Start</h2>
      </a>

      <nav className={`${Style['header-nav']} ${openMenu ? Style.show : Style.hidden}`}>
        <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">Demos</a></li>
          <li><a href="">Characteristics</a></li>
          <li><a href="">FAQ's</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </nav>

      <button onClick={() => setOpenMenu(!openMenu)}  className={Style['toggle-menu']}>
        <IconMenu2 />
      </button>
    </header>
  )
}
