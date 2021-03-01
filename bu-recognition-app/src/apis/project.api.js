import { axiosClient } from './axiosClient';

export const projectApi = {
  getMany: () => {
    const url = '/projects';
    return axiosClient.get(url);
  }
}
