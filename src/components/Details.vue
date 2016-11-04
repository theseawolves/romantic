<template>
  <div class="">

    <mt-cell v-for="n in 7" :title="'礼物详情页 ' + n" />
  </div>
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
