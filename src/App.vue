<template>
  <div id="app">
    <!-- 这个组件将会出现在所有router中 -->
    <Common/>

    <!-- 写一个导航组件，方便调试 -->
    <Links/>

    <!-- 匹配到相关的路由组件后，这个组件会被代替 -->
    <router-view/>
  </div>
</template>

<script>
import Common from '@/components/Common.vue'
import Links from '@/components/Links.vue'
export default {
  name: 'App',
  components: {
    Common,
    Links
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>
