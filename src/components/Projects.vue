<template>
  <div>
    This is Projects.vue component。With props, I konw 
    the number of Projects is {{num}}.
    <router-link :to="`/pl/${$route.params.language}/projects/${num}`">
      let to project:<input v-model="num">
    </router-link>
  </div>
</template>

<script>
var thisName = 'Projects.vue'

export default {
  // 我去，在router/index.js里面设置过，
  // 这里就不允许设置了。但是我觉得这样不好啊，太隐晦了
  // props:['num'],
  data () {
    return {
      num: this.$route.params.num
    }
  },
  watch: {
    $route: function () {
      console.log('Project.vue noticed that route has changed')
    }
  },
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
