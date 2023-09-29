import { IconPlayerPlayFilled } from '@tabler/icons-react';

import Style from './ActionBtn.module.scss'

export default function ActionBtn() {
  return (
    <button className={Style['action-btn']}>
      <IconPlayerPlayFilled /> Comenzar
    </button>
  )
}
