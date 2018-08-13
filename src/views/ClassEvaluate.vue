<template>
    <div class="evaluate">
        <van-nav-bar
            class="header"
            left-text="课程评价"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="main"> 
            <router-link tag="div" v-for="item in list" :key="item.id" :to="{name:'StudentList',params:{userId:item.id}}" class="content">
                <div class="content-top">
                    <h4 class="fl">{{item.title}}</h4>
                    <span class="fr">点评</span>
                </div>
                <div class="content-bottom">
                    <span class="fl"><i class="iconfont icon-Shapecopy"></i>上课时间: 周五15:00</span>
                    <span class="fr"><i class="num">0</i>/21</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import '@/assets/css/evaluate.css'
export default {
    data () {
        return {
            list: [
                {title: '1班',id:1},
                {title: '2班',id:2},
                {title: '3班',id:3},
                {title: '4班',id:4}
            ]
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

</style>
