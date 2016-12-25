<template lang="html">
  <a :class="{ 'q-tabbar__item_on': $parent.value == id }"
    @click="$parent.$emit('input',id)"
    class="q-tabbar__item">
    <span class="q-tabbar__icon">
      <slot name="icon"></slot>
    </span>
    <p class="q-tabbar__label">
      <slot></slot>
    </p>
  </a>
</template>

<script>
export default {
  name: 'q-tabbar-item',
  props: ['id']
}
</script>

<style lang="css">
.q-tabbar__item {
  display: block;
  flex: 1;
  padding: 5px 0;/*px*/
  font-size: 0;
  color: #6c6c6c;
  fill: #acacac;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.q-tabbar__item.q-tabbar__item_on, .q-tabbar__item_on .q-tabbar__label {
  fill: #ddb63f;
  color: #ddb63f;
}
.q-tabbar__item > .q-tabbar__icon {
  display: inline-block;
  position: relative;
}
.q-tabbar__icon > svg {
  display: inline-block;
  width: 45px;/*px*/
  height: 45px;/*px*/
}
.q-tabbar__label {
  text-align: center;
  color: #6c6c6c;
  font-size: 20px;/*px*/
  line-height: 1.8;
}
</style>
