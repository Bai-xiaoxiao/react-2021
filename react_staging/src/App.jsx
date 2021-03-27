import React, { Component } from 'react'
// import TodoList from './components/ToDoList'
// import UseAxios from './components/UseAxios'
import GetUserList from './components/GetUserList'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 演示父子传递信息，一般方法操作等 */}
        {/* <TodoList /> */}

        {/* 演示配置代理跨域请求等功能 */}
        {/* <UseAxios /> */}

        {/* 演示模块化css，连续解构赋值并且重命名，请求接口展示数据 */}
        <GetUserList />
      </div>
    )
  }
}
