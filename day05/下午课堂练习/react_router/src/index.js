// 引入React
import React from 'react'
// 引入React-dom
import ReactDOM from 'react-dom'
// 引入BrowserRouter
import { BrowserRouter } from 'react-router-dom'
// 引入App
import App from './App'
// 渲染页面
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
