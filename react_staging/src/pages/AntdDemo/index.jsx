import React, { Component } from 'react'
import {Button} from 'antd'

export default class index extends Component {
  render() {
    return (
      <div>
        <h3>使用craco按需引入，修改antd的主题色和修改webpack的配置</h3>
        <Button>按钮1</Button>
      </div>
    )
  }
}
