import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { user: null, message: null },
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginLoading: (state) => {
      state.isLoading = true;
    },
    registerLoading: (state) => {
      state.isLoading = true;
    },
    logoutLoading: (state) => {
      state.isLoading = true;
    },
    loginSuccessful: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    logoutSuccessful: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});
export const {
  loginSuccessful,
  logoutSuccessful,
  loginLoading,
  registerLoading,
  logoutLoading,
} = authSlice.actions;
export default authSlice.reducer;
