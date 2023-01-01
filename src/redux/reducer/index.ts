import { combineReducers } from "redux";
import languageReducer from "./languageReducer";

const app = languageReducer.LanguageReducer


const reducer = combineReducers<any>({
    lang:app.langReducer
})


export default reducer;