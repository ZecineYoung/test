<template>    
    <div>
        <mt-search v-model="value" placeholder="请搜索您想吃的食物~"></mt-search>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in items" :key="index">
                <img :src="item.image" width="359.2" height="200" />
            </mt-swipe-item>   
        </mt-swipe>
        <div class="banner">
            <div class="food-title">美食推荐</div>
            <div class="food-one">
                <div class="food-one-pic"><img src="../../static/image/food4.jpeg" /></div>
                <div class="food-one-font">超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃</div>
            </div>
            <div class="food-one">
                <div class="food-one-pic"><img src="../../static/image/food4.jpeg" /></div>
                <div class="food-one-font">超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃</div>
            </div>
            <div class="food-one">
                <div class="food-one-pic"><img src="../../static/image/food4.jpeg" /></div>
                <div class="food-one-font">超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃</div>
            </div>
            <div class="food-one">
                <div class="food-one-pic"><img src="../../static/image/food4.jpeg" /></div>
                <div class="food-one-font">超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃超级好吃</div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            value:"",
            items:[
                {index:1,image:"../static/image/food1.jpeg"},
                {index:2,image:"../static/image/food2.jpg"},
                {index:3,image:"../static/image/food3.jpeg"}
            ]
        }
    }
}
</script>

<style scoped>

 .mint-swipe{
     height: 200px;
     border-radius: 10px;
     /* margin-left:10px;
     margin-right:10px;  */
     margin-top:10px;
 }
 .mint-search{
     margin-top: 20px;
     height: 56px;
     border-radius: 25px;
 }
 .banner{
     margin-top: 10px;
 }
 .food-title{
     width: 100%;
     font-size: 19px;
     font-weight: 500;
     background-color: lightblue;
     color: white;
     padding-left: 10px;
     border-radius: 2px;
     box-shadow: 2px 2px 0 0 black;
     box-sizing: border-box;
 }
 .food-one{
     margin-top: 8px;
     display: flex;
     overflow: hidden;
     background-color: rgba(87, 170, 112, 0.295);
 }
 .food-one img{
     max-width: 100%;
     background-size: 100% 100%;
 }
 .food-one-pic{
     width: 50%;
     line-height: 50%;
 }
 .food-one-font{
     padding: 10px;
     width: 50%;
     margin:0 auto;
 }
</style>
