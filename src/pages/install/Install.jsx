import { Installing, Hosting, Bookmarking } from '../../components'
import './install.scss';

const Install = () => {
    return (
        <div className="awg__installpage awg__lightpage awg__articlepage">
            <div className='awg__lightpage-innercontainer'>
                <main>
                    <article>
                        <h1>Install</h1>
                        <p>Ant War is a free to play game in the Starcraft 2 custom game arcade using the SC2 game engine, which itself is also free to play. To play Ant War, you’ll need to download and install the Starcraft 2 Battle.net game client. Instructions are included in a tutorial below. If the game is already installed, you can jump to how to <a href="#host-lobby">Find or Host Ant War Lobbies</a> or how to <a href="#bookmark">Make it Easy to Find Ant War</a>.</p>
                        <div class="installer-buttons">
                            <div><a href="https://www.battle.net/download/getInstallerForGame?gameProgram=STARCRAFT_2" class="awg-button">Download Installer</a></div>
                            <div><a href="https://starcraft2.com/" class="awg-button">Starcraft 2 Website</a></div>
                        </div>
                        <h2>How to Install Ant War</h2>
                        <p>Below is a tutorial covering how to install the Battle.net client which is required to play Starcraft 2 and also Ant War by nature of it being in the custom game arcade. If you already have access to Ant War and would like to learn the game, click How to Play to learn more.</p>
                        <Installing />
                        <h2>How to Find or Host Ant War Lobbies</h2>
                        <p>With Starcraft 2 installed, you can now play Ant War! Below is a brief tutorial on how to find Ant War on Starcraft 2.</p>
                        <Hosting />
                        <p>If you created an Ant War lobby, a public Ant War lobby will appear in the lobby list for other players and it should fill up with players within 2-10 minutes. Once full, the game will start automatically!</p>
                        <h2>Make it Easy to Find Ant War</h2>
                        <p>There are a couple of things you can do to make it easier to find Ant War without going through the steps above. You can bookmark Ant War which will highlight it everywhere it is seen and will also make it more visible in the Arcade chart. You can pin it which will make Ant War show up right along the top bar next to Lobbies and Arcade. Below is a brief tutorial on how to do so.</p>
                        <Bookmarking />
                    </article>
                </main>
            </div>
        </div>
    )
}

export default Install