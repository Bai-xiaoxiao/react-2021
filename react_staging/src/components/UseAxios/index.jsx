import React, { Component } from 'react'
import axios from 'axios'

export default class UseAxios extends Component {
  
  getSData = () => {
    // 需要配置package.json的proxy字段
    // 配置之后这里请求的域名需要是自己本机的服务器
    // 本机再把请求代理到对应的服务器
    // 这样发起请求相当于是proxy字段 + segmentfaultApi
    // const segmentfaultApi = '/article/1190000018140746/related'

    // 不过proxy只能配置一个代理，如果需要请求多个域名怎么处理呢
    // 需要添加src/setUpProxy.js文件，使用webpack的proxy
    // api1指向https://gateway.segmentfault.com
    const segmentfaultApi = '/api1/article/1190000018140746/related'
    axios.get(segmentfaultApi).then(res => {
      console.log(res);
    })
  }

  getBData = () => {
    // 默认当前域名和端口号，可以省略
    const bilibiliApi = '/api2/x/web-interface/card?mid=302417610&jsonp=jsonp&article=true'
    axios.get(bilibiliApi).then(res => {
      console.log(res);
    })
  }
  
  render() {
    return (
      <div>
        <h2>使用axios请求数据</h2>
        <button onClick={this.getSData}>获取segmentfault数据</button>
        <button onClick={this.getBData}>获取bilibili数据</button>
      </div>
    )
  }
}
