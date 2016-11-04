<template>
  <mt-tab-container-item id="message">
    <div class="page-part">
      <mt-cell v-for="n in 12" :title="'消息 ' + n" />
    </div>
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
