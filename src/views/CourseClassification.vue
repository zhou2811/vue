<template>
    <div class="course-classification">
        <van-nav-bar
            left-text="课程分类"   
            left-arrow
            @click-left="onClickLeft"
        />
        <router-link :to="{name:'Curriculavariable',params:{uid:item.id}}" v-for="(item, index) in list" :key="index"  tag="div" class="main">
            <div class="content">
                <div class="content-text">
                    <h3>{{item.title}}</h3>
                    <span>{{item.desc}}</span>
                </div>
            </div>
        </router-link>
       
    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[
                {title:'科学与技术',desc:'science and technology',id:1},
                {title:'科学与技术',desc:'science and technology',id:2},
                {title:'科学与技术',desc:'science and technology',id:3},
                {title:'科学与技术',desc:'science and technology',id:4}
            ],
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
    }
}
</script>
<style lang="less" scoped>
.course-classification {
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
            .content-text {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                 h3,span {
                    padding-left: 8px;
                    font-size: 400;
                }
                h3 {
                    color: #fff;
                    font-size: 0.36rem;
                }
                span {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.24rem;
                }
            }
        }
    }
}
</style>
