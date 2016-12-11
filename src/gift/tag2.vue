<template lang="html">
  <div class="gift-tag">
    <swiper>
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
        data.forEach(item => {
          r.push(item.tag)
        })
        this.giftTags = r.chunk(6)
        //this.giftTags = r

    }, (response) => {
        console.log('error')
        console.log(response)
    })
  }
}
</script>

<style lang="css">
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
