import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>{undefined.aaa}</div>
    )
  }
}

export default class ErrorPage extends Component {

  state = {
    error: ''
  }

  // static getDerivedStateFromError(error) {
  //   // 返回一个对象或者null，会覆盖state中的字段
  //   console.log(error);
  //   return {
  //     error: error
  //   }
  // }

  componentDidCatch() {
    // 这里一般做统计，发送错误原因
    console.log('报错了');
  }

  render() {
    return (
      <div>
        这里子组件会报错：
        生产环境会提示报错，dev环境会直接报错提醒程序员改错
        {this.state.error ? <h2>报错了</h2> : <Child />}
      </div>
    )
  }
}
