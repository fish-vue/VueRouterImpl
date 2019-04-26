# VueRouter Impl

### 原理
通过监听`window.location.hash`
（也就是`domain:port/a/b#/A/B`）
中的`#/A/B`变化来切换视图。

### 使用思路
- 规划好路由结构
  - 有哪些path？
  - 有哪些路由参数？
  - 嵌套路由的时候，父子路由的关系
- 每个路由上面有哪些组件？
  - 组件的树状图？
  - 组件之间需要交流吗？
  - 完成组件
    - 静态组件
    - 传值组件
    - ajax组件

### 开发流程
- 创建路由对象
- 明确路径和组件的对应关系
- 在根实例注册路由
- 编写对应组件

### 页面结构
- main
  - router1
    - component1
    - component2
    - component3
  - router2
    - componentA
    - routerA
    - routerB
      - componentB
  - router3

## [router-link](./router-link.md)

## [路由跳转时组件的生存情况](./life.md)

## 动态参数
``` js
{
  path: '/user/:id',
  component: user
}
```
在路由中这样定义，然后当页面处于符合上述正则规则的路由的时候，可以通过`this.$route.params.id`来调用

## [note](./detail.md)

## [conclusion](./conclu.md)
