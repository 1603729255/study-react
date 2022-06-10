import CountUI from '../../components/Count'
import { countIncrementAction,countDecrementAction ,countIncrementAsyncAction} from '../../redux/count_action'
// import store from '../../redux/store'
import { connect } from 'react-redux'
// 使用connect链接ui和store  store要在容器中当作props传入

//将a函数返回的对象，按照props的方式传入ui组件 this.props.count
function mapStateToProps(state) {
  //state 就是store.getState()的返回
  return { count: state }
}
//将b函数返回的方法，按照props的方式传入ui组件 this.props.jia
function mapDispatchToProps(dispatch) {
  return {
    jia: num => dispatch(countIncrementAction(num)),
    jian: num => dispatch(countDecrementAction(num)),
    jiaAsync: (num,time) => dispatch(countIncrementAsyncAction(num,time)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
