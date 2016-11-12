<template>
  <div>
    <div class="">
      <mt-header :title="'礼物'">
        <mt-button slot="right" icon="search" @click.native="handleClick">
        </mt-button>
      </mt-header>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="gift">
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
        </mt-tab-container-item>
      </mt-tab-container>

    </div>
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
        name: 'gift',
        components: {
            Tabbar
        },
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
.page-container {
  height: 100%;
  overflow: auto;
}

</style>
