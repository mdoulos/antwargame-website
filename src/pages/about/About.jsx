import './about.scss';
import image from '../../assets/about/about-ant-war.jpg';
import { HistoryAd } from '../../components'

const About = () => {
    return (
        <div className="awg__aboutpage awg__lightpage awg__articlepage">
            <div className='awg__lightpage-innercontainer'>
                <main>
                    <article>
                        <h1>About Ant War</h1>
                        <figure>
                            <img src={image} alt="Example image of Ant War gameplay on a computer monitor." />
                        </figure>
                        <p>Ant War is a computer game on the Starcraft 2 custom game arcade. Ant War was first published on March 14th 2018 and continued development until the end of 2019. Ant War was based upon a game called Ant Colonies, also on the Starcraft 2 arcade and published on September 25th 2016 by Kenoli. Related Link: <a href="#">History of the Ant War Game</a>.</p>
                        <p>Ant War is comprised of 2-12 players during standard play, with a single player test mode also available. In Ant War, each player starts as a New Ant Queen and must choose to morph into one of four ant races; Black, Wood, Fire, or Crazy. Each choice affects which abilities and units are available to the player.</p>
                        <p>The game is won by killing all enemy ant queens. Whoever has the last living ant queen wins.</p>
                        <p>Each player builds Worker Nests that spawn workers to collect food, or they build Soldier Nests that spawn Soldiers and Majors to fight. Other buildings exist to help the growing ant colony wage war, such as: Guard Posts, Scout Nests, Brood Chambers, Specialist Nests, and Hidden Tunnels.</p>
                        <p>Ant War was designed and developed by MDoulos who based his original design on the foundation of Ant Colonies by Kenoli.</p>
                        <h2>Frequently Asked Questions</h2>
                        <div className="awg__accordion">
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question1"></input>
                                <label className="tab" for="question1">Q: How do I install Ant War?</label>
                                <div>
                                    <p>A: I’ve created a detailed visual tutorial on how to install and start playing Ant War at this <a href="#">link</a>.</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question2"></input>
                                <label className="tab" for="question2">Q: How do I play Ant War?</label>
                                <div>
                                    <p>A: I’ve created a detailed visual tutorial on how to play Ant War at this <a href="#">link</a>.</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question3"></input>
                                <label className="tab" for="question3">Q: What’s different between Ant War, Ant Colonies, Ant Evolution, Ant Craft, etc?</label>
                                <div>
                                    <p>A: On the Starcraft 2 custom game arcade there are numerous ant games or mods. Although Sim Zergling was the inspiration for Ant Colonies, Ant Colonies itself was the first official ant game as we know it, and it was created by a developer named Kenoli. Kenoli stopped development and moved on to other projects and released Ant Colonies to other players to modify as they wish.</p>

                                    <p>Among those who did, developers named Metrick and Galsss put their own spin on the game by releasing their own Ant Colonies mods named Metrick’s Ant Colonies and Ant Colonies Ant Nob respectfully. Metrick’s was an extremely unique take on the game, featuring weather and hostile non-playable bugs. Ant Nob’s was mostly just a graphical change to Ant Colonies, but Galsss and another Ant Nob developer named Nazmin would later go on to create Ant Evolution which featured more changes.</p>

                                    <p>Metrick’s hostile creatures and unfortunately buggy weather events made the game less popular than it could’ve been. Ant Nob’s graphical changes proved to be extremely unpopular.</p>

                                    <p>Ant War modifed the visual aspects of Ant Colonies, drastically changed numerous game mechanics, created new ones, and introduced new features, map modes, units, and more. Ant War is considered to be a more developed and polished version of Ant Colonies with much more depth and more options, all the while maintaining the user friendliness and performance stability of the original. Since MDoulos followed the example of Kenoli and released Ant War as an open source mod file, other Ant games have arisen as well. One notable example is Ant Craft by Edahsrevlis with numerous new mechanics added. To find out more about ant game history in the Starcraft 2 arcade check out the History of the Ant War Game page.</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question4"></input>
                                <label className="tab" for="question4">Q: Will you make Ant War a standalone game outside of Starcraft 2’s engine?</label>
                                <div>
                                    <p>A: Because Ant War has been created using Starcraft 2’s custom game engine, there are a number of factors I don’t have to worry about. Using the Starcraft 2 engine I don’t need to worry about about building a 3D game engine to run the code that plays the game. I don’t need to worry about creating the thousands of sounds, animations, models, textures, etc. required to play the game.</p>

                                    <p>From a developer’s perspective, having a host of pre-made assets ready to drop into a [mostly] bug-free game engine makes it easy to make a game. Consider the cost of making these elements on their own. A game such as Starcraft 2 took teams of developers years to make and cost millions of dollars. I’m just one developer and I certainly don’t have millions of dollars. The idea of making a standalone 3D game version of Ant War is somewhere between the extremely daunting and the impossible for a single developer who isn’t loaded with cash. It would be cool though. 🙂</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question5"></input>
                                <label className="tab" for="question5">Q: Can I mod Ant War?</label>
                                <div>
                                    <p>A: Certainly! There is an official Ant War mod file available at this link. Feel free to make of it what you'd like! Please give credit for the base game though.</p>
                                    <p>Alternatively, if you'd like to simply make some interesting maps to play with your friends, there is a robust in-game Map Editor that requires 0 coding skill. You can access it by creating a lobby in the arcade and choosing Map Editor as the game rules option. Simply start the game and you'll see the Map Editor. Custom maps are automatically saved when they are edited!</p>
                                    <p>Learn more about using the map editor by clicking this link.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <HistoryAd />
                </main>
            </div>
        </div>
    )
}

export default About