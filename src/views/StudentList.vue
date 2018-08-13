<template>
    <div class="student-list">
        <van-nav-bar
            class="header"
            left-text="学生列表"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="tabs">
            <van-tabs v-model="active" @click="toggle" type="card">
                <van-tab title="已评价"></van-tab>
                <van-tab title="待评价"></van-tab>
            </van-tabs>
        </div>
       <div class="main">
            <router-link tag="div" :to="{name:'TeacherReviews',params:{id:item.id}}" v-for="item in list" :key="item.id" v-if="flag==true" class="content clearfix">
                <img class="fl" src="@/assets/images/student-head.png" alt="">
                <div class="content-main">
                    <h3>中华一番</h3>
                    <div class="content-bottom">
                        <span class="fl capacity">学习能力5星...</span>   
                        <span class="fr right-arrow">&gt;</span>                  
                    </div>
                </div>
            </router-link>
            <div v-if="flag==false" class="content clearfix">
                <img class="fl" src="@/assets/images/student-head.png" alt="">
                <div class="content-main">
                    <h3>中华一番</h3>
                    <div class="content-bottom">  
                        <span class="fr right-arrow">&gt;</span>
                        <span class="fr comment">立即点评</span>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import '@/assets/css/studentList.css'
export default {
    data () {
        return {
            active: 2,
            flag: true,
            list: [
                {title:'1班',id:1},
                {title:'2班',id:2},
                {title:'3班',id:3}
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        toggle(){
            this.flag = !this.flag
        }
    },
    mounted(){
        console.log(this.$route.params)
    }
}
</script>
<style lang="less" scoped>

</style>
