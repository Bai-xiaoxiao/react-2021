import React from 'react'
import IndexCss from './index.module.css'

export default function Item(props) {
  // 解构赋值时可以通过xx:aa把xx重命名为aa
  const { img:img2, name } = props

  // 可以连续解构赋值，和重命名一起使用
  // 不过连续解构时，b是拿不到的，c被重命名之后也拿不到
  const a = {b:{c:'我是c'}}
  const {b:{c:str}} = a
  console.log(str);
  
  return (
    <div className={IndexCss.item}>
      <img src={img2} className={IndexCss.img} alt="error" />
      <h3>{name}</h3>
    </div>
  )
}

