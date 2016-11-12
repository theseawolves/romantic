<template>
  <div>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="me">
        <mt-cell v-for="n in 5" :title="'我的 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <tabbar :selected="selected"></tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Tabbar from './Tabbar.vue'

Vue.use(Mint)

export default {
  name: 'me',
  components: { Tabbar },
  data () {
    return {
      selected: 'me'
    }
  }
}
</script>

<style>
</style>
