import axios from "./axios";
import { BASE_URL, USER_PATH } from "./http";

//auth APIs
export const registerRequest = (config,data) =>
  axios.post(`${BASE_URL}/${USER_PATH}/register`,data,config);

export const loginUserRequest = (config,data) =>
  axios.post(`${BASE_URL}/${USER_PATH}/login`, data,config);
