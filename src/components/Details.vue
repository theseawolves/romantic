<template>
  <div id="details">

    <mt-cell v-for="n in 100" :title="'详情页 ' + n" />
  </div>
</template>

<script>
    import Vue from 'vue'
    import Mint from 'mint-ui'
    import 'mint-ui/lib/style.css'

    Vue.use(Mint)
    export default {
        name: 'details',
        data() {
            return {
                selected: '外卖'
            };
        }
    };
</script>

<style>

</style>
