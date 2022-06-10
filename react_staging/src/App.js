import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom';
import Hello from './components/Hello'
import World from './components/World'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink  from './pages/MyNavLink';
export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打豆豆', done: false }
    ]
  }
  addTodo=(todoObj)=>{
    // 子传父 父先给子绑定一个方法 子在props中调用 传参
    // console.log('app',todoObj);
    const {todos} =this.state
    const newTodos=[todoObj,...todos]
    this.setState({todos:newTodos})
  }

  updateTodoDone=(id,done)=>{
    const {todos} = this.state
    const newTodos=todos.map((todoObj)=>{
        if(todoObj.id===id) return {...todoObj,done}
        else return todoObj
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div>
        {/* 父子传值 */}
        <Hello />
        <World />
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodoDone={this.updateTodoDone}/>
        <Footer />

        {/* 路由相关 */}
        <NavLink to="/about">About</NavLink>
        {/* <NavLink to="/about/a/b">About</NavLink> 模糊匹配 可以显示about*/}
        {/* <NavLink to="/home">Home</NavLink>
        <MyNavLink to="/about">About</MyNavLink> */}
        <MyNavLink to="/home">Home</MyNavLink>
        {/* 注册路由 开始switch 单一匹配 找到一个就不会找了*/}
        <Switch>
          <Route exact path="/about" component={About}/>
          {/* exact 严格匹配 */}
          <Route path="/home" component={Home}/>
          <Redirect to="/home"></Redirect>
        </Switch>
      </div>
    )
  }
}
