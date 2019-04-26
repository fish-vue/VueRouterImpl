# conclusion

- 如何根据路由渲染视图？
  - 如何设置路由参数
  - 如何嵌套路由

- 如何切换路由？
  - `<a href="./#/fw/vue">`
  - `<router-link tag="li" to="/fw/vue">`
  - 注意，router-link也区分相对路径和绝对路径`to="fw/vue"`就是相对路径

- [切换路由后组件的生存情况](./life.md)

- 路由的变化会
  - 因为可能导致组件的创建和销毁，所以会触发相应组件的生命周期函数
  - this.$route 的变化会导致
    - 所有相关的view刷新
    - 触发相关computed,watch函数
    - 触发组件的beforeRouteUpdate函数，由根组件向子组件传播

路由发生改变，当前的存在的组件都能感知到变化，触发相应的函数。
父级路由组件优先察觉到路由的变化，而且如果设置了beforeUpdate又没有调用next函数，就会拦截事件，后代路由组件无法响应组件，甚至router-link都会失效

一个组件里面的router-view是由整个项目的路由决定的，不受组件自身的制约。就算是传入参数，那也是在router.js里面做的