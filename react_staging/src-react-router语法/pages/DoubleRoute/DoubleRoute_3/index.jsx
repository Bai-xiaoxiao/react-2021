import React, { Component } from 'react'

export default class Child2 extends Component {
  render() {
    const {name, age} = this.props.location.state
    return (
      <div>
        第3333333个子组件
        <br />
        传递过来的search参数是：{`name是${name}，年纪是：${age}`}
      </div>
    )
  }
}
