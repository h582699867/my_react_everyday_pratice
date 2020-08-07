// 引入React核心库
import React, { Component } from 'react'
// 引入样式文件
import './App.css'
// 引入组件
import Add from './components/Add'
import Footer from './components/Footer'
import List from './components/List'
// 引入插件
import { nanoid } from 'nanoid'

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

  // 添加数据
  addTodo = title => {
    // 准备todo对象
    const todo = { id: nanoid(), title: title, completed: false }
    this.setState({ todos: [todo, ...this.state.todos] })
  }
  // 勾选todo
  checkTodo = (id, completed) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) return { ...todo, completed }
      return todo
    })
    this.setState({ todos })
  }
  // 删除Todo
  deleteTodo = id => {
    // 使用findIndex实现
    const index = this.state.todos.findIndex(todo => {
      return todo.id === id
    })
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({ todos })
  }
  // 全选
  checkAll = checked => {
    const todos = this.state.todos.map(todo => {
      return { ...todo, completed: checked }
    })
    this.setState({ todos })
  }
  // 清除已完成
  clearAllCompleted = () => {
    const todos = this.state.todos.filter(todo => {
      if (!todo.completed) return todo
    })
    this.setState({ todos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add addTodo={this.addTodo} />
          <List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo} />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            clearAllCompleted={this.clearAllCompleted}
          />
        </div>
      </div>
    )
  }
}
