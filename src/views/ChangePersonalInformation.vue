<template>
    <div class="changePersonalInformation">
        <van-nav-bar
            class="header"
            left-text="修改个人信息"
            left-arrow
            @click-left="onClickLeft"
        />
        <div>
            <span>姓名</span>
            <input type="text" placeholder="输入姓名" maxlength="16" minlength="8">
        </div>
        <div>
            <span>身份证号</span>
            <input type="text" placeholder="输入身份证号" maxlength="16" minlength="8">
        </div>
        <!-- <div class="gender">
            <span>性别</span>
            <label><input type="radio" v-model="gender" value="man"/><span>男</span></label>
            <label><input type="radio" v-model="gender" value="women"/><span>女</span></label>
        </div> -->
        <div class="occupation">
            <span>性别</span>
            <label><ui-radio class="radio" v-model="val" value="1"></ui-radio><span>男</span></label>
            <label><ui-radio class="radio" v-model="val" :checked="ischecked" value="2 "></ui-radio><span>女</span></label>             
        </div>
        <div>
            <span>出生年月</span>
            <input type="text" placeholder="输入出生年月" maxlength="16" minlength="8">
        </div>
        <div>
            <span>班级</span>
            <input type="text" placeholder="输入班级" maxlength="16" minlength="8">
        </div>
        <button class="btn">保存</button>
    </div>
</template>
<script>
import Radio from '@/components/Radio'
export default {
    data () {
        return {
            val: '2',
            ischecked: true
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
     components: {
        "ui-radio": Radio
     }
}
</script>
<style lang="less" scoped>
.changePersonalInformation {
    position: relative;
    height: 100%;
    overflow-y: auto;
    .van-icon,.van-nav-bar__text {
        color: #4a4a4a!important;
    }
    span {
        color: #848484;
        display: inline-block;
        width: 1.7rem;
    }
    input,::-webkit-input-placeholder {
        color: #b2b2b2;
        height: 0.9rem;
    }
    div {
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #d1d1d1;
        padding-left: 0.45rem;
    }
    .occupation {
        span {
            margin: 0;
        }
        label {
            input {
                vertical-align: middle;
                margin-right: 0.1rem;
            }
            span {
                margin: 0 10px;
                width: 1rem;
            }
        }
    }
    .btn {
        top: 7rem;
    }
    
}
</style>
