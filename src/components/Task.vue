<template>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <el-row>
            <el-col :span="3" class="card-img">
                <div :class="priorityClass"></div>
            </el-col>
            <el-col :span="19" class="card-content">
                <div class="v-center">
                    <span>{{content}}</span>
                </div>
            </el-col>
            <el-col :span="2" class="card-operation">
                <div class="v-center">
                    <el-button type="success" icon="el-icon-check" circle size="mini"></el-button>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: 'Task',
        props:['priority', 'status', 'content'],
        data() {
            return {
            }
        },
        computed: {
            priorityClass: function() {
                return this.priority == 1 ?
                "circle-red v-center": this.priority == 2 ?
                "circle-orange v-center":"circle-commom v-center"
            }
            
        },
        methods: {
            complete() {
                this.status = !this.status
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    .circle-commom {
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
        color:lightgrey;
        font-size: 0.5rem;
    }
</style>
