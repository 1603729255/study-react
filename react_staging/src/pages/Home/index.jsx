import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'
export default class Home extends Component {
  render() {
    return (
      <div>
        <span>我是Home</span>
        {/*嵌套路由要带上之前的路由 供其模糊匹配  */}
        <Link to="/home/news">News</Link>
        <Link to="/home/message">Message</Link>
        {/* 注册路由 */}
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/message" component={Message}></Route>
        <Redirect to="/home/news"></Redirect>
      </div>
    )
  }
}
