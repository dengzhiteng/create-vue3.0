import request from '../utils/request'

// 通过手机登录
export const byPhoneLogin = (phone:string,password:string) => {
  return request({
    url: `/login/cellphone?phone=${phone}&password=${password}`,
  })
}
// 获取用户信息
export const getUserdetail = (uid:string) => {
  return request({
    url: `/user/detail?uid=${uid}`,
  })
}