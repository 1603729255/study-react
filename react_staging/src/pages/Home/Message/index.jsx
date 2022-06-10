import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: '1', title: '消息1' },
      { id: '2', title: '消息2' },
      { id: '3', title: '消息3' },
      { id: '4', title: '消息4' }
    ]
  }
  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }
  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        {messageArr.map(mesObj => {
          return (
            <span key={mesObj.id}>
              {/* params参数 */}
              <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>
              {/* search参数 */}
              {/* <Link to={`/home/message/detail/?id=${mesObj.id}&title=${mesObj.title}`}>{mesObj.title}</Link> */}
              {/* state参数 */}
              {/* <Link to={{pathname:'/home/message/detail',state:{id:mesObj.id,title:mesObj.title}}}>{mesObj.title}</Link> */}

              <button
                onClick={() => {
                  this.pushShow(mesObj.id, mesObj.title)
                }}>
                push查看
              </button>
              <button
                onClick={() => {
                  this.replaceShow(mesObj.id, mesObj.title)
                }}>
                replace查看
              </button>
            </span>
          )
        })}
        {/* 声明params路由 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
        {/* 声明search state路由 */}
        {/* <Route replace path="/home/message/detail" component={Detail}></Route> */}
      </div>
    )
  }
}
