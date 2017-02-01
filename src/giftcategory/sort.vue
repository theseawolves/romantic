<template lang="html">
<div class="sort-wrap">
  <span class="sort-wrap__item sort-wrap__all">全部</span>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__select">
    <span class="text">选择分类</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-xuanxiang"></use>
    </svg>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__sort">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-pailieshunxu"></use>
    </svg>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__style">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shangxiapailie"></use>
    </svg>
  </div>



</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.sort-wrap {
  display: flex;
  height: 72px;
  font-size: 28px;/*px*/
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.sort-wrap__item {
  flex-grow: 1;
}
.sort-wrap__item.sort-wrap__line {
  display: inline-block;
  flex-grow: 0;
  flex-basis: auto;
  width: 2px;
  height: 48px;
  border-left: 1px solid #ccc;
}
.sort-wrap__item.sort-wrap__select {
  flex-grow: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 36px;
}
.sort-wrap__item.sort-wrap__sort, .sort-wrap__item.sort-wrap__style {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sort-wrap svg {
  display: inline-block;
  width: 35px;
  height: 35px;
}

</style>
