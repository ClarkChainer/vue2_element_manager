// 混入的全局方法，请在utils下写好需要混入的全局方法，在这里引入后添加到methods对象下
import utilsRequest from '../utils/request'

export default {
  methods: {
    axiosRequest: utilsRequest
  }
}
