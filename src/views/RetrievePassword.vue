<template>
    <div class="retrievePassword">
        <div class="main">
            <div class="header">
                <img @click="chooseHead" src="../assets/images/register-head.png" alt="">
            </div>
            <input type="text" placeholder="姓名" v-model="username" class="user">
            <input type="text" placeholder="手机号" v-model="phone" class="phone">
            <div class="validate clearfix">
                <input type="text" placeholder="验证码" v-model="code" class="code fl">
                <button @click="send" class="getcode">
                    <!-- :disabled="isDisable" -->
                    <span v-if="sendMsgDisabled">{{time+'s'}}</span>
                    <span v-if="!sendMsgDisabled">获取验证码</span>
                </button>
            </div> 
            <input type="text" placeholder="新密码" class="num" v-model="name">
            
            <input type="button" @click="register" value="确认" class="register-btn">
        </div>
        <div class="login">
            <router-link to="/login" tag="a">已有账号直接登录<span>></span></router-link>
        </div>
    </div>
</template>
<script>
import '@/assets/css/retrievePassword.css'
export default {
    data () {
        return {
            username: '',
            phone: '',
            time:'',
            code:'',
            num: 0,
            gender:'teacher',
            num:'',
            name:'',
            active: '',
            sendMsgDisabled: false,
            interval: '',
            time: 60
        }
    },
    methods: {
        chooseHead(){
            alert(11)
        },
        send(){
            // this.isDisable = true
            // this.sendMsgDisabled = true;
            // let me = this
            // let interval = window.setInterval(()=>{
            //     if((me.time--)<=0){
            //         me.time =60
            //         me.sendMsgDisabled =false
            //         me.isDisable = false
            //         window.clearInterval(interval)
            //     }        
            // },1000)
            this.sendMsgDisabled = true;
            if(!this.interval){
                this.interval = window.setInterval(()=>{
                    if((this.time--)<=-0){
                        this.time = 60
                        this.sendMsgDisabled = false
                        window.clearInterval(this.interval)
                    }
                },1000)
            }   
        },
        register(){   
            var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
            if(this.username==''||this.phone==''){
                this.$toast('用户名或手机号不能为空')
            }else if(!reg.test(this.phone)){
                this.$toast('手机格式不正确')
            }else {
                this.$toast('修改成功')
                setTimeout(()=>{
                    this.$router.push({path:'/login'})
                    this.$toast.clear()
                },2000)
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>
