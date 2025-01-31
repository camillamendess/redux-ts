import UserActionTypes from "./action-types";

interface LoginPayload {
  name: string;
  email: string;
}

export const loginUser = (payload: LoginPayload) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
});