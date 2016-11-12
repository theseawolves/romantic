<template>
    <div class="page-tabbar">
        <div class="page-wrap">
          <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="外卖">
                    <mt-cell v-for="n in 100" :title="'餐厅 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="订单">
                    <mt-cell v-for="n in 50" :title="'订单 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="发现">
                    <mt-cell v-for="n in 70" :title="'发现 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="我的">
                    <div class="page-part">
                        <mt-cell v-for="n in 120" :title="'我的 ' + n" />
                    </div>
                    <router-link to="/">
                        <mt-button type="danger" size="large">退出</mt-button>
                    </router-link>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖">
                <img slot="icon" src="../assets/100x100.png"> 外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/100x100.png"> 订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/100x100.png"> 发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/100x100.png"> 我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Mint from 'mint-ui'
    import 'mint-ui/lib/style.css'

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
    .page-tabbar {
        overflow: hidden;
        height: 100vh;
    }

    .page-wrap {
        overflow: auto;
        height: 100%;
        padding-bottom: 100px;
    }
</style>
