import axios from "axios";

const baseUrl = () => {
  let base_url = "http://localhost:9000/v1";

  // if (window?.location?.href?.includes("https://dev")) {
  //   base_url = "https://api.dev.olibr.com/v1";
  // } else if (window?.location?.href?.includes("https://test")) {
  //   base_url = "https://api.test.olibr.com/v1";
  // } else if (window?.location?.href?.includes("https://improved")) {
  //   base_url = "https://api.improved.olibr.com/v1";
  // } else if (window?.location?.href?.includes("https://olibr")) {
  //   base_url = "https://olibr.com/api/v1";
  // } else if (window?.location?.href?.includes("https://www")) {
  //   base_url = "https://www.olibr.com/api/v1";
  // }

  return base_url;
};

const api = axios.create({
  baseURL: baseUrl(), // withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");

  return config;
});

export default api;