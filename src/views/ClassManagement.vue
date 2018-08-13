<template>
    <div class="management">
        <van-nav-bar
            class="header"
            left-text="课程管理"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="banner">
            <h2>课堂答题随堂练</h2>
            <p>课堂边学边练,效果有保障</p>
        </div>
        <h3>任课老师:中华一番</h3>
        <ul>
            <li>
                <span>12</span>
                <span>记 录</span>
            </li>
            <li>
                <span>1</span>
                <span>照 片</span>
            </li>
            <router-link tag="li" to="/photo">
                <img src="@/assets/images/nav-10.png" alt="">
                <span>管理相册</span>
            </router-link>
            <router-link tag="li" to="/record">
                <img src="@/assets/images/nav-9.png" alt="">
                <span>发表记录</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
import "@/assets/css/management.css"
export default {
    
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
    }
}
</script>
<style lang="less" scoped>

</style>
