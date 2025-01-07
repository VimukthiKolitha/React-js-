import React, { useState } from 'react';
import './NavBar.css';
import menu from './imges/menu-svgrepo-com.svg';
import about from './imges/about-svgrepo-com.svg';
import contact from './imges/contact-headset-communication-svgrepo-com.svg';
import projects from './imges/projects-svgrepo-com.svg';
import close from './imges/close-circle-svgrepo-com.svg';
import About from '../about';

function NavBar() {

    const [menuClick,setmenuClick] = useState(false);
     
    const togleclick = () =>{
        setmenuClick(!menuClick);
    }

  return (

    <div >
        <nav >
            <ol className='navList'>
            <li className='LS' ></li>
            <li className='LS'>contact</li>
            <li className='LS'>projects</li>
            </ol>
        <div className='navHead'>
        <div onClick={togleclick}>
              
              {menuClick ?(
             <ul className='nav'>
             <li><img src={close} alt='close'className='img' onClick={togleclick}/></li>
             <li><img src={about} alt='about' className='img' onClick={<About/>}/></li>
             <li><img src={contact} alt='contact' className='img'/></li>
             <li><img src={projects} alt='projects' className='img'/></li>
         </ul>
            ):(  <img src={menu} alt='menu'className='img'/>
            )};
             </div>
        </div>
          
        </nav>
    </div>
  )
}

export default NavBar