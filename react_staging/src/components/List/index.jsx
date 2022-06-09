import React, { Component } from 'react'
import Item from '../Item'
export default class List extends Component {
  render() {
    const { todos,updateTodoDone } = this.props
    return (
      <div>
        {todos.map(todo => {
          return <Item key={todo.id} {...todo} updateTodoDone={updateTodoDone}></Item>
        })}
      </div>
    )
  }
}
