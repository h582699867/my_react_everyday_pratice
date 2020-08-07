// 引入React核心库
import React, { Component } from 'react'
// 引入样式文件
import './App.css'
// 引入Add
import Add from './components/Add'
// 引入Footer
import Footer from './components/Footer'
// 引入List
import List from './components/List'
// 引入nanoid
import { nanoid } from 'nanoid'
// 定义App组件
export default class App extends Component {
  state = {
    todos: [
      { id: '001', title: '吃饭', completed: false },
      { id: '002', title: '睡觉', completed: true },
      { id: '003', title: '抽烟', completed: false },
      { id: '004', title: '喝酒', completed: true },
      { id: '005', title: '烫头', completed: false }
    ]
  }
  addTodo = (title) => {
    // 准备一个todo对象
    const todo = {id: nanoid(),title:title,completed:false}
    // 向App中的state添加一个todo
    this.setState({
      todos: [todo,...this.state.todos]
    })
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add addTodo={this.addTodo}/>
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    )
  }
}
