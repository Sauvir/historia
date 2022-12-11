import React from 'react'
import {Link} from 'react-scroll'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <ul className='t'>
                    <li>Follow for more!</li>
                </ul>
                <SocialIcon className='socials' url="https://github.com/Sauvir" />
                <SocialIcon className='socials' url="https://www.youtube.com/channel/UCpHlJpHXkPmhhmEUO0rcf5Q" />
                <SocialIcon className='socials' url="https://www.twitch.tv/alyvva" />
            </div>
        </div>
    )
}

export default Footer
