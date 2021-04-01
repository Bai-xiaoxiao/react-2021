import React, { Component } from 'react'

export default class index extends Component {

  jump = (type) => {
    // 带params参数
    // this.props.history[type](`/double-route/one/js-${type}跳转带的params参数`)

    // 带search参数
    // this.props.history[type](`/double-route/two?name=${type}带的search参数&age=998`)

    // 带state参数
    this.props.history[type]('/double-route/three', {
      name: '我是通过state跳转过来的',
      age: 'xxx叭叭叭'
    })
  }

  forward = () => {
    this.props.history.goForward()
  }

  back = () => {
    this.props.history.goBack()
  }

  goTwo = () => {
    this.props.history.go(-2)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.jump('push')}>push跳转</button>
        <button onClick={() => this.jump('replace')}>replace跳转</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.back}>后退</button>
        <button onClick={this.goTwo}>后退两步</button>
      </div>
    )
  }
}
