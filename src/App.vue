<template>
    <div id="app">
        <el-menu class="el-menu" mode="horizontal" background-color="rgb(232, 95, 95)" text-color="#fff"
            active-text-color="#eee">
            <router-link to="/">
                <div class="title"><b>Todo List</b></div>
            </router-link>
            <el-menu-item style="float:right" index="1" v-if="logined" @click="logout()">注销</el-menu-item>
            <el-menu-item style="float:right" index="2" v-if="logined">
                <router-link to="/settings">设置</router-link>
            </el-menu-item>
            <el-menu-item style="float:right" index="3" v-if="logined" @click="dialogFormVisible = true">+</el-menu-item>
            <el-menu-item style="float:right" index="4" v-else @click="loginFormVisible = true">登录</el-menu-item>
        </el-menu>
        <router-view v-wechat-title='$route.meta.title' ref="child" />
        <el-dialog title="添加一个任务" :visible.sync="dialogFormVisible" width="65%" fullscreen>
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="优先级">
                    <el-select v-model="form.priority" placeholder="优先级">
                        <el-option label="普通" value="3"></el-option>
                        <el-option label="次要" value="2"></el-option>
                        <el-option label="重要" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="任务内容">
                    <el-input v-model="form.content" placeholder="10字以内..." maxlength="10"></el-input>
                </el-form-item>
                <el-form-item label="任务日期">
                    <el-col :span="11">
                        <el-form-item prop="">
                            <el-date-picker :picker-options="pickerOptions1" value-format="yyyy-MM-dd" type="date"
                                placeholder="选择日期" v-model="form.date"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="insertTask()">添加</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog title="登录" :visible.sync="loginFormVisible" fullscreen>
            <el-form :model="loginForm" class="login-form" label-position="left">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-button type="primary" @click="loginFunc()">确 定</el-button>
            </el-form>
                
        </el-dialog>
    </div>
</template>

<script>
    import {
        insertTask, login
    } from '@/service/request.js'
    import {
        delCookie,
        setCookie
    } from '@/config/cookie.js'
    export default {
        name: 'App',
        data: function () {
            return {
                logined: false,
                form: {
                    content: '',
                    date: '',
                    priority: '3'
                },
                loginForm: {
                    username: '',
                    password: ''
                },
                loginFormVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '120px',
                pickerOptions1: {
                    disabledDate(time) {
                        let today = new Date();
                        return time.getTime() < Date.parse(today.getFullYear() + '/' + (today.getMonth() + 1) + "/" +
                            today.getDate())
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '明天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() + 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }]
                },
            }
        },
        methods: {
            insertTask() {
                if (this.form.priority && this.form.content && this.form.date) {
                    insertTask(
                        this.form.priority,
                        this.form.content,
                        this.form.date
                    ).then(resp => {
                        this.form = {}
                        this.dialogFormVisible = false
                        this.$refs.child.getTaskList();
                    });
                }
            },
            loginFunc() {
                login(this.loginForm.username, this.loginForm.password).then(resp => {
                    if (resp.code === 0) {
                        this.$notify({
                            title: '登录成功',
                            message: resp.data.nickname + '登录成功',
                            type: 'success'
                        });
                        console.log(resp.data)
                        setCookie("user.username", resp.data.nickname, 30);
                        setCookie("user.gender", resp.data.gender, 30);
                        setCookie("user.avatar", resp.data.avatar, 30);
                        this.$refs.child.getTaskList();
                        this.loginForm = {};
                        this.loginFormVisible = false;
                        this.logined = true;
                    } else {
                        this.$notify({
                            title: '登录失败',
                            message: resp.desc,
                            type: 'error'
                        });
                    }
                });
            },
            logout() {
                delCookie("user.username");
                delCookie("user.gender");
                delCookie("user.avatar");
                this.logined = false;
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
    .el-form {
        text-align: center;
    }
    .el-form-item {
        width:30%;
        margin: 0 auto;
    }
</style>
