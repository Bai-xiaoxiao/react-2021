import React from 'react'
import ReactDOM from 'react-dom'
import App from './APP'
/* 
两种模式：H5的history模式和hash模式，用法一样，直接包起来就可以了
import { HashRouter } from 'react-router-dom'
*/
import { BrowserRouter } from 'react-router-dom'


// 直接把BrowserRouter包在最外层，哪里都能用
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));