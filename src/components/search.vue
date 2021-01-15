<template>
<div id="se_max">
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="3">
                    <a href="http://localhost:8080">
                        <div class="h1">
                            <img class="auto-img ab" :src="img_logo"/>
                        </div>
                    </a>
                </el-col>
                <el-col :span="3">
                    <div class="h1">
                        <el-select v-model="type_value" placeholder="产品类型">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="3">
                    <a href="http://localhost:8080/#/intro">
                        <div class="h1">关于</div>
                    </a>
                </el-col>
                <el-col :span="12">
                    <div class="h2">
                        <el-row :gutter="0">
                            <el-col :span="20">
                                <el-input v-model="input" placeholder="请输入搜索内容">
                                </el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-button icon="el-icon-search" circle></el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="3">
                    <a href="http://localhost:8080/#/register">
                        <div class="h1">
                            <i class="el-icon-user-solid">个人中心</i>
                        </div>
                    </a>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <h2>asider</h2>
            </el-aside>
            <el-container>
                <el-main>
                    <h2>main</h2>
                </el-main>
                <el-footer>
                    <h2>开始时间2020/12/4</h2>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    .el-container {
        border: 1px slateblue solid;
        border-radius: 5px;
    }
    .el-header, .el-footer, .el-aside{
        background-color: lightskyblue;
        color: #333;
        text-align: center;
        line-height: 20px;
    }

    .el-main {
        background-color: #f9fafc;
        color: #333;
        text-align: center;
        filter: alpha(Opacity=100);
        -moz-opacity: 1;
        opacity: 1;
    }

    .h1 {
        border: 1px dodgerblue solid;
        border-radius: 10px;
        color: #333;
        text-align: center;
    }

    .h1 {
        min-width: 100px;
        height: 50px;
        line-height: 45px;
    }
</style>
