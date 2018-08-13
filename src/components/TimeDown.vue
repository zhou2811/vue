<template>
      <p>{{msg+time}}</p>
</template>
<script>
   export default{
       data () {
           return {
               time : '',
               flag : false,
               msg: '倒计时:',
           }
       },
       mounted () {
           let time = setInterval(()=>{
               if(this.flag == true){
                   clearInterval(time)        
               }
               this.timeDown()
           },1)
       },
       props : {
           endTime : {
               type : String
           },
           endId: {
               type : Number
           }
       },
       methods : {
           timeDown () {
               const endTime = new Date(this.endTime)   
               const nowTime = new Date();
               let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
               let d = parseInt(leftTime/(24*60*60))
               let h = this.formate(parseInt(leftTime/(60*60)%24))
               let m = this.formate(parseInt(leftTime/60%60))
               let s = this.formate(parseInt(leftTime%60))
               if(d>0){
                   this.time = `${d}天${h}小时${m}分${s}秒`
               }
               if(d<=0 && h>0){
                   this.time = `${h}小时${m}分${s}秒`
               }
               if(d<=0 && h<=0){
                   this.time = `${m}分${s}秒`
               }
               if(leftTime<=0){
                   this.flag=true
                   this.msg= ''
                   this.time = '已经结束报名'
                   this.$emit('time-end',this.endId)       
               }
           },
           
           formate (time) {
               if(time>=10){
                   return time
               }else{
                   return `0${time}`
               }
           }
       }
   }
</script>
