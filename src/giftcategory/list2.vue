<template lang="html">
<div class="list-wrap">
  <div class="list-wrap__item" v-for = "item in commodityList">
    <img :src="item.image" alt="" />
    <div class="list-wrap__desc">
      <p class="name" v-text="item.name"></p>
      <p class="complex">
        <span class="campaignName" v-text="item.campaignName"></span>
        <span class="tagName" v-text="item.tagName"></span>
      </p>
      <p class="price">
        <span class="sold" v-text="'RMB '+item.price"></span>
        <span class="discount">discount</span>
      </p>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
  name: 'giftlist',
  data () {
    return {
      baseUrl: 'http://www.roseski.com/bg/index.php?',
      introUrl: '/api/categoryCommodities/',
      commodityId: 1,
      page: 1,
      commodityList: []
    }
  },
  computed: {
    url () {
      return window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('natapp.cc') > -1 ? '' : this.baseUrl
    }
  },
  mounted () {
    this.$http.get(this.url + this.introUrl + this.commodityId+'/'+ this.page).then((response) => {
        let data = JSON.parse(response.data)
        this.commodityList = data.data

    }, (response) => {
        console.log('error')
        console.log(response)
        let data = {
              operationStatus: true,
              infoCode: "INFO_00006",
              msg: "成功获得分类下的商品列表",
              data: [
                      {
                        id: "6",
                        name: "春暖花开生日蛋糕",
                        price: "218",
                        image: null,
                        campaignId: "2",
                        campaignName: "第二期 浪漫礼物送给她，天天都过情人节",
                        tagId: "2",
                        tagName: "表白"
                      },
                      {
                        id: "4",
                        name: "井口满天星花束",
                        price: "198",
                        image: null,
                        campaignId: "2",
                        campaignName: "第二期 浪漫礼物送给她，天天都过情人节",
                        tagId: "2",
                        tagName: "表白"
                      },
                      {
                        id: "19",
                        name: "彩色绒球流苏头绳手链2",
                        price: "28",
                        image: null,
                        campaignId: "1",
                        campaignName: "第一期 狮子月来袭，送Ta一份霸气礼物！",
                        tagId: "8",
                        tagName: "追求"
                      },
                      {
                        id: "5",
                        name: "金银牡丹马克杯",
                        price: "328",
                        image: null,
                        campaignId: "1",
                        campaignName: "第一期 狮子月来袭，送Ta一份霸气礼物！",
                        tagId: "8",
                        tagName: "追求"
                      },
                      {
                        id: "1",
                        name: "彩色绒球流苏头绳手链",
                        price: "28",
                        image: null,
                        campaignId: "1",
                        campaignName: "第一期 狮子月来袭，送Ta一份霸气礼物！",
                        tagId: "8",
                        tagName: "追求"
                      },
                      {
                        id: "2",
                        name: "壁花小姐佳佳",
                        price: "65",
                        image: null,
                        campaignId: "1",
                        campaignName: "第一期 狮子月来袭，送Ta一份霸气礼物！",
                        tagId: "8",
                        tagName: "追求"
                      },
                      {
                        id: "3",
                        name: "唯美清新手工发箍",
                        price: "33",
                        image: null,
                        campaignId: "2",
                        campaignName: "第二期 浪漫礼物送给她，天天都过情人节",
                        tagId: "2",
                        tagName: "表白"
                      }
                      ]
              }
        this.commodityList = data.data
    })
  }

}
</script>

<style lang="css" >
.list-wrap {

}
.list-wrap__item {
  display: flex;
  margin-bottom: 3px;
}
.list-wrap__item > * {
  padding-left: 32px;
}
.list-wrap__item > img {
  background-color: #ccc;
  width: 240px;
  height: 238px;
  flex-grow: 0;
  flex-basis: auto;
}
.list-wrap__item > .list-wrap__desc {
  flex-grow: 1;
}
.list-wrap__item > .list-wrap__desc > .name {
  padding-top: 33px;
  font-size: 20px;/*px*/
}
.list-wrap__item > .list-wrap__desc > .complex {
  font-size: 16px;/*px*/
  color: #918d84;
  padding-top: 26px;
}
.list-wrap__item > .list-wrap__desc > .complex > .tagName {
  padding-left: 10px;
}
.list-wrap__item > .list-wrap__desc > .price {
  color: #918d84;
  padding-top: 24px;

}
.list-wrap__item > .list-wrap__desc > .price > .sold{
  font-size: 20px;/*px*/
  color: red;
}
.list-wrap__item > .list-wrap__desc > .price > .discount{
  font-size: 16px;/*px*/
  color: #918d84;
  text-decoration: line-through;
}
</style>
