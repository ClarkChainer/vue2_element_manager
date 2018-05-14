// 访问权限控制，可以在这里做权限控制的拦截和各种页面访问权限的处理
// 注意：动态路由是在这里拼接的，如果有需要修改的请确认不会对其他业务造成影响
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') {
    // 不拦截所有往login页面的访问，但是一旦访问了login页面就需要清除记录的用户信息
    if (getToken()) {
      store.dispatch('FedLogOut').then(() => {
        // 登出
      })
    }
    NProgress.done()
    next()
    return
  }
  // 鉴权判断
  if (getToken()) {
    if (store.getters.roles.length === 0) {
      // 没有用户信息，获取用户信息
      store.dispatch('GetUserInfo').then(res => {
        const roles = res.data.roles
        store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
          router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          next({ ...to, replace: true })
        })
      }).catch(() => {
        store.dispatch('FedLogOut').then(() => {
          Message.error('获取用户信息失败，请重新登录')
          next({ path: '/login' })
          NProgress.done()
        })
      })
    } else {
      // 有用户信息了直接next
      next()
    }
  } else {
    next('/login') // 鉴权失败全部重定向到登录页
    NProgress.done()
  }
})

// 好多情况下afterEach触发不到，停止进度条还是扔到上面去吧orz
router.afterEach(() => {
  NProgress.done()
})
