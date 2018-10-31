<template>
    <el-row>
        <el-col :span="6" :offset="9">
            <h4>设置中心</h4>
            <el-form ref="form" :model="form" label-width="80px" label-position="top">
                <el-form-item label="邮件推送">
                    <el-switch v-model="form.remindSwitch"></el-switch>
                </el-form-item>
                <el-form-item label="Email" v-show="form.remindSwitch">
                    <el-input v-model="form.remindEmail" placeholder="someone@x.com"></el-input>
                </el-form-item>
                <el-form-item label="推送频率" v-show="form.remindSwitch">
                    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">每天</el-checkbox>
                    <el-checkbox-group v-model="form.remindDay" @change="handleCheckChange">
                        <el-row>
                            <el-col :span="6">
                                <el-checkbox label="1">星期一</el-checkbox>
                            </el-col>
                            <el-col :span="6">
                                <el-checkbox label="2">星期二</el-checkbox>
                            </el-col>
                            <el-col :span="6">
                                <el-checkbox label="3">星期三</el-checkbox>
                            </el-col>
                            <el-col :span="6">
                                <el-checkbox label="4">星期四</el-checkbox>
                            </el-col>
                            <el-col :span="6">
                                <el-checkbox label="5">星期五</el-checkbox>
                            </el-col>
                            <el-col :span="6">
                                <el-checkbox label="6">星期六</el-checkbox>
                            </el-col>
                            <el-col :span="6">
                                <el-checkbox label="7">星期七</el-checkbox>
                            </el-col>
                        </el-row>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="推送时间" v-show="form.remindSwitch">
                <el-time-select
                    placeholder="请选择时间点"
                    v-model="form.remindTime"
                    :picker-options="{
                    start: '16:30',
                    step: '00:30',
                    end: '23:30'
                    }">
                </el-time-select>
                </el-form-item>
                <br><br>
                <el-form-item>
                    <router-link to="/"><el-button round>返回首页</el-button></router-link>
                    <el-button type="primary" @click="onSubmit" round>保存</el-button>
                </el-form-item>
            </el-form>
            
        </el-col>
    </el-row>
</template>
<script>
    import {getSettings} from '@/service/request'
    let allDays = ['1','2','3','4','5','6','7']
    export default {
        name: 'Settings',
        data() {
            return {
                form: {
                    remindSwitch: false,
                    remindDay: [],
                    remindTime: '17:00'
                },
                checkAll: false,
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleCheckAllChange() {
                this.form.remindDay = this.checkAll ? allDays : [];
            },
            handleCheckChange() {
                this.checkAll = this.form.remindDay.length == 7
            }
        },
        // 这里不能用 () => {} 方式！，不然会拿不到data
        mounted: function() {
            getSettings().then(resp => {
                if (resp.code == 0) {
                    console.log(this.form)
                    this.form = resp.data
                }
            })
        }
    }

</script>
<style>
    .el-form {
        text-align: left;
    }

</style>
