import { getToken } from 'app/localStorageData';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    'https://serene-eyrie-61310.herokuapp.com/api/v1/',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
