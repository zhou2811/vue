<template>
    <div class="set">
        <div class="main">
            <van-nav-bar
                class="header"
                left-text="课程申请"
                left-arrow
                @click-left="onClickLeft"
            />
            <div class="figure">
                <img src="@/assets/images/student-head.png" alt="">
                <span>中华一番</span>
            </div>
        </div>
        <van-cell-group v-for="(item, index) in list" :key="index" @click.native="refreshto(item.id)">  
            <i v-if="item.id==1" :class="{'iconfont icon-xiangji' : item.id==1}"></i>
            <i v-if="item.id==2" :class="{'iconfont icon-gerenxinxi' : item.id==2}"></i>
            <i v-if="item.id==3" :class="{'iconfont icon-mima' : item.id==3}"></i>
            <i v-if="item.id==4" :class="{'iconfont icon-yunongtongqingchuhuancun' : item.id==4}"></i>
            <van-cell :center="center" :title="item.title"  is-link></van-cell>
        </van-cell-group>
    </div>
</template>
<script>
import '@/assets/css/set.css'
export default {
    data () {
        return {
            center: true,
            list: [
                {title:'修改头像',id:1},
                {title:'修改个人信息',id:2},
                {title:'修改密码',id:3},
                {title:'清除缓存',id:4}
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        refreshto(data){
            console.log(data)
            if(data == 2) {
                this.$router.push({name:'ChangePersonalInformation'})
            }else if(data==3){
                this.$router.push({name:'ChangePassword'})
            }

        }
    }
}
</script>
<style lang="less" scoped>

</style>
