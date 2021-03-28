import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Child1 from './DoubleRoute_1'
import Child2 from './DoubleRoute_2'

export default class DoubleRoute extends Component {
  render() {
    return (
      <div>
        <h3>多级路由嵌套</h3>
        <ul>
          <li>
            <NavLink to="/double-route/one">子级路由111</NavLink>
          </li>
          <li>
            <NavLink to="/double-route/two">子级路由222</NavLink>
          </li>
        </ul>

        <h3>子级路由内容区域----------------------</h3>
        <Switch>
          <Route path="/double-route/one" component={Child1} />
          <Route path="/double-route/two" component={Child2} />
          {/* 默认展示 */}
          <Redirect to="/double-route/one" />
        </Switch>
      </div>
    )
  }
}
