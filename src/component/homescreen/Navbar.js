import React from 'react'
import './Navbar.css'
import logo from '../Images/Netflix_logo_PNG1.png'
import smily from '../Images/smily.png'
function Navbar() {
  return (
      <div className='navbar'>
             <div className='navbar_content'>
                <img src={logo} alt="li" />
                {/* <img src={smily} alt="si" /> */}
             </div>
      </div>
  )
}

export default Navbar