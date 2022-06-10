import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { name,done ,id} = this.props
    return (
      <div>
      <input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)}/>
      <span>{name}</span>
      </div>
    )
  }
  handleChange=(id)=>{
    return (event)=>{
      // console.log(id,event.target.checked);
      this.props.updateTodoDone(id,event.target.checked)
    }
  }
}
