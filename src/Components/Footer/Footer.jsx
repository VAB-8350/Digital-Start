import {IconMail, IconBrandInstagram, IconPhone, IconBrandFacebook} from '@tabler/icons-react';

import Style from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={Style['footer-section']}>
      <img src='/footerImg.png' a4lt='Background footer' />

      <div className={`container ${Style.content}`}>
        <div>
          <h3>Designed By</h3>
          <h2 className='subtitle'>Digital Start</h2>
        </div>

        <div className={Style.social}>
          <a href='#'><IconMail /></a>
          <a href='#'><IconBrandInstagram /></a>
          <a href='#'><IconPhone /></a>
          <a href='#'><IconBrandFacebook /></a>
        </div>
      </div>
    </footer>
  )
}
