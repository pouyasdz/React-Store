import Reducer from "../../Types/common/reducer";
import { ActionTypes } from "../constants/action-types";
import eng from "../../translation/en/common.json";
import fa from "../../translation/fa/common.json";

const initialState = {}

class LanguageReducer{

    langReducer(state = initialState,props:Reducer){ 
        switch (props.type) {
            case ActionTypes.SET_LANGUAGE:
                const selectedLang = props.payload === "eng" ? eng:fa                
                return {...state, lang:selectedLang}
            default:
                return state
        }
    }
}

export default {LanguageReducer: new LanguageReducer()}