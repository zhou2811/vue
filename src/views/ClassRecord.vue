<template>
    <div class="record">
        <van-nav-bar
            class="header"
            left-text="课程记录"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="wrap">
            <div class="title">
                <van-cell-group>
                    <van-cell title="标题">
                        <template>
                            <input type="text" placeholder="请输入标题">
                        </template>
                    </van-cell>
                </van-cell-group>
            </div>
            <div class="content">
                <h4>内容</h4>
                <div class="text">
                    <textarea maxlength="1000" @input="descInput" v-model="desc" placeholder="写点什么吧!字数限定在1000字以内">
                        
                    </textarea>
                    <div>{{remnant}}/1000</div>
                </div>
                <van-uploader :after-read="onRead" class="upload">
                    <img src="@/assets/images/upload.png" alt="">
                </van-uploader>
                <van-uploader :after-read="onRead" class="upload">
                    <img src="@/assets/images/upload.png" alt="">
                </van-uploader>
            </div>
            <button class="btn">提交课程记录</button>
        </div>
        
        
    </div>
</template>
<script>
import '@/assets/css/record.css'
export default {
    data () {
        return {
            desc: '',
            remnant: 1000
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        onRead(file){
            console.log(file)
        },
        descInput(){
            var txtVal = this.desc.length;
            this.remnant = 1000 - txtVal;
            if(this.desc.length > 1000){
                this.desc.length = 1000    
            }
           
        }
    }
}
</script>
<style lang="less" scoped>

</style>
