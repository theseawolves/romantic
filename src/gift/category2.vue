<template lang="html">
  <div class="gift-category2">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="gift-wrap">

          <router-link :to="{ path:'/category', query:{ name: 'quanbu'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-quanbu'"></use>
              </svg>

            <span class="title">全部</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'liyuxianhua'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-liyuxianhua'"></use>
              </svg>

            <span class="title">礼遇鲜花</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'xiezibaobao'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-xiezibaobao'"></use>
              </svg>

            <span class="title">鞋子包包</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'gongzibaozhen'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-gongzibaozhen'"></use>
              </svg>

            <span class="title">公仔抱枕</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'xiangshuixiangxun'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-xiangshuixiangxun'"></use>
              </svg>

            <span class="title">香水香熏</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'shishangpeishi'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-shishangpeishi'"></use>
              </svg>

            <span class="title">时尚配饰</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'qiaokeli'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-qiaokeli'"></use>
              </svg>

            <span class="title">巧克力</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'yizhuoliangpin'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-yizhuoliangpin'"></use>
              </svg>

            <span class="title">衣着良品</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'weijinshoutao'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-weijinshoutao'"></use>
              </svg>

            <span class="title">围巾手套</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'shumajixie'} }" exact>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-shumajixie'"></use>
              </svg>

            <span class="title">数码机械</span>
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="gift-wrap">

          <router-link :to="{ path:'/category', query:{ name: 'jiajuliangpin'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-jiajuliangpin'"></use>
              </svg>
            </div>
            <span class="title">家具良品</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'meihujianshen'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-meihujianshen'"></use>
              </svg>
            </div>
            <span class="title">美护健身</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'chanshiguanqu'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-chanshiguanqu'"></use>
              </svg>
            </div>
            <span class="title">铲屎官区</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'xinyihezi'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-xinyihezi'"></use>
              </svg>
            </div>
            <span class="title">心意盒子</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'shumajixie'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-shumajixie'"></use>
              </svg>
            </div>
            <span class="title">数码机械</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'bangongliangpin'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-bangongliangpin'"></use>
              </svg>
            </div>
            <span class="title">办公良品</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'dongmanjifu'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-dongmanjifu'"></use>
              </svg>
            </div>
            <span class="title">动漫基腐</span>
          </router-link>
          <router-link :to="{ path:'/category', query:{ name: 'wenjuqiapian'} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-wenjuqiapian'"></use>
              </svg>
            </div>
            <span class="title">文具卡片</span>
          </router-link>
        </div>


      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'

export default {
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  computed: {},
  attached: function () {},
  methods: {},
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="css">

.gift-wrap {
  display: flex;
  //justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 48px;
  padding-bottom: 10px;

}

.gift-wrap > a {
  flex-basis: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
}


.gift-category2 .swiper-pagination-bullet-active {
  background: #ddb63f;
}


.gift-category2 .title {
  font-size: 24px;/*px*/
  color: #000;
}
.gift-category2 svg {
  width: 70px;
  height: 70px;
}

</style>
