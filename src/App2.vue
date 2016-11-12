<template>
  <div id="app">
    <div class="page-tabbar">
      <div class="page-wrap">
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/fonts/iconfont.js?strict=false'

Vue.use(Mint)
// Vue.component(Cell.name, Cell)
// Vue.component(TabContainer.name, TabContainer)
// Vue.component(TabContainerItem.name, TabContainerItem)
// Vue.component(Button.name, Button)
// Vue.component(Tabbar.name, Tabbar)
// Vue.component(TabItem.name, TabItem)

export default {
  name: '',
  data () {
    return {
      selected: 'gift-set'
    }
  },
  mounted () {

  }
}
</script>

<style >

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
   width: 1em; height: 1em;
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
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

/**
header
**/

#app .mint-header {
  background-color: #ddb63f;
  height: 1.1666666666667rem;
}

#app .mint-header-title {
  font-size: 0.46666666666667rem;
  font-weight: normal;
}

/**
礼物分类
**/

.swiper-slide {
    text-align: center;
}

.swiper-slide > a {
  display: block;
  text-decoration: none;
  font-size: .32rem;
  color: #ddb63f;
}

#gift-category .swiper-slide > a {
  margin-top: .293333rem;
}

#gift-scenario-category .swiper-slide > a {
  padding-top: 0.33333333333333rem;
  padding-bottom:  0.33333333333333rem;

}

.swiper-slide > a > .container {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
}
#gift-category .swiper-slide  svg {
  width: 100%;
  height: 100%;
}

#gift-category .swiper-slide  .title {
  display: block;
  font-size: .32rem;
  color: #000;
}

#app .swiper-pagination-bullet-active {
  background: #ddb63f;
}

#gift-category .swiper-container {
  height: 180px;
}

.separate-line {
  width: 100%;
  height: 6px;
  background-color: #F5F5F5;
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
  //padding: 10px 0;
  color: #666;
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
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
  color: #000000;
}
.issue-subtitle {
  font-size: 14px;
}
.issue-subtitle-text {
  color: #ddb63f;
  margin-right: 14px;
}
.issue-subtitle-date {
  color: #928d85;
}

.issue-link-body {
  background-repeat: no-repeat;
  background-color: #000;
  background-position: 50%;
}

.exhibit-larger .issue-link-body {
  height: 230px;
  margin: 7px 7px 14px;
  border: 1px solid #dededf;
}
.exhibit-tiny .issue-link-body {
  height: 98px;
  margin: 7px 7px 12px;
}

.issue-link-title {
  float: left;
  margin-bottom: 10px;
}
.issue-link-price {
  float: right;
  color: #f66375;
}



.exhibit-tiny {
  font-size: 12px;
}
.issue-link-title {
  margin-left: 11px;
}

.issue-link-price {
  margin-right: 11px;
}
#gift-exhibit:last-child {
  margin-bottom: 65px;
}
/**
footer
**/

#app .mint-tab-item-icon {
    /*width: 47px;
    height: 47px;*/
    width: 0.66666666666667rem;
    height: 0.66666666666667rem;
    margin: 0 auto 11px;
}

#app .mint-tab-item:nth-of-type(3)>.mint-tab-item-icon {
  /*width: 73px;
  height: 73px;*/
  width: 1.2222222222222rem;
  height: 1.2222222222222rem;
  margin: 0 auto;
}

#app .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #ddb63f;
}

#app .mint-tab-item-label {
    color: #6c6c6c;
    /*font-size: 24px;*/
    font-size: 0.33333333333333rem;
    line-height: 1;
}

#app .icon-fabu {
  /*font-size: 73px;*/
  font-size: 1.2222222222222rem;
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


@font-face {font-family: "iconfont";
  src: url('./assets/fonts/iconfont.eot?t=1477991029704'); /* IE9*/
  src: url('./assets/fonts/iconfont.eot?t=1477991029704#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./assets/fonts/iconfont.woff?t=1477991029704') format('woff'), /* chrome, firefox */
  url('./assets/fonts/iconfont.ttf?t=1477991029704') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./assets/fonts/iconfont.svg?t=1477991029704#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  /*font-size:47px;*/
  font-size: 0.66666666666667rem;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shishangpeishi:before { content: "\e610"; }

.icon-jiajuliangpin:before { content: "\e611"; }

.icon-bangongliangpin:before { content: "\e612"; }

.icon-liyuxianhua:before { content: "\e613"; }

.icon-gongzibaozhen:before { content: "\e614"; }

.icon-meihujianshen:before { content: "\e615"; }

.icon-dongmanjifu:before { content: "\e616"; }

.icon-quanbu:before { content: "\e617"; }

.icon-qiaokeli:before { content: "\e618"; }

.icon-chanshiguanqu:before { content: "\e619"; }

.icon-shishangpeishi1:before { content: "\e61a"; }

.icon-shumajixie:before { content: "\e61b"; }

.icon-weijinshoutao:before { content: "\e61c"; }

.icon-wenjuqiapian:before { content: "\e61d"; }

.icon-xiangshuixiangxun:before { content: "\e61e"; }

.icon-yizhuoliangpin:before { content: "\e61f"; }

.icon-xinyihezi:before { content: "\e620"; }

.icon-xiaoxi:before { content: "\e621"; }

.icon-fabu:before { content: "\e622"; }

.icon-wode:before { content: "\e623"; }

.icon-shouye:before { content: "\e624"; }

.icon-liwu:before { content: "\e625"; }
</style>
