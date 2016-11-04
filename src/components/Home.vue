<template>
  <mt-tab-container-item id="home">
    <mt-cell v-for="n in 5" :title="'首页 ' + n" />
  </mt-tab-container-item>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)
export default {
  data: function () {
    return {
    }
  }
}
</script>

<style>
</style>
