import myAxios from '../../httpBase'

// 获取校区列表
export function orgListApi(data){
  return myAxios({
    url: '/cms/orgCampus/page',
    method: 'post',
    data
  })
}