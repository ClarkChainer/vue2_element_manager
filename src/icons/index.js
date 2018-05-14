// svgIcons引用，所有新增的svgIcons请放到隔壁svg目录下
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
