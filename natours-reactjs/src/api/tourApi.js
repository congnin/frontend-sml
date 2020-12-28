import axiosClient from './axiosClient';

const tourApi = {
  getAll: (params) => {
    const url = '/tours';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/tours/${id}`;
    return axiosClient.get(url);
  },
};

export default tourApi;
