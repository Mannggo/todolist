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
                        <el-menu-item index="1-1" @click='changeQueryType(2, null, "今天")'>今天</el-menu-item>
                        <el-menu-item index="1-2" @click='changeQueryType(3, null, "明天")'>明天</el-menu-item>
                        <el-menu-item index="1-3" @click='changeQueryType(4, null, "未来七天")'>未来七天</el-menu-item>
                        <el-menu-item index="1-4" @click='changeQueryType(5, null, "未来一月")'>未来一月</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-star-off"></i>
                            <span>Priority</span>
                        </template>
                        <el-menu-item index="2-1" @click='changeQueryType(1, 1, "重要")'>重要</el-menu-item>
                        <el-menu-item index="2-2" @click='changeQueryType(1, 2, "次要")'>次要</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" @click='changeQueryType(6, 1, "Archive")'>
                        <i class="el-icon-sold-out"></i>
                        <span slot="title">Archive</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="9">
                <h3>{{title}}</h3>
                
                <Task v-for="task in tasks" 
                :key="task.id" 
                class="task" 
                :priority='task.priority' 
                :content='task.content' 
                :status='task.status' 
                :time='task.date'
                :id='task.id'
                :date='task.date'
                @delete='getTaskList'
                @complete="getTaskList">
                </Task>
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
    import {getCookie, setCookie} from '@/config/cookie.js' 
    import Task from '@/components/Task'
    export default {
        name: "Index",
        components: {
            Task,
        },
        data: function () {
            return {
                tasks:[],
                index: 1,
                queryType: 2,
                queryValue: 1,
                title: '今天'
            }
        },
        methods: {
            getTaskList() {
                taskList(this.index, 20, this.queryType, this.queryValue).then(resp => {
                    this.tasks = resp.data.dataList;
                })
            },
            changeQueryType(queryType, queryValue, title) {
                this.queryType = queryType
                this.queryValue = queryValue ? queryValue : 1
                this.title = title
                this.getTaskList()
            }
        },
        created: function () {
            if (getCookie("user.username")) {
                this.getTaskList();
                return;
            }
            // 一秒后登录，不然页面卡！
            setTimeout(() => {
                login('xzd', 'xzd').then(resp => {
                    if (resp.code === 0) {
                        this.$notify({
                            title: '登录成功',
                            message: resp.data.nickname + '登录成功',
                            type: 'success'
                        });
                        setCookie("user.username", resp.data.nickname, 24*30);
                        setCookie("user.gender", resp.data.gender, 24*30);
                        setCookie("user.avatar", resp.data.avatar, 24*30);
                        this.getTaskList();
                    }
                });
            }, 1000);
            

        }
    };

</script>
