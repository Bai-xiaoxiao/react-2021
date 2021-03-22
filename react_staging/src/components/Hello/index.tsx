import {Component} from 'react'

export default class Hello extends Component {
  render() {
    let a = 0
    let b = null
    if(a == 0) {
      b = 123
    } else {
      b = 'asdasd'
    }
    return (
      <div>
        {b}
      </div>
    )
  }
}