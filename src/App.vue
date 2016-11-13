<template>
    <div id="app" class="page-tabbar">
        <div class="page-wrap">
            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="home">
                    <mt-cell v-for="n in 100" :title="'餐厅 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="gift">
                    <mt-cell v-for="n in 50" :title="'订单 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="add">
                    <mt-cell v-for="n in 70" :title="'发现 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="message">
                    <mt-cell v-for="n in 70" :title="'发现 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="me">
                    <div class="page-part">
                        <mt-cell v-for="n in 120" :title="'我的 ' + n" />
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" fixed>
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

    Vue.use(Mint)
    export default {
        name: 'romanski',
        data() {
            return {
                selected: 'gift'
            };
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
      margin-bottom: 95px;
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
