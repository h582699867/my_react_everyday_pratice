// 创建Count组件相关的action对象
import { INC, DEC } from './constant'
// 创建加的action
export const incAction = number => ({ type: INC, data: number })
// 创建减的action
export const decAction = number => ({ type: DEC, data: number })
// 创建等一等再加的action
export const incWaitAction = number => {
  return dispatch => {
    // 用setTimeout模拟一个异步代码
    setTimeout(() => {
      // 调用同步action---incAction实现加的操作
      dispatch(incAction(number))
    }, 500)
  }
}
/**
 * 同步action 异步action
 *  同步action：是一个一般对象
 *  异步action：是一个函数，函数里面可以开启异步任务
 *  异步action中一般会调用同步action
 */
