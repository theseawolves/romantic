<template>
    <div class="container">
        <div class="page">
          <div class="page__bd">
            <div class="roseski-tab">
              <!-- panel -->
              <div class="roseski-tab__panel">
                <transition name="fade">
                  <keep-alive>
                    <router-view></router-view>
                  </keep-alive>
                </transition>
              </div>

              <q-tabbar v-model="selected">
                <q-tabbar-item v-for="item in tabbarItems"
                  :id="item.id">
                  <svg class="icon" aria-hidden="true" slot="icon">
                    <use v-bind="{ 'xlink:href': '#icon-'+item.name }"></use>
                  </svg>
                  {{item.label}}
                </q-tabbar-item>
              </q-tabbar>

              <!-- tabbar -->
              <!-- <div class="roseski-tabbar">
                <a v-for="item in tabbarItems"
                  :class="{ 'roseski-tabbar__item_on': selected == item.id }"
                  @click="handleClick(item.id)"
                  class="roseski-tabbar__item">
                  <span>
                    <svg class="icon roseski-tabbar__icon" aria-hidden="true">
                      <use v-bind="{ 'xlink:href': '#icon-'+item.name }"></use>
                    </svg>
                  </span>
                  <p class="roseski-tabbar__label">
                    {{item.label}}
                  </p>
                </a>
              </div> -->

            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Mint from 'mint-ui'
    import 'mint-ui/lib/style.css'
    import '../assets/fonts/iconfont.js?strict=false'
    import '../assets/fonts/iconfont.css'
    import '../assets/fonts/webfont.css'
    import '../assets/css/style.css'
    import '../assets/css/box.css'
    import qTabbar from '../components/qtabbar.vue'
    import qTabbarItem from '../components/qtabbaritem.vue'


    Vue.use(Mint)

    export default {
        name: 'romanski',
        components: {
          qTabbar,
          qTabbarItem
        },
        data() {
            return {
                selected: 'home',
                showDetails: false,
                tabbarItems: [
                  { id: 'home', name: 'shouye', label: '首页'},
                  { id: 'gift', name: 'liwu', label: '礼物'},
                  { id: 'add', name: 'fabu', label: ''},
                  { id: 'message', name: 'xiaoxi', label: '消息'},
                  { id: 'me', name: 'wode', label: '我的'}
                ]
            }
        },
        watch: {
          'selected' () {
            this.$router.push({path:this.selected})
          }
        },
        methods: {
          handleClick (name) {
            this.selected = name
            this.$router.push({path:name})
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
      padding-bottom: 86px;/*px*/
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      z-index: 1;

    }
    
    .q-tabbar .q-tabbar__item:nth-child(3) .q-tabbar__icon> svg {
      width: 70px; /*px*/
      height: 70px; /*px*/
      text-align: center;
    }

    .q-tabbar .q-tabbar__item:nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .q-tabbar .q-tabbar__item:nth-child(3) > .q-tabbar__icon {
      flex: 1;
    }


</style>
