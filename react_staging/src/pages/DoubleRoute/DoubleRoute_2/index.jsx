import React, { Component } from 'react'
// qs一般组件库都会带有，cra自带了，直接引入即可
import qs from 'query-string'

// qs用来转换url中的search字符串，或者把对象转成search结构
// const str = qs.stringify({name: 1, age: 12})
// console.log(str);
// const obj = qs.parse('?name=123&age=998')
// console.log(obj);

export default class Child2 extends Component {
  render() {
    // console.log(this.props.location.search);
    const searchObj = qs.parse(this.props.location.search)
    return (
      <div>
        第22222222个子组件
        <br />
        传递过来的search参数是：{`name是${searchObj.name}，年纪是：${searchObj.age}`}
      </div>
    )
  }
}
