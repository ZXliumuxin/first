<template>
    <div>
        <h3>Vuex</h3>
        <!-- 获取共享的数据 -->
        <span>子gay今年多少头发:{{$store.getters.getFa}}</span><br/>
        <!-- 加一个按钮，异步修改发量 -->
        <input type="button" value="异步" @click="mclear">
        <!-- 添加一个按钮，减一根 -->
        <input type="button" value="减一根" @click="sub"/>
        <!-- 添加一个按钮，清空 -->
        <input type="button" value="掉光了" @click="clear"/><br/>
        <!-- 添加一个按钮，又长了一根 -->
        <input type="button" value="突然长了一撮" @click="add">
    </div>
</template>
<script>
export default {
    methods:{
        sub(){
            this.$store.commit("subItem")
        },
        clear(){
            this.$store.commit("clear")
        },
        add(){
            this.$store.commit("add")
        },
        mclear(){
            //异步修改共享数据
            this.$store.dispatch("modifyCount")
        }
    }
}
</script>