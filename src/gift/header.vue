<template lang="html">
  <div class="">
    <header class="gift-header">
      <a class="left">
        &nbsp;
      </a>
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
  font-size: 36px;/*px*/
  color: #fff;
  flex-basis: 60%;
}
.gift-header .left, .gift-header .right {
  padding: 20px 40px;
  flex-basis: 20%;
  text-align: center;
}
.gift-header .right > i.mintui {
  width: 40px;/*px*/
  font-size: 40px;/*px*/
  color: #fff;
}

</style>
