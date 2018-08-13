<template>
    <div class="teacher-reviews">
        <van-nav-bar
            class="header"
            left-text="老师点评"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="main">
            <h3><i class="iconfont icon-daipingjia20"></i>老师评价</h3>
            <div class="comment">
                <textarea></textarea>
            </div>
            <h3><i class="iconfont icon-pingjia"></i>老师评价</h3>
            <div class="grade">         
                <div class="grade-item">
                    <span>认真听讲</span>
                    <van-rate v-model="value" :size="25" color="#ffb841" />
                    <span class="rank">一般</span>
                </div>
                <div class="grade-item">
                    <span>学习能力</span>
                    <van-rate v-model="a" :size="25" color="#ffb841" />
                    <span class="rank">一般</span>
                </div>
                <div class="grade-item">
                    <span>语言表达</span>
                    <van-rate v-model="c" :size="25" color="#ffb841" />
                    <span class="rank">一般</span>
                </div>
                <div class="grade-item">
                    <span>实践能力</span>
                    <van-rate v-model="d" :size="25" color="#ffb841" />
                    <span class="rank">一般</span>
                </div>
            </div>
             <h3><i class="iconfont icon-shizhongclock74"></i>历史点评</h3>
            <div class="historical-review">
               
                <textarea></textarea>
            </div>
        </div>
        <div class="footer">
            <button>存为草稿</button>
            <button class="active">提交</button>
        </div>
    </div>
</template>
<script>
import '@/assets/css/teacherReviews.css'
export default {
    data () {
        return {
            value: 3,
            a: 1,
            c: 2,
            d: 4,
        }
    },
    mounted () {
        console.log(this.$route.params)
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>

</style>
