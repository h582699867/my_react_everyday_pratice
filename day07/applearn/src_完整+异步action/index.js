// 引入react
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入store
import store from './redux/store'
// 引入App
import App from './App'
ReactDOM.render(<App store={store} />, document.getElementById('root'))
// store.subscribe()用于检测redux中的变化，一旦状态变化，就调用subscribe所指定的回调
store.subscribe(() => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
})
