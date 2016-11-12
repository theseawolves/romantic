import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import Gift from '../components/Gift.vue'
import Add from '../components/Add.vue'
import Message from '../components/Message.vue'
import Me from '../components/Me.vue'
import Details from '../components/Details.vue'
import Search from '../components/Search.vue'


export default new Router({
  // mode: 'history',
  //scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'home', path: '/home', component: Home},
    { name: 'gift' , path: '/gift', component: Gift },
    { name: 'add' , path: '/add', component: Add },
    { name: 'message' , path: '/message', component: Message },
    { name: 'me' , path: '/me', component: Me },
    { name: 'details' , path: '/details', component: Details },
    { name: 'search' , path: '/search', component: Search },
    { path: '*', redirect: '/gift' }
  ]
})
