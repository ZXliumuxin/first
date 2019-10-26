<template>
  <div class="product-app">
    <!--h3>xz/Product.vue 46</h3-->
    <!--一个商品 start-->
    <div class="goods-item" v-for="(item,i) of list" :key="i">
     <!--商品图片!!-->
     <img :src="'http://127.0.0.1:4000/'+item.img_url" />
     <!--商品名称-->
     <div>{{item.lname}}</div>
     <!--商品价格-->
     <div>{{item.price}}</div>
     <!--加入购物车 Product.vue -->
     <mt-button @click="addCart"
      :data-lid="item.lid"
      :data-price="item.price"
      :data-lname="item.lname">
       加入购物车
     </mt-button>
     <!--一个商品 end-->
    </div>
    <!--循环外:查看购物车-->
    <mt-button @click="jumpCart">查看购物车</mt-button>
    <!--循环外:加载更多 16:30-->
    <mt-button type="primary" size="large"
     @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
   data(){
     return {
        list:[], //商品列表数组
        pno:0    //页码(第几页)
     }
   },
   created() {
     this.loadMore();
   },
   methods:{
     jumpCart(){
       this.$router.push("/Cart");
     },
     addCart(event){
       //将商品添加至购物车
       //*1:添加参数event 事件对象
       //*2:获取三个定义属性
       //  输出属性再写后续内容
       var lid = event.target.dataset.lid;
       var lname = 
       event.target.dataset.lname;
       var price = 
       event.target.dataset.price;
       console.log(lid+":"+lname+":"+price);
       //*3:创建url请求服务器地址
       var url="addcart";
       //*4:创建obj添加参数
       var obj={lid,lname,price};
       console.log(obj);
       //*5:发送ajax访问服务器程序
       this.axios.get(url,{params:obj}).then(res=>{
         console.log(res);
         if(res.data.code==-1){
           this.$toast("请登录");
         }else{
           this.$toast("添加成功");
         }
       })
       //6:如果没有登录提示
       //7:如果添加成功提示
     },
     loadMore(){
       //1:创建url
       var url = "product"
       //2:创建obj参数 保存多页
       this.pno++;
       var obj = {pno:this.pno};
       //3:发送axios请求
       this.axios.get(url,{params:obj}).then(res=>{
         //console.log(res);
         //4:接收返回结果并且显示
         //concat
         //this.list = res.data.data;
         //拼接上一页和下一页数组
         var rows = this.list.concat(res.data.data);
         //赋值
         this.list = rows;
       })
     }
   }
   //1:功能一: 当组件创建成功后
   //2:发送ajax请求
   //3:url="product"
   //4:接收返回数据并且显示
}
</script>
<style scoped>
/*1:最外层元素*/
.product-app{
  display: flex;/*弹性布局*/
  /*子元素两端对齐*/
  justify-content: space-between;
  flex-wrap:wrap;/*换行*/
  padding:4px;/*内边距*/
}
/*2:当前商品*/
.goods-item{
 width:49%;/*指定商品宽度*/
 border:1px solid #ccc;/*灰色边*/
 border-radius: 5px;/*圆角*/
 margin:2px 0;/*外边距*/
 padding:2px;/*内边距*/
 box-sizing: border-box;/*计算宽度*/
 display: flex;/*弹性布局*/
 flex-direction: column;/*按列排*/
 min-height: 247px;/*最小高度*/
}
/*3:当前商品图片*/
.goods-item img{
  width:100%;
}
</style>

