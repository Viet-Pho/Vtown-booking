import axios from "axios";
import { BACKEND_URL } from "../constants";

const jwtAxios = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosGet = async (url, query = null) => {
  const response = await jwtAxios.get(url, { params: query });
  return response.data;
};

export const axiosPost = (url, body) => {
  return jwtAxios.post(url, body);
};

export const axiosPatch = (url, body) => {
  return jwtAxios.patch(url, body);
};

export const axiosDelete = (url, body) => {
  return jwtAxios.delete(url, body);
};

export const axiosPut = (url, body) => {
  return jwtAxios.put(url, body);
};
