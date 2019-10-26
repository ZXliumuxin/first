<template>
    <div>
        <!-- 显示一张图片并且完成切换 -->
        <img :src="focused?selectImage:normalImage" class="imgstyle"/>
    </div>
</template>
<script>
export default {
    props:{
        focused:false,//选中状态
        // 选中显示图片 ，默认显示图片
        selectImage:{default:""},
        normalImage:{default:""}
    }
}
</script>
<style scoped>
    .imgstyle{
        width:30px;
        height:30px;
    }
</style>