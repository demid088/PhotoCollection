import { Fragment } from 'react'
// components
// import Loader from './ContentLoader'
// lib's
// import ObjIsEmpty from '../../lib/obj_is_empty/index'
// styles
import css from './Tags.module.scss'
// CONST

function Tags() {
  return (
    <Fragment>
      <ul className={css.tags}>
        <li className={css.active}>Все</li>
        <li>Горы</li>
        <li>Море</li>
        <li>Архитектура</li>
        <li>Города</li>
      </ul>
      <input className={css.search__input} placeholder='Поиск по названию' />
    </Fragment>
  )
}

export default Tags
