const { default: axios } = require("axios");

const app = axios.create({
  baseURL: process.env.NODE_NEXT_PUBLIC_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  patch: app.patch,
  put: app.put,
  delete: app.delete,
  post: app.post,
};

export default http;
