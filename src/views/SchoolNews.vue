<template>
    <div class="school-news">
        <van-nav-bar
            left-text="校园资讯"   
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="main" v-for="(item, index) in list" :key="index" @click="goNext(item.id)">
            <div class="content">
                <h3>{{item.title}}</h3>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[
                {title:'校园天地',id:1},
                {title:'校园天地',id:2},
                {title:'校园天地',id:3},
                {title:'校园天地',id:4},
                {title:'校园天地',id:5}
            ]
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        goNext(data){
            console.log(data)
            this.$router.push({name:'CampusInformation',params: { userId: data }})
        }
    }
}
</script>
<style lang="less" scoped>
.school-news {
    height: 100%;
    overflow-y: auto;
    .main {
        padding: 0 0.2rem;
        background-color: #fff;
        .content {
            margin-top: 0.2rem;
            position: relative;
            height: 2.2rem;
            border-radius: 0.14rem;
            background: url('../assets/images/news.png') center no-repeat;
            background-size: cover;
            h3 {
                position: absolute;
                bottom: 0;
                color: #fff;
                font-weight: 400;
                font-size: 0.36rem;
                line-height: 0.8rem;
                padding-left: 8px;
                background-color: rgba(0, 0, 0, 0.3);
            }
        }
    }
}
</style>
