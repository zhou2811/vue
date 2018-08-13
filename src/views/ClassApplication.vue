<template>
    <div class="application">
        <van-nav-bar
            class="header"
            left-text="课程申请"
            left-arrow
            @click-left="onClickLeft"
        />
        <div v-if="flag" class="content-main">
            <img src="@/assets/images/record.png" alt="">
            <p>没有申请记录</p>
        </div>
        <div class="main" v-if="!flag">
            <div class="tabs">
                <van-tabs v-model="active" type="card">
                    <van-tab title="已审核"></van-tab>
                    <van-tab title="未审核"></van-tab>
                </van-tabs>
            </div>
            <div v-if="show" class="content">
                <h3>炫彩舞蹈</h3>
                <p><i class="iconfont icon-24"></i>申请时间:2018/07/22</p>
                <p><i class="iconfont icon-ai253"></i>上课时间:周五15:00</p>
            </div>
            <div v-if="show" class="content">
                <h3>炫彩舞蹈</h3>
                <p><i class="iconfont icon-24"></i>申请时间:2018/07/22</p>
                <p><i class="iconfont icon-ai253"></i>上课时间:周五15:00</p>
            </div>
            <div v-if="show" class="content">
                <h3>炫彩舞蹈</h3>
                <p><i class="iconfont icon-24"></i>申请时间:2018/07/22</p>
                <p><i class="iconfont icon-ai253"></i>上课时间:周五15:00</p>
            </div>
        </div>
        <router-link tag="button" to="applicationRecord" class="btn">申请课程</router-link>
    </div>
</template>
<script>
import '@/assets/css/application.css'
export default {
    data () {
        return {
            active: 2,
            flag: false,
            show: true,
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
    }
}
</script>
<style lang="less">
</style>
