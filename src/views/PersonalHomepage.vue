<template>
    <div class="personal-homepage">
        <div class="main">
            <van-nav-bar
                class="header"
                left-text="课程申请"
                left-arrow
                @click-left="onClickLeft"
            />
            <div class="figure">
                <img src="@/assets/images/student-head.png" alt="">
                <span>中华一番</span>
            </div>
        </div>
        <div class="content">
            <h3>内容简介</h3>
            <p>我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵我是一个兵</p>
           
        </div>
         <button class="btn" @click="change" v-if="show==true">编辑</button>
        <button class="btn" @click="change" v-else>确认修改</button>
    </div>
</template>
<script>
import '../assets/css/personalHomepage.css'
export default {
    data () {
        return {
            show: true
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        change(){
            this.show = !this.show
        }
    }
}
</script>
<style lang="less" scoped>

</style>
