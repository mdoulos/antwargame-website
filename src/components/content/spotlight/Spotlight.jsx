import React, { useState } from 'react';
import logoBig from '../../../assets/logos/ant-war-game-logo-transparent.png';
import './spotlight.scss';
import '../../structure/buttons/buttons.scss';

const Spotlight = () => {
    return (
        <div className="awg__spotlight">
            <div className="awg__spotlight-innercontainer">
                <video loop muted playsInline>
                    <source poster="https://antwargame.com/wp-content/themes/antwar-theme/img/ant-war-background-mobile.jpg" src="https://antwargame.com/wp-content/themes/antwar-theme/vid/workerharass.mp4" type="video/mp4"/>
                </video>
                <div class="awg__spotlight-foreground">
                    <div class="center-flex awg__spotlight-wrap">
                        <img src={logoBig} alt="Ant War Game Logo"/>
                        <h2>THE #1 STRATEGY GAME ON THE STARCRAFT 2 ARCADE</h2>
                        <a href="" class="awg-button awg__spotlight-button">Learn to Play</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight