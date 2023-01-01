import React from 'react'
import children from '../../../Types/common/children';

function NavBar(props:children) {
  return (
    <nav className="py-4 px-6 text-sm font-medium bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
    <ul className="flex space-x-3">
      {props.children}
    </ul>
  </nav>
  )
}

export default NavBar;