import { INCREMENT, DECREMENT } from './constant'
/* 
  对象 是同步action
  函数 是异步action(一般会请求的方法)
*/
export const countIncrementAction = data => ({ type: INCREMENT, data })
export const countDecrementAction = data => ({ type: DECREMENT, data })
export const countIncrementAsyncAction = (data, time) => {
  return () => {
    setTimeout(dispatch => {
      dispatch(countIncrementAction(data))
    }, time)
  }
}
