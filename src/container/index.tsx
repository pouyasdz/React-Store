import React, {useEffect} from 'react'
import Footer from '../components/common/Footer';
import NavBar from '../components/common/navbar/NavBar';
import children from '../Types/common/children'
import "../styles/layout.css"
import NavItem from '../components/common/navbar/NavItem';
import { useDispatch, useSelector } from 'react-redux';
import Actions from "../redux/actions/languageAction"

function Container(props:children) {
  const action = Actions.Actions;
  const dispatch = useDispatch()
  dispatch(action.setLang("eng"));
  const langPakage = useSelector((state:any) => state.lang.lang);
  const navtext = langPakage.navbar;
  
  return (
    <div className='container mx-auto block' style={{height:"100vh", maxHeight:"100vh", overflow:"hidden"}}>
        <NavBar>
        <NavItem href="/new" isActive>{navtext.home}</NavItem>
        <NavItem href="/top">{navtext.category}</NavItem>
        <NavItem href="/picks">{navtext.contactUs}</NavItem>
        </NavBar>
     
        <div className="container bg-slate-300 overflow-auto content">
          {props.children}
        <Footer/>
        </div>
    </div>
  )
}

export default Container;