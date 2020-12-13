import React from "react";
import { useDispatch } from 'react-redux'
import ARM from '../../../assets/images/Header/armenia.svg';
import RUS from '../../../assets/images/Header/russia.svg';
import USA from '../../../assets/images/Header/united-states.svg';
import { CHANGE_LANGUAGE } from "../../../redux/langReducer";
import { setCookie } from "../../../helpers/cookie.helpers";

const LanguageComponent = () => {
    const dispatch = useDispatch()
    const changeLanguage = (lang) => {
        dispatch(language(lang))
    }
    const changeLanguage = (lang) => {
        console.log("aaaaaaaa", lang)
        dispatch({ type: CHANGE_LANGUAGE, lang })
        // dispatch(LangReducer(lang))
        const getLocale = (lang) => {
            console.log("langggg", lang)
            const language = lang
            if (language === 1) {
                return 'am'
            }
            if (language === 2) {
                return 'ru'
            }
            if (language === 3) {
                return 'en'
            }
        }
        const locale = getLocale()
        setCookie('locale', locale, 30)

    }

    return (
        <div className="text-center">
            <span className="text-dark Sans_Regular font-18">Language</span>
            <div
                className="tiko"
                onClick={() => changeLanguage(1)}
                className="ml-3 btn btn-icon px-2">

            </div>
            <button
                onClick={() => changeLanguage(2)}

                className="btn px-2">
                <img src={RUS} alt="RUSSIA" />
            </button>
            <button
                onClick={changeLanguage(3)}
                type="button"
                className="btn px-2">
                <img src={USA} alt="UNITED_STATES" />
            </button>
        </div>
    )
}

export default LanguageComponent