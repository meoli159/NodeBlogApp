import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: {
    _id: null,
    owner: null,
    title: '',
    content: '',
    created_at: null,
    tags: [],
  },
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.isLoading = true;
    },
    createPost: (state) => {
      state.isLoading = true;
    },
    updatePost: (state) => {
      state.isLoading = true;
    },
    deletePost: (state) => {
      state.isLoading = true;
    },
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    createPostSuccess: (state, action) => {
      state.posts = [...state.posts, action.payload];
      state.isLoading = false;
    },
    updatePostSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    deletePostSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
  },
});
export const {
  fetchPosts,
  fetchPostsSuccess,
  createPost,
  createPostSuccess,
  updatePost,
  updatePostSuccess,
  deletePost,
  deletePostSuccess,
} = postSlice.actions;
export default postSlice.reducer;
