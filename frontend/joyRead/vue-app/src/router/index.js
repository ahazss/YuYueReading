import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import WantToRead from '@/views/WantToRead'
import Reading from '@/views/Reading'
import HaveRead from '@/views/HaveRead'
import AddByHand from '@/views/AddByHand'
import ResultShow from '@/views/ResultShow'
import Scan from '@/views/Scan'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Settings from '@/views/Settings'
import Myaccount from '@/views/Myaccount'
import BookDetails from '@/views/BookDetails'
import AddRecord from '@/views/AddRecord'
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
    },
    {
      path:'/add',
      name:'AddByHand',
      component:AddByHand,
    },
    {
      path:'/result',
      name:'ResultShow',
      component:ResultShow,
    },
    {
      path:'/scan',
      name:'Scan',
      component:Scan,
    },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path:'/myaccount',
      name: 'Myaccount',
      component: Myaccount
    },
    {
      path:'/bookdetails',
      name:'BookDetails',
      component:BookDetails
    },
    {
      path:'/addrecord',
      name:'AddRecord',
      component:AddRecord
    }

  ]
})
