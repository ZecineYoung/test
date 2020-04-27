<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view style="padding-bottom:55px" />
    <mt-tabbar v-model="selected" :fixed="true">
  <mt-tab-item id="takeout">
    <img slot="icon" src="../static/image/1.jpg">
    外卖
  </mt-tab-item>
  <mt-tab-item id="order">
    <img slot="icon" src="../static/image/2.jpg">
    订单
  </mt-tab-item>
  <mt-tab-item id="find">
    <img slot="icon" src="../static/image/3.jpg">
    发现
  </mt-tab-item>
  <mt-tab-item id="mine">
    <img slot="icon" src="../static/image/4.jpg">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:"takeout"
    }
  },
  created(){
    // console.log(this.$router.options)
  },
  watch:{
    selected(val,oldVal){
      if(val === "takeout"){
        // console.log(val)
        // this.$router.options.push({path:'TakeOut'})
        this.$router.replace('/TakeOut')
      }else if(val === "order"){

        this.$router.replace('/order')

      }else if(val === "find"){

        this.$router.replace('/find')
      }else if(val === "mine"){

        this.$router.replace('/mine')
      }
    }
  }
}
</script>
  
<style>
body {
        background-color: rgb(159, 231, 149);
    }
</style>
