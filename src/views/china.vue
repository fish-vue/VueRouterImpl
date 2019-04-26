<template>
  <div>
    <h1>It is China <button @click="$router.push('/')">to Home</button></h1>
    <router-link to="/china/anhui">to 安徽</router-link>
    <router-link to="/china/zhejiang">to 浙江</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>
<style>
</style>
