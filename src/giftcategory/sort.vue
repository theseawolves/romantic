<template lang="html">
  <div class="">
    <div class="sort-wrap">
  <span class="sort-wrap__item sort-wrap__all">全部</span>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__select">
    <span class="text">选择分类</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-xuanxiang"></use>
    </svg>
    <ul class="sub">
      <li>
        <span class="name">aaaaa</span>
        <span class="num">15</span>
      </li>
      <li>
        <span class="name">aaaaa</span>
        <span class="num">15</span>
      </li>
      <li>
        <span class="name">aaaaa</span>
        <span class="num">15</span>
      </li>
      <li>
        <span class="name">aaaaa</span>
        <span class="num">15</span>
      </li>
      <li>
        <span class="name">aaaaa</span>
        <span class="num">15</span>
      </li>
    </ul>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__sort">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-pailieshunxu"></use>
    </svg>
    <ul class="sub">
      <li>
        <span class="name">aaaaa</span>
      </li>
      <li>
        <span class="name">aaaaa</span>

      </li>
      <li>
        <span class="name">aaaaa</span>

      </li>
      <li>
        <span class="name">aaaaa</span>

      </li>
      <li>
        <span class="name">aaaaa</span>

      </li>
    </ul>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__style">
    <router-link to="/category/list2">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangxiapailie"></use>
      </svg>
    </router-link>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__style">
    <router-link to="/category/list">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-juzhenpailie"></use>
    </svg>
    </router-link>
  </div>

</div>
    <router-view></router-view>
  </div>
</template>

<script>
import RomanskiList from './list.vue'
import RomanskiList2 from './list2.vue'
export default {
  components: {

  }
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
  /*display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 36px;*/
  position: relative;
  text-align: justify;
}
.sort-wrap__item.sort-wrap__select .text {
  padding-left: 30px;
}
.sort-wrap__item.sort-wrap__select .icon {
  position: absolute;
  right: 36px;
}
.sort-wrap__item.sort-wrap__select > .sub {
  position: absolute;
  background-color: white;
  width: 624px;
}
.sort-wrap__item.sort-wrap__select > .sub > li,
.sort-wrap__item.sort-wrap__sort > .sub > li {
  border-bottom: 1px solid #ccc;
  padding: 22px 32px;
  font-size: 24px;/*px*/
}
.sort-wrap__item.sort-wrap__select .sub > li > .num {
  float: right;
}

.sort-wrap__item.sort-wrap__style {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sort-wrap svg {
  display: inline-block;
  width: 35px;
  height: 35px;
}
.sort-wrap__item.sort-wrap__sort {
  position: relative;
}
.sort-wrap__item.sort-wrap__sort > .sub {
  position: absolute;
  background-color: white;
  width: 288px;
  text-align: left;

}
</style>
