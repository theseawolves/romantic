<template lang="html">
  <div class="gift-related">
    <div class="related-wrap">
      <div class="item" v-for="item in commodityRelated">
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body"
            :style="{'background-image':'url('+ item.image+')'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="item.name"></div>
            <div class="related-link-price" v-text="'￥'+item.price"></div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
  name: 'giftrelated',
  data () {
    return {
      baseUrl: 'http://www.roseski.com/bg/index.php?',
      introUrl: '/api/recommendCommodities/',
      commodityId: 1,
      page: 1,
      commodityRelated: []
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
        this.commodityRelated = data.data

    }, (response) => {
        console.log('error')
        console.log(response)
        let data = {
              operationStatus: true,
              infoCode: "INFO_00005",
              msg: "成功获得推荐商品信息",
              data: [
                      {
                        id: "5",
                        name: "金银牡丹马克杯1",
                        price: "32",
                        sold: "0",
                        image: null
                      },
                      {
                        id: "5",
                        name: "金银牡丹马克杯2",
                        price: "28",
                        sold: "0",
                        image: null
                      },
                      {
                        id: "5",
                        name: "金银牡丹马克杯3",
                        price: "112",
                        sold: "0",
                        image: null
                      },
                      {
                        id: "5",
                        name: "金银牡丹马克杯",
                        price: "38",
                        sold: "0",
                        image: null
                      },
                      {
                        id: "5",
                        name: "金银牡丹马克杯3",
                        price: "112",
                        sold: "0",
                        image: null
                      },
                      {
                        id: "5",
                        name: "金银牡丹马克杯",
                        price: "38",
                        sold: "0",
                        image: null
                      },
                  ]
              }
        this.commodityRelated = data.data
    })
  }

}
</script>

<style lang="css" scoped>
.gift-related {
  margin-top: 10px;
  background: #fff;
}
.gift-related .vux-divider {
  padding-top: 34px;
  padding-bottom: 34px;
  font-size: 22px;/*px*/
}

.gift-related .related-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
.gift-related .item {
  border: 1px solid #4b4a46;
  margin-bottom: 18px;
}
.gift-related .item .related-link {
  width: 340px;
}

.gift-related .related-link-body {
  background-color: #eee;
}


.gift-related .related-link-body {
  height: 340px;
  width: 340px;
}

.gift-related .related-link-info {
  width: 340px;
  display: flex;
  justify-content: space-between;
  padding: 17px 0 17px;

}

.gift-related .related-link-title {
  font-size: 20px;/*px*/

}
.gift-related .related-link-price {
  font-size: 20px;/*px*/
  color: #f66375;
}

.gift-related {
  font-size: 20px;/*px*/
}
.gift-related .related-link-title {
  padding-left: 11px;
}

.gift-related .related-link-price {
  padding-right: 18px;
}
</style>
