import { Fragment } from 'react'
// styles
import css from './Tags.module.scss'

function Tags({ id, setCategoryId, categories, searchVal, onChange}) {
  return (
    <Fragment>
      <ul className={css.tags}>
        {
          categories.map((cat, idx) => 
            <li onClick={() => setCategoryId(idx)} className={id === idx ? css.active : ''} key={cat.name}>{cat.name}</li>)
        }
      </ul>
      <input value={searchVal} onChange={e => onChange(e.target.value)} className={css.search} placeholder='Поиск по названию' />
    </Fragment>
  )
}

export default Tags
