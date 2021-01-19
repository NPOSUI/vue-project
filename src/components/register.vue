<template>
    <div id="big">
        <el-container>
            <div id="he">
                <el-header>
                    <el-row :gutter="20">
                        <el-col :span="3">
                            <a href="http://localhost:8080">
                                <div class="h1">
                                    <img class="auto-img ab" :src="img_logo" />
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
            </div>
            <div id="ma">
                <el-main>
                    <div class="leftLR">
                        <!--                        莺莺燕燕翠翠红红处处融融洽洽-->
                    </div>
                    <div class="sp_border">
                        <div id="lr_ma">
                            <div class="LR">
                                <div class="LoRe" @click="popLo">
                                    登录
                                </div>
                                <div class="LoRe" @click="popRe">
                                    注册
                                </div>
                            </div>
                            <div class="bigLR">
                                <div class="lr_lo">
                                    <el-form label-width="80px" :model="formLogin" ref="formLogin" :rules="loginRules" :hidden="isActive_lo">
                                        <el-form-item label="名称" prop="name">
                                            <el-input v-model="formLogin.name"/>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input v-model="formLogin.password"/>
                                        </el-form-item>
                                        <el-form-item label="验证码">
                                            <el-input v-model="formLogin.vc"/>
                                        </el-form-item>
                                        <el-form-item class="el-radio-button">
                                            <el-button type="primary" @click="vLogin('formLogin')" round>登录</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="lr_re">
                                    <el-form label-width="80px" :model="formRegister" ref="formRegister" :rules="registerRules" :hidden="isActive_re">
                                        <el-form-item label="名称" prop="name">
                                            <el-input v-model="formRegister.name"/>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input v-model="formRegister.password"/>
                                        </el-form-item>
                                        <el-form-item label="确定密码" prop="repassword">
                                            <el-input v-model="formRegister.repassword"/>
                                        </el-form-item>
                                        <el-form-item label="邮箱" prop="email">
                                            <el-input v-model="formRegister.email"/>
                                        </el-form-item>
                                        <el-form-item label="电话" prop="tel">
                                            <el-input v-model="formRegister.tel"/>
                                        </el-form-item>
                                        <el-form-item label="地址" prop="address">
                                            <el-input v-model="formRegister.address"/>
                                        </el-form-item>
<!--                                        <el-form-item label="验证码">-->
<!--                                            <el-input v-model="formRegister.vc"/>-->
<!--                                        </el-form-item>-->
                                        <el-form-item class="el-radio-button">
                                            <el-button type="primary" @click="vRegister('formRegister')" round>
                                                注册
                                            </el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rightLR">
