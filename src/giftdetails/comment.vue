<template lang="html">
  <div class="gift-comment">
    <section class="more">
      <span>&nbsp;</span>
      <router-link to="/comments">查看更多</router-link>
    </section>
    <section class="item" v-for = "item in commodityComments">
      <div class="left-wrap">
        <img :src="item.avatar" class="avatar" alt="" />
      </div>
      <div class="right-wrap">
        <section class="line" :id="item.userid">
          <a href="#" class="title">{{item.username}}</a>
          <span class="time">{{item.date}}</span>
        </section>
        <section class="line">
          <span class="label">{{item.comment}}</span>
        </section>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'giftComment',
  data () {
    return {
      baseUrl: 'http://www.roseski.com/bg/index.php?',
      commentUrl: '/api/commodityComments/',
      commodityId: 1,
      commodityComments: []
    }
  },
  computed: {
    url () {
      return window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('natapp.cc') > -1 ? '' : this.baseUrl
    }
  },
  mounted () {
    this.$http.get(this.url + this.commentUrl + this.commodityId).then((response) => {
        let data = JSON.parse(response.data)
        this.commodityComments = data

    }, (response) => {
        console.log('error')
        console.log(response)
    })
  }
}
</script>

<style lang="css">
.gift-comment {
  padding: 0 23px;
  background: #fff;
  margin-top: 10px;
}
.gift-comment .more {
  display: flex;
  justify-content: space-between;
  padding: 24px 0 12px;
  border-bottom: 1px solid #4b4a46;
}
.gift-comment .item {
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  border-bottom: 1px solid #4b4a46;
}
.gift-comment .item .left-wrap {
  width: 60px;
  height: 60px;
  margin-right: 14px;
}
.gift-comment .item .left-wrap img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.gift-comment .item .right-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

}

.gift-comment .item .right-wrap .line {
  display: flex;
  justify-content: space-between;
}
.gift-comment .item .right-wrap .line .title {
  font-size: 20px;/*px*/
  color: #156e9c;
}
.gift-comment .item .right-wrap .line .time,
.gift-comment .item .right-wrap .line .label {
  font-size: 16px;
}

</style>
