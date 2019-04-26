<template>
  <div>
    You are user {{this.$route.params.id}}
    name is :{{this.name}}
    <router-link :to='`/user/${id}`'>
      to <input v-model='id'>
    </router-link>
  </div>
</template>

<script>
var thisName = 'user.vue'

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    name: function () {
      console.log('-- from computed.name() --')
      return this.$route.params.id + '_name'
    }
  },
  watch: {
    name: function (newName, oldName) {
      console.log(`Name ${oldName} has changed to ${newName}!`)
    },
    $route: function (new$route, old$route) {
      console.log(`old id: ${old$route.params.id} has changed to ${new$route.params.id}`)
    }
  },
  beforeRouteUpdate: function (new$route, old$route, next) {
    console.log('-- from beforeRouteUpdate --')
    console.log(`oldId: ${old$route.params.id}, newId ${new$route.params.id}`)

    // 没有这个的话，computed、watch无法监测到this.$route的变化， view也不会从新渲染
    next()
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
