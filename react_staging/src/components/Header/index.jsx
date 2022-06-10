import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
  state = { value: '' }
  render() {
    console.log(this.props)
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }

  handleKeyUp = event => {
    if (event.keyCode !== 13) return
    this.setState({ value: event.target.value })
    this.props.addTodo({ name: event.target.value, done: false, id: new Date() })
    event.target.value = ''
  }
}

export default withRouter(Header)//给一般组件加上路由特有的属性
