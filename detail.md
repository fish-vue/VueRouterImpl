## name
感觉这两个地方的name属性没用啊 
```
export default {
  name: 'App'
}
```
```
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```

## @
import HelloWorld from '@/components/HelloWorld'
@ 就是src目录
在 `./build/webpack.base.dev`中设定

## import时省略
`import '/foldername'` 就会自动尝试查找`index.js`

`.js``.vue`后缀名也有省略规则

