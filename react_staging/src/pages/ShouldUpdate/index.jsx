import React, { PureComponent } from 'react'
import {Button} from 'antd'

class Child extends PureComponent {
  /* 
  默认情况下：父组件调用render时，不管子组件的状态是否改变，都会更新子组件
  可以在componentShouldUpdate中对state中的值做比较
  不过如果props或者state中存在很多属性，就不好对比了
  react提供了内置的PureComponent类，带代替Component
  Component做浅比较，我们setState的时候尽量采用赋值，而不是修改
  */
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.name !== this.props.name
  // }

  render() {
    console.log('子组件更新啦');
    return (
      <div>
        <div>我是子组件</div>
        <div>接手到的props是：{this.props.name}</div>
      </div>
    )
  }
}

export default class ShouldUpdate extends PureComponent {
  state = {name: '白泽'}

  changeName = () => {
    this.setState({
      name: '白桂泽'
    })
  }

  render() {
    const {name} = this.state
    console.log('父组件更新啦');
    return (
      <div>
        演示了父子组件是否应该更新状态
        名字：{name}
        <Button onClick={this.changeName}>点我改名</Button>

        <div style={{background: 'pink'}}>
          <Child />
        </div>
      </div>
    )
  }
}
