import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { setLanguagePakage } from "../../../utils/functions";
import { useDispatch } from "react-redux";
import { initialLang } from "../../../constant";

function Nav() {
  const languagePakage = useSelector((state: any) => state.lang);
  const dispatch = useDispatch();
 const [state, setState] = useState(initialLang);

  useEffect(() => {
    setState(languagePakage.lang);
  }, [languagePakage]);

  const { home, category, contactUs } = state.navbar;
  return (
    <div>
      <NavBar>
        <NavItem href="/" isActive>
          {home}
        </NavItem>
        <NavItem href="/category">{category}</NavItem>
        <NavItem href="/contact-us">{contactUs}</NavItem>
        <button 
        className="bg-blue-500 hover:bg-blue-400 text-white  py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " 
        style={{letterSpacing:"2px"}}
        onClick={()=>setLanguagePakage(state.lang === "fa"? "eng":"fa",dispatch)}>
          {state.lang === "fa"? "eng":"fa"}
        </button>
      </NavBar>
    </div>
  );
}

export default Nav;
