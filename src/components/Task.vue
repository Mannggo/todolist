<template>
    <el-collapse-transition>
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <el-tooltip class="item" effect="dark" :content="dateStr" placement="right">
                <el-row>

                    <el-col :span="3" class="card-img">
                        <div :class="priorityClass"></div>
                    </el-col>

                    <el-col :span="17" class="card-content">
                        <div class="v-center">
                            <span :class="deleteLine">{{content}}{{status == 0 ? '' : '(已完成)'}}</span>
                        </div>
                    </el-col>
                    <el-col :span="4" class="card-operation" v-if='status == 0'>
                        <div class="v-center">
                            <el-button type="success" icon="el-icon-check" circle size="mini" @click="completeTask"></el-button>
                            &nbsp;
                            <el-popover placement="top" width="160" v-model="isDialogShow">
                                <p>你不要我了吗?╥﹏╥...</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click="isDialogShow = false">取消</el-button>
                                    <el-button type="danger" size="mini" @click="delTask()">是的</el-button>
                                </div>
                                <el-button type="danger" icon="el-icon-delete" circle size="mini" slot="reference"></el-button>
                            </el-popover>
                        </div>
                    </el-col>
                </el-row>
            </el-tooltip>
        </el-card>
    </el-collapse-transition>
</template>

<script>
    import {
        deleteTask,
        completeTask
    } from '@/service/request.js'
    export default {
        name: 'Task',
        props: ['priority', 'status', 'content', 'id', 'status', 'date'],
        data() {
            return {
                isBtnShow: false,
                isDialogShow: false
            }
        },
        computed: {
            priorityClass: function () {
                return this.priority == 1 ?
                    "circle-red v-center" : this.priority == 2 ?
                    "circle-orange v-center" : "circle-common v-center"
            },
            deleteLine: function () {
                return this.status == 0 ? "" : "deleteLine"
            },
            dateStr: function () {
                return this.date.substring(0, 10)
            }

        },
        methods: {
            complete() {
                this.status = !this.status
            },
            delTask() {
                deleteTask(this.id).then(resp => {
                    if (resp.code == 0)
                        this.$emit('delete');
                    else
                        this.$message('出错了哦！(ρ_・).。');
                })
            },
            completeTask() {
                completeTask(this.id).then(resp => {
                    this.$emit('complete');
                })
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .deleteLine {
        text-decoration-line: line-through;
        font-style: italic;
    }

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
        border: rgb(83, 81, 81) solid 0.08rem;

        background: #F56C6C;
    }

    .circle-orange {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        border: rgb(83, 81, 81) solid 0.08rem;
        background: #E6A23C
    }

    .circle-common {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        border: rgb(83, 81, 81) solid 0.08rem;
        background: grey;
    }

    .circle-red {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        border: rgb(83, 81, 81) solid 0.08rem;
        background: orangered;
    }

    .v-center {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }

    .card-content {
        font-size: 1.4rem;
        font-weight: 500;
        color: #999999;
        height: 5rem;
    }

    .card-operation {
        height: 5rem;
    }

    .check {
        color: lightgrey;
        font-size: 0.5rem;
    }

</style>
