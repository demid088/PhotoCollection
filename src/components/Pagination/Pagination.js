import { useState, useEffect } from 'react'
// components
// import Loader from './ContentLoader'
// lib's
// import ObjIsEmpty from '../../lib/obj_is_empty/index'
// styles
import css from './Pagination.module.scss'
// CONST

function Pagination({ countCollections, limit, page, setPage }) {
  let arrSize = Math.ceil(countCollections / limit)

  return (
    <ul className={css.pagination}>
      {[...Array(arrSize)].map((val, idx) => (
        <li
          key={idx}
          onClick={() => setPage(idx + 1)}
          className={idx + 1 === page ? css.active : ''}
        >
          {idx + 1}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
