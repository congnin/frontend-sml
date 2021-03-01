import { axiosClient } from './axiosClient';

export const commentApi = {
  findRecent: () => {
    const url = '/comments/recent';
    return axiosClient.get(url);
  },
  findByUserId: (userId, projectId, filterType, page) => {
    const url = '/comments?userId=' + userId + '&projectId=' + projectId + '&filterType=' + filterType + '&page=' + page;
    return axiosClient.get(url);
  },
  findTop: (username) => {
    const url = '/comments/top?username=' + username;
    return axiosClient.get(url);
  },
  create: (formData) => {
    const url = '/comments';
    return axiosClient.post(url, formData);
  },
  update: (formData) => {
    const url = '/comments';
    return axiosClient.put(url, formData);
  },
  delete: (formData) => {
    const url = '/comments/remove';
    return axiosClient.put(url, formData);
  }
}
