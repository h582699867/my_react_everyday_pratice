// 引入createStore创建store
import { createStore, applyMiddleware } from 'redux'
// 引入countReducer
import countReducer from './count_reducer'
// 引入thunk支持异步action
import thunk from 'redux-thunk'
// 生成store对象,applyMiddleware的作用是让store认可异步action的写法
const store = createStore(countReducer, applyMiddleware(thunk))
// 暴露store对象
export default store
