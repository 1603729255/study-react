/* 
1为count组件服务的reducer
2接受两个参数，之前的状态和动作对象
*/
import {INCREMENT,DECREMENT} from './constant'
const initState=0
function countReducer(preState=initState, action) {
  const { type, data } = action
  console.log(type, data );
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
export default countReducer
