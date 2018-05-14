// Mock中心，这里写mock拦截器，根据正则拦截请求，然后指向对应的Api文件
// 注意：上面说的api文件不是src目录下的，而是隔壁目录
import Mock from 'mockjs'

import loginApi from './login'
import articleApi from './article'

// 用户相关
Mock.mock(/\/user\/login/, 'post', loginApi.loginByUserNameAndPassword)
Mock.mock(/\/user\/getUserInfo/, 'post', loginApi.getUserInfo)

// 示例用数据
Mock.mock(/\/article\/list/, 'get', articleApi.getArticleList)

export default Mock
