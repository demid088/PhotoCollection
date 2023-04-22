import { useState, useEffect } from 'react'
// components
import Loader from './ContentLoader';
import Collection from './../Collection/Collection';
import Tags from './../Tags/Tags';
import Pagination from './../Pagination/Pagination';
// lib's
import ObjIsEmpty from '../../lib/obj_is_empty/index';
// styles
import css from './App.module.scss'
// JSON
const dataUrl = './data.json'



function App() {
  const [category, setCategory] = useState(0)
  const [searchVal, setSearchVal] = useState('')
  const [collections, setCollections] = useState([])

  useEffect(() => {
    fetch(dataUrl)
      .then((data) => data.json())
      .then((json) => {
        setCollections(json.collections)
        setCategory(json.categories)
      })
      .catch((err) => {
        console.warn(err)
        alert('Ошибка получения данных!')
      })
  }, [])
  
  if (collections.length > 0) {
    return (
      <div className={css.App}>
        <h1 className={css.title}>Моя коллекция фотографий</h1>
        <div className={css.top}>
          <Tags value={searchVal} onChange={setSearchVal} />
        </div>
        <div className={css.content}>
          {
            collections
              .filter(obj => obj.name.toLowerCase().includes(searchVal.toLowerCase()))
              .map((obj, idx) => (
                <Collection key={idx} name={obj.name} images={obj.photos} />
              ))
          }
        </div>
        <Pagination />
      </div>
    )
  }

  return (
    <div className={css.App}>
      <Loader />
    </div> 
  )
}

export default App
