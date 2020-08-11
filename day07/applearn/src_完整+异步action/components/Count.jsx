import React, { Component } from 'react'
import { incAction, decAction, incWaitAction } from '../redux/count_action'

export default class Count extends Component {
  // 加
  inc = () => {
    const { value } = this.refs.selectNum
    this.props.store.dispatch(incAction(value * 1))
  }

  // 减
  dec = () => {
    const { value } = this.refs.selectNum
    this.props.store.dispatch(decAction(value * 1))
  }

  // 奇数加
  inc = () => {
    if (this.props.store.getState() % 2 !== 0) {
      const { value } = this.refs.selectNum
      this.props.store.dispatch(incAction(value * 1))
    }
  }

  // 异步加
  incWait = () => {
    const { value } = this.refs.selectNum
    this.props.store.dispatch(incWaitAction(value * 1))
  }

  render() {
    return (
      <div>
        <h2>最终结果为：{this.props.store.getState()}</h2>
        <select ref="selectNum">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <button onClick={this.incOdd}>奇数+</button>
        <button onClick={this.incWait}>延时+</button>
      </div>
    )
  }
}
