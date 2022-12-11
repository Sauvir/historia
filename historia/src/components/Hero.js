import React from 'react'
import './Hero.css'
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Historia</p>
                <p>Map history the way you enjoy it.</p>
                <RouterLink to='/maps' className='navLink'>
                <button className='button'>View all maps</button>
                </RouterLink>
            </div>
        </div>
    )
}

export default Hero
