<template lang="html">
  <div class="gift-category2">
    <swiper :options="swiperOption">
      <swiper-slide v-for="category in categories">
        <router-link v-for="item in category"
        :to="{ path: '/category' ,query:item}">
          <svg class="icon" aria-hidden="true">
            <use v-bind="{'xlink:href':'#icon-'+item.id}"></use>
          </svg>
          <span class="title" v-text="item.name"></span>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'

export default {
  name: 'category',
  data: function () {
    return {
      swiperOption: {
        autoplay: 0,
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      categories: [
        [{ id: 'liyuxianhua', name: '礼遇鲜花'},
        { id: 'xiezibaobao', name: '鞋子包包'},
        { id: 'gongzibaozhen', name: '公仔抱枕'},
        { id: 'xiangshuixiangxun', name: '香水香熏'},
        { id: 'shishangpeishi', name: '时尚配饰'},
        { id: 'qiaokeli', name: '巧克力'},
        { id: 'yizhuoliangpin', name: '衣着良品'},
        { id: 'weijinshoutao', name: '围巾手套'},
        { id: 'shumajixie', name: '数码机械'},
        { id: 'jiajuliangpin', name: '家具良品'}],
        [{ id: 'meihujianshen', name: '美护健身'},
        { id: 'chanshiguanqu', name: '铲屎官区'},
        { id: 'xinyihezi', name: '心意盒子'},
        { id: 'shumajixie', name: '数码机械'},
        { id: 'bangongliangpin', name: '办公良品'},
        { id: 'dongmanjifu', name: '动漫基腐'},
        { id: 'wenjuqiapian', name: '文具卡片'}]
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="css">

/*.gift-wrap {
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
  font-size: 24px;
  color: #000;
}*/
.gift-category2 {
  background-color: white;
}
.gift-category2 .swiper-slide {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.gift-category2 .swiper-slide > a {

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  padding-top: 48px;
}
.gift-category2 .swiper-slide > a > .title {
  padding-top: 18px;
}
.gift-category2 svg {
  width: 70px;
  height: 70px;
}
.gift-category2 .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
}
.gift-category2 .swiper-pagination-bullet-active {
  background: #ddb63f;
}

.gift-category2 .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -30px;
}
.gift-category2 .swiper-container {
  height: 100%;
  padding-bottom: 70px;
}

</style>
