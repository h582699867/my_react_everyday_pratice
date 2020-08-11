import React, { Component } from 'react'
import store from '../redux/store'

export default class Count extends Component {
  // 加
  inc = () => {
    const { value } = this.refs.selectNum
    // 通知redux加value
    store.dispatch({ type: 'inc', data: value * 1 })
  }

  // 减
  dec = () => {
    const { value } = this.refs.selectNum
    // 通知redux加value
    store.dispatch({ type: 'dec', data: value * 1 })
  }

  // 奇数加
  oddInc = () => {
    if (store.getState() % 2 !== 0) {
      const { value } = this.refs.selectNum
      store.dispatch({ type: 'inc', data: value * 1 })
    }
  }

  // 延时加
  waitInc = () => {
    setTimeout(() => {
      const { value } = this.refs.selectNum
      store.dispatch({ type: 'inc', data: value * 1 })
    }, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref="selectNum">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.inc}>+</button>&nbsp;&nbsp;
        <button onClick={this.dec}>-</button>&nbsp;&nbsp;
        <button onClick={this.oddInc}>奇数+</button>&nbsp;&nbsp;
        <button onClick={this.waitInc}>延时+</button>&nbsp;&nbsp;
      </div>
    )
  }
}
