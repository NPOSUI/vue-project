import Vue from 'vue'
import VueRouter from 'vue-router'
import register from "../components/register";
import Pro_index from "../components/pro_index";
import intro from "../components/intro";
import search from '../components/search';
import login from "../components/login";

Vue.use(VueRouter)

const routes = [
  //主页，默认路由
  {path: '/', redirect: '/Pro_index'},
  //产品主页
  {path: '/Pro_index', name: Pro_index, component: Pro_index},
  //关于
  {path: '/intro', name: intro, component: intro},
  //注册页
  {path: '/register', component: register},
  //搜索页
  {path: '/search', component: search},
  //登录页
  {path: '/login', component: login},
]

const router = new VueRouter({
  routes
})

export default router
