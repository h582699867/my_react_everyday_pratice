import { INC, DEC } from './constant'
const initState = 0
function countReducer(preState = initState, action) {
  const { type, data } = action
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
