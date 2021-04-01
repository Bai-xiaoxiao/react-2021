import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Child1 from './DoubleRoute_1'
import Child2 from './DoubleRoute_2'
import Child3 from './DoubleRoute_3'

export default class DoubleRoute extends Component {
  render() {
    return (
      <div>
        <h3>多级路由嵌套</h3>
        <ul>
          <li>
            {/* 传递params参数--url上的字符串，刷新还在 */}
            <NavLink to="/double-route/one/hehhe">子级路由111</NavLink>
          </li>
          <li>
            {/* 传递search参数--url上的字符串，刷新还在 */}
            <NavLink to="/double-route/two?name=123&age=998">子级路由222</NavLink>
          </li>
          <li>
            {/* 传递search参数--缓存中，刷新还在，清除缓存就不在了 */}
            {/* to是一个对象，有pathname和state属性 */}
            <NavLink to={{pathname: '/double-route/three', state: {name: 123, age: 18}}}>子级路由333</NavLink>
          </li>
        </ul>

        <h3>子级路由内容区域----------------------</h3>
        <Switch>
          {/* 注册的时候就需要声明接收params参数 */}
          <Route path="/double-route/one/:id" component={Child1} />
          {/* 传递search参数--无需声明接收 */}
          <Route path="/double-route/two" component={Child2} />
          {/* 传递state参数--无需声明接收 */}
          <Route path="/double-route/three" component={Child3} />
          {/* 默认展示 */}
          <Redirect to="/double-route/one" />
        </Switch>
      </div>
    )
  }
}
