<template>
  <div>
    <h1>learn {{this.$route.params.language}}</h1>

    <div><router-link :to="`/pl/${language}/tutorial`">
      to <input v-model="language"> tutorial
    </router-link></div>

    <div><router-link :to="`/pl/${language}/projects/3`">
      to <input v-model="language"> projects
    </router-link></div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: 'c'
    }
  }
}
</script>
