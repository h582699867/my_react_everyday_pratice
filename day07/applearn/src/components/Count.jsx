import React, { Component } from 'react'
import { incAction, decAction } from '../redux/count_action.js'

export default class Count extends Component {
  // 加
  inc = () => {
    const { value } = this.refs.selectNum
    // 通知redux加value
    this.props.store.dispatch(incAction(value * 1))
  }

  // 减
  dec = () => {
    const { value } = this.refs.selectNum
    // 通知redux加value
    this.props.store.dispatch(decAction(value * 1))
  }

  // 奇数加
  oddInc = () => {
    if (this.props.store.getState() % 2 !== 0) {
      const { value } = this.refs.selectNum
      this.props.store.dispatch(incAction(value * 1))
    }
  }

  // 延时加
  waitInc = () => {
    setTimeout(() => {
      const { value } = this.refs.selectNum
      this.props.store.dispatch(incAction(value * 1))
    }, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.store.getState()}</h2>
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
