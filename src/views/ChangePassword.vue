<template>
    <div class="changepassword">
        <van-nav-bar
            class="header"
            left-text="修改密码"
            left-arrow
            @click-left="onClickLeft"
        />
        <div>
            <span>旧密码</span>
            <input type="text" placeholder="输入旧密码" maxlength="16" minlength="8">
        </div>
        <div>
            <span>新密码</span>
            <input type="text" placeholder="输入新密码" maxlength="16" minlength="8">
        </div>
        <div>
            <span>确认密码</span>
            <input type="text" placeholder="重新输入新密码" maxlength="16" minlength="8">
        </div>
        <button class="btn">保存</button>
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
.changepassword {
    position: relative;
    height: 100%;
    overflow-y: auto;
    span {
        color: #848484;
        display: inline-block;
        width: 1.5rem;
    }
    input,::-webkit-input-placeholder {
        color: #b2b2b2;
        height: 0.9rem;
        margin-left: 0.9rem;
    }
    div {
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #d1d1d1;
        padding-left: 0.45rem;
    }
    .btn {
        top: 5rem;
    }
}
</style>
