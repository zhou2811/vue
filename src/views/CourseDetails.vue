<template>
    <div class="course-details">
        <van-nav-bar
            class="header"
            left-text="课程详情"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="banner"></div>
        <div class="main">
            <div class="clearfix">
                <h3 class="fl">绘画天地</h3>
                <h4 class="fr">老师: <span>中华一番</span></h4>
            </div>
            <p>新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社</p>
            <button class="btn" @click="submit">报名</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        submit(){
            this.$toast('报名成功')
        }
    },
    mounted(){
        console.log(this.$route.params.uid)
    }
}
</script>
<style lang="less" scoped>
.course-details {
    position: relative;
    background-color: #e3e7ed;
    height: 100%;
    .banner {
        height: 30%;
        background: url('../assets/images/banner-4.png') center no-repeat;
        background-size: cover;
    }
    .main {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 66%;
        width: 95%;
        -webkit-box-shadow: #878787 0px 0px 20px;
        -moz-box-shadow: #878787 0px 0px 20px;
        box-shadow: #878787 0px 0px 20px;
        // border: 1px solid #a3abbb;
        border-radius: 0.16rem 0.16rem 0 0;
        padding: 0.22rem;
        background-color: #fff;
        div {
            line-height: 0.7rem;
            h3 {
                color: #161616;
                font-weight: 400;
                font-size: 18px;
            }
            h4 {
                color: #545454;
                font-weight: 400;
                font-size: 14px;
            }
        }
        p {
            color: #545454;
            font-size: 12px;
            line-height: 0.5rem;
        }
        .btn {
            position: absolute;
            bottom: 0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 4.7rem;
            height: 0.9rem;
            border-radius: 0.46rem;
            background-color: #6692ff;
            color: #fff;
            -webkit-box-shadow: #545454 0px 0px 5px;
            -moz-box-shadow: #545454 0px 0px 5px;
            box-shadow: #545454 0px 0px 5px;
        }
    }
}
</style>
