<template>
  <div>
    city of Country:
    <router-link to='poc'> to poc</router-link>
    <router-link to='prc'> to prc</router-link>
    <router-view></router-view>
    <router-view name='capital'></router-view>
  </div>
</template>

<script>
var thisName = 'country.vue'

export default {
  created () {
    console.log(`created ${thisName}`)
  },
  mounted () {
    console.log(`mounted ${thisName}`)
  },
  updated () {
    console.log(`updated ${thisName}`)
  },
  destroyed () {
    console.log(`destoryed ${thisName}`)
  }
}
</script>
