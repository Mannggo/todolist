<template>
    <div id="app">
        <el-menu class="el-menu" mode="horizontal" background-color="rgb(232, 95, 95)" text-color="#fff"
            active-text-color="#eee">
            <div class="title"><b>Todo List</b></div>
            <el-menu-item style="float:right" index="4" v-if="$store.state.logined" @click="loginState()">注销</el-menu-item>
            <el-menu-item style="float:right" index="4" v-if="$store.state.logined">设置</el-menu-item>
            <el-menu-item style="float:right" index="4" v-else @click="loginState()">登录</el-menu-item>
        </el-menu>
        <router-view v-wechat-title='$route.meta.title' />
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        name: 'App',
        methods: {
          ...mapMutations({
              loginState: 'LOGIN_STATE'
          })
        },
        computed:{
        }
    }

</script>

<style>
    #app {
        font-family: Microsoft JhengHei, Segoe UI, Lucida Grande, Helvetica, Arial, Microsoft YaHei, FreeSans, Arimo, Droid Sans, wenquanyi micro hei, Hiragino Sans GB, Hiragino Sans GB W3, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .title {
        font-size: 1.5rem;
        height: 60px;
        line-height: 60px;
        float: left;
        margin-left: 2rem;
        display: inline-block;
        color: antiquewhite
    }

</style>
