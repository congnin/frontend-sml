import { axiosClient } from './axiosClient';

export const authApi = {
  adSignIn: () => {
    const url = '/auth/ad-login';
    return axiosClient.post(url, {});
  },
  findAdUser: () => {
    const url = '/auth';
    return axiosClient.get(url);
  }
}
