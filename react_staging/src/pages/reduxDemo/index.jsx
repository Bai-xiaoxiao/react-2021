import React, { Component } from 'react'
import { Select } from 'antd';
import { Button } from 'antd';
import store from '../../redux'

const { Option } = Select;

export default class index extends Component {
  state = {
    selectNum: 1
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({}); // 手动调用刷新
    })
  }

  selectChange = (value) => {
    this.setState({selectNum: value})
  }

  increment = () => {
    let {selectNum} = this.state
    store.dispatch({type: 'increment', num: selectNum})
  }

  decrement = () => {
    let {selectNum} = this.state
    store.dispatch({type: 'decrement', num: selectNum})
  }

  oddIncrement = () => {
    let {selectNum} = this.state
    if(selectNum % 2 !== 0) {
      store.dispatch({type: 'increment', num: selectNum})
    }
  }

  asyncIncrement = () => {
    let {selectNum} = this.state
    setTimeout(() => {
      store.dispatch({type: 'increment', num: selectNum})
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>redux状态管理</h2>
        <Select defaultValue={this.state.selectNum} onChange={this.selectChange} style={{width: 100}}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
        </Select>
        &nbsp;
        <Button onClick={this.increment} type="primary">加</Button>
        &nbsp;
        <Button onClick={this.decrement} type="primary">减</Button>
        &nbsp;
        <Button onClick={this.oddIncrement} type="primary">奇数加</Button>
        &nbsp;
        <Button onClick={this.asyncIncrement} type="primary">异步加</Button>
        &nbsp;
        <b>目前的值是：{store.getState().count}{store.getState().b}</b>
      </div>
    )
  }
}
