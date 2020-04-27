<template>
    <div class="grid">
        <h1>图书管理</h1>
        <div class="book">
          <div>
            <label>
              编号：
            </label>
            <input type="text" id="id" v-model='id' :disabled="flag">
            <label>
              名称：
            </label>
            <input type="text" id="name" v-model='name'>
            <button @click='handle'>提交</button>
          </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>名称</th>
                    <th>时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tr v-for="item in books" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.data}}</td>
                <td>
                    <a href="" @click.prevent="toEdit(item.id)">修改</a>
                    <span>|</span>
                    <a href="" @click.prevent="toDelete(item.id)">删除</a>
                </td>
            </tr>
        </table>
        <router-link to="/login">返回</router-link>
    </div>
</template>

<script>
export default {
    data (){
        return{
            flag:false,
            id:'',
            name:'',
            books: [{
            id: 1,
            name: '三国演义',
            date: ''
            },{
            id: 2,
            name: '水浒传',
            date: ''
            },{
            id: 3,
            name: '红楼梦',
            date: ''
            },{
            id: 4,
            name: '西游记',
            date: ''
            }]
        }
        
    },
    methods:{
        handle(){
            if(this.flag){
                this.books.some( item =>{   //返回一个布尔值
                    if(item.id == this.id){
                        item.name = this.name;
                        return true;
                    }
                }); 
                this.flag = false;

            }else{
                var book={};
                book.id=this.id;
                book.name=this.name;
                book.data=this.data;
                this.books.push(book);
            }
            this.id = '';
            this.name = '';

        },
        toEdit(id){
            this.flag = true;
            console.log(id);
            var book = this.books.filter(item => item.id == id); //返回一个新数组
            console.log(book);
            console.log(this)
            this.id = book[0].id;
            this.name = book[0].name;
        },
        toDelete(id){
            this.books=this.books.filter(function (item) {
                console.log(item)
                return item.id != id;
            })
        }
    }
    
}
</script>

<style scoped>
    .book{
        background-color: rgb(209, 184, 138);
        padding: 10px;
    }
    .grid{
        width: 500px;
        margin:auto;
    }
    table {
        width: 100%;   
            
        border-collapse: collapse;
    }
    table tr,td{
        
        border:1px dashed orange;
        padding:10px;
    }
    table thead tr,th{
        background-color: orange;
        padding: 10px;
    }
</style>