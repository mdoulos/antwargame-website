import React from 'react';
import { Link } from 'react-router-dom';
import logoBig from '../../../assets/logos/ant-war-game-logo-transparent.png';
import backgroundPoster from '../../../assets/backgrounds/ant-war-background-mobile.jpg';
import exampleVideo from '../../../assets/videos/antwar-example-video.mp4';
import './spotlight.scss';
import '../../structure/buttons/buttons.scss';

const Spotlight = () => {
    return (
        <div className="awg__spotlight">
            <div className="awg__spotlight-innercontainer">
                <video autoPlay loop muted playsInline poster={backgroundPoster}>
                    <source src={exampleVideo} type='video/mp4'/>
                </video>
                <div className="awg__spotlight-foreground">
                    <div className="center-flex awg__spotlight-wrap">
                        <img src={logoBig} alt="Ant War Game Logo"/>
                        <h2>THE #1 STRATEGY GAME ON THE STARCRAFT 2 ARCADE</h2>
                        <Link to="/play" className="awg-button awg__spotlight-button">Learn to Play</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight