<template>
    <div class="tearchHome">
        <div class="head">
            <img @click="showPersonal" src="@/assets/images/teacher-head.png" alt="">
        </div>
        <van-popup v-model="show" position="left" 
        overlay-class="personal">
            <div class="main">
                <div class="arrow" @click="leftArrow">
                    <i class="iconfont icon-jiantou23"></i>
                </div>
                <img src="../assets/images/personal.png" alt="">
                <h4>中华一番</h4>
                <h4>895607967@qq.com</h4>
            </div>
            <router-link tag="div" to="" v-for="(item, index) in list" :key="index" class="item" :class="{'active' : current === item.id}"  @click.native="lighten(item.id)">
                
                <i v-if="item.id==1" :class="{'iconfont icon-gerenzhongxin' : item.id === 1}"></i>
                <i v-if="item.id==2" :class="{'iconfont icon-xiaoxi' : item.id === 2}"></i>
                <i v-if="item.id==3" :class="{'iconfont icon-tongzhi' : item.id === 3}"></i>
                <i v-if="item.id==4" :class="{'iconfont icon-shezhi' : item.id === 4}"></i>
                
                <span>{{item.title}}</span>
            </router-link>
            <div class="loginOut" @click="loginOut">
                <i class="iconfont icon-tuichu"></i>
                <span>退出当前账号</span>
            </div>
        </van-popup>
        <div class="banner">
            <h2>课堂答题随堂练</h2>
            <p>课堂边学边练,效果有保障</p>
        </div>
        <div class="nav">
            <ul>
                <router-link to="/application" tag="li">
                    <img src="../assets/images/nav-8.png" alt="">
                    <p>课程申请</p>
                </router-link>
                <router-link to="/management" tag="li">
                    <img src="../assets/images/nav-7.png" alt="">
                    <p>课程管理</p>
                </router-link>
                <router-link to="/evaluate" tag="li">
                    <img src="../assets/images/nav-6.png" alt="">
                    <p>课程评价</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import '@/assets/css/tearchHome.css'
export default {
    data () {
        return {
            show: false,
            current: '',
            list: [
                {title: '个人主页',id:1},
                {title: '消息',id:2},
                {title: '通知',id:3},
                {title: '设置',id:4} 
            ]
        }
    },
    methods: {
        showPersonal(){
            this.show = !this.show;
        },
        leftArrow(){
            this.show = false
        },
        lighten(data){
            console.log(data); 
            this.current = data;
            setTimeout(()=>{
                if(data==1){
                this.$router.push('/PersonalHomepage')
                }else if(data==2){
                    this.$router.push('/Message')
                }else if(data==3){
                    this.$router.push('/Message')
                }else if(data==4){
                    this.$router.push('/Set')
                }
            },100)
        },
        loginOut(){
            this.$router.push({name:'Login'})
        }
    }
}
</script>
<style lang="less" scoped>

</style>
