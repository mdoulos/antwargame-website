import tutorialImages from '../../../assets/tutorial';
import './tutorial.scss';

const Tutorial = () => {
    return (
        <div className="awg__tutorial">
            <div className="awg__tutorial-innercontainer">
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img1} alt="Ant War Tutorial Larva"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>A <span>New Queen</span> in a Brand New World</h2>
                            <p>Each player starts with just a <span>New Queen unit</span> surrounded by grass and plants.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img2} alt="Ant War Tutorial Queen Morph"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Find a Safe Place to <span>Transform</span></h2>
                            <p>Dig a tunnel into the soft dirt and morph <span>into a regular queen</span>.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img3} alt="Ant War Tutorial Worker Nests"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Build <span>Worker Nests</span> and Start Your Colony</h2>
                            <p>Worker ants are the backbone to your economy. <span>Build worker nests</span>, especially near the grass.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img4} alt="Ant War Tutorial Workers"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2><span>Obtain Resources</span> from Plants</h2>
                            <p>Bring the honeydew secreted by aphids back to worker nests <span>to gain income</span>.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img5} alt="Ant War Tutorial Soldiers"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>No Colony is Safe Without <span>Soldiers</span></h2>
                            <p>Protect your workers and queen by building soldier units <span>at soldier nests</span>.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img6} alt="Ant War Tutorial Scouts"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2><span>Scout Enemy Positions</span> and Make Plans</h2>
                            <p>Send <span>cloaked scouts</span> to <span>find your enemies</span> and build outposts to monitor their actions.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img7} alt="Ant War Tutorial Attack"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2><span>Attack</span> and Show No Mercy!</h2>
                            <p>Ant War is a brutal game, <span>send your army</span> deep into the enemy base!</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img8} alt="Ant War Tutorial Specialists"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2>Train <span>Specialist Units</span></h2>
                            <p>Train any of the <span>two specialist unit types per ant race</span>.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="awg__tutrow">
                    <div className="awg__tutrow-container">
                        <div className="awg__tutrow-image">
                            <img src={tutorialImages.img9} alt="Ant War Tutorial Attack Again"/>
                        </div>
                        <div className="awg__tutrow-text">
                            <h2><span>Attack</span> With a Diverse Army</h2>
                            <p><span>Bring the battle</span> to the enemy with multiple unit types and strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorial