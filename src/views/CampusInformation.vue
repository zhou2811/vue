<template>
    <div class="campus-information">
        <van-nav-bar
            class="header"
            left-text="校园资讯"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="main" v-for="(item, index) in list" :key="index">
            <div class="banner"></div>
            <div class="content">
                <h3>{{item.title}}</h3>
                <h4>18-07-14 07:12</h4>
                <p>{{item.content}}</p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            list: [
                {title:'习近平同俄罗斯总统普京举行会晤',content:'新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社'},
                {title:'习近平同俄罗斯总统普京举行会晤',content:'新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社'},
                {title:'习近平同俄罗斯总统普京举行会晤',content:'新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社'},
                {title:'习近平同俄罗斯总统普京举行会晤',content:'新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社新华社'}
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    mounted(){
        console.log(this.$route.params.userId)
    }
}
</script>
<style lang="less" scoped>
.campus-information {
    background-color: #edf0f5;
    height: 100%;
    overflow-y: auto;
    .main {
        .banner {
            height: 3.3rem;
            background: url('../assets/images/banner.png') center no-repeat;
            background-size: cover;
        }
        .content {
            padding: 0.3rem;
            h3,h4 {
                font-weight: 400;
                margin-bottom: 0.16rem;
            }
            h3 {
                 font-size: 18px;
                 color: #000;
            }
            h4,p {
                font-size: 12px;
                color: #545454;
            }
            p {
                line-height: 0.46rem;
            }
        }
    }
}
</style>
