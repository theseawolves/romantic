import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import Set from '../components/Set.vue'
import Add from '../components/Add.vue'
import Message from '../components/Message.vue'
import Me from '../components/Me.vue'
import Details from '../components/Details.vue'

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'home', path: '/home', component: Home},
    { name: 'set' , path: '/set', component: Set },
    { name: 'add' , path: '/add', component: Add },
    { name: 'message' , path: '/message', component: Message },
    { name: 'me' , path: '/me', component: Me },
    { name: 'details' , path: '/details', component: Details },
    { path: '*', redirect: '/set' }
  ]
})
