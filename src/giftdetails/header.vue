<template lang="html">
  <div class="">
    <header class="gift-header">
      <router-link :to = "{ path: '/gift'}" class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <div class="center">
        礼物
      </div>
      <router-link :to = "{ path: '/share'}" class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </router-link>
    </header>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
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
  display: flex;
  padding: 20px 40px;
  height: 80px;
  flex-basis: 20%;
  text-align: center;
  justify-content: space-between;
}
.gift-header svg {
  width: 40px;/*px*/
  height: 40px;/*px*/
  font-size: 40px;/*px*/
  color: #fff;
  fill: #fff;
}
.gift-header .right {
  position: relative;
}
.gift-header .right svg {
  position: absolute;
  right: 40px;
}

</style>
