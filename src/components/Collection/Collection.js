// styles
import css from './Collection.module.scss'

function Collection({ name, images }) {
  return (
    <div className={css.collection}>
      <img className={css.big} src={images[0]} alt='item' />
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
