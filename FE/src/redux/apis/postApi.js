import axiosClient from './createInstance';

export const getListPosts = async () => {
  return await axiosClient.get('/api/v1/posts');
};

export const createPost = async (data) => {
  return await axiosClient.post('/api/v1/posts', data);
};

export const updatePost = async (ownerId, data) => {
  return await axiosClient.patch(`/api/v1/posts/${ownerId}`, data);
};

export const deletePost = async (ownerId, data) => {
  return await axiosClient.delete(`/api/v1/posts/${ownerId}`, data);
};
