import { Fragment } from 'react'
// components
// import Loader from './ContentLoader'
// lib's
// import ObjIsEmpty from '../../lib/obj_is_empty/index'
// styles
import css from './Tags.module.scss'
// CONST

function Tags({ id, setId, categories, searchVal, onChange}) {
  return (
    <Fragment>
      <ul className={css.tags}>
        {
          categories.map((cat, idx) => 
            <li onClick={() => setId(idx)} className={id === idx ? css.active : ''} key={cat.name}>{cat.name}</li>)
        }
      </ul>
      <input value={searchVal} onChange={e => onChange(e.target.value)} className={css.search__input} placeholder='Поиск по названию' />
    </Fragment>
  )
}

export default Tags
