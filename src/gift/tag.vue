<template lang="html">
  <div class="gift-tag">
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item v-for="tag in giftTags">
        <router-link v-for="item in tag"
          :to="{ path:'/tag', query:{ name: item} }" exact>
          {{item}}
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
export default {
  data () {
    return {
      giftTags: [['#暗恋', '#表白', '#热恋', '#小矛盾', '#和好', '#求婚'], ['#结婚','#红颜知己', '#蓝颜知己', '#办公室恋情', '#第三者']],
      baseUrl: 'http://romanski.ic60x.com/bg/index.php?',
      tagUrl: '/api/topPageTags'

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
  height: 66px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 10px;
}
.gift-tag .mint-swipe {
  height: 100%;
}

.gift-tag .mint-swipe-item {
  line-height: inherit;
}
.gift-tag a {
  float: left;
  width: 16.666666666667%;
  text-decoration: none;
  font-size: 22px;/*px*/
  color: #ddb63f;
  text-align: center;
  display: block;
  height: 100%;
  line-height: 66px;
}
</style>
