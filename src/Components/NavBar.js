import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import { sideBarData } from '../data';
import './NavBar.css'

const NavBar = () => {

    const[sidebar, setSidebar]=useState(false)

    const showSideBar =()=>{
        setSidebar(!sidebar)
    }

  return (
    <div className='navbar'>
        <Link to="#" className='menu_bars' onClick={showSideBar}>
            <FaBars/>
        </Link>

        <nav className={sidebar ? 'nav_menu active' : 'nav_menu'}>
            <ul className='nav_menu_items'>
                <li className='close'>
                    <Link to='#' className='menu_bars' onClick={showSideBar}>
                        <AiOutlineClose/>
                    </Link>
                </li>

                {sideBarData.map((item, index) =>{
                    return (
                        <li key={index} className={item.cName} className='nav_text'>
                            <Link to={item.path} className='icon'>{item.icon}
                            <span>{item.title}</span>
                            </Link>
                            
                        </li>
                    )
                })}

            </ul>
        </nav>
    </div>
  )
}

export default NavBar