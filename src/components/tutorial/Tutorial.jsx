import tutorialImages from '../../assets/tutorial';
import './tutorial.scss';

const Tutorial = () => {
    return (
        <div className="awg__tutorial">
            <div className="awg__tutorial-innercontainer">
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut1} alt="Ant War Tutorial Larva"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>A New Queen in a Brand New World</h2>
                            <p>Each player starts with just a New Queen unit surrounded by grass and plants.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut2} alt="Ant War Tutorial Queen Morph"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Find a Safe Place to Transform</h2>
                            <p>Dig a tunnel into the soft dirt and morph into a regular queen.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut3} alt="Ant War Tutorial Worker Nests"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Build Worker Nests and Start Your Colony</h2>
                            <p>Worker ants are the backbone to your economy. Build worker nests, especially near the grass.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut4} alt="Ant War Tutorial Workers"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Harvest Honeydew from Plants</h2>
                            <p>Bring the honeydew secreted by aphids back to worker nests to gain income.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut5} alt="Ant War Tutorial Soldiers"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>No Colony is Safe Without Soldiers</h2>
                            <p>Protect your workers and queen by building soldier units at soldier nests.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut6} alt="Ant War Tutorial Scouts"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Scout Enemy Positions and Make Plans</h2>
                            <p>Send cloaked scouts to find your enemies and build outposts to monitor their actions.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut7} alt="Ant War Tutorial Attack"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Attack and Show No Mercy!</h2>
                            <p>Ant War is a brutal game, send your army deep into the enemy base!</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut8} alt="Ant War Tutorial Specialists"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Train Specialist Units</h2>
                            <p>Train any of the two specialist unit types per ant race.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.tut9} alt="Ant War Tutorial Attack Again"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Attack With a Diverse Army</h2>
                            <p>Bring the battle to the enemy with multiple unit types and strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorial