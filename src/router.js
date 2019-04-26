import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home.vue'
import vue from '@/views/fw.vue.vue'
import react from '@/views/fw.react.vue'
import angular from '@/views/fw.angular.vue'
import user from '@/views/user.vue'

import china from '@/views/china.vue'
import AnHui from '@/components/AnHui.vue'
import ZheJiang from '@/components/ZheJiang.vue'

import pl from '@/views/pl.vue'
import Tutorial from '@/components/Tutorial.vue'
import Projects from '@/components/Projects.vue'

import country from '@/views/country.vue'
import HongKong from '@/components/HongKong.vue'
import BeiJin from '@/components/BeiJin.vue'
import NanJin from '@/components/NanJin.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history', // 让hash路由长得像一般的path
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/fw/vue',
      component: vue
    }, {
      path: '/fw/react',
      component: react
    }, {
      path: '/fw/angular',
      component: angular
    }, {
      path: '/user/:id',
      component: user
    }, {
      path: '/china',
      component: china,
      children: [{
        path: 'anhui',
        component: AnHui
      }, {
        path: 'zhejiang',
        component: ZheJiang
      }]
    }, {
      path: '/pl/:language',
      component: pl,
      children: [{
        path: 'tutorial',
        component: Tutorial
      }, {
        path: 'projects',
        redirect: 'projects/1'
      }, {
        path: 'projects/:num',
        component: Projects,
        props: true
      }]
    }, {
      path: '/country',
      component: country,
      children: [{
        path: 'prc',
        components: {
          default: HongKong,
          capital: BeiJin
        }
      }, {
        path: 'poc',
        components: {
          default: HongKong,
          capital: NanJin
        }
      }]
    }
  ]
})
