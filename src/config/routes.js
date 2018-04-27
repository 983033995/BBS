import Vue from 'vue'
import VueRouter from 'vue-router'      //引入路由配置

//引入创建的项目页面
import Home from '../Home.vue'    

//使用路由实例插件
Vue.use(VueRouter)

const router = new VueRouter({
  mode : 'history',
  base : '__dirname',
  routes : [
    //将页面组件与 path 指定的路由关联
    {path : '/home', component : Home}
  ]
})
