import axios from "axios";

const Api = () => {
  const defaultOptions = {
    baseURL: "http://localhost:8000",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
    return config;
  });

  return instance;
};

export default Api();
