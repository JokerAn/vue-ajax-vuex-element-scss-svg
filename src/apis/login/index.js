import myAxios from '../httpBase'

export function loginApi(data){
  return myAxios({
    url: '/cms/admin/login',
    method: 'post',
    data
  })
}