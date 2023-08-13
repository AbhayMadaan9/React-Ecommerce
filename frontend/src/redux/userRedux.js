import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null, 
    error: false,
    islogin: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.islogin = true;
    },
    loginFailure: (state) => {
      state.error = true;
    },
    registerfailure: (state) => {
      state.error = true;
    },
    logout: (state)=>{
      state.currentUser = null;
      state.islogin= false;
      state.error= false;
    }
  },
});

export const { registerfailure, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;