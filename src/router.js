import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects.vue')
    },
    // Sub paths of projects
    {
      path: '/projects/saveme',
      name: 'savemeproject',
      component: () => import('@/views/projects/SaveMe.vue')
    },

    {
      path: '/license',
      name: 'license',
      component: () => import('@/views/License.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})
