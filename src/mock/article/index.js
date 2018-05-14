import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
for (let i = 0; i < 100; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@cname',
    reviewer: '@cname',
    title: '《' + '@ctitle(5, 10)' + '》',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['aaa', 'bbb', 'ccc', 'ddd'],
    'status|1': ['success', 'info', 'danger'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }))
}

export default {
  getArticleList: config => {
    const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  }
}
