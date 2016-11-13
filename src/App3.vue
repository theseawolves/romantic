<template>
  <div id="app">
    <div class="page-tabbar">
      <div class="page-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/fonts/iconfont.js?strict=false'
import './assets/fonts/iconfont.css'

Vue.use(Mint)
// Vue.component(Cell.name, Cell)
// Vue.component(TabContainer.name, TabContainer)
// Vue.component(TabContainerItem.name, TabContainerItem)
// Vue.component(Button.name, Button)
// Vue.component(Tabbar.name, Tabbar)
// Vue.component(TabItem.name, TabItem)

export default {
  name: 'app',
  data () {
    return {
      // selected: 'gift-set'
    }
  },
  mounted () {

  }
}
</script>

<style >


html, body {
  background-color: #fafafa;
  -webkit-overflow-scrolling: touch;
  user-select: none;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s ease
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.page-tabbar {
  overflow: hidden;
  height: 100vh;
}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}

.swiper-container {
    width: 100%;
    /*height: 300px*/
}


.icon {
   width: 1em;
   height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family:"webfont" !important;
  //font-size:16px;/*px*/
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;/*px*/
  -moz-osx-font-smoothing: grayscale;
}

/**
header
**/

#app .mint-header {
  background-color: #ddb63f;
  height: 80px;
}

#app .mint-header-title {
  font-size: 36px;/*px*/
  font-weight: normal;
}

#app .mint-header .mint-button {
  margin-right: 40px;
}

#app .mint-header .mintui {
  font-size: 40px;/*px*/
}

/**
礼物分类
**/

#gift-category .swiper-container {
  height: 452px;
}
#gift-category .swiper-slide {
    text-align: center;
    height:362px;
}

#gift-category .swiper-slide > a {
  display: block;
  text-decoration: none;
  font-size: 24px;/*px*/
  color: #000;
}

#gift-category .swiper-slide>a:first-child {
  margin-top: 48px;
}

#gift-category .swiper-slide>a:nth-child(2) {
  margin-top: 66px;
}

#gift-category .swiper-slide > a > .container {
  display: inline-block;
  width: 70px;
  height: 70px;
  margin-bottom: 18px;
}
#gift-category .swiper-slide  svg {
  width: 100%;
  height: 100%;
}

#gift-category .swiper-slide  .title {
  display: block;
  font-size: 24px;/*px*/
  color: #000;
}

#gift-category .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
}
#gift-category .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 32px;
}

#gift-category .swiper-pagination-bullet-active {
  background: #ddb63f;
}

.separate-line {
  width: 100%;
  height: 10px;
  background-color: #F5F5F5;
}

#gift-scenario-category .swiper-slide > a {
  padding-top: 0;
  padding-bottom:  0;
}

#gift-scenario-category .swiper-slide > a {
  display: block;
  text-decoration: none;
  font-size: 22px;/*px*/
  color: #ddb63f;
  line-height: 66px;
}
#gift-scenario-category .swiper-slide {
    text-align: center;
    height: 66px;
}

/**
exhibit
**/

.vux-divider {
  display: table;
  white-space: nowrap;
  height: auto;
  overflow: hidden;
  line-height: 1;
  text-align: center;
  color: #acacac;
  margin-bottom: 16px;
}
.vux-divider:after,.vux-divider:before {
  content: '';
  display: table-cell;
  position: relative;
  top: 50%;
  width: 50%;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)
}
.vux-divider:before {
  background-position: right 1em top 50%
}
.vux-divider:after {
  background-position: left 1em top 50%
}

.issue-headline {
  margin-top: 34px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 28px;/*px*/
  color: #000;
  font-weight: normal;
}
.issue-subtitle {
  font-size: 18px;/*px*/
}
.issue-subtitle-text {
  color: #ddb63f;
  margin-right: 18px;
}
.issue-subtitle-date {
  color: #acacac;
}

.issue-link-body {
  background-repeat: no-repeat;
  background-color: #000;
  background-position: 50%;
  background-size: cover;
}

.exhibit-larger .issue-link-body {
  height: 480px;
  margin: 0 16px 28px;
  border: 1px solid #f5f5f5;
}
.exhibit-tiny .issue-link-body {
  height: 202px;
  margin: 28px 16px 28px;
  border: 1px solid #f5f5f5;
}

.issue-link-title {
  float: left;
  font-size: 20px;/*px*/
}
.issue-link-price {
  float: right;
  font-size: 20px;/*px*/
  color: #f66375;
}



.exhibit-tiny {
  font-size: 20px;/*px*/
}
.issue-link-title {
  margin-left: 22px;
}

.issue-link-price {
  margin-right: 22px;
}
#gift-exhibit:last-child {
  margin-bottom: 110px;
}
/**
footer
**/

#app .mint-tab-item-icon {
    width: 45px;
    height: 45px;
    margin: 0 auto 11px;
}
#app .mint-tab-item-icon .iconfont {
  font-size: 45px;
}

#app .mint-tab-item:nth-of-type(3)>.mint-tab-item-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto;
}

#app .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #ddb63f;
    text-decoration: none;
}

#app .mint-tab-item-label {
    color: #6c6c6c;
    font-size: 22px;/*px*/
    line-height: 1;
}

#app .icon-fabu {
  font-size: 70px;/*px*/
  color: #ddb63f;
}

@font-face {font-family: 'webfont';
    src: url('./assets/fonts/webfont.eot'); /* IE9*/
    src: url('./assets/fonts/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/webfont.woff') format('woff'), /* chrome、firefox */
    url('./assets/fonts/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('./assets/fonts/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}

.web-font{
    font-family:"webfont" !important;
    //font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}


</style>
