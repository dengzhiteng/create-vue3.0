import axios from "axios";
const COOKIE =
  "NMTID=00Om_aQ7kpEE20TEUJgnJyiGFaceTsAAAF7WaKtXg; Max-Age=315360000; Expires=Sat, 16 Aug 2031 14:20:38 GMT; Path=/;;MUSIC_U=a41d6df5e2823511cc51fc32be982d29d79d83ff732a7b7df7181eeb472c503df8eba1d7ed3f0aca; Max-Age=1296000; Expires=Thu, 2 Sep 2021 14:20:38 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Thu, 2 Sep 2021 14:20:38 GMT; Path=/;;__csrf=eef2ae4ce2a23ed07b68e4d4246a80ee; Max-Age=1296010; Expires=Thu, 2 Sep 2021 14:20:48 GMT; Path=/;";
const request = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:3000",
});

request.interceptors.response.use(
  function (res) {
    if (res.status == 200) return res.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getRequest = (url: string, params = {}) => {
  return request.get(url, { params: { ...params } });
};
