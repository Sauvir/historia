import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom"
import * as Scroll from "react-scroll"
import Dropdown from 'react-bootstrap/Dropdown';

import './Navbar.css'
import { DropdownButton } from 'react-bootstrap';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

    const goToPageAndScroll = async (selector) => {
        await navigate("/");
        await scroller.scrollTo(selector, {
          duration: 500,
          smooth: true,
          offset: -75,
          spy: true
        });
      };

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <div class='dropdown'>
                    <button className='dropbtn'>▼</button>
                    <div className='dropdown-content'> 
                        <Link to="trending" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Trending</Link>
                    </div>
                </div>
                    <li className='nav-item'>
                        <RouterLink to='/' className='nav-link'>Home</RouterLink>
                    </li>
                    <li className='nav-item'>
                        <RouterLink to='/maps'className='nav-link'>Maps</RouterLink>
                    </li>
                    <li className='nav-item'>
                        <RouterLink to='/events'className='nav-link'>Events</RouterLink>
                    </li>
                    <li className='nav-item'>
                        <RouterLink to='/people'className='nav-link'>People</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
