import { ActionTypes } from "../constants/action-types";

class Actions{
    setLang(lang:"eng"|"fa"){
        return {
            type:ActionTypes.SET_LANGUAGE,
            payload:lang
        }
    }

}


export default {Actions : new Actions()}