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
        <h1>Esto es texto de relleno...</h1>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consect elit. Provident, quisquam officia voluptatem eius ab blanditiis? Optio ullam nulla consectetur ut sunt. Temporibus, ea placeat consequatur iusto nostrum quasi alias.
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
