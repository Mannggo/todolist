<template>
    <div id="app">
        <el-menu class="el-menu" mode="horizontal" background-color="rgb(232, 95, 95)" text-color="#fff"
            active-text-color="#eee">
            <div class="title"><b>Todo List</b></div>
            <el-menu-item style="float:right" index="1" v-if="$store.state.logined" @click="loginState()">注销</el-menu-item>
            <el-menu-item style="float:right" index="2" v-if="$store.state.logined">设置</el-menu-item>
            <el-menu-item style="float:right" index="3" v-if="$store.state.logined" @click="dialogFormVisible = true">+</el-menu-item>
            <el-menu-item style="float:right" index="4" v-else @click="loginState()">登录</el-menu-item>
        </el-menu>
        <router-view v-wechat-title='$route.meta.title' />
        <el-dialog title="添加一个任务" :visible.sync="dialogFormVisible">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="优先级">
                    <el-select v-model="form.priority" placeholder="优先级">
                        <el-option label="普通" value="3"></el-option>
                        <el-option label="重要" value="1"></el-option>
                        <el-option label="次要" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="任务内容">
                    <el-input v-model="form.content" placeholder="10字以内..."></el-input>
                </el-form-item>
                <el-form-item label="任务日期">
                    <el-col :span="11">
                        <el-form-item prop="">
                            <el-date-picker type="date" placeholder="选择日期" 
                            v-model="form.date"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="onSubmit">添加</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex';
    export default {
        name: 'App',
        data: function () {
            return {
                form: {
                    content: '',
                    priority: 3,
                    date: '2016-12-12'
                },
                dialogTableVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '120px'
            }
        },
        methods: {
            ...mapMutations({
                loginState: 'LOGIN_STATE'
            }),
            createTask() {

            }
        },
        computed: {}
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
