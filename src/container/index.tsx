import React, {useEffect, useState} from 'react'
import Footer from '../components/common/Footer';
import children from '../Types/common/children'
import "../styles/layout.css"
import { useDispatch, useSelector} from 'react-redux';
import languageAction from '../redux/actions/languageAction';
import Nav from '../components/common/navbar';
import { getLanguagePakage, setLanguagePakage } from '../utils/functions';
import { initialLang } from '../constant';


function Container(props:children) {
  const language = "eng"
  const dispatch = useDispatch();
  const action = languageAction.Actions;
  const [state, setState] = useState(initialLang)
  const languagePakage = getLanguagePakage(useSelector);
  useEffect(() => {
    setLanguagePakage("fa", dispatch);
    setState(languagePakage.lang)
  }, [])
  useEffect(() => {
    setState(languagePakage.lang)
  }, [languagePakage])
  
  return (
    <div className='container mx-auto block' style={{height:"100vh", maxHeight:"100vh", overflow:"hidden"}} dir={state?.diraction}>
        
        <Nav/>
        <div className="container bg-slate-300 overflow-auto content" dir={state?.diraction}>
          {props.children}
        <Footer/>
        </div>
    </div>
  )
}

export default Container;