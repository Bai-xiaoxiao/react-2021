import React, { Component } from 'react'

export default class RouterC extends Component {
  state = {name: '111'}
  render() {
    console.log('我是路由组件', this.props);
    return (
      <div>
        {/* 
        this.props会带有三个对象，常用的前面加**符号
        history:
          block: ƒ block(prompt)
          createHref: ƒ createHref(location)
          **go: ƒ go(n)
          **goBack: ƒ goBack()
          **goForward: ƒ goForward()
          listen: ƒ listen(listener)
          这个location === 第一级的location
          location: {pathname: "/router-c", search: "", hash: "", state: undefined, key: "cgn5ct"}
          **push: ƒ push(path, state)
          **replace: ƒ replace(path, state)
         
        location:
          hash: ""
          key: "udn2mo" 随机生成的字符串，作区分
          **pathname: "/router-c"
          **search: "?a=1" url后面跟的参数
          state: undefined
          
        match:
          isExact: true
          **params: {}
          **path: "/router-c"
          **url: "/router-c"
          staticContext: undefined
        */}
        路由组件创建时会自动传入一些props
      </div>
    )
  }
}
