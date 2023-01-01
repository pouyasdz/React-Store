import React from 'react'
import navItem from '../../../Types/navItem'
import { Link } from 'react-router-dom';

function NavItem(props:navItem) {
    const {href, isActive, children} = props;
  return (
    <li>
    <Link
      to={href}
      className={`block px-3 py-2 font-Vazirmatn rounded-md ${isActive ? 'text-c' : 'bg-slate-50'}`}
    >
      {children}
    </Link>
  </li>
  )
}

export default NavItem