<template>
  <div id="app">
    <div class="page-tabbar">
      <div class="page-wrap">
        <mt-header  :title="selected">
          <mt-button icon="search" slot="right"></mt-button>
        </mt-header>

        <mt-tab-container-item id="首页">
          <mt-cell v-for="n in 5" :title="'首页 ' + n" />
        </mt-tab-container-item>

        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="礼物">
            <div id="gift-category">
              <swiper :options="giftCategoryOption">
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-quanbu"></use>
                      </svg>
                    </div>
                    <span class="title web-font">全部</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shishangpeishi1"></use>
                      </svg>
                    </div>
                    <span class="title web-font">时尚配饰</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liyuxianhua"></use>
                      </svg>
                    </div>
                    <span class="title web-font">礼遇鲜花</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qiaokeli"></use>
                      </svg>
                    </div>
                    <span class="title web-font">巧克力</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bangongliangpin"></use>
                      </svg>
                    </div>
                    <span class="title web-font">鞋子包包</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yizhuoliangpin"></use>
                      </svg>
                    </div>
                    <span class="title web-font">衣着良品</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gongzibaozhen"></use>
                      </svg>
                    </div>
                    <span class="title web-font">公仔抱枕</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-weijinshoutao"></use>
                      </svg>
                    </div>
                    <span class="title web-font">围巾手套</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiangshuixiangxun"></use>
                      </svg>
                    </div>
                    <span class="title web-font">香水香熏</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shumajixie"></use>
                      </svg>
                    </div>
                    <span class="title web-font">数码机械</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiajuliangpin"></use>
                      </svg>
                    </div>
                    <span class="title web-font">家居良品</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bangongliangpin"></use>
                      </svg>
                    </div>
                    <span class="title web-font">办公良品</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-meihujianshen"></use>
                      </svg>
                    </div>
                    <span class="title web-font">美护健身</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dongmanjifu"></use>
                      </svg>
                    </div>
                    <span class="title web-font">动漫基腐</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chanshiguanqu"></use>
                      </svg>
                    </div>
                    <span class="title web-font">铲屎官区</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wenjuqiapian"></use>
                      </svg>
                    </div>
                    <span class="title web-font">文具卡片</span>
                  </a>
                </swiper-slide>
                <swiper-slide >
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xinyihezi"></use>
                      </svg>
                    </div>
                    <span class="title web-font">心意盒子</span>
                  </a>
                  <a href="javascript:">
                    <div class="container">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shishangpeishi1"></use>
                      </svg>
                    </div>
                    <span class="title web-font">时尚配饰</span>
                  </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>

            </div>

            <div class="separate-line"></div>

            <div id="gift-scenario-category">
              <swiper :options="giftScenarioCategoryOption">
                <swiper-slide v-for="item in giftScenarioCategory" >
                  <a href="javascript:" v-text="item"></a>
                </swiper-slide >
              </swiper>
            </div>

            <div class="separate-line"></div>



          </mt-tab-container-item>

          <mt-tab-container-item id="发布">
            <mt-cell v-for="n in 7" :title="'发布 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="消息">
            <div class="page-part">
              <mt-cell v-for="n in 12" :title="'消息 ' + n" />
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="我的">
            <div class="page-part">
              <mt-cell v-for="n in 12" :title="'我的 ' + n" />
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页">
          <span slot="icon" class="iconfont icon-shouye">
          </span>
           <span class="web-font">首页</span>
        </mt-tab-item>
        <mt-tab-item id="礼物">
          <span slot="icon" class="iconfont icon-liwu">
          </span>
          <span class="web-font">礼物</span>
        </mt-tab-item>
        <mt-tab-item id="发布">
          <span slot="icon" class="iconfont icon-fabu">
          </span>
        </mt-tab-item>
        <mt-tab-item id="消息">
          <span slot="icon" class="iconfont icon-xiaoxi">
          </span>
          <span class="web-font">消息</span>
        </mt-tab-item>
        <mt-tab-item id="我的">
          <span slot="icon" class="iconfont icon-wode">
          </span>
          <span class="web-font">我的</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
// import {Cell, TabContainer, TabContainerItem, Button, Tabbar, TabItem} from 'mint-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import AwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Mint)
Vue.use(VueResource)
Vue.use(AwesomeSwiper)
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
      selected: '礼物',
      giftCategoryOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0
      },
      giftScenarioCategoryOption: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      giftScenarioCategory: ['#暗恋', '#表白', '#热恋', '#小矛盾', '#和好', '#求婚', '#结婚', '#红颜知己', '#蓝颜知己', '#办公室恋情', '#第三者']
    }
  },
  mounted () {
    // GET /someUrl
    this.$http.get('/list').then((response) => {
      console.log(response)
    }, (response) => {
      console.log(response)
    });
    this.$http.get('/gifts').then((response) => {
      console.log(response)
    }, (response) => {
      console.log(response)
    });
  }
}
</script>

<style >

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
  padding: 10px 0;
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
