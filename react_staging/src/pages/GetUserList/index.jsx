import React, { Component } from 'react'
import axios from 'axios'
import Item from '../../components/UserListItem'
// 需要加上module的后缀名才能识别
import IndexCss from './index.module.css'
console.log(IndexCss);

export default class GetUserList extends Component {
  state = {
    loading: false,
    list: []
  }

  getData = () => {
    this.setState({
      loading: true
    })

    setTimeout(async () => {
      const res = await axios.get('https://mock.mengxuegu.com/mock/605b486a0d58b864da03d8c1/user-list')
      const { list } = res.data.data
      console.log(list);
      this.setState({
        loading: false,
        list
      })
    }, 3000)
  }

  // 通过if来决定是否渲染节点
  render1() {
    const { loading, list } = this.state
    let el = null

    if (loading) {
      el = <h2>loading中，请稍等</h2>
    } else {
      el = (
        <div className={IndexCss.list}>
          {
            list.map(item => (
              // 通过{...item}吧所有属性传过去
              <Item {...item} key={item.id} />
            ))
          }
        </div>
      )
    }

    return (
      <div>
        <button onClick={this.getData}>获取数据</button>
        {el}
      </div>
    )
  }

  // 通过display: none来控制需要频繁切换的
  render() {
    const { loading, list } = this.state
    return (
      <div>
        <button onClick={this.getData}>获取数据</button>

        <h2 className={loading ? '' : IndexCss.hide}>loading中，请稍等</h2>

        <div className={[IndexCss.list, loading ? IndexCss.hide : ''].join(' ')}>
          {
            list.map(item => (
              // 通过{...item}吧所有属性传过去
              <Item {...item} key={item.id} />
            ))
          }
        </div>
      </div>
    )
  }
}
