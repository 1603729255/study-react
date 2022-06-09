import React, { Component } from 'react'
import Hello from './components/Hello'
import World from './components/World'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
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
    console.log('app',todoObj);
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
        <Hello />
        <World />
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodoDone={this.updateTodoDone}/>
        <Footer />
      </div>
    )
  }
}
