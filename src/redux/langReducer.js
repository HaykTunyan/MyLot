import { CHANGE_LANGUAGE } from "./action/lang.action";

const initialState = {
  lang: "",
};

const LangReducer = (state = initialState, action) => {
  if (!action.payload) {
    return state;
  }
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default LangReducer;
