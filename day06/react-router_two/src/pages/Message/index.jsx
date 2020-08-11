import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: '001', title: '消息1' },
      { id: '002', title: '消息2' },
      { id: '003', title: '消息3' }
    ]
  }

  // push查看消息
  pushShow = (id, title) => {
    return () => {
      // 编程式push导航+传递params参数
      this.props.history.push(`/home/message/detail/${id}/${title}`)

      // 编程式push导航+传递search参数
      // this.props.history.push(`/home/message/detail?id=${id}&/title=${title}`)

      // 编程式push导航+location.state参数
      // this.props.history.push('/home/message/detail', { id, title })
    }
  }

  // replace查看消息
  replaceShow = (id, title) => {
    return () => {
      // 编程式replace导航+传递params参数
      this.props.history.replace(`/home/message/detail/${id}/${title}`)

      // 编程式replace导航+传递search参数
      // this.props.history.push(`/home/message/detail?id=${id}&/title=${title}`)

      // 编程式replace导航+location.state参数
      // this.props.history.push('/home/message/detail', { id, title })
    }
  }

  // 编程式导航-后退
  back = () => {
    this.props.history.goBack()
  }

  // 编程式导航-前进
  goto = () => {
    this.props.history.goForward()
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map(msg => {
            return (
              <li key={msg.id}>
                {/* 用link标签传params参数 */}
                <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>

                {/* link标签传search参数 */}
                {/* <Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                {/* 编程式路由导航 */}
                &nbsp; &nbsp;
                <button onClick={this.pushShow(msg.id, msg.title)}>push查看</button>
                <button onClick={this.replaceShow(msg.id, msg.title)}>replace查看</button>
              </li>
            )
          })}
        </ul>
        <hr />
        <button onClick={this.back}>《=后退</button>
        <button onClick={this.goto}>前进=》</button>

        {/* 若传的是params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* 若传的是replace参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    )
  }
}
