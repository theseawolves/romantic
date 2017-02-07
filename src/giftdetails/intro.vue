<template lang="html">
  <div class="gift-intro">
    <template>

      <swiper :options="swiperOption">
        <swiper-slide v-for = "item in commodityDetail.img">
          <img :src="item" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="sold">
        <span class="sold-info">已售</span>
        <span class="sold-count">{{commodityDetail.sold}}</span>
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

      <div class="social">
        <div class="social-item social-ta">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-songgeiTA"></use>
          </svg>
          <span class="social-title">送给TA</span>
        </div>
        <div class="social-item line">

        </div>
        <div class="social-item social-xihuan">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
          </svg>
          <span class="social-title">收藏</span>
        </div>
        <div class="social-item line">

        </div>
        <div class="social-item social-jiarugouwuche">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiarugouwuche"></use>
          </svg>
          <span class="social-title">加入购物车</span>
        </div>
        <div class="social-item line">

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
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'

export default {
  name: 'giftintro',
  data () {
    return {
      baseUrl: 'http://www.roseski.com/bg/index.php?',
      introUrl: '/api/commodityDetail/',
      commodityId: 1,
      commodityDetail: {},
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
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
        this.commodityDetail = data.data

    }, (response) => {
        console.log('error')
        console.log(response)
        let data = {
                operationStatus: true,
                infoCode: "INFO_00002",
                msg: "成功获得商品的详情信息",
                data: {
                  id: "1",
                  title: "彩色绒球流苏头绳手链",
                  desc: "彩色绒球流苏头绳手链彩色绒球流苏头绳手链彩色绒球流苏头绳手链彩色绒球流苏头绳手链",
                  price: "28",
                  originprice: "28",
                  sold: "100",
                  stock: "0",
                  selfrun: "1",
                  exurl: "",
                  status: 1,
                  img: [
                      null,
                      null,
                      null
                    ]
                  }
                }
        this.commodityDetail = data.data
    })
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>

<style lang="css" scoped>
.gift-intro {
  background: #fff;
}
.gift-intro .swiper-container img {
  width: 100%;
  height: 750px;
  display: inline-block;
  background-color: #ccc;
}
.gift-intro .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
}
.swiper-pagination-bullet-active {
  background-color: #ddb63f;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #ddb63f;
}

.gift-intro .sold {
  float: right;
  color: #918d84;
  font-size: 15px;/*px*/
  margin-right: 26px;
  font-size: 20px;/*px*/

}
.gift-intro h1.title {
  margin: 35px auto 18px 22px;
  font-size: 28px;/*px*/
  color: #000;
}
.gift-intro p.desc {
  margin-left: 22px;
  font-size: 24px;/*px*/
  color: #ccc;
  margin-bottom: 22px;
}
.gift-intro .price {
  font-size: 18px;/*px*/
}
.gift-intro .discount-price {
  color: #f66375;
  font-size: 24px;/*px*/
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
  padding-bottom: 18px;
  color: #ccc;
  font-size: 20px;/*px*/
  border-bottom: 1px solid #ccc;/*no*/
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
  color: #ccc;
  justify-content: center;
  align-items: center;
  //background-color: blue;
}
.gift-intro .social-item {
  flex: 1;
}
.gift-intro .social-item.line {
  flex-grow: 0;
  height: 30px;/*px*/
  width: 2px;/*px*/
  flex-basis: auto;
  border-left: 1px solid #ccc;/*no*/
  text-align: center;

}

.gift-intro .icon {
  vertical-align: middle;
}
.gift-intro .social-shop {

  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
}
.gift-intro .social-shop .social-title  {
  padding:5px 20px;
  background-color: #FF4200;
  border-radius: 5px;
  color: #fff;

}
</style>
