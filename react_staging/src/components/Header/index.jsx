import React, { Component } from 'react'

export default class Header extends Component {
  state={value:''}
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }

  handleKeyUp=(event)=>{
    if(event.keyCode!==13) return
    this.setState({value:event.target.value})
    this.props.addTodo({name:event.target.value,done:false,id:new Date()})
    event.target.value=""
  }
}
