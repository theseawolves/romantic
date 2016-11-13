<template>
  <div>
    <mt-header :title="'礼物'">
      <mt-button slot="right" icon="search" @click.native="handleClick">
      </mt-button>
    </mt-header>
    <div id="gift-category">
      <swiper :options="giftCategoryOption">
        <swiper-slide v-for="item in categories">
          <router-link v-for="category in item" :to="{ path:'/details', query:{ tag: category.name} }" exact>
            <div class="container">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#'+category.name"></use>
              </svg>
            </div>
            <span class="title" v-text="category.title"></span>
          </router-link>

        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>

    <div class="separate-line"></div>

    <div id="gift-scenario-category">
      <swiper :options="giftScenarioCategoryOption">
        <swiper-slide v-for="item in giftScenarioCategory">
          <router-link :to="{ path:'/details', query:{ tag: item} }" exact v-text="item">
          </router-link>
        </swiper-slide>
      </swiper>
    </div>

    <div class="separate-line"></div>

    <div id="gift-exhibit">
      <template v-for="item in exhibits">
        <div class="exhibit-larger">
          <h1 class="issue-headline" v-text="item.headline"></h1>
          <div class="issue-subtitle">
            <p class="vux-divider">
              <span class="issue-subtitle-text" v-text="item.subtitleText"></span>
              <span class="issue-subtitle-date" v-text="item.subtitleDate"></span>
            </p>
          </div>
          <div class="issue-link">
            <router-link :to="{ path:'/details', query:{ issueId: item.issueId, type: 'larger', id: item.id} }" exact>
              <div class="issue-link-body" :style="{'background-image':'url('+item.link+')'}">
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
            <swiper-slide v-for="tiny in item.tinyPictures">
              <div class="issue-link">
                <router-link :to="{ path:'/details', query:{ issueId: item.issueId, type: 'tiny', id: item.id} }" exact>
                  <div class="issue-link-body" :style="{'background-image':'url('+tiny.link+')'}">
                  </div>
                </router-link>
                <div>
                  <div class="issue-link-title" v-text="tiny.title"></div>
                  <div class="issue-link-price" v-text="'￥'+tiny.price"></div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </template>
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
    // import Tabbar from './Tabbar.vue'


    Vue.use(Mint)
    Vue.use(VueResource)
    Vue.use(AwesomeSwiper)
    export default {
        name: 'gift',
        data() {
            return {
                selected: 'gift',
                baseUrl: 'http://romanski.ic60x.com/bg',
                categories: [
                    [{
                        name: 'icon-quanbu',
                        title: '全部'
                    }, {
                        name: 'icon-shishangpeishi',
                        title: '时尚配饰'
                    }],
                    [{
                        name: 'icon-liyuxianhua',
                        title: '礼遇鲜花'
                    }, {
                        name: 'icon-qiaokeli',
                        title: '巧克力'
                    }],
                    [{
                        name: 'icon-xiezibaobao',
                        title: '鞋子包包'
                    }, {
                        name: 'icon-yizhuoliangpin',
                        title: '衣着良品'
                    }],
                    [{
                        name: 'icon-gongzibaozhen',
                        title: '公仔抱枕'
                    }, {
                        name: 'icon-weijinshoutao',
                        title: '围巾手套'
                    }],
                    [{
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
                    }],
                    [{
                        name: 'icon-meihujianshen',
                        title: '美护健身'
                    }, {
                        name: 'icon-dongmanjifu',
                        title: '动漫基腐'
                    }],
                    [{
                        name: 'icon-chanshiguanqu',
                        title: '铲屎官区'
                    }, {
                        name: 'icon-wenjuqiapian',
                        title: '文具卡片'
                    }],
                    [{
                        name: 'icon-xinyihezi',
                        title: '心意盒子'
                    }],

                ],
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
                giftExhibitOption: {
                    slidesPerView: 3,
                    //spaceBetween: 18
                },
            }
        },
        computed: {
            url() {
                return window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('natapp.cc') > -1 ? '' : this.baseUrl
            }
        },
        mounted() {
            this.$http.post(this.url + '/issues').then((response) => {
                console.log(response.data)
                this.exhibits = response.data
            }, (response) => {
                console.log(response)
            })
        },
        methods: {
            handleClick() {
                this.$router.push({
                    name: 'search'
                })
            }
        }
    }
</script>

<style>
.swiper-container {
    width: 100%;
}
#app .mint-header {
  background-color: #ddb63f;
  height: 80px;
}

#app .mint-header-title {
  font-size: 36px;/*px*/
  font-weight: normal;
}

#app .mint-header .mint-button {
  margin-right: 40px;
}

#app .mint-header .mintui {
  font-size: 40px;/*px*/
}

/**
礼物分类
**/

#gift-category .swiper-container {
  height: 452px;
}
#gift-category .swiper-slide {
    text-align: center;
    height:362px;
}

#gift-category .swiper-slide > a {
  display: block;
  text-decoration: none;
  font-size: 24px;/*px*/
  color: #000;
}

#gift-category .swiper-slide>a:first-child {
  margin-top: 48px;
}

#gift-category .swiper-slide>a:nth-child(2) {
  margin-top: 66px;
}

#gift-category .swiper-slide > a > .container {
  display: inline-block;
  width: 70px;
  height: 70px;
  margin-bottom: 18px;
}
#gift-category .swiper-slide  svg {
  width: 100%;
  height: 100%;
}

#gift-category .swiper-slide  .title {
  display: block;
  font-size: 24px;/*px*/
  color: #000;
}

#gift-category .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
}
#gift-category .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 32px;
}

#gift-category .swiper-pagination-bullet-active {
  background: #ddb63f;
}
.separate-line {
  width: 100%;
  height: 10px;
  background-color: #F5F5F5;
}

#gift-scenario-category .swiper-slide > a {
  padding-top: 0;
  padding-bottom:  0;
}

#gift-scenario-category .swiper-slide > a {
  display: block;
  text-decoration: none;
  font-size: 22px;/*px*/
  color: #ddb63f;
  line-height: 66px;
}
#gift-scenario-category .swiper-slide {
    text-align: center;
    height: 66px;
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
  color: #acacac;
  margin-bottom: 16px;
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

.issue-headline {
  margin-top: 34px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 28px;/*px*/
  color: #000;
  font-weight: normal;
}
.issue-subtitle {
  font-size: 18px;/*px*/
}
.issue-subtitle-text {
  color: #ddb63f;
  margin-right: 18px;
}
.issue-subtitle-date {
  color: #acacac;
}

.issue-link-body {
  background-repeat: no-repeat;
  //background-color: #000;
  background-position: 50%;
  background-size: cover;
}

.exhibit-larger .issue-link-body {
  height: 480px;
  margin: 0 16px 28px;
  border: 1px solid #f5f5f5;/*px*/
}
.exhibit-tiny .issue-link-body {
  height: 202px;
  margin: 28px 16px 28px;
  border: 1px solid #f5f5f5;/*px*/
}

.issue-link-title {
  float: left;
  font-size: 20px;/*px*/
}
.issue-link-price {
  float: right;
  font-size: 20px;/*px*/
  color: #f66375;
}



.exhibit-tiny {
  font-size: 20px;/*px*/
}
.issue-link-title {
  margin-left: 22px;
}

.issue-link-price {
  margin-right: 22px;
}
/*#gift-exhibit:last-child {
  margin-bottom: 110px;
}*/
</style>
