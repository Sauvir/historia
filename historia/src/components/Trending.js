import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'
import './Trending.css'


const Trending = () => {
    return (
        <div className='trending' id='trending'>
            <div className='container'>
                <h2 className='animate-character'>Trending User Maps</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Herrscher</span></p>
                        <p><mapName>Most Famous Battlefields During The Edo Period</mapName></p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p><span>ShatteringBow</span></p>
                        <p><mapName>Napoleon's Greatest Battles</mapName></p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p><span>Arkesia52</span></p>
                        <p><mapName>Nuclear Bomb Testing Sites</mapName></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending
