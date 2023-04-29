import { useState, useEffect } from 'react'
// components
import Loader from './ContentLoader';
import Collection from './../Collection/Collection';
import Tags from './../Tags/Tags';
import Pagination from './../Pagination/Pagination';
// styles
import css from './App.module.scss'
// JSON
const dataUrl = './data.json'

function App() {
  const limitOnPage = 3

  const [isLoad, setIsLoad] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [categories, setCategories] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [collections, setCollections] = useState([])
  const [totalCollections, setTotalCollections] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(dataUrl)
      .then((data) => data.json())
      .then((json) => {
        const total = json.collections
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchVal.toLowerCase())
          )
          .filter((obj) => (categoryId ? categoryId === obj.category : true))
        const result = total.filter(
          (obj, idx) =>
            idx >= (page - 1) * limitOnPage &&
            idx < (page - 1) * limitOnPage + limitOnPage
        )
        setCategories(json.categories)
        setTotalCollections(total.length)
        setCollections(result)
      })
      .catch((err) => {
        console.warn(err)
        alert('Ошибка получения данных!')
      })
      .finally(() => setIsLoad(false))
  }, [searchVal, categoryId, page])
  
  if (!isLoad) {
    return (
      <div className={css.App}>
        <h1 className={css.title}>Моя коллекция фотографий</h1>
        <div className={css.top}>
          <Tags
            id={categoryId}
            setCategoryId={setCategoryId}
            categories={categories}
            searchVal={searchVal}
            onChange={setSearchVal}
          />
        </div>
        <div className={css.content}>
          {
            collections.map((obj, idx) => {
              return (
                <Collection key={obj.name} name={obj.name} images={obj.photos} />
              )
            })
          }
        </div>
        <Pagination
          countCollections={totalCollections}
          limit={limitOnPage}
          page={page}
          setPage={setPage}
        />
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
