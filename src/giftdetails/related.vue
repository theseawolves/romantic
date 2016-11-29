<template lang="html">
  <div class="gift-related">
    <p class="vux-divider">更多浪漫</p>
    <div class="related-wrap">
      <div class="item">
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>

      </div>
      <div class="item">
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>
        <div class="related-link">
          <router-link :to="{ path:'/details'}" exact>
            <div class="related-link-body" :style="{'background-image':'url(/static/assets/images/340x342.png)'}">
            </div>
          </router-link>
          <div class="related-link-info">
            <div class="related-link-title" v-text="'粉色满天星花束'"></div>
            <div class="related-link-price" v-text="'￥198'"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.gift-related {
  margin-top: 10px;
  background: #fff;
  height: 940px;
}
.gift-related .vux-divider {
  padding-top: 34px;
  padding-bottom: 34px;
  font-size: 22px;/*px*/
}

.gift-related .related-wrap {
  padding: 0 23px;
}
.gift-related .item .related-link {
  width: 340px;
  float: left;
  border: 1px solid #4b4a46;
  margin-bottom: 18px;

}
.gift-related .item .related-link:last-child {
  float: right;
}
.gift-related .related-link-body {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-color: #eee;
}


.gift-related .related-link-body {
  height: 340px;
  width: 340px;
  margin: 0 auto;

}

.gift-related .related-link-info {
  width: 340px;
  display: flex;
  justify-content: space-between;
  padding: 17px 0 17px;

}

.gift-related .related-link-title {
  font-size: 20px;/*px*/

}
.gift-related .related-link-price {
  font-size: 20px;/*px*/
  color: #f66375;
}

.gift-related {
  font-size: 20px;/*px*/
}
.gift-related .related-link-title {
  padding-left: 11px;
}

.gift-related .related-link-price {
  padding-right: 18px;
}
</style>
