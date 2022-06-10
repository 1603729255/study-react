import CountUI from '../../components/Count'
import { countIncrementAction, countDecrementAction, countIncrementAsyncAction } from '../../redux/count_action'
// import store from '../../redux/store'
import { connect } from 'react-redux'
// 使用connect链接ui和store  store要在容器中当作props传入

//将a函数返回的对象，按照props的方式传入ui组件 this.props.count
const mapStateToProps = state => ({ count: state }) //state 就是store.getState()的返回
//将b函数返回的方法，按照props的方式传入ui组件 this.props.jia
// const mapDispatchToProps = dispatch => ({
//   jia: num => dispatch(countIncrementAction(num)),
//   jian: num => dispatch(countDecrementAction(num)),
//   jiaAsync: (num, time) => dispatch(countIncrementAsyncAction(num, time))
// })

// mapDispatchToProps简写 自动dispatch 并传你再this.props.jia(num)的值
const mapDispatchToProps={
  jia:countIncrementAction,
  jian:countDecrementAction,
  jiaAsync:countIncrementAsyncAction
}


export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
