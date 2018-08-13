<template>
    <div class="content-details">
        <van-nav-bar
            class="header"
            left-text="内容详情"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="main">
            <div>
                <h3>7-17通知详情</h3>
                <h4>2018-07-17 15:57 中华一番</h4>
            </div>
        </div>
        <div class="content">
            内容
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
.content-details {
    height: 100%;
    background-color: #edf0f5;
    .main {
        height: 1.65rem;
        background-color: #fff;
        position: relative;
        div {
            position: absolute;
            text-align: center;
             left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            h3,h4 {
                
                font-weight: 400;
               
            }
            h3 {
                color: #515151;
                font-size: 16px;
                margin-bottom: 0.1rem;
            }
            h4 {
                font-size: 12px;
                color: #929292;
            }
        }
    }
    .content {
        height: 5.5rem;
        background-color: #fff;
        margin-top: 10px;
        padding: 0.2rem;
    }
}
</style>
