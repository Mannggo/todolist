<template>
    <div>
        <el-row class="tac">
            <el-col :span="3" :offset="6">
                <h4>Menu</h4>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo">
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
                <Task class="task" priority='1' 
                    content='阅读半小时课外书' 
                    status='true'
                    time='2018-10-23'>
                </Task>
                <Task class="task" priority='2' 
                    content='俯卧撑20个' 
                    status='true'
                    time='2018-10-23'>
                </Task>
                <Task class="task" priority='3' 
                    content='看美恐第四集' 
                    status='false'
                    time='2018-10-23'>
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
    import {login} from '@/service/request'
    import Task from '@/components/Task'
    export default {
        name: "Index",
        components: {
            Task,
        },
        data: function () {
            return {

            }
        },
        methods: {
            
        },
        created: function() {
            login('xzd', 'xzd');
        }
    };

</script>
