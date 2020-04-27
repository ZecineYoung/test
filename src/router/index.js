import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BookList from '@/components/BookList'
import login from '@/components/login'
import TakeOut from '@/components/TakeOut'
import find from '@/components/find'
import order from '@/components/order'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BookList',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/TakeOut',
      name: 'TakeOut',
      component: TakeOut
    }, 
    {
      path: '/order',
      name: 'order',
      component: order
    }, 
    {
      path: '/find',
      name: 'find',
      component: find
    }, 
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
