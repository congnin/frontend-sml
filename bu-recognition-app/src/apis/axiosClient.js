import axios from 'axios';
import queryString from 'query-string';
import { apiUrl, appUrl, adalConfig } from '../config';
import { AuthContext } from '../common/context/auth-context';

export const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  return new Promise((resolve, reject) => {
    AuthContext.acquireToken(adalConfig.endpoints.api, (message, token, msg) => {
      if (!!token) {
        config.headers.Authorization = `Bearer ${token}`;
        resolve(config);
      } else {
        reject(config);
        if (window.location.href !== window.location.origin + '/sign-in') {
          window.location.replace(appUrl + 'sign-in');
        }
      }
    })
  })
}, function(error) {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
