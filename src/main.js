import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import './icons'
import './permission'
import './mock'
import utilsMixins from './minxins'

import * as filters from './filters'

Vue.use(Element, {
  size: 'medium'
})

// 公用插件包mixin，******注意，只有真的覆盖/引用面很广的方法才应该被放到这里******
Vue.mixin(utilsMixins)

// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
