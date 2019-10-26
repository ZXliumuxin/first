<template>
    <div>
        <!-- <h3>购物车</h3> -->
        <!-- 顶部复选框  全选-->
        <div>
            全选<input type="checkbox" @change="selectAll" v-model="allcb"/>
        </div>
        <!-- 中间复选框  商品名/价格/删除-->
        <div class="cart-item" v-for="(item,i) of list" :key="i">
            <div class="leftText">
                <input type="checkbox" v-model="item.cb" @change="itemchange"/>
                <div class="lname">{{item.lname}}</div>
                <div class="price">{{item.price}}</div>
            </div>
                <mt-button @click="del" :data-id="item.id">删除</mt-button>
        </div>
        <!-- 3删除选中商品的复选框 -->
        <div>
            购物车中商品的数量
            <span style="color:red">{{$store.getters.getCart}}</span>
            <mt-button @click="delm">删除选中的商品</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],//购物车列表
            allcb:false//全选按钮状态
        }
    },
    created(){//添加生命周期
        this.loadMore();
    },
    methods:{
        itemchange(){//商品复选框状态修改
            // 1.累加商品状态
            // 2.创建变量
            // 3.创建循环遍历商品状态
            var sum=0;
            for (var item of this.list){
                if(item.cb){
                    sum++;
                }
            }
            console.log(sum);
            console.log(this.list.length);
            // 4.如果true变量数据加一
            // 5.如果选中数量与数组相同，将全选allcb=true
            if(sum==this.list.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
        },
        delm(){
            // 1.显示一个交互的提示框，请用户再确认一次是否删除
            this.$messagebox.confirm("是否删除指定的商品")
            // 2.确认选择
            .then(res=>{
            // 3.创建空字符串
            var str="";
            // 4.创建循环，遍历list数组，判断如果当前对象cb值为true将对象id拼接
            for(var item of this.list){
                if(item.cb){
                    str+=item.id+","
                }
            }
            // 5.判断用户是否选中商品，提示请选择要删除的商品
            if(str.length==0){
                this.$messagebox("请选择要删除的商品");
                return;
            }
            str=str.substring(0,str.length-1);
            console.log(str);
            // 创建url创建obj
            var url="delm";
            var obj={id:str};
            // 发送ajax请求
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res);
                if(res.data.code > 0){
                    // 7.提示删除成功
                    this.$toast("删除成功");
                    // 8.重新调用loadMore
                    this.loadMore();
                    } 
            })
            // 在新加载购物车列表
            // 提示删除成
            }).catch(err=>{
                
            })
        },
        selectAll(event){
            // 1.添加参数event
            // 2.获取当前、全选按钮的状态
            var all=event.target.checked;
            // 3.赋值所有商品cb
            console.log(all);
            for (var item of this.list){
                item.cb=all;
            }
        },
        del(event){
            // 1.为删除按钮添加自定义属性
            // 2.添加点击事件
            // 2.1添加交互提示：是否删除
            this.$messagebox.confirm("是否删除指定商品").then(res=>{
            //回调函数
                // 3.获取当前商品的id
                var id=event.target.dataset.id;
                // 4.输出id
                console.log(id);
                // 5.发送ajax请求
                var url="del";
                var obj={id}
                this.axios.get(url,{params:obj}).then(res=>{
                // 6.获取服务器端返回数据
                    console.log(res);
                    if(res.data.code > 0){
                    // 7.提示删除成功
                    this.$toast("删除成功");
                    // 8.重新调用loadMore
                    this.loadMore();
                    } 
                })
            }).catch(err=>{
                
            })
        },
        loadMore(){
            // 1.创建URl
            var url="findcart";
            // 2.发送ajax请求获取购物车
            this.axios.get(url).then(res=>{
                console.log(res.data.code);
                if(res.data.code==-1){
                    //提示交互提示框
                    this.$messagebox("消息","请登录").then(res=>{
                        //跳转到登录的组件
                        this.$router.push("/Login");
                    })
                }else{
                    //（1）.为每个商品添加状态
                    //res变量data属性data数组
                    var list=res.data.data
                    for(var item of list){
                        item.cb=false;
                    }
                    //（2）赋值
                    this.list=list;
                    // （2.9）加载之前先清空
                    this.$store.commit("clearCart")
                    // （3）创建循环遍历数组
                    for (var item of this.list){
                    // （4）修改购物车数量
                    this.$store.commit("addCart");
                    }
                }
            })
            // 3.将服务器返回数据保存list
        }
    }
}
</script>
<style>
    .cart-item{
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #ccc;
        margin-top:25px;
    }
    /* 左侧复选框文字弹性布局 */
    .leftText{
        display:flex;/*弹性布局*/
        align-items: center;/*垂直居中*/
    }
    .lname{
        margin-left:25px;
        color:#333;
    }
    .price{
        margin-left:25px;
        color:red;
    }
</style>