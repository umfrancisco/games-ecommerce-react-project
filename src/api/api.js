import axios from "axios";

const api = axios.create({
  baseURL: "https://justify-ind-mitsubishi-tremendous.trycloudflare.com",
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export const apiService = {
  get: async (url, config = {}) => {
    const response = await api.get(url, config);
    return response.data;
  },

  post: async (url, data, config = {}) => {
    const response = await api.post(url, data, config);
    return response.data;
  },

  put: async (url, data, config = {}) => {
    const response = await api.put(url, data, config);
    return response.data;
  },

  delete: async (url, config = {}) => {
    const response = await api.delete(url, config);
    return response.data;
  },
};

export default api;
