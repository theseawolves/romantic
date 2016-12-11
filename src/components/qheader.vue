<template lang="html">
  <div class="q-header">
    <button class="q-header-left">
      <slot name="left"></slot>
    </button>
    <div class="q-header-center">
      <slot name="center"></slot>
    </div>
    <button class="q-header-right">
      <slot name="right"></slot>
    </button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.q-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.q-header-left , .q-header-right {
  flex: none;
  width: 40px;
  height: 40px;
  background-color: transparent;
  overflow: hidden;
  line-height: 40px;
  text-align: center;
  color: #fff;
  margin:10px 40px;
}
.q-header-center {
  text-align: center;
  flex: 1;
  width: 0%;
  font-size: 36px;
  height: 80px;
  line-height: 80px;
}
</style>
