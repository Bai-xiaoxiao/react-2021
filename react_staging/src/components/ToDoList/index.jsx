import React, { Component } from 'react'
import Ipt from './Ipt'

export default class ToDoList extends Component {
  state = {
    list: [],
  }

  add = (text) => {
    // 这里如果不写箭头函数，那么this会指向调用者 => 子组件的.props
    console.log(this);
    const { list } = this.state
    this.setState({
      list: [{
        id: list.length,
        text,
        status: false
      }, ...list]
    })
  }

  del = (id) => {
    return () => {
      const { list } = this.state
      this.setState({
        list: list.filter(item => item.id !== id)
      })
    }
  }

  changeStatus = (itemObj) => {
    // 如果是这种写法，state虽然改了，但是不会触发render，需要手动
    // 不过react并不建议使用forceUpdate()
    // itemObj.status = !itemObj.status
    // this.forceUpdate()

    // 必须调用setState才会更新视图
    const { list } = this.state
    list.find(item => item.id === itemObj.id).status = !itemObj.status
    this.setState({
      list
    })
  }

  render() {
    const { list } = this.state
    // reduce(fun, initValue)
    const hasDone = list.reduce((pre, current) => pre + (current.status ? 1 : 0), 0)
    return (
      <div>
        <Ipt addFun={this.add} />

        <h2>已添加的事件：</h2>
        <ul>
          {
            list.map(item => {
              return (
                <li key={item.id}>
                  <input type="checkbox" onChange={() => this.changeStatus(item)} />
                  {item.text}
                  <button onClick={this.del(item.id)}>删除</button>
                </li>
              )
            })
          }
        </ul>

        <h3>
          已完成了
          {
            hasDone
          }
          /
          {list.length}</h3>
      </div>
    )
  }
}
