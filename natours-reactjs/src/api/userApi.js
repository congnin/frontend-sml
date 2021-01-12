import axiosClient from './axiosClient';

const userApi = {
  signIn: (formProps) => {
    const url = '/users/login';
    return axiosClient.post(url, formProps);
  },

  signUp: (formProps) => {
    const url = '/users/signup';
    return axiosClient.post(url, formProps);
  },

  updateMe: (formProps) => {
    const url = '/users/updateMe';
    return axiosClient.patch(url, formProps);
  },

  getMe: () => {
    const url = '/users/me';
    return axiosClient.get(url);
  },

  updateMyPassword: (formProps) => {
    const url = '/users/updateMyPassword';
    return axiosClient.patch(url, formProps);
  },

  getAll: () => {
    const url = '/users';
    return axiosClient.get(url);
  },

  delete: (id) => {
    const url = `/user/${id}`;
    return axiosClient.delete(url);
  },
};

export default userApi;
