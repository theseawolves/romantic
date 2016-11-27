<template>
  <div id="details">
    <mt-header :title="'详情'">
      <router-link to="/gift" slot="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <mt-button slot="right">
        <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </mt-button>
    </mt-header>
    <div id="intro">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <img src="../assets/images/750x750.png" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/750x750.png" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/750x750.png" alt="" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="sold">
        <span class="sold-info">已售</span>
        <span class="sold-count">739</span>
      </div>
      <h1 class="title">进口满天星花束</h1>
      <p class="desc">
        粉色满天星的花语是真心喜欢你，胜过爱情，更胜过自己。我只喜欢你好，我就好～粉色满天星的花语是真心喜欢你，胜过爱情，更胜过自己。我只喜欢你好，我就好～
      </p>
      <div class="price">
        <span class="discount-price">￥198</span>
        <span class="before-discount-price">￥358</span>
      </div>
      <div class="express">
        <span>快递：</span>
        <span class="express-freight">免运费</span>
      </div>
      <hr>
      <div class="social">
        <div class="social-item social-ta">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-songgeiTA"></use>
          </svg>
          <span class="social-title">送给TA</span>
        </div>
        <div class="social-item social-xihuan">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
          </svg>
          <span class="social-title">收藏</span>
        </div>
        <div class="social-item social-jiarugouwuche">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiarugouwuche"></use>
          </svg>
          <span class="social-title">加入购物车</span>
        </div>
        <div class="social-item social-shop">
          <span class="social-title">去天猫购买</span>
        </div>
      </div>
    </div>

    <div class="separate-line"></div>

    <div id="comments">
      <mt-cell title="">
        <router-link to="/details/comments">查看更多</router-link>
      </mt-cell>

      <mt-cell title="左边脚的搁浅" label="这个礼物很好看，谁能送给我呀！"icon="more">
        <span>2016-08-26 13:58</span>
        <img slot="icon" src="../assets/images/60x60.png" width="60" height="60">
      </mt-cell>

      <mt-cell title="左边脚的搁浅" label="这个礼物很好看，谁能送给我呀！"icon="more">
        <span>2016-08-26 13:58</span>
        <img slot="icon" src="../assets/images/60x60.png" width="60" height="60">
      </mt-cell>

      <mt-cell title="左边脚的搁浅" label="这个礼物很好看，谁能送给我呀！"icon="more">
        <span>2016-08-26 13:58</span>
        <img slot="icon" src="../assets/images/60x60.png" width="60" height="60">
      </mt-cell>

      <mt-cell title="左边脚的搁浅" label="这个礼物很好看，谁能送给我呀！"icon="more">
        <span>2016-08-26 13:58</span>
        <img slot="icon" src="../assets/images/60x60.png" width="60" height="60">
      </mt-cell>
    </div>
    <div class="separate-line"></div>
    <div id="related">
      <p class="vux-divider">更多浪漫</p>
      <div class="related-container">
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/front/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/front/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/front/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/front/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>
      </div>


    </div>
    <div id="comments-box">
      <div class="comments-wrap">
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg> -->
        <input type="text" name="name" value="" placeholder="我也来说说">
      </div>
    </div>
  </div>

</template>

<script>
    import Vue from 'vue'
    import Mint from 'mint-ui'
    import 'mint-ui/lib/style.css'
    // import '../assets/fonts/iconfont_details.js?strict=false'
    // import '../assets/fonts/iconfont_details.css'

    Vue.use(Mint)
    export default {
        name: 'details',
        data() {
            return {
                selected: '外卖'
            };
        }
    };
</script>

