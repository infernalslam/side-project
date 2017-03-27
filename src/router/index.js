import Vue from 'vue'
import Router from 'vue-router'
import libstick from '@/components/libstick'
import insert from '@/components/insert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'libstick',
      component: libstick
    },
    {
      path: '/rtdadftacdascdadwfcdtaacvwdtavtawcdvtdvwqterwqv',
      name: 'insert',
      component: insert
    }
  ]
})
