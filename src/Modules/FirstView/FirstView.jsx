import { IconPlayerPlayFilled, IconDisc } from '@tabler/icons-react';

import Header from '@/Components/Header/Header'

import Style from './FirstView.module.scss'
import ActionBtn from '@/Components/ActionBtn/ActionBtn';


export default function FirstView() {
  return (
    <section className={Style['first-view']}>
      <div className={Style.head}>
        <Header />
      </div>

      <div className={Style['back-Img']}>
        <picture className={Style['cover-img']}>
          <source media='(max-width: 992px)' srcSet='/headImgMobile.jpg'/>
          <source media='(min-width: 992px)' srcSet='/headImg.png'/>
          <img
            alt='imagen ilustrativa de desarrollo web'
            data-src='/headImg.png'
            loading='lazy'
          />
        </picture>
      </div>

      <div className={Style.information}>
        <h1>Aún no tienes tu página web?</h1>

        <div>
          <p>
            El mundo está más digitalizado que nunca, no pierdas la oportunidad de tener presencia online y llegar a más clientes, mejorando tu marca y la experiencia de tus usuarios.
          </p>
        </div>

        <div className={Style.buttons}>
          <ActionBtn />
          {/* <button>
            <IconPlayerPlayFilled /> Comenzar
          </button> */}
          <button>
            <IconDisc /> Demos
          </button>
        </div>
      </div>
    </section>
  )
}
