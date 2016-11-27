<template lang="html">
  <div class="gift-category">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-quanbu'"></use>
            </svg>
          </div>
          <span class="title">全部</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-liyuxianhua'"></use>
            </svg>
          </div>
          <span class="title">礼遇鲜花</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-xiezibaobao'"></use>
            </svg>
          </div>
          <span class="title">鞋子包包</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-gongzibaozhen'"></use>
            </svg>
          </div>
          <span class="title">公仔抱枕</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-xiangshuixiangxun'"></use>
            </svg>
          </div>
          <span class="title">香水香熏</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-shishangpeishi'"></use>
            </svg>
          </div>
          <span class="title">时尚配饰</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-qiaokeli'"></use>
            </svg>
          </div>
          <span class="title">巧克力</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-yizhuoliangpin'"></use>
            </svg>
          </div>
          <span class="title">衣着良品</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-weijinshoutao'"></use>
            </svg>
          </div>
          <span class="title">围巾手套</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-shumajixie'"></use>
            </svg>
          </div>
          <span class="title">数码机械</span>
        </a>
      </mt-swipe-item>
      <mt-swipe-item>

        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-jiajuliangpin'"></use>
            </svg>
          </div>
          <span class="title">家具良品</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-meihujianshen'"></use>
            </svg>
          </div>
          <span class="title">美护健身</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-chanshiguanqu'"></use>
            </svg>
          </div>
          <span class="title">铲屎官区</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-xinyihezi'"></use>
            </svg>
          </div>
          <span class="title">心意盒子</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-shumajixie'"></use>
            </svg>
          </div>
          <span class="title">数码机械</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-bangongliangpin'"></use>
            </svg>
          </div>
          <span class="title">办公良品</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-dongmanjifu'"></use>
            </svg>
          </div>
          <span class="title">动漫基腐</span>
        </a>
        <a href="#">
          <div class="container">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-wenjuqiapian'"></use>
            </svg>
          </div>
          <span class="title">文具卡片</span>
        </a>

      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
  data: function () {
    return {
      categories: [
          [{
              name: 'icon-quanbu',
              title: '全部'
          }, {
              name: 'icon-shishangpeishi',
              title: '时尚配饰'
          },
          {
              name: 'icon-liyuxianhua',
              title: '礼遇鲜花'
          }, {
              name: 'icon-qiaokeli',
              title: '巧克力'
          },
          {
              name: 'icon-xiezibaobao',
              title: '鞋子包包'
          }, {
              name: 'icon-yizhuoliangpin',
              title: '衣着良品'
          },
          {
              name: 'icon-gongzibaozhen',
              title: '公仔抱枕'
          }, {
              name: 'icon-weijinshoutao',
              title: '围巾手套'
          },
          {
              name: 'icon-xiangshuixiangxun',
              title: '香水香熏'
          }, {
              name: 'icon-shumajixie',
              title: '数码机械'
          }],
          [{
              name: 'icon-jiajuliangpin',
              title: '家具良品'
          }, {
              name: 'icon-bangongliangpin',
              title: '办公良品'
          },
          {
              name: 'icon-meihujianshen',
              title: '美护健身'
          }, {
              name: 'icon-dongmanjifu',
              title: '动漫基腐'
          },
          {
              name: 'icon-chanshiguanqu',
              title: '铲屎官区'
          }, {
              name: 'icon-wenjuqiapian',
              title: '文具卡片'
          },
          {
              name: 'icon-xinyihezi',
              title: '心意盒子'
          }],

      ]
    }
  },
  computed: {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.gift-category {
  text-align: center;
  height: 400px;
  overflow: hidden;
  background-color: #fff;

}
.gift-category .mint-swipe {
  height: 100%;
}

.gift-category .mint-swipe-item {
  line-height: inherit;
}
.gift-category a {
  float: left;
  width: 20%;
  margin-top: 48px;
}
.gift-category .container {
  display: inline-block;
  width: 70px;/*px*/
  height: 70px;/*px*/
}
.gift-category .title {
  display: block;
  font-size: 24px;/*px*/
  color: #000;
}
.gift-category svg {
  width: 100%;
  height: 100%;
}
</style>
