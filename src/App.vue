<template>
    <div id="app" class="page-tabbar">
        <div class="page-wrap">

            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="home">
                    <mt-cell v-for="n in 100" :title="'餐厅 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="gift">
                  <keep-alive>
                    <component :is="selected" v-if="!showDetails">
                    </component>
                  </keep-alive>
                  <transition name="fade">
                    <keep-alive>
                      <router-view name="details"></router-view>
                    </keep-alive>
                  </transition>
                  <transition name="fade">
                    <keep-alive>
                      <router-view name="search"></router-view>
                    </keep-alive>
                  </transition>
                </mt-tab-container-item>
                <mt-tab-container-item id="add">
                    <mt-cell v-for="n in 70" :title="'发布 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="message">
                    <mt-cell v-for="n in 70" :title="'消息 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="me">
                  <mt-cell v-for="n in 120" :title="'我的 ' + n" />
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" v-if="!showDetails" fixed>
            <mt-tab-item id="home">
              <svg class="icon" slot="icon" aria-hidden="true">
                <use xlink:href="#icon-shouye"></use>
              </svg> 首页
            </mt-tab-item>
            <mt-tab-item id="gift">
              <svg class="icon" slot="icon" aria-hidden="true">
                <use xlink:href="#icon-liwu"></use>
              </svg> 礼物
            </mt-tab-item>
            <mt-tab-item id="add">
              <svg class="icon" slot="icon" aria-hidden="true">
                <use xlink:href="#icon-fabu"></use>
              </svg>
            </mt-tab-item>
            <mt-tab-item id="message">
              <svg class="icon" slot="icon" aria-hidden="true">
                <use xlink:href="#icon-xiaoxi"></use>
              </svg> 消息
            </mt-tab-item>
            <mt-tab-item id="me">
              <svg class="icon" slot="icon" aria-hidden="true">
                <use xlink:href="#icon-wode"></use>
              </svg>  我的
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<script>
    import Vue from 'vue'
    import Mint from 'mint-ui'
    import 'mint-ui/lib/style.css'
    import './assets/fonts/iconfont.js?strict=false'
    import './assets/fonts/iconfont.css'
    import './assets/fonts/webfont.css'
    import Gift from './components/Gift.vue'

    Vue.use(Mint)

    export default {
        name: 'romanski',
        components: { Gift },
        data() {
            return {
                selected: 'gift',
                showDetails: false
            }
        },
        watch: {
          '$route' (to, from) {
            this.showDetails = to.path === '/details' || to.path === '/search'  ? true : false

          }
        }
    };
</script>

<style>

    html, body {
      background-color: #fafafa;
      -webkit-overflow-scrolling: touch;
      user-select: none;
    }
    #app {
      font-family:"webfont" !important;
    }
    #app .mint-tab-container {
      margin-bottom: 110px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: all .2s ease
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }


    .page-tabbar {
        overflow: hidden;
        height: 100vh;
    }

    .page-wrap {
        overflow: auto;
        height: 100%;
    }
    /**
    * tabbar
    **/
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    #app .mint-tab-item-icon {
        width: 45px;
        height: 45px;
        margin-bottom: 9px;
    }
    #app .mint-tab-item-icon .iconfont {
      font-size: 45px;/*px*/
    }
    #app .mint-tab-item-label {
      font-size: 22px;/*px*/
      color: #6c6c6c;
      padding-bottom: 6px;
    }

    #app .mint-tabbar > .mint-tab-item:hover {
      text-decoration: none;
    }

    #app .mint-tab-item:nth-of-type(3)>.mint-tab-item-icon {
      width: 70px;
      height: 70px;
    }
    #app .mint-tabbar > .mint-tab-item.is-selected {
      background-color: #eaeaea;
      color: #ddb63f;
      text-decoration: none;
    }


</style>
