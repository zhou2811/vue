<template>
    <div class="growth-record">
        <div class="main">
            <van-nav-bar
                class="header"
                left-text="成长记录"
                left-arrow
                @click-left="onClickLeft"
            />
            <div class="figure">
                <img src="@/assets/images/student-head.png" alt="">
                <span>中华一番</span>
            </div>
        </div>
        <div class="content">
            <h3>2018上学期&emsp;合唱团</h3>
            <p>你是一个好人1你是一个好人你是一个好人你是一个好人你是一个好人你是一个好人你是一个好人你是一个好人1你是一个好人你是一个好人你是一个好人你是一个好人1你是一个好人你是一个好人你是一个好人你是一个好人1你是一个好人你是一个好人</p>
            <p>────王老师</p>
            <div>
                <textarea placeholder="学习心得    字数限定在1000字以内">    
                </textarea>
                <button>存为草稿</button>
                <button>提交</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            show: true,
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        focus(){
            this.show = false
        }

    }
}
</script>
<style lang="less" scoped>
.growth-record {
    height: 100%;
    overflow-y: auto;
    background-color: #eef0f5;
    position: relative;
   
    .main {
        position: relative;
        background: url('../assets/images/banner-2.png') center no-repeat;
        background-size: cover;
        height: 3.5rem;
        .header {
           background-color: rgba(0, 0, 0, 0);
           
        }
        .figure {
            z-index: 2;
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            transform: translate(-50%, -46%);
            img {
                display: block;
                width: 1.88rem;
                border-radius: 50%;
            }
            span {
                color: #fff;
                font-size: 0.32rem;
            }
        }
    }
    .content {
        position: relative;
        top: -0.4rem;
        margin: 0 auto 0.2rem;
        width: 7.2rem;
        border: 1px solid #dce1ea;
        border-radius: 0.14rem;
        box-shadow: 1px 2px 3px #dee2eb;
        padding: 0.1rem;
        color: #787878;
        background-color: #fff;
        h3 {
            color: #4d4d4d;
            font-weight: 400;
            margin-bottom: 0.15rem;
            font-size: 0.28rem;
        }
        p {
            font-size: 0.24rem;
            line-height: 0.4rem;
            &:nth-of-type(2) {
                text-align: right;
                margin: 0.3rem 0;
            }
        }
        div {
            position: relative;
            height: 3rem;
            padding: 0.05rem;
            padding-bottom: 0.8rem;
            border: 1px solid #d1d1d1;
            border-radius: 0.14rem;
            textarea {
                height: 100%;
                width: 100%;
                font-size: 0.24rem;
                padding: 5px;
                box-sizing: border-box;
            }
            button {
                position: absolute;
                width: 1.8rem;
                height: 0.6rem;
                border: 1px solid #cbcbcb;
                border-radius: 0.3rem;
                background-color: #fff;
                color: #787878;
                bottom: 0.04rem;
                right: 2.2rem;
            }
            button:last-child {
                right: 0.15rem;
                background-color: #6692ff;
                color: #fff;
            }
        }
        
    }
}
    
</style>
