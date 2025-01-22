import UserActionTypes from "./action-types";

const initialState = {
  currentUser: 50,
}

interface UserState {
  currentUser: number | null;
}

interface UserAction {
  type: string;
  payload?: any;
}

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
  }

  return state;
}

export default userReducer;