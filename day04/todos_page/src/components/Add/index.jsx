import React, { Component } from 'react'
import './index.css'

export default class Add extends Component {
  handleKeyUp = event => {
    // 接收App传过来的
    const { addTodo } = this.props
    // 多次解构赋值并重命名
    const {
      target: { value: userInput }
    } = event
    if (event.keyCode === 13) {
      if (!userInput.trim()) {
        alert('输入框不能为空了')
        return
      }
      // 调用App传来的方法
      addTodo(userInput.trim())
      // 清空输入框
      event.target.value = ''
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}
