import React from 'react'
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import children from '../Types/common/children'
import "../styles/layout.css"
function Container(props:children) {
  return (
    <div className='container mx-auto block' style={{height:"100vh", maxHeight:"100vh", overflow:"hidden"}}>
        <NavBar/>
     
        <div className="container bg-blue-500 overflow-auto content">
          {props.children}
        <Footer/>
        </div>
    </div>
  )
}

export default Container;