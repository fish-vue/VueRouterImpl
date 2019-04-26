<template>
  <div>
    <h1>this is beijin</h1>
  </div>
</template>

<script>
var thisName = 'BeiJin.vue'

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
