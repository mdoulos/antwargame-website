import React, { useState } from 'react';
import logoBig from '../../assets/ant-war-game-logo-transparent.png';
import './spotlight.scss';
import '../buttons/buttons.scss';

const Spotlight = () => {
    return (
        <div className="awg__spotlight">
            <div className="awg__spotlight-innercontainer">
                <video loop muted playsInline>
                    <source poster="https://antwargame.com/wp-content/themes/antwar-theme/img/ant-war-background-mobile.jpg" src="https://antwargame.com/wp-content/themes/antwar-theme/vid/workerharass.mp4" type="video/mp4"/>
                </video>
                <div class="spotlight__foreground">
                    <div class="center-flex spotlight__foreground-wrap">
                        <img src={logoBig} alt="Ant War Game Logo"/>
                        <h2>THE #1 STRATEGY GAME ON THE STARCRAFT 2 ARCADE</h2>
                        <a href="" class="awg-button spotlight__foreground-button">Learn to Play</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight