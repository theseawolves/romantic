<template>
  <div class="romanski-wrap">

    <div class="content">

    </div>

    <div class="romanski-tabbar">
      <a class="romanski-tab-item">
        <div class="romanski-tab-item-icon">

          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
        </div>
        <div class="title">
          首页
        </div>
      </a>
      <a class="romanski-tab-item is-selected">
        <div class="romanski-tab-item-icon">

          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liwu"></use>
          </svg>
        </div>
        <div class="title">
          礼物
        </div>

      </a>
      <a class="romanski-tab-item">
        <svg class="icon icon-fabu" aria-hidden="true">
          <use xlink:href="#icon-fabu"></use>
        </svg>
      </a>
      <a class="romanski-tab-item">
        <div class="romanski-tab-item-icon">

          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoxi"></use>
          </svg>
        </div>
        <div class="title">
          消息
        </div>
      </a>
      <a class="romanski-tab-item">
        <div class="romanski-tab-item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
          </svg>

        </div>
        <div class="title">
          我的
        </div>
      </a>

    </div>
  </div>

</template>

<script>
import '../assets/css/style.css'
import '../assets/css/box.css'
import '../assets/fonts/iconfont.js?strict=false'
import '../assets/fonts/iconfont.css'
import '../assets/fonts/webfont.css'

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

<style>
.content {
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
}
.romanski-tabbar {
  display: flex;
  color: #fff;
  text-align: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  color: #6c6c6c;
  border-top: 2px solid #e5e5e5;
}
.romanski-tab-item {
  flex: 1;
  text-align: center;
  display: flex;
  padding: 6px 0;/*px*/
  flex-wrap: wrap;
  height: 96px;/*px*/
  text-decoration: none;
  fill: #acacac;
}
.romanski-tab-item-icon {
  text-align: center;
  flex-basis: 100%;
}
.romanski-tab-item .title {
  flex-basis: 100%;
  font-size: 22px;/*px*/
}
.romanski-tab-item-icon .icon {
  width: 45px;/*px*/
  height: 45px;/*px*/

}
.romanski-tab-item:nth-child(3) svg {
  width: 70px;/*px*/
  height: 70px;/*px*/
  fill: #acacac;
}
.romanski-tab-item:nth-child(3) {
  padding: 13px 0;
  display: block;
  text-align: center;
}

.romanski-tab-item.is-selected {
  background-color: #eaeaea;
  fill: #ddb63f;
}
.romanski-tab-item:hover {
  text-decoration: none;
}

</style>
