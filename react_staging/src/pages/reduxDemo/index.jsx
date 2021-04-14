import React, { Component } from 'react'
import { Button } from 'antd';
import store from '../../redux/store'

class Woman extends Component {

  sheng = () => {
    store.dispatch({type: 'addPerson'})
  }

  render() {
    return (
      <div>
        <b>当前生育总人数：{store.getState().woman.length}</b>
        <br />
        <Button onClick={this.sheng}>点我生娃儿</Button>
      </div>
    )
  }
}

class Person extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    })
  }

  kill = (id) => {
    store.dispatch({type: 'killPerson', data: id})
  }

  render() {
    const person = store.getState().woman

    return (
      <ul>
        {
          person.map(item => (
            <li key={item.id}>
              姓名： {item.name}， 年龄：{item.age}
              <Button onClick={() => this.kill(item.id)}>自我毁灭</Button>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default class index extends Component {
  state = {
    selectNum: 1
  }

  render() {
    return (
      <div style={{width: '600px', height: '1000px'}}>
        <h2>redux状态管理</h2>
        <div style={{display: 'flex'}}>
          <div style={{background: 'pink', width: '50%'}}>
            <b>女人组件</b>
            <Woman />
          </div>
          <div style={{background: 'gray', width: '50%'}}>
            <b>人类组件</b>
            <Person />
          </div>
        </div>
      </div>
    )
  }
}
