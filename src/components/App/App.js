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
// CONST


function App() {
  if (true) {
    return (
      <div className={css.App}>
        <h1 className={css.title}>Моя коллекция фотографий</h1>
        <div className={css.top}>
          <Tags />
        </div>
        <div className={css.content}>
          <Collection
            name='Путешествие по миру'
            images={[
              'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            ]}
          />
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
