import axios from "axios";
const COOKIE ="__remember_me=true; Max-Age=1296000; Expires=Fri, 3 Sep 2021 09:32:20 GMT; Path=/;;MUSIC_U=a41d6df5e2823511cc51fc32be982d29713d66e831b697c831d3b3bc60626b90f8eba1d7ed3f0aca;Max-Age=1296000; Expires=Fri, 3 Sep 2021 09:32:20 GMT; Path=/;;__csrf=68c92f5671086443ee3a6c6fa4876933; Max-Age=1296010; Expires=Fri, 3 Sep 2021 09:32:30 GMT; Path=/";
const request = axios.create({
  timeout: 5000,
  baseURL:process.env.VUE_APP_BASE_URL,
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
  return request.get(url, { params: { ...params,cookie:COOKIE} });
};