import React, { Component } from 'react'
import './index.css'
export default class Add extends Component {
  handleKeyUp = event => {
    // 获取从App传递过来的props中获取addTodo
    const { addTodo } = this.props
    /**
     * 多次解构赋值
     *  const {target} = event
     *  const {value} = target
     * 解构出来的变量重命名
     *  const userInput = value
     */
    // 连续解构赋值并重命名
    const {
      target: { value: userInput }
    } = event
    // 按下回车
    if (event.keyCode === 13) {
      if (!userInput.trim()) {
        alert('输入框不能为空')
        return
      }
      // 调用App传来的addTodo添加一个todo
      addTodo(userInput.trim())
      // 清空用户输入
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
