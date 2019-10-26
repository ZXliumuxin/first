<template>
    <div>
        <!-- 消息MessageList.vue -->
        <!-- 1.一条消息 -->
        <div class="rootstyle" v-for="(item,index) of list.data" :key="index">
            <!-- 1.1左侧一组【图片、标题】 -->
            <div class="leftimgtxt">
                <!-- 1.1.1左侧的图片 -->
                <img :src="require('../../../assets/tblogo.png')" class="imgstyle">
                <!-- 1.1.2左侧的标题 -->
                <div class="txtstyle">
                    <span class="title">{{item.title}}</span>
                    <span class="subtitle">{{item.subtitle}}</span>
                </div>
            </div>
            <!-- 1.2右侧时间 -->
            <span class="sendtime">
                {{item.time}}
            </span>
        </div>
        <!-- 读取数据文件json -->
        <!-- 创建循环显示消息内容 -->
    </div>
</template>
<script>
// 1.引入一个json文件
import mlist from "../json/messagelist.json"
    export default {
        data(){
            return {
                //将读取的数据保存到list，显示
                list:mlist
            }
        }
    }
</script>
<style scoped>
    /*1.一条消息*/
    /* 1.1父元素 弹性布局 */
    .rootstyle{
        display:flex;/*弹性布局*/
        justify-content: space-between;/*两单对齐*/
        align-items: center;/*垂直居中*/
    }
    /* 1.2左侧图片与标题 */
    .leftimgtxt{
        display:flex;/*弹性布局*/
        align-items: center;/*垂直居中*/
    }
    /* 1.3修改图片的样式 */
    .imgstyle{
        width:50px;
        height:50px;
    }
    /* 1.4标题布局 */
    .txtstyle{
        display:flex;/*弹性布局*/
        flex-direction: column;/* 子元素排列方式：列 */
        justify-content: center;/* 水平居中 */
        margin-left:7px; /*左侧外边距离：与图片之间距离*/
    }
    /* 1.5标配体的样式 */
    .title{
        color:#000; /*标题颜色*/
        font-size:17px;/*字体大小*/
    }
    /* 1.6子标题样式 */
    .subtitle{
        color:gray; /*标题颜色*/
        font-size:14px; /*字体大小*/
    }
    /* 1.7发送时间 */
    .sendtime{
        color:gray; /*标题颜色*/
    }
</style>