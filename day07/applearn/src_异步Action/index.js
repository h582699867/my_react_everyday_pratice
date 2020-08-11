// 引入react
import React from 'react'
// 引入react-dom
import ReactDOM from 'react-dom'
// 引入App
import App from './App'
// 引入store
import store from './redux/store'
// 渲染
ReactDOM.render(<App store={store} />, document.getElementById('root'))

// store.subscribe 专门用于检测redux中的变化，变化就调用subscribe所指定的回调
store.subscribe(() => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
})
