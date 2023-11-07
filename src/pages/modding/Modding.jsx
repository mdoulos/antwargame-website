import './modding.scss';
import image from '../../assets/modding/ant-war-game-modding.jpg';

const Modding = () => {
    return (
        <div className="awg__moddingpage awg__lightpage awg__articlepage">
            <div className='awg__lightpage-innercontainer'>
                <main>
                    <article>
                        <h1>Modding</h1>
                        <p>Ant War supports modding. Ant War is a mod of Ant Colonies, which was itself a mod of Sim Zergling before it. Making games and iterating on existing games is a part of ant game tradition and a part of what makes Ant War fun. It contributes to the growth of the ant community on the Starcraft 2 Arcade.</p>
                        <p>To create your own custom version of Ant War, click the link below to download the Ant War map file.</p>
                        <p>Last Updated: March 2022.</p>
                        <p><a href="https://drive.proton.me/urls/M5AZD1NNZ0#tHPvqE4q3Cab">Click Here</a> to Download the Ant War dev map. The download requires the password "awmod".</p>
                        <p>If you do make your own custom ant game, please mention in the public description of the game that it is “based on Ant War by MDoulos” and link to this web page.</p>
                        <figure>
                            <figcaption>An example of the Ant War mod file.</figcaption>
                            <img src={image} alt="Example image of Ant War gameplay on a computer monitor." />
                        </figure>
                    </article>
                </main>
            </div>
        </div>
    )
}

export default Modding