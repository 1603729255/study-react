import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    // console.log(this.props);
    // 标签体内容是this.props.children
    return <NavLink {...this.props}/>
  }
}
