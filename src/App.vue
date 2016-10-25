<template>
  <div id="app">
    <div class="page-tabbar">
      <div class="page-wrap">
        <div class="page-title">Tabbar</div>
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>

        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="外卖">
            <swiper :options="swiperOption">
               <swiper-slide >
                 <img src="./assets/100x100.png" style="border:1px solid red"/>

               </swiper-slide>
               <swiper-slide>Slide 2</swiper-slide>
               <swiper-slide>Slide 3</swiper-slide>
               <swiper-slide>Slide 4</swiper-slide>
               <swiper-slide>Slide 5</swiper-slide>
               <swiper-slide>Slide 6</swiper-slide>
               <swiper-slide>Slide 7</swiper-slide>
               <swiper-slide>Slide 8</swiper-slide>
               <swiper-slide>Slide 9</swiper-slide>
               <swiper-slide>Slide 10</swiper-slide>
               <div class="swiper-pagination" slot="pagination"></div>
             </swiper>
             <mt-cell v-for="n in 10" :title="'餐厅 ' + n" />

          </mt-tab-container-item>
          <mt-tab-container-item id="订单">
            <mt-cell v-for="n in 5" :title="'订单 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="发现">
            <mt-cell v-for="n in 7" :title="'发现 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="我的">
            <div class="page-part">
              <mt-cell v-for="n in 12" :title="'我的 ' + n" />
            </div>
              <mt-button type="danger" size="large">退出</mt-button>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="./assets/100x100.png">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="./assets/100x100.png">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="./assets/100x100.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="./assets/100x100.png">
          我的
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
      selected: '外卖',
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 5
      }
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
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
    height: 300px
}

.swiper-slide {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}
</style>
