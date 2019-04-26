<template>
  <div>
    This is Tutorial.vue component.
    It is a tutorial about {{this.$route.params.language}}
  </div>
</template>

<script>
var thisName = 'Tutorial.vue'

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
