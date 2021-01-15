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
                                <i class="el-icon-user-solid">个人中心</i>
                            </div>
                        </a>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <div id="re_ma" :style="cont">
                    <div id="re_fo">
                        <span>
                            <h2>用户登录</h2>
                        </span>
                        <div style="height: 20px"></div>
                        <el-radio-group v-model="labelPosition" size="small">
                            <el-radio-button label="left">左对齐</el-radio-button>
                            <el-radio-button label="right">右对齐</el-radio-button>
                            <el-radio-button label="top">顶部对齐</el-radio-button>
                        </el-radio-group>
                        <div style="height: 20px"></div>
                        <el-form :label-position="labelPosition" label-width="80px" :model="formtestlogin">
                            <el-form-item label="名称">
                                <el-input v-model="formtestlogin.name"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="formtestlogin.password"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码">
                                <el-input v-model="formtestlogin.vc"></el-input>
                            </el-form-item>
                            <el-form-item class="el-radio-button">
                                <el-button type="primary" @click="vlogin('formLabelAlign')" round>登录</el-button>
                                <el-button type="warning" @click="vregister()" round>注册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
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
                    value: 'pro_fruits', label: '水果'
                }, {
                    value: 'pro_cereal', label: '粮食'
                }, {
                    value: 'pro_sea', label: '海鲜'
                }, {
                    value: 'pro_meat', label: '生肉'
                }, {
                    value: 'pro_other', label: '其他'
                }], type_value: '',
                cont:{
                    // backgroundImage: "url(" + require("../assets/image/login_bg.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                },
                labelPosition: 'left',
                formtestlogin: {
                    name:'',
                    password: '',
                    vc: '',
                }
            }
        },
        methods: {
            vlogin(formName){
                this.$refs[formName].validate((valid)=>{
                    if (valid){
                        var data = JSON.stringify(this.formtestlogin);
                        this.$http.post("localhost:8000/login",data).then((response)=>{
                            console.log(response.data);
                        },(response)=>{
                            console.log("error");
                        })
                    }else {
                        console.log("登陆失败！！！");
                        return false;
                    }
                })
            },
            vregister() {
                console.log("去注册");
                this.$route.replace("/register");
            }
        }
    }
</script>

<style lang="less" scoped>
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
    }

    .el-row {
        margin-top: 5px;
    }

    .el-col {

    }

    .el-form{

    }

    .el-icon-user-solid {
        margin-top: 10px;
        font-size: 10px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    #re_ma {
        width: 80%;
        height: auto;
        margin-top: 10px;
        margin-left: 120px;
        padding-top: 50px;
        padding-bottom: 100px;
        border-radius: 20px;
        text-align: center;
    }

    #re_fo {
        width: 60%;
        height: auto;
        margin-left: 20%;
        border-radius: 20px;
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