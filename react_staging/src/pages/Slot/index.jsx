import React, { Component } from 'react'

class Child1 extends Component {
  render() {
    return (
      <div>children属性：{this.props.children}</div>
    )
  }
}

class Child2 extends Component {
  state = {name: '我是组件2'}
  render() {
    return (
      <div>
        {this.state.name}：
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class Child3 extends Component {
  render() {
    return (
      <div>
        我是slot中传入的组件：接收到的参数是
        {this.props.name}
      </div>
    )
  }
}

export default class Slot extends Component {
  render() {
    return (
      <div>
        <div>
          组件1：传入文本，使用this.props.children接收
          <Child1>1111111</Child1>
        </div>
        <br />
        <div>
          组件2：传入节点或者组件
          <Child2 render={(name) => <Child3 name={name} />} />
        </div>
      </div>
    )
  }
}
