import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BookEditor from '@/components/BookEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/bookEditor',
      name: 'bookEditor',
      component: BookEditor
    }
  ]
})
