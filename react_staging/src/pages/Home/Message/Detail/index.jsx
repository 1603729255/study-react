import React, { Component } from 'react'
export default class Detail extends Component {
  render() {
    // 获取params参数
    const {id,title}=this.props.match.params
    // 获取search参数
    // const {search} =this.props.location
    // 获取state参数 
    // const {id,title} =this.props.location.state || {}
    return (
      <div>
        <ul>
          <li>{id}</li>
          <li>{title}</li>
        </ul>
      </div>
    )
  }
}
