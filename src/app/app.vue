<template>
    <div class="container">
        <div class="page">
          <div class="page__bd">
            <div class="roseski-tab">
              <div class="roseski-tab__panel">

              </div>
              <div class="roseski-tabbar">
                <a href="#" class="roseski-tabbar__item roseski-tabbar__item_on">
                  <span>
                    <svg class="icon roseski-tabbar__icon" aria-hidden="true">
                      <use xlink:href="#icon-shouye"></use>
                    </svg>
                  </span>
                  <p class="roseski-tabbar__label">
                    首页
                  </p>
                </a>
                <a href="#" class="roseski-tabbar__item">
                  <span>
                    <svg class="icon roseski-tabbar__icon" aria-hidden="true">
                      <use xlink:href="#icon-liwu"></use>
                    </svg>
                  </span>
                  <p class="roseski-tabbar__label">
                    礼物
                  </p>
                </a>
                <a href="#" class="roseski-tabbar__item">
                  <span>
                    <svg class="icon roseski-tabbar__icon" aria-hidden="true">
                      <use xlink:href="#icon-fabu"></use>
                    </svg>
                  </span>
                  <p class="roseski-tabbar__label">

                  </p>
                </a>
                <a href="#" class="roseski-tabbar__item">
                  <span>
                    <svg class="icon roseski-tabbar__icon" aria-hidden="true">
                      <use xlink:href="#icon-xiaoxi"></use>
                    </svg>
                  </span>
                  <p class="roseski-tabbar__label">
                    消息
                  </p>
                </a>
                <a href="#" class="roseski-tabbar__item">
                  <span>
                    <svg class="icon roseski-tabbar__icon" aria-hidden="true">
                      <use xlink:href="#icon-wode"></use>
                    </svg>
                  </span>
                  <p class="roseski-tabbar__label">
                    我的
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- <mt-tab-container class="page-tabbar-container" v-model="selected">
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
  </mt-tabbar> -->
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

<style lang="css" scoped>

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

    .container, .page {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
    .container {
      overflow: hidden;
    }
    .page {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      z-index: 1;
      background-color: #f8f8f8;
    }

    .page__bd {
      height: 100%;
    }
    .roseski-tab {
      position: relative;
      height: 100%;
    }
    .roseski-tab__panel {
      height: 100%;
      box-sizing: border-box;
      padding-bottom: 87px;/*px*/
      overflow: auto;
      -webkit-overflow-scrolling: touch;

    }
    .roseski-tabbar {
      display: flex;
      position: absolute;
      z-index: 500;
      bottom: 0;
      width: 100%;
      background-color: #f7f7f7;

    }
    .roseski-tabbar__item {
      display: block;
      flex: 1;
      padding: 6px 0 0;/*px*/
      font-size: 0;
      color: #6c6c6c;
      fill: #acacac;
      text-align: center;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .roseski-tabbar__item > span {
      display: inline-block;
      position: relative;
    }
    .roseski-tabbar__icon {
      display: inline-block;
      width: 45px;/*px*/
      height: 45px;/*px*/
    }

    .roseski-tabbar:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;/*no*/
      border-top: 1px solid #C0BFC4;/*no*/
      color: #C0BFC4;
      transform: scaleY(0.5);
    }
    .roseski-tabbar__label {
      text-align: center;
      color: #6c6c6c;
      font-size: 20px;/*px*/
      line-height: 1.8;
    }

    .roseski-tabbar__item_on, .roseski-tabbar__item_on .roseski-tabbar__label {
      fill: #ddb63f;
      color: #ddb63f;
    }

    .roseski-tabbar .roseski-tabbar__item:nth-child(3) .roseski-tabbar__icon {
      width: 70px; /*px*/
      height: 70px; /*px*/
      text-align: center;
    }

    .roseski-tabbar .roseski-tabbar__item:nth-child(3) {
      padding-top: 0;
      display: flex;
      align-items: center;
    }

    .roseski-tabbar .roseski-tabbar__item:nth-child(3) > span {
      flex: 1;
    }


</style>