<!--                        雨雨风风花花叶叶年年暮暮朝朝-->
                    </div>
                </el-main>
            </div>
            <el-footer>
                <h2>
                    开始时间-2020/12/4
                </h2>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import pro_logo from '../assets/image/pro_logo.jpg';
    import * as axios from "axios";
    export default {
        data() {
            const validateName_lo = (rule, value, callback) => {
                if (!value){
                    return callback(new Error('请输入用户名！'))
                }else {
                    return callback()
                }
            };
            const validatePassword_lo = (rule, value, callback) => {
                if (!value){
                    return callback(new Error('请输入密码！'))
                }else {
                    return callback()
                }
            };
            const validateName = (rule, value, callback) => {
                if (value.length<3 || value.length>20){
                    return callback(new Error('用户名太短或太长！'))
                }else {
                    return callback()
                }
            };
            const validatePassword = (rule, value, callback) => {
                if (value.length<6 || value.length>20){
                    return callback(new Error('密码太短或太长！'))
                }else {
                    return callback()
                }
            };
            const validateRepassword = (rule, value, callback) => {
                if (!value){
                    return callback(new Error('请再次输入密码！'))
                }else if (value!==this.formRegister.password){
                    return callback(new Error('两次输入的密码不一致！'))
                }else {
                    return callback()
                }
            };
            const validateEmail = (rule, value, callback) => {
                let reg = /^.*@.*\.com[.cn]*$/;
                if (!value){
                    return callback(new Error('请输入email！'))
                }else if (!reg.test(value)){
                    return callback(new Error('无效的email！'))
                }else {
                    return callback()
                }
            };
            const validateTel = (rule, value, callback) => {
                let reg = /^[0-9]{11}$/;
                if (!value){
                    return callback(new Error('请输入电话！'))
                }else if (!reg.test(value)){
                    return callback(new Error('无效的电话号码！'))
                }else {
                    return callback()
                }
            };
            const validateAddress = (rule, value, callback) => {
                if (value.length<5 || value.length>50){
                    return callback(new Error('地址太短或者太长！'))
                }else {
                    return callback()
                }
            };

            return{
                img_logo: pro_logo,
                input: '',
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
                isActive_lo: true,
                isActive_re: false,
                formLogin: {
                    name: '',
                    password: '',
                    vc: '',
                },
                formRegister: {
                    name: 'zhangsan',
                    password: 'abc123456',
                    rpassword: 'abc123456',
                    email: '123@qq.com',
                    tel: '12345678910',
                    address: 'afasfdasf',
                },
                loginRules: {
                    name: [{required: true, validator: validateName_lo, trigger: 'blur'}],
                    password: [{required: true, validator: validatePassword_lo, trigger: 'blur'}],
                },
                registerRules: {
                    name: [{required: true, validator: validateName, trigger: 'blur'}],
                    password: [{required: true, validator: validatePassword, trigger: 'blur'}],
                    repassword: [{required: true, validator: validateRepassword, trigger: 'blur'}],
                    email: [{required: true, validator: validateEmail, trigger: 'blur'}],
                    tel: [{required: true, validator: validateTel, trigger: 'blur'}],
                    address: [{required: true, validator: validateAddress, trigger: 'blur'}],
                },
            }
        },
        methods: {
            // 下面两个沙雕方法，改tm进
            popLo() {
                if (this.isActive_lo === true) {
                    this.isActive_lo = !this.isActive_lo;
                    if(this.isActive_re === false){
                        this.isActive_re = !this.isActive_re;
                    }
                }
            },
            popRe() {
                if (this.isActive_re === true) {
                    this.isActive_re = !this.isActive_re;
                    if(this.isActive_lo === false){
                        this.isActive_lo = !this.isActive_lo;
                    }
                }
            },
            vLogin(formLogin) {
                let data = JSON.stringify(this.formLogin);
                console.log(data);
                this.$refs[formLogin].validate((valid) => {
                    if (valid) {
                        axios({
                            method: "post",
                            url: "http://localhost:8000/login/",
                            data: JSON.stringify(this.formLogin),
                            responseType: 'JSON',
                        }).then(function (response) {
                            console.log(response)
                        })
                    }
                })
            },
            vRegister(formRegister) {
                let data = JSON.stringify(this.formRegister);
                console.log(data);
                this.$refs[formRegister].validate((valid) => {
                    console.log("他妈的搞事！！！");
                    if (valid) {
                        // let url = "http://localhost:8000/register/";
                        // let data = JSON.stringify(this.formRegister);
                        // this.$http.post(url, data).then ((response) => {
                        //     if (response.data.status !== 200){
                        //         console.log(response.data);
                        //     }else {
                        //         this.$route.push("/register");
                        //     }
                        // })

                        axios({
                            method: "post",
                            url: "http://localhost:8000/register/",
                            data: JSON.stringify(this.formRegister),
                            responseType: 'JSON',
                        }).then(function (response) {
                            console.log(response)
                        })
                    }else {
                        console.log("VALID验证不通过，登陆失败");
                        return false
                    }
                })
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/H_M_F.css";
    @import "../assets/css/common.css";

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

    #lr_ma, #lr_ma::before, #lr_ma::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    #lr_ma {
        width: 550px;
        height: 680px;
        margin-top: 105px;
        margin-left: 355px;
        border-radius: 10px;
        border: yellow 5px double;
        box-sizing: border-box;
        text-align: center;
        float: left;
    }

    #lr_ma::before, #lr_ma::after {
        content: '';
        z-index: 0;
        margin: -2%;
        /*box-shadow: inset 0 0 0 2px;*/
        border: deepskyblue 3px solid;
        border-radius: 10px;
        box-sizing: border-box;
        animation: clipMe 4s linear infinite;
    }

    #lr_ma::before {
        animation-delay: -2s;
    }

    @keyframes clipMe {
        0%, 100% {
            clip: rect(0px, 650.0px, 50px, 0px);
        }
        25% {
            clip: rect(0px, 650.0px, 800.0px, 648.0px);
        }
        50% {
            clip: rect(798.0px, 650.0px, 800.0px, 0px);
        }
        75% {
            clip: rect(0px, 50px, 800.0px, 0px);
        }
    }

    .leftLR, .rightLR {
        width: 20%;
        height: 700px;
        margin-top: 10px;
        border-radius: 20px;
        border: orangered 5px double;
        box-sizing: border-box;
        background-size: 300px;
        background-repeat: no-repeat;
        /*实现字体垂直效果*/
        /*color: crimson;*/
        /*font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;*/
        /*font-size: 45px;*/
        /*text-align: center;*/
        /*writing-mode: vertical-lr;*/
        /*line-height: 210px;*/
        /*font-weight: 900;*/
    }

    .leftLR {
        background-image: url("../assets/image/22bg.jpg");
        background-position-x: 40%;
        float: left;
    }

    .rightLR {
        background-image: url("../assets/image/33bg.jpg");
        background-position-x: 20%;
        float: right;
    }

    .LR {
        width: 40%;
        height: 30px;
        margin-top: 20px;
        margin-left: 30%;
    }

    .LoRe {
        width: 50%;
        height: 30px;
        border: lightskyblue 5px solid;
        border-radius: 5px;
        box-sizing: border-box;
        float: left;
    }

    .bigLR {
        margin-top: 5px;
        margin-left: 100px;
    }

    .lr_lo, .lr_re {
        width: 60%;
        height: auto;
    }

    .lr_lo {

        margin-top: 50px;

    }

    .lr_re {
        margin-top: 0;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>