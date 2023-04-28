import { useState } from 'react'
import ImgLoader from './ImgLoader';
// styles
import css from './Collection.module.scss'

function Collection({ name, images }) {
  const [loaded_0, setLoaded_0] = useState(false)
  const [loaded_1, setLoaded_1] = useState(false)
  const [loaded_2, setLoaded_2] = useState(false)
  const [loaded_3, setLoaded_3] = useState(false)

  return (
    <div className={css.collection}>
      <div className={css.big}>
        {!loaded_0 && (
          <div className={css.big__load}>
            <ImgLoader />
          </div>
        )}
        <img src={images[0]} alt='item' onLoad={() => setLoaded_0(true)} />
      </div>
      <div className={css.bottom}>
        <div className={css.mini}>
          {!loaded_1 && (
            <div className={css.mini__load}>
              <ImgLoader />
            </div>
          )}
          <img src={images[1]} alt='item' onLoad={() => setLoaded_1(true)} />
        </div>
        <div className={css.mini}>
          {!loaded_2 && (
            <div className={css.mini__load}>
              <ImgLoader />
            </div>
          )}
          <img src={images[2]} alt='item' onLoad={() => setLoaded_2(true)} />
        </div>
        <div className={css.mini}>
          {!loaded_3 && (
            <div className={css.mini__load}>
              <ImgLoader />
            </div>
          )}
          <img src={images[3]} alt='item' onLoad={() => setLoaded_3(true)} />
        </div>
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default Collection
