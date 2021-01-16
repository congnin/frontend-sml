import axiosClient from './axiosClient';

const tmdb = {
  getPopular: (params) => {
    const url = '/movie/popular';
    return axiosClient.get(url, { params });
  },

  getUpcoming: (params) => {
    const url = '/movie/upcoming';
    return axiosClient.get(url, { params });
  },

  getDetail: (id, params) => {
    const url = `/movie/${id}`;
    return axiosClient.get(url, { params });
  },
  search: (params) => {
    const url = `/search/movie`;
    return axiosClient.get(url, { params });
  },
};

export default tmdb;
