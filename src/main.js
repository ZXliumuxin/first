import Vue from 'vue'
import App from './App.vue'
import router from './router'

//#删除5~16内容 
//功能:引入第三方组件库mint-ui
//1:完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//2:单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui注册vue实例 14:15
Vue.use(MintUI)
//4:引入字体图标文件 main.js
import "./font/iconfont.css"
//5:引入axios模块
import axios from "axios"
//6:配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//7:配置保存session信息
axios.defaults.withCredentials=true
//8:axios 注册vue
Vue.prototype.axios = axios
// 9.引入vuex的第三方模块
import Vuex from "vuex"
// 10.先注册vuex
Vue.use(Vuex)
// 11.创建一个存储对象
var store =new Vuex.Store({
  state:{   //共享：数据
    fa:12,     //共享：亮哥头发
    cartCount:0   //共享：购物车数量
  },
  mutations:{
    addCart(state){
      state.cartCount++;  //加一
    },
    clearCart(state){
      state.cartCount=0;  //清空
    },
    cartItem(state){
      state.cartCount--; //减一
    },
    subItem(state){
      state.fa--;   //一次减一根
      state.cartCount--;  //减一
    },
    clear(state){
      state.fa=0;    //清空
      state.cartCount=0;  //清空
    },
    add(state){
      state.fa+=1;   //长了一撮
      state.cartCount++;
    },
  },
  getters:{ //获取共享数据
    getCart(state){
      return state.cartCount;
    },
    getFa(state){//异步修改数据
      return state.fa;
    }
  },
  actions:{
    modifyCount:(context)=>{
      //模拟异步操作
      setTimeout(()=>{
        //调用mutation方法
        context.commit("clear");
      },2000)
    }
  }
})
// 12.将储存对象添加vue对象

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
