import { axiosClient } from './axiosClient';

export const userApi = {
  get: (username) => {
    const url = '/users?username=' + username;
    return axiosClient.get(url);
  }
}
