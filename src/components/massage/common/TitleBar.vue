<template>
<div class="page-head">
    <!-- 子组件 -->
    <!-- 左侧文字  ----微信(1) -->
    <span>微信({{msg}})</span>
    <!-- 右侧图片 -->
    <div class="right-head">
    <div class="imgdiv">
        <img :src="rightFirstImg" alt="" style="width:25px;">
        
    </div>
    <div class="imgdiv" style="margin-left:20px;">
        <img :src="rightSecondImg" alt="" style="width:25px;margin-right:20px;">
    </div>
    </div>
</div>
</template>
<script>
    export default {
        props:{
            msg:{default:""},
            rightFirstImg:{default:""},
            rightSecondImg:{default:""}
        }
    }
</script>
<style scoped>
/* scoped防止多个组件之间样式冲突 */
/* scoped自动为选择器添加随机器  */
    /* 1.修改最外层样式  弹性布局 */
    .page-head{
        display:flex;/*弹性布局*/
        position:fixed;/*顶部导航固定*/
        z-index:999;/*显示在元素上面*/
        width:100%;/*宽度100%*/
        justify-content:space-between;/*两端对齐*/
        align-items:center;/*水平居中*/
        background-color:#3e3a39;/*背景颜色*/
        height:49px;/*高度49*/
        padding-left:7px;/*左右内边距*/
        padding-right:7px;
        color:#fff;/*颜色*/
        font-size:18px;/*文字大小*/
    }
    /* 2.修改右侧图片 */
    .right-head{
        display:flex;/*弹性布局*/
    }
    /* 3.图片单独处理 */
    .imgdiv{
        display:flex;/*弹性布局*/
        align-items:center;/*水平居中*/
        height:48px;/*高度48*/
    }

</style>