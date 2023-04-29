import { useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
// components
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
      <PhotoProvider>
        <div className={css.big}>
          {!loaded_0 && (
            <div className={css.big__load}>
              <ImgLoader />
            </div>
          )}
          <PhotoView src={images[0]}>
            <img src={images[0]} alt='item' onLoad={() => setLoaded_0(true)} />
          </PhotoView>
        </div>
        <div className={css.bottom}>
          <div className={css.mini}>
            {!loaded_1 && (
              <div className={css.mini__load}>
                <ImgLoader />
              </div>
            )}
            <PhotoView src={images[1]}>
              <img src={images[1]} alt='item' onLoad={() => setLoaded_1(true)} />
            </PhotoView>
          </div>
          <div className={css.mini}>
            {!loaded_2 && (
              <div className={css.mini__load}>
                <ImgLoader />
              </div>
            )}
            <PhotoView src={images[2]}>
              <img src={images[2]} alt='item' onLoad={() => setLoaded_2(true)} />
            </PhotoView>
          </div>
          <div className={css.mini}>
            {!loaded_3 && (
              <div className={css.mini__load}>
                <ImgLoader />
              </div>
            )}
            <PhotoView src={images[3]}>
              <img src={images[3]} alt='item' onLoad={() => setLoaded_3(true)} />
            </PhotoView>
          </div>
        </div>
        <h4>{name}</h4>
      </PhotoProvider>
    </div>
  )
}

export default Collection
