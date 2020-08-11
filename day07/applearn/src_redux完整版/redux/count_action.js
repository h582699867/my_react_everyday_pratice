// 创建Count组件相关的action对象
import { INC, DEC } from './constant'
// 创建加的action
export const incAction = number => ({ type: INC, data: number })
// 创建减的action
export const decAction = number => ({ type: DEC, data: number })
