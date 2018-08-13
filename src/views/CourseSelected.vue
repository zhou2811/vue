<template>
    <div class="selected-course">
        <van-nav-bar
            left-text="已选课程"   
            left-arrow
            @click-left="onClickLeft"
        />
        
        <div class="search clearfix">
            <input class="fl" type="text" placeholder="搜索老师姓名或课程关键词">
            <input class="fr" type="button" value="搜索">
        </div>
        <div class="main">
            <div class="content">
                <div class="content-title">
                    <h3>文化与艺术</h3>
                    <span>趣味动画</span>
                </div>
                <div class="content-study">
                    <span>学习中...</span>
                </div>
            </div>
        </div>
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
.selected-course {
    background-color: #edf0f5;
    height: 100%;  
    .search {
        padding: 0 3%;
        line-height: 0.84rem;
        background-color: #fff;
        input[type="text"] {
            width: 89%;
            height: 0.54rem;
            line-height: 0.54rem;
            border: 1px solid #9e9e9e;
            border-radius: 0.3rem;
            padding-left: 0.18rem;
            margin-top: 0.15rem;
            box-sizing: border-box;
            
        } 
        ::-webkit-input-placeholder {
            color: #d4d4d4;
            font-size: 0.24rem;
        }
        input[type="button"] {
            background-color: #fff;
            color: #8f8f8f;
            font-size: 0.3rem;
        }
    }
    .main {
        padding: 0.2rem;
        .content {
            position: relative;
            height: 2.2rem;
            background: url('../assets/images/course.png') center no-repeat;
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
            .content-study {
                position: absolute;
                top: 0;
                right: 0.2rem;
                span {        
                    color: #07d7f7;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
