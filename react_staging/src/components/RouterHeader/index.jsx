import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class index extends Component {
  back = () => {
    this.props.history.goBack()
  }

  forWard = () => {
    this.props.history.goForward()
  }

  render() {
    return (
      <div>
         <h1>导航区域</h1>
         <b>使用withRouter包裹一般组件，可以让它的props带有router的方法</b>
         <button onClick={this.back}>后退</button>
         <button onClick={this.forWard}>前进</button>
         <div>---------------</div>
      </div>
    )
  }
}

export default withRouter(index)
