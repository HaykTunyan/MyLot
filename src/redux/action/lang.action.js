import { setCookie } from "../../helpers/cookie.helpers";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const language = (lang) => {
  console.log("lang", lang);
  return async (dispatch) => {
    dispatch({
      type: CHANGE_LANGUAGE,
    });
    const getLocale = () => {
      let language = lang;
      if (language === 1) {
        return "am";
      } else if (language === 2) {
        return "ru";
      } else if (language === 3) {
        return "en";
      }
      return language;
    };
    const locale = getLocale();
    setCookie("locale", locale, 30);
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: lang,
    });
  };
};
