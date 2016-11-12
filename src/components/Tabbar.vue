<template>
  <mt-tabbar v-model="selected2" fixed>
    <mt-tab-item v-for="item in items" :id="item.id"
    @click.native="handleClick">
      <span slot="icon" class="iconfont" :class="item.name">
      </span>
      <span v-text="item.title"></span>
    </mint-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  props:['selected'],
  data: function () {
    return {
      selected2: '',
      items:[
        { id: 'home', name: 'icon-shouye', title: '首页'},
        { id: 'gift', name: 'icon-liwu', title: '礼物'},
        { id: 'add', name: 'icon-fabu', title: ''},
        { id: 'message', name: 'icon-xiaoxi', title: '消息'},
        { id: 'me', name: 'icon-wode', title: '我的'}
      ]
    }
  },
  mounted () {
    this.selected2 = this.selected
  },
  methods: {
    handleClick () {
      this.$router.push({name:this.selected2})
    }
  }
}
</script>

<style lang="css">
#app .mint-tabbar {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>
