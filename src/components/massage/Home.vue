<template>
    <div>
        <!-- 父组件 -->
        <!-- 调用子组件 -->
        <titlebar msg="99+" :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')"></titlebar>
        <!-- 2.面板/切换不同的内容 -->
        <mt-tab-container v-model="active">
            <!-- 2.1子面板 -->
            <mt-tab-container-item id="tab">
                <messagelist></messagelist>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 3.底部的导航条 -->
        <mt-tabbar fixed v-model="active">
            <!-- 第一个按钮---微信 -->
            <!-- <img :src="require('../../assets/ic_wallet.png')" alt=""> -->
            <mt-tab-item id="tab" @click.native="changeState(0)">
                <tabbaricon :focused="list[0].isSelect" 
                    :selectImage="require('../../assets/ic_weixin_selected.png')" 
                    :normalImage="require('../../assets/ic_weixin_normal.png')">
                </tabbaricon>
                微信
            </mt-tab-item>
            <mt-tab-item id="tab1" @click.native="changeState(1)">
                <tabbaricon :focused="list[1].isSelect" 
                    :selectImage="require('../../assets/ic_contacts_selected.png')" 
                    :normalImage="require('../../assets/ic_contacts_normal.png')">
                </tabbaricon>
                通讯录
            </mt-tab-item>
            <mt-tab-item id="tab2" @click.native="changeState(2)">
                <tabbaricon :focused="list[2].isSelect" 
                    :selectImage="require('../../assets/ic_find_selected.png')" 
                    :normalImage="require('../../assets/ic_find_normal.png')">
                </tabbaricon>
                发现
            </mt-tab-item>
            <mt-tab-item id="tab3" @click.native="changeState(3)">
                <tabbaricon :focused="list[3].isSelect" 
                    :selectImage="require('../../assets/ic_me_selected.png')" 
                    :normalImage="require('../../assets/ic_me_normal.png')">
                </tabbaricon>
                我
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    // 1.引入子组件TitleBar.vue
    import TitleBar from "./common/TitleBar";
    import MessageList from "./common/MessageList";
    import TabbarIcon from "./common/TabbarIcon"
    export default {
        data (){
            return {
                //保存当前显示子面板id
                active:"tab",
                // 创建数组保存tabbar状态
                list:[
                    {isSelect:true},//微信
                    {isSelect:false},//通讯录
                    {isSelect:false},//发现
                    {isSelect:false}//我
                ]
            }
            },
            methods:{
                changeState(idx){
                    // 创建循环遍历数组状态
                    for (var i=0;i<this.list.length;i++){
                        // 判断当前下标是否与当前参数下标相同
                        if(i==idx){
                        // 修改当前数组状态true
                        this.list[i].isSelect=true;
                        }else{
                        // 其它修改为false
                        this.list[i].isSelect=false;
                        }
                    }
                }
        },
        // 2.注册子组件
        components:{
            "titlebar":TitleBar,
            "messagelist":MessageList,
            "tabbaricon":TabbarIcon
        }
    }
</script>
<style scoped>
    /* 修改tabbar中默认和选中文字 */
    /* 文字颜色 */
    .mint-tabbar > .mint-tab-item{
        color:#999999
    }
    /* 选中文字颜色 */
    .mint-tabbar > .mint-tab-item.is-selected{
        background-color:transparent;
        color:#45c018
    }
</style>