// vuex配置文件
// 所有的外部调用请使用this.$store.****和this.$store.dispatch('****', yourParam)方式
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

// 注意：需要get的话getters不要忘记配置
const store = new Vuex.Store({
  modules: {
    app,
    permission,
    tagsView,
    user
  },
  getters
})

export default store
