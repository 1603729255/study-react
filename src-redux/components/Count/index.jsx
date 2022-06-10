import React, { Component } from 'react'
import store from '../../redux/store'
import {countIncrementAction,countDecrementAction,countIncrementAsyncAction} from '../../redux/count_action'
export default class Count extends Component {
  render() {
    return (
      <div>
        <h1>当前求和：{store.getState()}</h1>
        <select ref={c => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }

  componentDidMount() {
    console.log(store)
    store.subscribe(() => {
      this.setState({})
    })
  }

  increment = () => {
    const { value } = this.selectNumber
    // 通知redux加
    store.dispatch(countIncrementAction(value * 1))
  }
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(countDecrementAction(value * 1 ) )
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch(countIncrementAsyncAction(value * 1 ,500) )
    }, 200)
  }
}
