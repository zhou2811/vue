<template>
  <label class="ui-radio" :class="{'checked':model==value,'disabled':disabled}">
    <input type="radio" ref="radio" :value="value" @click="updateVal" :disabled="disabled">
  </label>
</template>
<script>
export default {
  name:'ui-radio',
  model: {
    prop: 'model',
    event: 'change'
  },
  props:{
    value:{
      type:[String,Number],
      require:true
    },
    model:{
      type:[String,Number],
      require:true
    },
    checked:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  mounted:function(){
    if(this.checked===true)
      this.updateVal();
  },
  methods:{
    updateVal:function(){
      this.$emit('change',this.$refs.radio.value);
    }
  }
}
</script>
<style>
.ui-radio{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #4693fe;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.ui-radio.disabled{
  border-color: #ccc;
}
.ui-radio::after{
  content: '';
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #4693fe;  
  transition: all .5s ease;
  opacity: 0;
  transform: scale(0);
}
.ui-radio.disabled::after{
  background-color: #ccc;
}
.ui-radio.checked::after {
   opacity: 1;
   transform: scale(1);
}
.ui-radio input[type=radio]{
  opacity: 0;
  margin: 0;
}
</style>
