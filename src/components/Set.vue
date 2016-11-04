<template>
  <div>
    <mt-header  :title="selected">
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="gift-set">
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
                <span class="title web-font">办公良品</span>
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
              <router-link :to="{ path:'/details', query:{ tag: item} }" exact v-text="item">
              </router-link>
              <!-- <a href="javascript:" v-text="item"></a> -->

            </swiper-slide >
          </swiper>
        </div>

        <div class="separate-line"></div>

        <div id="gift-exhibit">
          <template v-for = "item in exhibits">
            <div class="exhibit-larger">
              <h1 class="issue-headline" v-text="item.headline"></h1>
              <div class="issue-subtitle">
                <p class="vux-divider">
                  <span
                  class="issue-subtitle-text"
                  v-text="item.subtitleText"></span>
                  <span
                  class="issue-subtitle-date"
                  v-text="item.subtitleDate"></span>
                </p>
              </div>
              <div class="issue-link">
                <router-link to="/details" exact>
                  <div class="issue-link-body"
                  :style="{'background-image':'url('+item.link+')'}">
                </div>
              </router-link>
              <div>
                <div class="issue-link-title" v-text="item.title"></div>
                <div class="issue-link-price" v-text="'￥'+item.price"></div>

              </div>
            </div>
          </div>
          <div class="exhibit-tiny">
            <swiper :options="giftExhibitOption">
              <swiper-slide v-for="tiny in item.tinyPictures" >
                <div class="issue-link">
                  <div class="issue-link-body"
                  :style="{'background-image':'url('+tiny.link+')'}">
                </div>
                <div>
                  <div class="issue-link-title" v-text="tiny.title"></div>
                  <div class="issue-link-price" v-text="'￥'+tiny.price"></div>
                </div>
              </div>
            </swiper-slide >
          </swiper>
        </div>
      </template>
    </div>
  </mt-tab-container-item>
</mt-tab-container>

<tabbar :selected="selected"></tabbar>

  </div>

</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
// import {Cell, TabContainer, TabContainerItem, Button, Tabbar, TabItem} from 'mint-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import AwesomeSwiper from 'vue-awesome-swiper'
import Tabbar from './Tabbar.vue'


Vue.use(Mint)
Vue.use(VueResource)
Vue.use(AwesomeSwiper)
export default {
  components:{Tabbar},
  data () {
    return {
      selected: 'gift-set',
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
      giftScenarioCategory: ['#暗恋', '#表白', '#热恋', '#小矛盾', '#和好', '#求婚', '#结婚', '#红颜知己', '#蓝颜知己', '#办公室恋情', '#第三者'],
      exhibits: [],
      baseUrl: '',
      giftExhibitOption: {
        slidesPerView: 3,
        //spaceBetween: 18
      },
    }
  },
  mounted () {
    // GET /someUrl
    this.$http.get('/list').then((response) => {
      console.log(response)
    }, (response) => {
      console.log(response)
    })
    this.$http.get('/gifts').then((response) => {
      console.log(response)
    }, (response) => {
      console.log(response)
    })
    this.$http.get('/issues').then((response) => {
      console.log(response.data)
      this.exhibits = response.data
    }, (response) => {
      console.log(response)
    })
  }
}
</script>

<style>
</style>
