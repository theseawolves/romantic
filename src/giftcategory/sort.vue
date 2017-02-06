<template lang="html">
  <div class="">
    <div class="sort-wrap">
  <span class="sort-wrap__item sort-wrap__all" @click="selectAll">全部</span>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__select" @click.stop.prevent="isSelectClick">
    <span class="text" v-text="selectType"></span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-xuanxiang" v-if="!isSelectShow"></use>
      <use xlink:href="#icon-xialaxuanxiang" v-else></use>
    </svg>
    <ul class="sub" v-if="isSelectShow">
      <li v-for="item in subcategoryList" @click.stop="subcategoryClick(item.id,item.categoryName)">
        <span class="name" v-text="item.categoryName">aaaaa</span>
        <span class="num" v-text="item.countNum">15</span>
      </li>
    </ul>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__sort" @click="isSortShow=!isSortShow,isSelectShow=false">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-pailieshunxu" ></use>
    </svg>
    <ul class="sub" v-if="isSortShow">
      <li v-for="type in sortType" @click.stop="handleSort(type)">
        <span class="name" v-text="type"></span>
      </li>
    </ul>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__style">
    <router-link to="/category/list2">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangxiapailie"></use>
      </svg>
    </router-link>
  </div>
  <span class="sort-wrap__item sort-wrap__line"></span>
  <div class="sort-wrap__item sort-wrap__style">
    <router-link to="/category/list">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-juzhenpailie"></use>
    </svg>
    </router-link>
  </div>

</div>
    <router-view></router-view>
  </div>
</template>

<script>
import RomanskiList from './list.vue'
import RomanskiList2 from './list2.vue'
export default {
  data () {
    return {
      sortType: ['按热度排序','按上架先后排序','按价格高至低排序','按价格低至高排序'],
      isSortShow: false,
      selectType: '选择分类',
      isSelectShow: false,
      subcategoryList:[
        { id: 1, categoryName: '鞋子包包', countNum: 10},
        { id: 2, categoryName: '公仔抱枕', countNum: 20},
        { id: 3, categoryName: '香水香薰', countNum: 30}
      ]
    }
  },
  // watch: {
  //   'isSelectShow': {
  //     //change icon
  //
  //   }
  // },
  components: {

  },
  methods: {
    selectAll () {
      this.selectType = '选择分类'
      this.isSortShow = false
      this.isSelectShow = false
      //fetch data
    },
    isSelectClick () {
      console.log('click')
      this.isSelectShow = ! this.isSelectShow
      this.isSortShow = false
    },
    handleSort (type) {
      console.log(type)
      this.isSortShow = false
      this.isSelectShow = false
      //fetch data
    },
    subcategoryClick (id,name) {
      console.log(id)
      this.selectType = name
      this.isSelectShow = false
      //fetch data
    }
  }
}
</script>

<style lang="css" scoped>
.sort-wrap {
  display: flex;
  height: 72px;
  font-size: 28px;/*px*/
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.sort-wrap__item {
  flex-grow: 1;
}
.sort-wrap__item.sort-wrap__line {
  display: inline-block;
  flex-grow: 0;
  flex-basis: auto;
  width: 2px;
  height: 48px;
  border-left: 1px solid #ccc;
}
.sort-wrap__item.sort-wrap__select {
  flex-grow: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 36px;
  position: relative;
  text-align: justify;
  align-self: stretch;
}
/*.sort-wrap__item.sort-wrap__select .text {
  //padding-left: 30px;
}
.sort-wrap__item.sort-wrap__select .icon {
  //position: absolute;
  //right: 36px;
}*/
.sort-wrap__item.sort-wrap__select > .sub {
  position: absolute;
  left: 0;
  top: 72px;
  background-color: white;
  width: 624px;
}
.sort-wrap__item.sort-wrap__select > .sub > li {
  border-bottom: 1px solid #ccc;
  padding: 22px 32px;
  font-size: 24px;/*px*/
}
.sort-wrap__item.sort-wrap__sort > .sub > li {
  border-bottom: 1px solid #ccc;
  padding: 22px 32px;
  font-size: 24px;/*px*/
}
.sort-wrap__item.sort-wrap__select .sub > li > .num {
  float: right;
}

/*.sort-wrap__item.sort-wrap__style {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;

}*/
.sort-wrap__item.sort-wrap__style > a {
  display: flex;
  align-items: center;
}
.sort-wrap svg {
  display: inline-block;
  width: 35px;
  height: 35px;
}
.sort-wrap__item.sort-wrap__sort, .sort-wrap__item.sort-wrap__style {
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sort-wrap__item.sort-wrap__sort > .sub {
  position: absolute;
  background-color: white;
  width: 288px;
  text-align: left;
  top: 72px;
  left: 0;

}
</style>