<style>
#details .mint-header svg {
  width: 40px;
  height: 40px;
  color: #fff;
}
.mint-swipe {
  height: 750px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.mint-swipe-item {
  line-height: 750px;
}
.mint-swipe-indicator {
    width: 20px;
    height: 20px;
}
.mint-swipe-indicator.is-active {
  background: #ddb63f;
  opacity: 1;
}
.sold {
  float: right;
  color: #918d84;
  font-size: 15px;/*px*/
  margin-right: 26px;
}
#intro h1.title {
  margin: 35px auto 18px 22px;
  font-size: 28px;/*px*/
  color: #000;
}
#intro p.desc {
  margin-left: 22px;
  font-size: 20px;
  color: #4b4a46;
  margin-bottom: 22px;
}
#intro .price {
  font-size: 18px;/*px*/
  margin-bottom: 22px;
}
#intro .discount-price {
  color: #f66375;
  padding-left: 22px;
  padding-right: 10px;
}
#intro .before-discount-price {
  padding-left: 10px;
  color: #918d84;
  text-decoration: line-through;
}
#intro .express {
  margin-left: 22px;
  margin-bottom: 8px;
  color: #4b4a46;
  font-size: 20px;/*px*/
}
#intro svg {
  width: 35px;
  height: 35px;
}
#intro .social {
  display: flex;
  text-align: center;
  height: 60px;
  font-size: 20px;/*px*/
  color: #4b4a46;
  justify-content: center;
  align-items: center;
}
#intro .social-item {
  flex: 1;
}
#intro .icon {
  vertical-align: middle;
}
#intro .social-title {
  padding-top: 5px;
  padding-right: 42px;
  padding-bottom: 5px;
  border-right: 1px solid #4b4a46;
  text-align: center;
}
#intro .social-shop .social-title  {
  border-right: none;
  padding-right: 0;
  background-color: #FF4200;
  border-radius: 5px;
  color: #fff;
}
#comments {
  margin-left: 30px;
  margin-right: 30px;
}

#comments .mint-cell:first-of-type {
  height: 54px;
  font-size: 18px;/*px*/
  color: #918d84;
  margin-top: 24px;
  margin-bottom: 12px;
}
#comments .mint-cell:first-of-type .mint-cell-value > a {
  margin-right: 10px;
  color: #918d84;
  margin-top: 20px;
  font-size: 18px;/*px*/
}
#comments .mint-cell {
  height: 124px;
}
#comments img {
  margin-top: 34px;
  margin-bottom: 34px;
  border-radius: 30px;
}
#comments .mint-cell-text {
  color: #156e9c;
  font-size: 20px;/*px*/
  margin-left: 14px;
}
#comments .mint-cell-label {
  padding-left: 74px;
  margin-top: -48px;
  color: #918d84;
  font-size: 16px;/*px*/

}
#comments .mint-cell-value {
  color: #918d84;
  font-size: 16px;/*px*/
}

#related .vux-divider {
  margin-top: 34px;
  margin-bottom: 34px;
  font-size: 22px;/*px*/
}

#related .related-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;


}
#related .related-link {
  flex: 0 0 50%;
  margin-bottom: 18px;
  align-items: center;
  align-content: flex-start;

}
#related .related-link-body {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}


#related .related-link-body {
  height: 340px;
  width: 340px;
  margin: 0 auto;
  //border: 1px solid #4b4a46;/*px*/

}

#related .related-link-info {
  //border: 1px solid #4b4a46;/*px*/
  height: 54px;
  width: 340px;
  margin: 0 auto;

}

#related .related-link-title {
  float: left;
  font-size: 20px;/*px*/
  padding-bottom: 17px;
}
#related .related-link-price {
  float: right;
  font-size: 20px;/*px*/
  color: #f66375;
}



#related {
  font-size: 20px;/*px*/
}
#related .related-link-title {
  margin-left: 11px;
}

#related .related-link-price {
  margin-right: 18px;
}

#comments-box {
  background-color: #f5f3f4;
  height: 96px;
  text-align: center;
  padding: 21px 0;
}
#comments-box .comments-wrap,#comments-box input {
  width: 372px;
  height: 54px;/*px*/
  line-height: 54px;
  font-size: 16px;/*px*/
  margin: 0 auto;
  border-radius: 22px;
  //background-color: #4b4a46;

}
#comments-box .comments-wrap {
  position: relative;
}
#comments-box svg {
  position: absolute;
  left: 22px;
  top:27px;
}
</style>
