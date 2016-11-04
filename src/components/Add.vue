<template>
  <mt-tab-container-item id="add">
    <mt-cell v-for="n in 7" :title="'发布 ' + n" />
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
