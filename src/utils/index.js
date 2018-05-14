// 工具包，需要请单独引入
/**
 * url内的参数转换为对象的方法
 * @param {String} url url字符串
 * @returns {Object} 返回一个从url内获取到的字符串参数转换成的对象
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}
