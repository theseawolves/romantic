<template lang="html">
<div class="gift-issues">
  <div class="gift-issue" v-for="item in issues">
    <div class="issue-larger">
      <h1 class="issue-headline" v-text="item.title"></h1>
      <div class="issue-subtitle">
        <p class="vux-divider">
          <span class="issue-subtitle-text" v-text="item.tag"></span>
          <span class="issue-subtitle-date" v-text="item.date"></span>
        </p>
      </div>
      <div class="issue-link">
        <router-link :to="{ path:'/details', query:{ issueId: item.campaignId, type: 'larger', id: item.commodityId} }" exact>
          <div class="issue-link-body" :style="{'background-image':'url('+item.commodityImg+')'}">
          </div>
        </router-link>
        <div class="issue-desc">
          <div class="issue-link-title" v-text="item.commodityTitle"></div>
          <div class="issue-link-price" v-text="'￥'+item.commodityPrice"></div>

        </div>
      </div>
    </div>
    <div class="issue-tiny">
      <mt-swipe :auto="0" :show-indicators="false">
        <mt-swipe-item v-for="tiny in item.tinyList">
          <div class="issue-link" v-for="t in tiny">
            <router-link :to="{ path:'/details', query:{ issueId: item.campaignId, type: 'tiny', id: t.commodityId } }" exact>
              <div class="issue-link-body" :style="{'background-image':'url('+t.commodityImg+')'}">
              </div>
            </router-link>
            <div class="issue-desc">
              <div class="issue-link-title" v-text="t.commodityTitle"></div>
              <div class="issue-link-price" v-text="'￥'+t.commodityPrice"></div>
            </div>
          </div>

        </mt-swipe-item>
      </mt-swipe>

      <!-- <swiper :options="giftExhibitOption">
        <swiper-slide v-for="tiny in item.tinyPictures">
        </swiper-slide>
      </swiper> -->
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data () {
    return {
      issues: [],
      baseUrl: 'http://www.roseski.com/bg/index.php?',
      issueUrl: '/api/topPageCampaignList/',
      page: 1
    }
  },
  computed: {
    url () {
      return window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('natapp.cc') > -1 ? '' : this.baseUrl
    }
  },
  mounted() {
    Array.prototype.chunk = function(groupsize){
      var sets = [], chunks, i = 0;
      chunks = this.length / groupsize;

      while(i < chunks){
        sets[i] = this.splice(0,groupsize);
        i++;
      }

      return sets;
    }

      this.$http.get(this.url + this.issueUrl + this.page).then((response) => {
          let data = JSON.parse(response.data)
          data.forEach(item => {
            let r = item.tinyList.chunk(2)
            item.tinyList = r
          })
         this.issues = data

      }, (response) => {
        console.log('error')
          console.log(response)
      })
  }
}
</script>

<style lang="css">
.gift-issue {
  margin-top: 10px;
  background: #fff;
  padding: 0 16px;
}

.vux-divider {
  display: table;
  white-space: nowrap;
  height: auto;
  overflow: hidden;
  line-height: 1;
  text-align: center;
  color: #acacac;
  margin-bottom: 16px;
  padding: 5px;
}
.vux-divider:after,.vux-divider:before {
  content: '';
  display: table-cell;
  position: relative;
  top: 50%;
  width: 50%;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)
}
.vux-divider:before {
  background-position: right 1em top 50%
}
.vux-divider:after {
  background-position: left 1em top 50%
}

.issue-headline {
  padding-top: 34px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 28px;/*px*/
  color: #000;
  font-weight: normal;
}
.issue-subtitle {
  font-size: 18px;/*px*/
}
.issue-subtitle-text {
  color: #ddb63f;
  margin-right: 18px;
}
.issue-subtitle-date {
  color: #acacac;
}

.issue-link-body {
  background-repeat: no-repeat;
  //background-color: #000;
  background-position: 50%;
  background-size: cover;
}

.issue-larger .issue-link-body {
  height: 480px;
  //border: 1px solid #f5f5f5;/*px*/
}
.issue-tiny .issue-link-body {
  height: 202px;
  border: 1px solid #f5f5f5;
}
.issue-desc {
  display: flex;
  justify-content: space-between;
  padding: 28px 0;
}
.issue-link-title {
  font-size: 20px;/*px*/
}
.issue-link-price {
  font-size: 20px;/*px*/
  color: #f66375;
}



.issue-tiny {
  font-size: 20px;/*px*/
  height: 300px;/*px*/
}
.issue-tiny .issue-link {
  width: 50%;
  float: left;
  padding: 0 8px;
}
.issue-tiny .issue-link:first-child {
  padding-left: 0;
}
.issue-tiny .issue-link:last-child {
  padding-right: 0;
}
.issue-link-title {
  padding-left: 6px;
}

.issue-link-price {
  padding-right: 6px;
}
</style>
