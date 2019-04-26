<template>
  <div>
    <ul>
      <li><a href="./#/fw/vue">
          to vue with [a href="./#/fw/vue"]</a></li>
      <li><a href="./#/fw/react">
          to react [a href="./#/fw/react"]</a></li>
      <li><a href="./#/fw/angular">
          to angular [a href="./#/fw/angular"]</a></li>
    </ul>
    <ul>
      <router-link tag="li" to="/fw/vue">
        <a>to vue with [router-link tag="li" to="/fw/vue"]</a>
      </router-link>
      <router-link tag="li" to="/fw/react">
        <a>to react with [router-link tag="li" to="/fw/react"]</a>
      </router-link>
      <router-link tag="li" to="/fw/angular">
        <a>to angular with [router-link tag="li" to="/fw/angular"]</a>
      </router-link>
    </ul>
    <ul>
      <li><router-link tag="li" to="/country/poc">
        <a>to the Repblic of China</a>
      </router-link></li>
      <li><router-link tag="li" to="/country/prc">
        <a>to the PeoPle's Repblic of China</a>
      </router-link></li>
    </ul>
    <ul>
      <router-link tag="li" to="/user/1">
        <a>to /user/1</a>
      </router-link>
      <router-link tag="li" to="/pl/c/tutorial">
        <a>to /pl/c/tutorial</a>
      </router-link>
      <router-link tag="li" to="/china/anhui">
        <a>to /china/anhui</a>
      </router-link>
    </ul>
    <hr>
  </div>
</template>

<script>
var thisName = 'Links.vue'

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
