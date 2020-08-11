import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Demo from './pages/Demo'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Title from './components/Title'
// import './decorator' // 装饰器语法
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Title />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* React写法，靠link标签更改浏览器历史记录 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" exact component={About} />
                  <Route path="/about/student" component={Demo} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
