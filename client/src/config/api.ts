import axios from "axios";

const http = axios.create({
  baseURL: "localhost:5000/api/v1/",
  headers: {},
});

http.interceptors.request.use(
  async (config) => {

    // config.headers = {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);