import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  state = {
    keyWord: '' //输入的关键词
  }

  saveKeyWord = event => {
    //获取用户的输入
    const {
      target: { value: keyWord }
    } = event
    //维护进状态
    this.setState({ keyWord })
  }

  handleSearch = () => {
    //1.获取用户输入
    const { keyWord } = this.state
    const { updateAppState } = this.props
    //2.请求之前展示loading界面
    updateAppState({ isLoading: true, isFirst: false })
    //3.发起请求
    axios.get(`/api/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功存储用户信息列表，不展示loading
        updateAppState({ users: response.data.items, isLoading: false })
      },
      err => {
        // 请求失败不展示用户信息，不展示loading
        updateAppState({ error: err.message, isLoading: false })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input onChange={this.saveKeyWord} type="text" placeholder="enter the name you search" />
          &nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
