import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 0
  }

  // 加
  inc = () => {
    const { count } = this.state
    const { value } = this.refs.selectNum
    this.setState({
      count: count + value * 1
    })
  }

  // 减
  dec = () => {
    const { count } = this.state
    const { value } = this.refs.selectNum
    this.setState({
      count: count - value * 1
    })
  }

  // 奇数加
  oddInc = () => {
    if (this.state.count % 2 !== 0) {
      const { count } = this.state
      const { value } = this.refs.selectNum
      this.setState({
        count: count + value * 1
      })
    }
  }

  // 延时加
  waitInc = () => {
    setTimeout(() => {
      const { count } = this.state
      const { value } = this.refs.selectNum
      this.setState({
        count: count + value * 1
      })
    }, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
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
