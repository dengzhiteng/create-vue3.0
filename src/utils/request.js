import axios from "axios";
const request = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:3000",
});

request.interceptors.request.use(
  function (config) {
    if (config.url.indexOf("/login") == -1) {
      const token = sessionStorage.getItem("token");
      if (token) {
        config.headers.token = token;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (res) {
    if (res.status == 200) return res.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
