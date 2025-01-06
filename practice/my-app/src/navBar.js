import React, { useState } from 'react'
import './navbar.css'
import close from './images/close.svg';
import menu from './images/menu.svg';
import { Link } from 'react-router-dom';
function NavBar() {

  const [open,setopen] = useState(false);

  const togle = () =>{
    setopen(!open);
  }
  return (
    <div>
        <div className='header'>
          <img src={menu} alt='menu' className='menu' onClick={togle} style={{
            display:open?'none':'block'
          }}/>
        </div>
        <nav  >
            <ul className={`ul ${open?'show':''}`}>
                <img src={close} alt='close' className='close' onClick={togle}/>
                <li className='home' ><Link to='/'>Home</Link></li>
                <li className='contact'><Link to='/contact'>Contact us</Link></li>
                <li className='about'><Link to='/about'>About us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;