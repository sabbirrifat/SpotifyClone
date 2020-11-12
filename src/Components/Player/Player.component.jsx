import React from 'react';
import './player.styles.css';
import Sidebar from '../Sidebar/Sidebar.component';
import Body from '../Body/Body.component';
import Footer from '../Footer/Footer.component'

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player-body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player
