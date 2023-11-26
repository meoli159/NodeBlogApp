import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccessful: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccessful: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { loginSuccessful, logoutSuccessful } = authSlice.actions;
export default authSlice.reducer;
