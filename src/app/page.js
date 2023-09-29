import FirstView from '@/Modules/FirstView/FirstView'
import Style from './page.module.scss'
import AboutUs from '@/Modules/AboutUs/AboutUs'
import Steps from '@/Modules/Steps/Steps'
import Characteristics from '@/Modules/Characteristics/Characteristics'
import Demos from '@/Modules/Demos/Demos'

export default function Home() {
  return (
    <>
      <FirstView />
      <main className={Style.body}>
        <AboutUs />

        <Steps />

        <Characteristics />

        <Demos />
      </main>
    </>
  )
}
