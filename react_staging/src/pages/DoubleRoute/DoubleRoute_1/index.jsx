import React, { Component } from 'react'

export default class Child1 extends Component {
  render() {
    return (
      <div>
        第111111111个子组件
        <br />
        url上的params参数是{this.props.match.params.id}
      </div>
    )
  }
}
