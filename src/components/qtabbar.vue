<template lang="html">
  <div class="q-tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'q-tabbar',
  props: {
    value: {}
  }
}
</script>

<style lang="css">
.q-tabbar {
  display: flex;
  position: absolute;
  z-index: 500;
  bottom: 0;
  width: 100%;
  background-color: #f7f7f7;

}
.q-tabbar:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;/*no*/
  border-top: 1px solid #C0BFC4;/*no*/
  color: #C0BFC4;
  transform: scaleY(0.5);
}

</style>
