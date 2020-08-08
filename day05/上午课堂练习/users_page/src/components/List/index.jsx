import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    // 获取从App传来的状态数据
    const { isFirst, isLoading, error, users } = this.props
    return (
      <div className="row">
        {isFirst ? ( // 判断是否初次展示
          <h1>输入关键字，然后点击搜索</h1>
        ) : isLoading ? ( // 判断是否加载中
          <h1>loading....</h1>
        ) : error ? ( // 判断是否有错误
          <h1 style={{ color: 'red' }}>{error}</h1>
        ) : (
          users.map(user => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
