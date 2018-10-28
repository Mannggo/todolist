<template>
    <div>
        <el-row class="tac">
            <el-col :span="3" :offset="6">
                <h4>Menu</h4>
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-date"></i>
                            <span>My Tasks</span>
                        </template>
                        <el-menu-item index="1-1">今天</el-menu-item>
                        <el-menu-item index="1-2">明天</el-menu-item>
                        <el-menu-item index="1-3">本周</el-menu-item>
                        <el-menu-item index="1-4">本月</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-star-off"></i>
                            <span>Priority</span>
                        </template>
                        <el-menu-item index="2-1">重要</el-menu-item>
                        <el-menu-item index="2-2">次要</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">
                        <i class="el-icon-sold-out"></i>
                        <span slot="title">Archive</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="9">
                <h3>今天</h3>

                <Task v-for="task in tasks" :key="task.id" class="task" :priority='task.priority' :content='task.content' :status='task.status == 1' :time='task.date'>
                </Task>
                <!-- <Task class="task" priority='2' content='俯卧撑60个' status='true' time='2018-10-23'>
                </Task>
                <Task class="task" priority='3' content='看美恐第四集' status='false' time='2018-10-23'>
                </Task> -->
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .task {
        margin-bottom: 1rem;
    }

</style>
<script>
    import {
        login, taskList
    } from '@/service/request'
    // import {getCookie, setCookie} from '@/config/cookie.js' 
    import Task from '@/components/Task'
    export default {
        name: "Index",
        components: {
            Task,
        },
        data: function () {
            return {
                tasks:[]
            }
        },
        methods: {
            getTaskList: function(index, size, queryType, queryValue) {
                taskList(index, size, queryType, queryValue).then(resp => {
                    this.tasks = resp.data.dataList;
                })
            }
        },
        created: function () {
            // if (getCookie("user.username")) {
            //     // this.getTaskList(1, 20, 2, 1);
            //     return;
            // }
            // 一秒后登录，不然页面卡！
            setTimeout(() => {
                login('xzd', 'xzd').then(resp => {
                    if (resp.code === 0) {
                        this.$notify({
                            title: '登录成功',
                            message: resp.data.nickname + '登录成功',
                            type: 'success'
                        });
                        // setCookie("user.username", resp.data.nickname, 24*30);
                        // setCookie("user.gender", resp.data.gender, 24*30);
                        // setCookie("user.avatar", resp.data.avatar, 24*30);
                        // this.getTaskList(1, 20, 2, 1);
                    }
                });
            }, 1000);
            

        }
    };

</script>
