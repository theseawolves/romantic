<template lang="html">
  <div class="gift-intro">
    <template>
      <mt-swipe :auto="0">
        <mt-swipe-item v-for = "item in commodityDetail.img">
          <img :src="item" alt="" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="sold">
        <span class="sold-info">已售</span>
        <span class="sold-count">{{commodityDetail.sales}}</span>
      </div>
      <h1 class="title">{{commodityDetail.title}}</h1>
      <p class="desc">
        {{commodityDetail.desc}}
      </p>
      <div class="price">
        <span class="discount-price">￥{{commodityDetail.price}}</span>
        <span class="before-discount-price">￥{{commodityDetail.originprice}}</span>
      </div>
      <div class="express">
        <span>快递：</span>
        <span class="express-freight">免运费</span>
      </div>
      <hr>
      <div class="social">
        <div class="social-item social-ta">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-songgeiTA"></use>
          </svg>
          <span class="social-title">送给TA</span>
        </div>
        <div class="social-item social-xihuan">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
          </svg>
          <span class="social-title">收藏</span>
        </div>
        <div class="social-item social-jiarugouwuche">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiarugouwuche"></use>
          </svg>
          <span class="social-title">加入购物车</span>
        </div>
        <div class="social-item social-shop">
          <span class="social-title">去天猫购买</span>
        </div>
      </div>

    </template>

  </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  name: 'giftintro',
  data () {
    return {
      baseUrl: 'http://www.roseski.com/bg/index.php?',
      introUrl: '/api/commodityDetail/',
      commodityId: 1,
      commodityDetail: {}
    }
  },
  computed: {
    url () {
      return window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('natapp.cc') > -1 ? '' : this.baseUrl
    }
  },
  mounted () {
    this.$http.get(this.url + this.introUrl + this.commodityId).then((response) => {
        let data = JSON.parse(response.data)
        this.commodityDetail = data

    }, (response) => {
        console.log('error')
        console.log(response)
    })
  }

}
</script>

<style lang="css">
.gift-intro {
  background: #fff;
}
.gift-intro .mint-swipe {
  height: 750px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.gift-intro .mint-swipe-item {
  line-height: 750px;
}
.gift-intro .mint-swipe-indicator {
  width: 20px;
  height: 20px;
}
.gift-intro .mint-swipe-indicator.is-active {
  background: #ddb63f;
  opacity: 1;
}
.gift-intro .sold {
  float: right;
  color: #918d84;
  font-size: 15px;/*px*/
  margin-right: 26px;
}
.gift-intro h1.title {
  margin: 35px auto 18px 22px;
  font-size: 28px;/*px*/
  color: #000;
}
.gift-intro p.desc {
  margin-left: 22px;
  font-size: 20px;
  color: #4b4a46;
  margin-bottom: 22px;
}
.gift-intro .price {
  font-size: 18px;/*px*/
  margin-bottom: 22px;
}
.gift-intro .discount-price {
  color: #f66375;
  padding-left: 22px;
  padding-right: 10px;
}
.gift-intro .before-discount-price {
  padding-left: 10px;
  color: #918d84;
  text-decoration: line-through;
}
.gift-intro .express {
  margin-left: 22px;
  margin-bottom: 8px;
  color: #4b4a46;
  font-size: 20px;/*px*/
}
.gift-intro svg {
  width: 35px;
  height: 35px;
}
.gift-intro .social {
  display: flex;
  text-align: center;
  height: 60px;
  font-size: 20px;/*px*/
  color: #4b4a46;
  justify-content: center;
  align-items: center;
}
.gift-intro .social-item {
  flex: 1;
}
.gift-intro .icon {
  vertical-align: middle;
}
.gift-intro .social-title {
  padding-top: 5px;
  padding-right: 42px;
  padding-bottom: 5px;
  border-right: 1px solid #4b4a46;
  text-align: center;
}
.gift-intro .social-shop .social-title  {
  border-right: none;
  padding-right: 0;
  background-color: #FF4200;
  border-radius: 5px;
  color: #fff;
}
</style>
