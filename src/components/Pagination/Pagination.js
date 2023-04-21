import { useState, useEffect } from 'react'
// components
// import Loader from './ContentLoader'
// lib's
// import ObjIsEmpty from '../../lib/obj_is_empty/index'
// styles
import css from './Pagination.module.scss'
// CONST

function Pagination() {
  return (
    <ul className={css.pagination}>
      <li>1</li>
      <li className={css.active}>2</li>
      <li>3</li>
    </ul>
  )
}

export default Pagination
