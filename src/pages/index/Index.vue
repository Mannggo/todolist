<template>
    <div>
        <el-row class="tac">
            <el-col :span="6" offset="3">
                <h5>\(^o^)/~</h5>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
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
            <el-col :span="12">
                <h5>↓↓ ↓↓ ↓↓</h5>
                <el-card shadow="hover" :body-style="{ padding: '0px' }">
                    <el-row>
                        <el-col :span="4" class="card-img">
                            <div class="circle-red v-center"></div>
                        </el-col>
                        <el-col :span="16">
                            <div class="card-content v-center">
                                开始！
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="card-operation">
                                ads
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .el-card {
        margin-left: 1rem;
        margin-right: 1rem;
        position: relative;
    }
    .card-img {
        padding-left: 2.5rem;
        height: 5rem;
    }
    .circle-red {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        border: darkgrey solid 0.01rem;

        background: orangered;
    }
    .v-center {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
    .card-content {
        font-size: 1.6rem;
        font-weight: 400;
    }
    .card-operation {

    }
</style>
<script>
    export default {
        name: "Index",
        data: function () {
            return {
                currentDate: new Date()
            };
        },
        methods: {}
    };

</script>
