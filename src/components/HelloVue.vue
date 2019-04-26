<template>
  <div>
    Hello vue!
  </div>
</template>

<script>
var thisName = 'HelloVue.vue'

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
