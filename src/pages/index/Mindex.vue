<template>
    <div>

    </div>
</template>
<style>

</style>
<script>
    import {
        login,
        taskList
    } from '@/service/request'
    import {
        getCookie,
        setCookie
    } from '@/config/cookie.js'
    import Task from '@/components/Task'
    export default {
        name: "Mindex",
        components: {
            Task,
        },
        data: function () {
            return {
                tasks: [],
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
        mounted: function () {
            if (getCookie("user.username")) {
                this.getTaskList();
                return;
            }
        }
    };

</script>
