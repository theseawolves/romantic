import Vue from 'vue'
import App from './app/app.vue'
import router from './router'

// document.addEventListener('DOMContentLoaded', function() {
//   if (window.FastClick) window.FastClick.attach(document.body);
// }, false);

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
