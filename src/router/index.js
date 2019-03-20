import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/demo/Demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Demo
    }
  ]
})
