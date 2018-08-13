<template>
    <div class="student-home">
        <div class="head">
            <img @click="showPersonal" src="@/assets/images/student.png" alt="">
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
            <router-link to="/login" class="loginOut" tag="div" >
                <i class="iconfont icon-tuichu"></i>
                <span>退出当前账号</span>
            </router-link>
        </van-popup>
        <div class="banner"></div>
        <div class="nav">
            <ul class="clearfix">
                <router-link to="schoolnews" tag="li">
                    <img src="../assets/images/nav-1.png" alt="">
                    <span>校园资讯</span>
                </router-link>
                <router-link to="courseClassification" tag="li">
                    <img src="../assets/images/nav-2.png" alt="">
                    <span>我要选课</span>
                </router-link>
                <router-link to="courseSelected" tag="li">
                    <img src="../assets/images/nav-3.png" alt="">
                    <span>已选课程</span>
                </router-link>
                <!-- <router-link tag="li" to="">
                    <img src="../assets/images/nav-4.png" alt="">
                    <span>通讯录</span>
                </router-link> -->
                <router-link to="growthRecord" tag="li">
                    <img src="../assets/images/nav-5.png" alt="">
                    <span>成长记录</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import '../assets/css/personal.css'
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
            },200)
        },
    }
}
</script>
<style lang="less" scoped>
.student-home {
    height: 100%;
    overflow-y: auto;
    .head {
        padding: 0.2rem 0.3rem;
        img {
            width: 0.66rem;;
        }
    }
    
    .banner {
        height: 3.4rem;
        background: url('../assets/images/studentHome.png') center no-repeat;
        background-size: cover;
    }
    .nav {
        ul {
            box-sizing: border-box;
            padding: 0.4rem;
            li {
                text-align: center;
                float: left;
                width: 33.3333%;
                margin-top: 0.5rem;
                img {
                    height: 1.45rem;
                }
                span {
                    margin-top: 0.1rem;
                    display: block;
                    color: #787878;
                }
            }
        }
    }
}
</style>
