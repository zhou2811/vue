<template>
    <div class="login" v-cloak>
        <div class="main">
            <div class="header">
                <img src="../assets/images/login-head.png" alt="">
            </div>
            <div class="occupation">
                <label><ui-radio class="radio" v-model="val" :checked="ischecked" value="1"></ui-radio><span>学生</span></label>
                <label><ui-radio class="radio" v-model="val" value="2 "></ui-radio><span>老师</span></label>             
            </div>
            <div class="user">
                <i class="iconfont icon-gerenzhongxin"></i>
                <input type="text" placeholder="手机号/邮箱" v-model="phone" >
            </div>
            <div class="password">
                <i class="iconfont icon-mima"></i>
                <input type="password" placeholder="密码" v-model="password" >
            </div>
            <input type="button" @click="login" value="登录" class="login-btn">
        </div>
        <div class="getpassword">
            <router-link to="/retrievePassword" tag="a">忘记密码</router-link>
        </div>
        <div class="login">
            <router-link to="/register" tag="a">新用户注册入口<span>></span></router-link>
        </div>
    </div>
</template>
<script>
import '@/assets/css/login.css'
import Radio from '@/components/Radio'
export default {
    data () {
        return {
            phone:'',
            password:'',
            occupation: 'student',
            val:'1',
			ischecked:true
        }
    },
    methods: {
        login(){
            var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
            if(this.phone==''||this.phone==''){
                this.$toast('用户名或密码不能为空')
            }else if(!reg.test(this.phone)){
                this.$toast('手机格式不正确')
            }else {
                this.$toast('登录成功')
                setTimeout(()=>{
                    if(this.val !=='1'){
                        this.$router.push({path:'/teacherhome'})
                        this.$toast.clear()
                        
                    }else{
                        this.$router.push({path:'/studenthome'})
                        this.$toast.clear()
                    }
                    
                },2000)
            }
        },
        showPoper(){
            console.log()
            this.show = !this.show
        }
    },
    components: {
        "ui-radio":Radio
    }
}
</script>
<style lang="less" scoped>

</style>

