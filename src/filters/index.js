

/**
 *   将时间戳（十三位时间搓，也就是带毫秒的时间搓）转换成时间格式 中文隔离
 *   @param {string} input 
 *  2020年02月16号
 */
export function getChineseLocalTime(input) {
  if (input === null || !input) {
    return '--'
  }
  // d.cTime = 1539083829787
  if (input === null || input === '') {
    return ''
  }
  let date = new Date(input)
  const year = date.getFullYear()

  let month = date.getMonth() + 1

  let day = date.getDate()

  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  date = year + '年' + month + '月' + day + '日'
  return date
}

/**
 *   自定义数字转金额，三位添加逗号，保留两位小数过滤器 100000 转为 100,000.00
 *   @param {string} s
 */
export function money(s) {
  if (s === undefined) {
    return '--'
  }
  if (s === null) {
    return '--'
  }
  if (s === '') {
    return '--'
  }
  if (s === '--') {
    return s
  }
  // 判断数字是正数还是负数
  let minus = false
  // 数字转字符串

  s = String(s)
  if (s.substring(0, 1) === '-') {
    minus = true
    s = String(parseFloat(s.substring(1).replace(/[^\d\.-]/g, '')).toFixed(2))
  } else {
    s = String(parseFloat(s.replace(/[^\d\.-]/g, '')).toFixed(2))
  }
  const l = s.split('.')[0].split('').reverse()
  const r = s.split('.')[1]

  let t = ''

  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? ',' : '')
  }
  if (minus) {
    return '-' + t.split('').reverse().join('') + '.' + r
  } 
  return t.split('').reverse().join('') + '.' + r
  
}

/**
 *   超出省略
 *   @param {string} value
 *   @param {number} max
 *   @param {string} tail  超出显示内容
 */
export function ellipsis(value, max, tail) {
  if (!value) {
    return
  }
  if (!max) {
    return value
  }
  if (value.length <= max) {
    return value
  }
  value = value.substr(0, max)
  return value + (tail || '.')
}
// 未审批 审批中 已审批 已驳回
export function approvalType(value) {
  let text = ''

  switch (value) {
    case 0:
      text = '未审批'
      break
    case 1:
      text = '审批中'
      break
    case 2:
      text = '已审批'
      break

    default:
      text = '已驳回'
      break
  }
  return text
}

// 0未知1男2女
export function sex(value, index) {
  if (value === null) {
    value = 0 
  }
  value = Number(value)
  let text = ''

  switch (value) {
    case 1:
      text = '男'
      break
    case 2:
      text = '女'
      break
    default:
      text = '未知'
  }
  return text
}
