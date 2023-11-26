import axiosClient from './createInstance';

export const login = async (data) => {
  return await axiosClient.post('/api/v1/auth/login', data);
};

export const register = async (data) => {
  return await axiosClient.post('/api/v1/auth/register', data);
};
