import React, { Component } from 'react'
import AppCss from './app.module.css'
import TodoList from './pages/ToDoList'
import UseAxios from './pages/UseAxios'
import GetUserList from './pages/GetUserList'
import RouterC from './pages/RouterC'
import DoubleRoute from './pages/DoubleRoute'
import JsJump from './pages/JsJump'
import RouterHeader from './components/RouterHeader'
/* 
  Link组件类似于a标签，点击做跳转，默认是push跳转、
    添加replace属性，作replace跳转
    路由的储存类似栈的解构，push是压入栈，replace是替换栈顶的那个路由

  NavLink和Link一样，点击时会给自身添加特定的className，方便通过className做样式区分
    activeClassName可以自己配置，不写默认为active，如下：
    <NavLink to="/xx" className="ss" activeClassName="aa">xx</NavLink>

  Switch组件里面包裹Route：如果有多个路径相同的组件，取第一个
    不包的话就有多少个组件就展示多少个--一般都建议包裹，不然多人开发时容易出现重复

  Route组件：path=路由名 component=组件名
    默认模糊匹配。路由为/home/a/b时，如果没有精确的组件，可以模糊匹配到paht=/home的组件
    可以添加exact ? true/false属性精准匹配，用的场景不多，一般不开
      需要注意的是，如果组件中还有二级路由，添加了exact会出问题
      /double-route/one 逻辑是先模糊匹配展示/double-route组件，再从中找/double-route/one组件
      如果添加了exact，因为精确匹配的问题，所以第一次找/double-route/one时就匹配不到第一级的路由，就直接重定向到Redirect

  Redirect：重定向，一般放在最下面，没匹配到任何路由时，重定向到这里
*/
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ borderRight: '1px solid #000',marginRight: '40px',width: '30%',height: '100vh' }}>
          <RouterHeader />

          <ul>
            {/* 
              组件中间的值会被解析为this.props.children，类似vue的插槽，只不过放在props里面了
              放文本的话还好，如果放多层dom结构做插槽的话需要手动去解析，比较麻烦
            */}
            <li><NavLink replace to="/todo-list" className={AppCss['nav-link']} activeClassName={AppCss['active']} children="todolist功能演示" /></li>
            {/* <li><NavLink to="/todo-list" className={AppCss['nav-link']} activeClassName={AppCss['active']}>todolist功能演示</NavLink></li> */}
            <li><NavLink to="/use-axios" className={AppCss['nav-link']} activeClassName={AppCss['active']}>proxy跨域代理配置</NavLink></li>
            <li><NavLink to="/get-user-list" className={AppCss['nav-link']} activeClassName={AppCss['active']}>请求数据展示用户列表</NavLink></li>
            <li><NavLink to="/router-c" className={AppCss['nav-link']} activeClassName={AppCss['active']}>路由组件特有的props</NavLink></li>
            <li><NavLink to="/double-route" className={AppCss['nav-link']} activeClassName={AppCss['active']}>二级路由/多级路由</NavLink></li>
            <li><NavLink to="/js-jump" className={AppCss['nav-link']} activeClassName={AppCss['active']}>通过js做跳转</NavLink></li>
          </ul>
        </div>

        <div>
          {/* 内容区域：使用Route来注册路由 */}
          <h1>内容区域</h1>
          {/* 演示父子传递信息，一般方法操作等 */}

          <Switch>
            <Route exact path="/todo-list" component={TodoList} />
            {/* 演示配置代理跨域请求等功能 */}
            <Route path="/use-axios" component={UseAxios} />
            {/* 演示模块化css，连续解构赋值并且重命名，请求接口展示数据 */}
            <Route path="/get-user-list" component={GetUserList} />
            {/* 演示路由组件可以收到的参数，路由状态和url信息等 */}
            <Route path="/router-c" component={RouterC} />
            {/* 演示二级/多级路由 */}
            <Route path="/double-route" component={DoubleRoute} />
            {/* 使用js方法跳转路由 */}
            <Route path="/js-jump" component={JsJump} />

            {/* 
            - 如果没有匹配到任何路由，重新向到这里
            - 有子路由的组件必须在子路由的Route外包裹Switch后Redirect才会生效
                /double-route/one会匹配到两个组件：/double-route和/double-route/one
                如果/double-route/one不存在，那么则会展示/double-route，所以不会走Redirect
                包裹了Swicth之后，会从他里面的Route找对应的组件，如果找不到，默认匹配Redirect
          */}
            <Redirect to="/todo-list" />
          </Switch>
        </div>
      </div>
    )
  }
}
