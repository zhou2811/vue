<template>
    <div class="application-record">
        <van-nav-bar
            class="header"
            left-text="课程申请"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="course-title">
                <span>课程名称 : </span>
                <input type="text" v-model="name" >
            </div>
            <div class="course-desc">
                <span>课程描述 : </span>
                <textarea v-model="desc"></textarea>
            </div>
            <div class="application-reason">
                <span>申请理由 : </span>
                <textarea v-model="reason"></textarea>
            </div>
            <div class="limit-people">
                <h3>人数限制 : </h3>
                <ul class="clearfix">
                    <li>
                        <span>二年级</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>一年级</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>四年级</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>三年级</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>六年级</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>五年级</span>
                        <input type="text">
                    </li>
                </ul>
            </div>
            <div class="declarant">
                <span>课程名称 : </span>
                <input type="text" v-model="msg" >
            </div>
                
            
        </div>
        
        <button class="btn">申请课程</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            name: '',
            msg: '',
            desc: '',
            reason: ''
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
.application-record {
    font-size: 14px;
    background-color: #edf0f5;
    color:#707070;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    padding: 46px 0 50px;   
    .header {
        background-color: #f2f2f2;
        width: 100%;
        position: fixed;
        top: 0;
    }
    .content {
        height: 100%;
        position: relative;
        .course-title,.course-desc,.application-reason,.declarant,.limit-people {
            width: 100%;
            box-sizing: border-box;
            margin-top: 0.24rem;
            padding: 0.1rem 0.46rem;
            background-color: #fff;
            input {
                width: 70%;
            }
        }
        .course-title {
            margin-top: 0.1rem;
            padding: 0.2rem 0.46rem;
        }
        .application-reason,.course-desc  {
            height: 2.5rem;
            // overflow-y: scroll;
            position: relative;
            padding-top: 0.6rem;
            span {
                position: absolute;
                top: 0.1rem;
            }
            textarea {
                text-indent: 2em;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }
        }
        .limit-people {
            padding-bottom: 0;
            h3 {
                font-weight: 400;
                font-size: 14px;
                margin-bottom: 0.3rem;
            }
            ul {
                li {
                    height: 0.8rem;
                    float: right;
                    width: 40%;
                    input {
                        width: 55%;
                        line-height: 0.5rem;
                        background-color: #e1e5e8;
                    }
                }
            }
        }
    }
    .btn {
        bottom:0.3rem;
    }
}
</style>
