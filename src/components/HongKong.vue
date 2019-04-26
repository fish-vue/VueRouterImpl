<template>
  <div>
    <h1>this is HongKong</h1>
  </div>
</template>

<script>
var thisName = 'HongKong.vue'

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
