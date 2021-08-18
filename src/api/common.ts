import { getRequest } from "../utils/request";

// 通过手机登录
export const byPhoneLogin = (phone: string, password: string) => {
  return getRequest(`/login/cellphone`, {
    phone,
    password,
  });
};
// 获取用户信息
export const getUserdetail = (uid: string) => {
  return getRequest(`/user/detail`, {
    uid,
  });
};
