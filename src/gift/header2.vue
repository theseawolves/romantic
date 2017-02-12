<template lang="html">
  <q-header>
    <span slot="center">礼物</span>
    <div class="right">

    </div>
    <!-- <router-link :to="{ path:'/search'}" exact slot="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </router-link> -->
  </q-header>
</template>

<script>
import qHeader from '../components/qheader.vue'
export default {
  components: {
    qHeader
  }
}
</script>

<style lang="css" scoped>
.q-header {
  background-color: #ddb63f;
}

.q-header .q-header-right a {
  display: block;
  width: 100%;
  height: 100%;
}
.q-header .q-header-right svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: #fff;
}
</style>
