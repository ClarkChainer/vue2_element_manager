// 路由配置文件，这里采用的是静态基础路由+动态路由拼接的方式，结合权限控制完整路由
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

// 静态默认加载的路由
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  routes: constantRouterMap
})

// 动态加载的路由
export const asyncRouterMap = [
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table/complex-table',
    name: 'example',
    meta: {
      title: '示例',
      icon: 'example'
    },
    children: [
      {
        path: '/example/table',
        component: _import('example/table/index'),
        redirect: '/example/table/complex-table',
        name: 'Table',
        meta: {
          title: '3级示例',
          icon: 'table'
        },
        children: [
          {path: 'complex-table', component: _import('example/table/complexTable'), name: 'complexTable', meta: { title: '复杂表格示例' }},
          {path: 'complex-table2', component: _import('example/table/complexTable'), name: 'complexTable2', meta: { title: '复杂表格示例2' }}
        ]
      },
      {path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'tab', meta: { title: '可切换表格示例' }}
    ]
  }
]
