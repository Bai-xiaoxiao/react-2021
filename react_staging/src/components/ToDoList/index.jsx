import React, { Component } from 'react'

export default class ToDoList extends Component {
  state = {
    list: [],
  }

  iptDom = React.createRef()

  add = () => {
    const { list } = this.state
    const iptValue = this.iptDom.current.value
    if (iptValue === '') {
      alert('请输入事件名称')
      return
    }

    this.setState({
      list: [{
        id: list.length,
        text: iptValue,
        status: false
      }, ...list]
    })

    this.iptDom.current.value = ''
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
    return (
      <div>
        <input ref={this.iptDom} type="text" />
        <button onClick={this.add}>添加</button>

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
            list.filter(item => item.status).length
          }
          /
          {list.length}</h3>
      </div>
    )
  }
}
