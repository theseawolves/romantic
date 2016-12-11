<template>
    <div id="app" class="page-tabbar">
        <div class="page-wrap web-font">

            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="home">
                    <mt-cell v-for="n in 100" :title="'首页 ' + n" />
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
                      <router-view name="category"></router-view>
                    </keep-alive>
                  </transition>
                  <transition name="fade">
                    <keep-alive>
                      <router-view name="search"></router-view>
                    </keep-alive>
                  </transition>
                  <transition name="fade">
                    <keep-alive>
                      <router-view name="comments"></router-view>
                    </keep-alive>
                  </transition>
                  <transition name="fade">
                    <keep-alive>
                      <router-view name="tag"></router-view>
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

        <mt-tabbar v-model="selected" v-if="!showDetails" class="web-font" fixed>
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
    import '../assets/fonts/iconfont.js?strict=false'
    import '../assets/fonts/iconfont.css'
    import '../assets/fonts/webfont.css'
    import Gift from '../gift/gift.vue'
    import '../assets/css/style.css'
    import '../assets/css/box.css'

    Vue.use(Mint)

    export default {
        name: 'romanski',
        components: {
            Gift
        },
        data() {
            return {
                selected: 'gift',
                showDetails: false
            }
        },
        watch: {
            '$route' (to, from) {
                this.showDetails =
                to.path === '/details' ||
                to.path === '/search' ||
                to.path === '/category' ||
                to.path === '/comments' ||
                to.path === '/tag'

                ? true : false

            }
        }
    };
</script>

<style lang="css">

    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s ease
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    /**
    * container
    **/

    .page-tabbar {
        overflow: hidden;
        height: 100vh;
    }

    .page-wrap {
        overflow: auto;
        height: 100%;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 96px;/*px*/

    }

    .mint-tabbar {
      border-top: 1px solid #d9d9d9; /*no*/
      background-color: #fff;

    }

    .mint-tabbar .mint-tab-item {
      flex: 1;
      text-align: center;
      display: flex;
      padding: 6px 0; /*px*/
      flex-wrap: wrap;
      height: 96px; /*px*/
      text-decoration: none;
      fill: #acacac;
      flex-direction: column;
      justify-content: center;
    }


    .mint-tabbar .mint-tab-item:nth-child(3) {
      padding: 13px 0; /*px*/
      display: block;
      text-align: center;
    }
    .mint-tabbar .mint-tab-item:nth-child(3) .mint-tab-item-icon {
      width: 70px; /*px*/
      height: 70px; /*px*/
      text-align: center;
      fill: #acacac;
    }

    .mint-tab-item > .mint-tab-item-icon {
      text-align: center;
      width: 45px; /*px*/
      height: 45px; /*px*/
    }
    .mint-tab-item > .mint-tab-item-label {
      font-size: 22px; /*px*/
      color: #6c6c6c;
    }

    .mint-tabbar .mint-tab-item.is-selected {
        background-color: #fff;
        fill: #ddb63f;
        text-decoration: none;
    }
    .mint-tabbar .mint-tab-item.is-selected .mint-tab-item-label {
      color: #ddb63f;
    }


</style>
