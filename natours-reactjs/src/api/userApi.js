import axiosClient from './axiosClient';

const userApi = {
  signIn: (formProps) => {
    const url = '/users/login';
    return axiosClient.post(url, formProps);
  },

  signUp: (formProps) => {
    const url = '/users/signup';
    return axiosClient.post(url, { formProps });
  },
};

export default userApi;
