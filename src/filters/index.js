// 过滤器index.js
// 所有新增的过滤器请参照dateFormat的写法
/**
 * 时间格式化过滤器
 * @param date    接收可以被new Date()方法转换的内容
 * @param format  字符串，需要的格式例如：'yyyy-MM-dd hh:mm:ss'
 * @returns {String}
 */
export function dateFormat (date, format) {
  date = new Date(date)
  console.log(date)
  console.log(format)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
