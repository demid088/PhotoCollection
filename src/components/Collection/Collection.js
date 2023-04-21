import { useState, useEffect } from 'react'
// components
// import Loader from './ContentLoader'
// lib's
// import ObjIsEmpty from '../../lib/obj_is_empty/index'
// styles
import css from './Collection.module.scss'
// CONST

function Collection({ name, images }) {
  return (
    <div className={css.collection}>
      <img className={css.collection__big} src={images[0]} alt='item' />
      <div className={css.collection__bottom}>
        <img className={css.collection__mini} src={images[1]} alt='item' />
        <img className={css.collection__mini} src={images[2]} alt='item' />
        <img className={css.collection__mini} src={images[3]} alt='item' />
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default Collection
