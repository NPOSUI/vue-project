<template>
    <div id="big">
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
                                <i class="el-icon-user-solid">登录</i>
                            </div>
                        </a>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <div id="ma" :style="cont">
                    <h1>旺财</h1>
                </div>
            </el-main>
            <el-footer>
                <h2>开始时间-2020/12/4</h2>
            </el-footer>
        </el-container>
    </div>
</template>


<script>
    import pro_logo from '../assets/image/pro_logo.jpg'
    export default {
        data(){
            return{
                img_logo: pro_logo,
                options: [{
                    value: 'pro_fruits',
                    label: '水果'
                }, {
                    value: 'pro_cereal',
                    label: '粮食'
                }, {
                    value: 'pro_sea',
                    label: '海鲜'
                }, {
                    value: 'pro_meat',
                    label: '生肉'
                }, {
                    value: 'pro_other',
                    label: '其他'
                }], type_value: '',
                cont:{
                    backgroundImage: "url(" + require("../assets/image/intro_bg.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                }
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: lightskyblue;
        color: #333;
        text-align: center;
        line-height: 20px;
    }

    .el-main {
        background-color: #f9fafc;
        color: #333;
        text-align: center;
        filter: alpha(Opacity = 100);
        -moz-opacity: 1;
        opacity: 1;
    }

    .el-row {
        margin-top: 5px;
    }

    .el-col {

    }

    .el-icon-user-solid {
        margin-top: 10px;
        font-size: 10px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    #ma {
        width: 80%;
        height: 600px;
        margin-left: 120px;
        line-height: 300px;
    }

    .h1, .c1, .c2, .c3, .c4 {
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