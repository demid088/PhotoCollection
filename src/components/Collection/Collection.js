import { createFactory, Fragment } from 'react'
import Preloader from '../Preloader/Preloader'
import ImageLoader from 'react-imageloader'
// styles
import css from './Collection.module.scss'

function Collection({ name, images }) {
  return (
    <div className={css.collection}>
      <ImageLoader
        wrapper={createFactory(Fragment)}
        preloader={Preloader}
        src={images[0]}
        imgProps=
          {{
            class: css.big,
            alt: 'item',
          }}
        >
        Error
      </ImageLoader>
      <div className={css.bottom}>
        <img className={css.mini} src={images[1]} alt='item' />
        <img className={css.mini} src={images[2]} alt='item' />
        <img className={css.mini} src={images[3]} alt='item' />
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default Collection
