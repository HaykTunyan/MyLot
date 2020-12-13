const USER_REDUCER = "USER_REDUCER";
const LOG_OUT = "LOG_OUT";

let initialState = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REDUCER:
      return {
        ...state,
        ...action.authForm,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default UserReducer;
