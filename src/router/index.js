import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Gift from '../gift/gift.vue'
import Home from '../home/home.vue'
import Me from '../me/me.vue'
import Message from '../message/message.vue'
import Add from '../add/add.vue'
import Details from '../giftdetails/details.vue'
import Search from '../giftsearch/search.vue'
import Category from '../giftcategory/category.vue'
import Comments from '../comment/comment.vue'
import Tag from '../gifttag/tag.vue'

import List from '../giftcategory/list.vue'
import List2 from '../giftcategory/list2.vue'

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'home' , path: '/home', component: Home },
    { name: 'me' , path: '/me', component: Me },
    { name: 'add' , path: '/add',
      beforeEnter: (to, from, next) => {
        window.location.href = 'http://www.baidu.com'
      }
    },
    { name: 'message' , path: '/message', component: Message },
    { name: 'gift' , path: '/gift', component: Gift },
    { name: 'details' , path: '/details', component: Details },
    { name: 'search' , path: '/search', component: Search },
    { name: 'category' , path: '/category', component: Category,
      children: [
        {
          path: 'list',
          component: List
        },
        {
          path: 'list2',
          component: List2
        }
      ]
    },
    { name: 'comments' , path: '/comments', component: Comments },
    { name: 'tag' , path: '/tag', component: Tag },
    { path: '*', redirect: '/home' }
  ]
})
