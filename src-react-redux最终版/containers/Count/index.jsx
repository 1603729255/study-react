import React, { Component } from 'react'

import { countIncrementAction, countDecrementAction, countIncrementAsyncAction } from '../../redux/count_action'
// import store from '../../redux/store'
import { connect } from 'react-redux'
class Count extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和：{this.props.count}</h1>
        <select ref={c => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }


  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value*1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value*1)
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value*1,500)
  }
}


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


export default connect(mapStateToProps, mapDispatchToProps)(Count)
