import axios from "axios";
import router from "@/router";
import { useErrorStore } from "@/stores";

const api = axios.create({
  baseURL: "https://nlstar.com/ru/api/catalog3/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(null, (error) => {
  useErrorStore().updateError(error);
  return Promise.reject(error);
});

export default api;
