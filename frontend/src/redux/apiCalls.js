import { loginFailure, loginSuccess, registerfailure, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
  } catch (err) {
    dispatch(registerfailure());
  }
};
export const Logout = async (dispatch) => {
  try {
    dispatch(logout());
  } catch (err) {

  }
};