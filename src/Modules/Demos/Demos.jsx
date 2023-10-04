'use client'
import { register } from 'swiper/element/bundle'
register()

import ActionBtn from '@/Components/ActionBtn/ActionBtn'
import Style from './Demos.module.scss'
import { useEffect, useState } from 'react'

const demosInfo = [
  {
    img: '/demos/1.png',
    title: 'Natural girl',
    link: '#'
  },
  {
    img: '/demos/2.png',
    title: 'bubble bath',
    link: '#'
  },
  {
    img: '/demos/3.png',
    title: 'Dark purple',
    link: '#'
  },
  {
    img: '/demos/4.png',
    title: 'Sauna Relax',
    link: '#'
  }
]

export default function Demos() {

  const [device, setDevice] = useState('mobile')

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler()

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  const resizeHandler = () => {
    const widthScreen = window.outerWidth
    widthScreen >= 992 ? setDevice('desktop') : setDevice('mobile')
  }

  return (
    <section className={`container ${Style['demo-section']}`}>
      <h2 className='subtitle'>Demos</h2>
      <p>
        Conoce todas nuestras plantillas para saber cual se adapta mejor a tus necesidades, puedes hacer click en cualquiera de ellas para observar un sitio web demo y poder interactuar, recuerda que si ves un modulo que esta en una y te gustaria tenerlo en otra esto es posible.
      </p>

      {
        device === 'mobile'
          ?
            <swiper-container slides-per-view='1' speed='500' autoplay-delay='4000' loop='true' pagination='true'>
                {
                  demosInfo.map((demo, index) => (
                    <swiper-slide key={index}>
                      <span>
                        <a href={demo.link} aria-label={demo.title}>
                          <picture>
                            <img src={demo.img} alt={demo.title} />
                          </picture>

                          <div>
                            <h3>{demo.title}</h3>
                          </div>
                        </a>
                      </span>
                    </swiper-slide>
                  ))
                }
            </swiper-container>
          :
            <div>
              {
                demosInfo.map((demo, index) => (
                  <a key={index} href={demo.link} aria-label={demo.title}>
                    <picture>
                      <img src={demo.img} alt={demo.title} />
                    </picture>

                    <div>
                      <h3>{demo.title}</h3>
                    </div>
                  </a>
                ))
              }
            </div>
      }
      <ActionBtn />
    </section>
  )
}
