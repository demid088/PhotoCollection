import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

import 'react-photo-view/dist/react-photo-view.css'

import './index.css'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
