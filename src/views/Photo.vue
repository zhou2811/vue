<template>
    <div class="photo">
        <van-nav-bar
            class="header"
            left-text="相册管理"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-uploader :after-read="onRead" class="upload">
            <img :src="src" alt="">
        </van-uploader>
    </div>
</template>
<script>
import '@/assets/css/photo.css'
export default {
    data () {
        return {
            src: require('../assets/images/upload.png')
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        onRead(file) {       
            this.src= file.content
        }
    }
}
</script>
<style lang="less" scoped>

</style>
