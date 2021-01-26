import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'chat-page',
      component: require('@/views/ChatView').default
    },
    {
      path: '/login',
      name: 'login-page',
      component: require('@/views/LoginView').default
    }
  ]
})