<template>
    <div class="message">
        <van-nav-bar
            class="header"
            left-text="课程申请"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="time">
            <button>2018-07-07</button> - 
            <button>2018-08-07</button>
            <button @click="showTime">
                <i class="iconfont icon-arrow_down_full"></i>
            </button>
        </div>
        <van-popup v-model="show" position="bottom">     
            <div class="item">今天</div>
            <div class="item">昨天</div>
            <div class="item">本周</div>
            <div class="item">近两周</div>
            <div class="item">近一个月</div>
        </van-popup>
        <div class="main">
            <div class="content">
                <h4>班级公告</h4>
                <span>7-17</span><span>15:37</span>
                <i class="iconfont icon-yanjing"></i>
            </div>
        </div>
    </div>
</template>
<script>
import '@/assets/css/message.css'
export default {
    data() {
        return {
        show: false
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        showTime(){
            this.show = !this.show
        }
    }
}
</script>
<style lang="less" scoped>

</style>
