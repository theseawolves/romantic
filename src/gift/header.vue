<template lang="html">
  <div>
    <header class="gift-header">
      <button class="left">

      </button>
      <div class="center">
        礼物
      </div>
      <button class="right">
        <router-link :to="{ path:'/search'}" exact>
          <i class="mintui mintui-search" ></i>
        </router-link>
      </button>

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

<style lang="css" scoped>
.gift-header {
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  background-color: #ddb63f;
  height: 80px;
  line-height: 80px;
}

.gift-header .center {
  text-align: center;
  font-size: 36px;/*px*/
  width: 0%;
  color: #fff;
  flex: 1;
}
.gift-header .left, .gift-header .right {
  width: 40px;
  height: 40px;
  margin: 20px 40px;
  flex: none;
  background-color: transparent;
  overflow: hidden;

}
.gift-header .right > a {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}

.gift-header .right i {
  font-size: 36px;
  color: #fff;
}


</style>
