/*
  写一些公用的方法
  在用的地方
  1.引入  import { chainDate } from '@/utils/public'
  2.使用  this.newTime = chainDate(new Date())

*/

export function chainDate(times, fengefu) {
  if (typeof times === 'string') {
    times = times.replace(/-/g, '/')
  }
  fengefu = fengefu || '-'
  const time = new Date(times),
    nian = time.getFullYear(),
    yue = ('00' + (time.getMonth() + 1)).slice(-2),
    ri = ('00' + time.getDate()).slice(-2),
    shi = ('00' + time.getHours()).slice(-2),
    fen = ('00' + time.getMinutes()).slice(-2),
    miao = ('00' + time.getSeconds()).slice(-2)

  return (
    nian + fengefu + yue + fengefu + ri + ' ' + shi + ':' + fen + ':' + miao
  )
}
export function noValue(res){
  let result = ['', null, undefined].includes(res);
  return result
}
