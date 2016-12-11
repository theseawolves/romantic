import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Gift from '../gift/gift.vue'
import Details from '../giftdetails/details.vue'
import Search from '../giftsearch/search.vue'
import Category from '../giftcategory/category.vue'
import Comments from '../comment/comment.vue'
import Tag from '../gifttag/tag.vue'

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'gift' , path: '/gift', component: Gift },
    { name: 'details' , path: '/details', components: {'details':Details} },
    { name: 'search' , path: '/search', components: {'search': Search} },
    { name: 'category' , path: '/category', components: {'category': Category} },
    { name: 'comments' , path: '/comments', components: {'comments': Comments} },
    { name: 'tag' , path: '/tag', components: {'tag': Tag} },
    { path: '*', redirect: '/gift' }
  ]
})
