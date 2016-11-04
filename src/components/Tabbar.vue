<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="home">
      <span slot="icon" class="iconfont icon-shouye">
      </span>
       <span>首页</span>
    </mt-tab-item>
    <mt-tab-item id="gift-set">
      <span slot="icon" class="iconfont icon-liwu">
      </span>
      <span>礼物</span>
    </mt-tab-item>
    <mt-tab-item id="add">
      <span slot="icon" class="iconfont icon-fabu">
      </span>
    </mt-tab-item>
    <mt-tab-item id="message">
      <span slot="icon" class="iconfont icon-xiaoxi">
      </span>
      <span>消息</span>
    </mt-tab-item>
    <mt-tab-item id="me">
      <span slot="icon" class="iconfont icon-wode">
      </span>
      <span>我的</span>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  props:['selected'],
  data: function () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
