import { INC, DEC } from './constant'
// 创建加的action
export const incAction = number => ({ type: INC, data: number })
// 创建减的action
export const decAction = number => ({ type: DEC, data: number })
// 创建等等加
export const incWaitAction = number => {
  return dispatch => {
    setTimeout(() => {
      // 调用同步action实现加
      dispatch(incAction(number))
    }, 500)
  }
}
