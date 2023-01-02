import languageAction from "../redux/actions/languageAction";

export function setLanguagePakage(lang:"eng"|"fa", dispatch:any){
const action = languageAction.Actions;

dispatch(action.setLang(lang))
}

export function getLanguagePakage(useselector:any){
const data = useselector((state:any)=> state.lang);
return data
}