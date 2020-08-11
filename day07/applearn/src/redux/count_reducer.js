// 定义为Count组件服务的reducer

import { INC, DEC } from './constant'

// 初始化state
const initState = 0
/**
 * countReducer专门用于加工Count组件的状态
 * @param {*} preState 第一次调用传入的是undefined，第二次传入的是之前的状态
 * @param {*} action 动作对象 包含type,data
 */
function countReducer(preState = initState, action) {
  // 从action中获取type(类型)，data(加几，减几)
  const { type, data } = action
  // 根据type类型，决定要做什么事情
  switch (type) {
    case INC:
      return preState + data
    case DEC:
      return preState - data
    default:
      return preState
  }
}

export default countReducer
