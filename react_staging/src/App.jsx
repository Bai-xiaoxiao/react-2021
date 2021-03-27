import React, { Component } from 'react'
import AppCss from './app.module.css'
import TodoList from './pages/ToDoList'
import UseAxios from './pages/UseAxios'
import GetUserList from './pages/GetUserList'
import RouterC from './pages/RouterC'
/* 
  Link组件类似于a标签，点击做跳转
  NavLink和Link一样，点击时会给自身添加特定的className，方便通过className做样式区分
    activeClassName可以自己配置，不写默认为active，如下：
    <NavLink to="/xx" className="ss" activeClassName="aa">xx</NavLink>
*/
import { Link, NavLink, Route } from 'react-router-dom'
console.log(AppCss);
export default class App extends Component {
  render() {
    return (
      <div>
        {/* react-router-dom用Link组件切换路由 */}
        <h1>导航区域--------------------------</h1>
        <ul>
          {/* 
            组件中间的值会被解析为this.props.children，类似vue的插槽，只不过放在props里面了
            放文本的话还好，如果放多层dom结构做插槽的话需要手动去解析，比较麻烦
          */}
          <li><NavLink to="/todo-list" className={AppCss['nav-link']} activeClassName={AppCss['active']} children="todolist功能演示" /></li>
          {/* <li><NavLink to="/todo-list" className={AppCss['nav-link']} activeClassName={AppCss['active']}>todolist功能演示</NavLink></li> */}
          <li><NavLink to="/use-axios" className={AppCss['nav-link']} activeClassName={AppCss['active']}>proxy跨域代理配置</NavLink></li>
          <li><NavLink to="/get-user-list" className={AppCss['nav-link']} activeClassName={AppCss['active']}>请求数据展示用户列表</NavLink></li>
          <li><NavLink to="/router-c" className={AppCss['nav-link']} activeClassName={AppCss['active']}>路由组件特有的props</NavLink></li>
        </ul>

        {/* 内容区域：使用Route来注册路由 */}
        <h1>下面是内容区域---------------------</h1>
        {/* 演示父子传递信息，一般方法操作等 */}

        <Route path="/todo-list" component={TodoList} />
        {/* 演示配置代理跨域请求等功能 */}
        <Route path="/use-axios" component={UseAxios} />
        {/* 演示模块化css，连续解构赋值并且重命名，请求接口展示数据 */}
        <Route path="/get-user-list" component={GetUserList} />
        {/* 演示路由组件可以收到的参数，路由状态和url信息等 */}
        <Route path="/router-c" component={RouterC} />
      </div>
    )
  }
}
