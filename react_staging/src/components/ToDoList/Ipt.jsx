import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Ipt extends Component {
  static propTypes = {
    addFun: PropTypes.func.isRequired
  }

  state = {
    num: 1
  }

  iptDom = React.createRef()
  
  add = () => {
    // const { list } = this.state
    const iptValue = this.iptDom.current.value
    if (iptValue === '') {
      alert('请输入事件名称')
      return
    }

    // 通过props传递方法进来
    this.props.addFun(iptValue);

    // this.setState({
    //   list: [{
    //     id: list.length,
    //     text: iptValue,
    //     status: false
    //   }, ...list]
    // })

    this.iptDom.current.value = ''
  }

  render() {
    return (
      <div>
        <input ref={this.iptDom} type="text" />
        <button onClick={this.add}>添加</button>
      </div>
    )
  }
}
