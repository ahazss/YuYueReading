import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import WantToRead from '@/views/WantToRead'
import Reading from '@/views/Reading'
import HaveRead from '@/views/HaveRead'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/want',
      name:'WantToRead',
      component:WantToRead
    },
    {
      path:'/reading',
      name:'Reading',
      component:Reading
    },
    {
      path:'/have',
      name:'HaveRead',
      component:HaveRead
    }
  ]
})
