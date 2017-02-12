<template lang="html">
  <div class="gift-tag">
    <swiper >
      <swiper-slide v-for="tag in giftTags" >
        <q-tab>
          <q-tab-item v-for="item in tag">
            <router-link  slot="title"
              :to="{ path:'/tag', query:{ name: item} }" exact>
              <span class="tab-title">{{item}}</span>
            </router-link>
          </q-tab-item>
        </q-tab>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
import qTab from '../components/qtab.vue'
import qTabItem from '../components/qtabitem.vue'


Vue.use(VueResource)
export default {
  components: {
    swiper,
    swiperSlide,
    qTab,
    qTabItem
  },
  data () {
    return {
      giftTags:[],
      //giftTags: [['#暗恋', '#表白', '#热恋', '#小矛盾', '#和好', '#求婚'], ['#结婚','#红颜知己', '#蓝颜知己', '#办公恋情', '#第三者']],
      baseUrl: 'http://www.roseski.com/bg/index.php?',
      tagUrl: '/api/topPageTags',
      // swiperOption: {
      //   pagination: '.swiper-pagination1',
      //   paginationClickable: true
      // }

    }
  },
  computed: {
    url () {
      return window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('natapp.cc') > -1 ? '' : this.baseUrl
    }
  },
  mounted () {
    Array.prototype.chunk = function(groupsize){
      var sets = [], chunks, i = 0;
      chunks = this.length / groupsize;

      while(i < chunks){
        sets[i] = this.splice(0,groupsize);
        i++;
      }

      return sets;
    }
    this.$http.get(this.url + this.tagUrl).then((response) => {
        let data = JSON.parse(response.data)
        let r = []
        data.data.forEach(item => {
          r.push(item.tag_name)
        })
        this.giftTags = r.chunk(5)
        //this.giftTags = r

    }, (response) => {
        console.log('error')
        console.log(response)
        let data = {
              operationStatus: true,
              infoCode: "INFO_00004",
              msg: "成功获得首页标签信息",
              data: [
                {
                  tag_id: "8",
                  priority: "6",
                  tag_name: "追求",
                  tag_url: "http://www.bing.com/"
                },
                {
                  tag_id: "5",
                  priority: "5",
                  tag_name: "和好",
                  tag_url: "http://www.jd.com/"
                },
                {
                  tag_id: "6",
                  priority: "4",
                  tag_name: "求婚",
                  tag_url: "http://www.taobao.com/"
                },
                {
                  tag_id: "3",
                  priority: "3",
                  tag_name: "热恋",
                  tag_url: "http://www.amazon.com/"
                },
                {
                  tag_id: "1",
                  priority: "2",
                  tag_name: "暗恋",
                  tag_url: "http://www.qq.com/"
                },
                {
                  tag_id: "2",
                  priority: "1",
                  tag_name: "表白",
                  tag_url: "http://www.baidu.com/"
                },
                {
                  tag_id: "2",
                  priority: "1",
                  tag_name: "表白1",
                  tag_url: "http://www.baidu.com/"
                },
                {
                  tag_id: "2",
                  priority: "1",
                  tag_name: "表白2",
                  tag_url: "http://www.baidu.com/"
                }
                ]
              }
              let r = []
              data.data.forEach(item => {
                r.push(item.tag_name)
              })
              this.giftTags = r.chunk(5)
    })
  }
}
</script>

<style lang="css" scoped>
.gift-tag {
  text-align: center;
  height: 66px;/*px*/
  overflow: hidden;
  background-color: #fff;
  margin-top: 10px;
}
.gift-tag .q-tab {
  height: 66px;
  line-height: 66px;
}

.gift-tag .q-tab-item a ,.gift-tag .q-tab-item a .tab-title  {
  font-size: 22px;/*px*/
  color: #ddb63f;
  text-align: center;
  display: block;
  height: 66px;/*px*/
  line-height: 66px; /*px*/
}

</style>
