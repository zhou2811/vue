<template>
    <div class="curricula-variable">
        <van-nav-bar
            left-text="我要选课"   
            left-arrow
            @click-left="onClickLeft"
            class="header"
        />
        <div class="search clearfix">
            <input class="fl" type="text" placeholder="搜索老师姓名或课程关键词">
            <input class="fr" type="button" value="搜索">
        </div>
        <div class="main">
            <!-- {name:'CourseDetails',params:{uid:item.id}} -->
            <router-link tag="div" :to="{name:'CourseDetails',params:{uid:item.id}}" class="content" v-for="(item, index) in list" :key="index" >
                <div class="content-title">
                    <h3>{{item.title}}</h3>
                    <span>{{item.desc}}</span>
                </div>
                <div class="content-time">
                    <zk-time-down @time-end="timeEnd" :endId="item.id" :endTime='item.time'></zk-time-down>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import TimeDown from "@/components/TimeDown"
export default {
    data () {
        return {
            arr: [],
            list:[
                {title:'文化与艺术',desc:'趣味动画',id:1,time:'2018-08-09 8:13:00'},
                {title:'文化与艺术1',desc:'趣味动画',id:2,time:'2018-08-09 14:12:00'},
                {title:'文化与艺术',desc:'趣味动画',id:3,time:'2018-08-08 16:58:00'},
                {title:'文化与艺术',desc:'趣味动画',id:4,time:'2018-08-08 16:13:00'}
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        timeEnd(data){
           this.arr.push(data)

        //    if(this.list.id==!str){
        //        this.$router.push({name:'Login'})
        //    }
        }
    },
    components: {
        "zk-time-down": TimeDown
    }
}
</script>
<style lang="less" scoped>
.curricula-variable {
    background-color: #edf0f5;
    height: 100%;  
    overflow-y: auto;
    .header {
        background-color: #f2f2f2;
    }
    .search {
        padding: 10px 3%;
        line-height: 30px;
        background-color: #fff;
        input[type="text"] {
            width: 89%;
            height: 30px;
            line-height: 30px;
            border: 1px solid #9e9e9e;
            border-radius: 0.3rem;
            padding-left: 0.18rem;
            box-sizing: border-box;
            
        } 
        ::-webkit-input-placeholder {
            color: #d4d4d4;
        }
        input[type="button"] {
            background-color: #fff;
            color: #8f8f8f;
            height: 30px;
        }
    }
    .main {
        padding: 0.2rem;
        .content {
            position: relative;
            height: 2.2rem;
            margin-bottom: 10px;
            background-color: #fff;
            // background: url('../assets/images/course.png') center no-repeat;
            background-size: cover;
            .content-title {
                position: absolute;
                bottom: 0.1rem;
                left: 0.1rem;
                h3 {
                    color: #4d4c4c;
                    font-size: 16px;
                    font-weight: 400;
                }
                span {
                    color: #838383;
                }
            }
            .content-time {
                position: absolute;
                top: 0;
                right: 0;
                background-color: rgba(0, 0, 0, .3);
                border-radius: 0.1rem;
                padding: 0.05rem 0.1rem;
                color: #fff;
                span {        
                   
                    font-size: 12px;
                }
                p {
                    display: inline-block;
                }
            }
        }
    }
}
</style>
