import React, { Component } from 'react'

export default class Count extends Component {
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
