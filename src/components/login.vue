<template>
    <div>
        <router-link to="/BookList"><el-button type="primary">注册</el-button></router-link>

        <router-link to="/login">登录</router-link>
       
        <el-button type="primary" icon="el-icon-search">搜索</el-button>

         <el-button
            plain
            @click="open1">
            fuck me quickly!
        </el-button>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium"></h3>
          </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '呵呵哒',
          message: h('i', { style: 'color: teal'}, 'wdnmd~~~'),
          duration:1000
        });
      }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background:url(../assets/logo.png) no-repeat;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>