## 路由结构
- /
- /fw/vue
  - Links
  - HelloVue
- /fw/react
  - Links
- /fw/angular
  - Links
- /user/:id
- /china
  - ./anhui
  - ./zhejiang
- /pl/:language
  - tutorial
  - projects/:num
- /country
  - poc
  - prc

### 没有匹配到路由怎么办？
- `/sdfadf` 这个路由没有匹配到任何合法的路由，那么就会渲染`/`对应的view，但是里面的`<router-link>`就不会渲染

- `/china/asdfas` 这个路由会渲染`/china`对应的组件，但是不会渲染china.vue里面的`<router-link>`

- `/` -> `/fw/vue` 
created Links.vue
created HelloVue.vue
destoryed Links.vue
mounted Links.vue
mounted HelloVue.vue

共同的组件Links.vue销毁后重新创建
`/fw/vue` --> `/fw/react`  --> `/fw/angular` 也是一样的，这种路由切回不会复用同名组件

- `/user/1` --> `/user/2`
路由参数的变化不会重新创建`user.vue`，相当于向这个组件传入`this.$route.params.id`。这个数据和data、computed一样是被观察的。
- computed + watch
  1. computed 监测 `this.$route.parmas`
  2. watch 监测 computed property
    这样就可以可以通过watch函数来掌控雷电了

- 直接监测 $route
  视图层、watch函数也可以直接监测 $route的变化

- beforeRouteUpdate
    使用这个钩子函数

- `/country/poc` --> `/country/prc`
这种是属于同一个路由下的子路由，类似于路由参数的变化，相当于与`/country/:enum` 后面是一个枚举变量。 同名组件可以复用，切换地址HongKong.vue不会有任何变化。Country.vue会触发update钩子函数

- `/pl/c/tutorial` --> `/pl/js/tutorial`
参数language的变化没有使得子路由组件Tutorial.vue被重新创建。
这个地方我有点不解：
  - Project.vue 能不能向 Tutorial.vue传递参数？
  - 如果Tutorial.vue的内容确实需要改变，那么难不成Tutorial.vue单独监听this.$route的变化？

- 上面一个问题的解决方案
```
{
  path: 'projects/:num',
  component: Projects,
  props: true
}
```
可以把num通过props传给Projects这个组件。但是如果Tutorial.vue里面的数据和pl.vue里面的数据有共享的地方，如何把pl.vue的数据传给Tutorial.vue里面？总不能发两次Ajax请求吧
