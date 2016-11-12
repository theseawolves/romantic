<template>
  <div>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="add">
        <mt-cell v-for="n in 5" :title="'发布 ' + n" />
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
  name: 'add',
  components: { Tabbar },
  data: function () {
    return {
      selected: 'add'
    }
  }
}
</script>

<style>
</style>
