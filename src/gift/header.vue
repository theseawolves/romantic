<template lang="html">
  <div class="">
    <header class="gift-header">
      <div class="left">
      </div>
      <div class="center">
        礼物
      </div>
      <router-link :to = "{ path: '/search'}" class="right">
        <i class="mintui mintui-search" ></i>
      </router-link>
    </header>

  </div>
</template>

<script>

export default {
  data: function () {
    return {
    }
  },
  computed: {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.gift-header {
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  background-color: #ddb63f;

}
.gift-header .center {
  text-align: center;
  font-size: 36px;
  color: #fff;
}
.gift-header .right {
  padding: 20px 40px;
}
.gift-header .right > i.mintui {
  display: block;
  width: 40px;
  font-size: 40px;
  color: #fff;
}

</style>
