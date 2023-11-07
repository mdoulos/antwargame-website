import './play.scss';
import tutorialImages from '../../assets/tutorial';

const Play = () => {
    return (
        <div className="awg__howtoplaypage awg__lightpage awg__articlepage">
            <div className='awg__lightpage-innercontainer'>
                <main>
                    <article>
                        <h1>How to Play</h1>
                        <p>Ant War is a very simple strategy game that has only one goal. That goal is to create a large army using the income you obtain from a multitude of workers in order to kill all enemy ant queens while simultaneously protecting your own.</p>
                        <h2>Goal</h2>
                        <ul>
                            <li>You will win if you kill all enemy <a href="https://antwargame.com/game-guide/units/queen/">ant queens</a>.</li>
                            <li>You will lose if your own queen or all allied ant queens die.</li>
                        </ul>
                        <h2>Frequently Asked Questions</h2>
                        <div className="awg__accordion">
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question1"></input>
                                <label className="tab" for="question1">Q: What new player mistakes should I avoid?</label>
                                <div>
                                    <p>A: New players often make a handful of mistakes when trying out Ant War for the first time.</p>
                                    <p>The white rock unit you’ll find in the dirt is called a pebble. Select it, and you’ll be given the option to move it out of your way. Use Pebbles in Ant War to give yourself a defensive advantage because they can act as stronger walls than dirt to protect your base. Also, you could block an enemy player’s tunnel entrance with a pebble, blocking their income temporarily.</p>
                                    <p>Your ant Workers will automatically harvest food from plants in the grass field and begin harvesting them to bring back food to the nearest Worker Nest. If you want to make sure you’re getting a good income, make sure you build a Worker Nest as close to the harvesting as possible. Always have one at the entrance of your base and never make your workers travel really far down a tunnel to drop off food. The delay will put you behind other players economically.</p>
                                    <p>The units that may sometimes appear in your base that look like worms, are worms! Kill worms to quickly get +10 food. Don’t let worms dig around inside your base and potentially make holes that make you vulnerable to attack, kill them and get a quick food bonus to give you an advantage- unless you are trying to dig quickly, then leave worms alive to dig randomly for you.</p>
                                    <p>Kill the insects that walk around passively among the plants. They give a +10 food bonus. This is helpful, especially in the early game when income is slow-going.</p>
                                    <p>Dig tunnels not chambers (rooms). One thing a lot of new players do, is dig large open chambers out of the dirt. This is terrible base design, especially near the outside field. Reserve large chambers for deep underground, near the outside you should have single-wide tunnels only. Tunnels allow you to defend your base easier because they create choke points. One of the fastest ways to lose Ant War, is to have a large army run into your base while your army is out of position and easily surround all of your structures. If you use tunnels, then even a handful of ant Soldiers can hold the chokepoints against a much larger army while your army returns to defend.</p>
                                    <p>Always keep building! Never stop investing your food into more structures. In Ant War, you can build up to 100 Worker Nests and 100 Soldier Nests, and other structures like Specialist Nests, Trash Piles, Brood Chambers, Guard Posts, etc. Keep building. Good players will hit their max structure limits in longer games (20-30 minutes).</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question2"></input>
                                <label className="tab" for="question2">Q: How do I make creep using the Wood Ant Queen?</label>
                                <div>
                                    <p>A: Think of the game map as consisting of hundreds of squares in a grid. Each dirt unit, pebble, wall, or creep square, is the size of one of these grid squares. Now think of a smaller grid of 9; 3 across and 3 down. New creep is generated in the middle of such a grid if there are at least 4 walls or dirt units also within the 3x3 grid. In simpler words, creep is generated whenever there are 4 or more walls or dirt adjacent to its tile in any direction.</p>
                                    <p>Therefore you need only build walls near each other or near dirt to make creep. Walls themselves can also make creep, but at a cost.</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question3"></input>
                                <label className="tab" for="question3">Q: How do I make creep using the Black Ant Queen?</label>
                                <div>
                                    <p>A: Black Ant Queens can make creep by enclosing small sections of dirt using their Make Dirt ability. Any grass tiles within enclosures turns to creep.</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question4"></input>
                                <label className="tab" for="question4">Q: What's the best ant race?</label>
                                <div>
                                    <p>A: The races in Ant War are balanced, with each race winning roughly the same amount of games. Choose whichever one you like the best.</p>
                                </div>
                            </div>
                            <div className="awg__accordion-entry">
                                <input type="checkbox" id="question5"></input>
                                <label className="tab" for="question5">Q: I keep losing, how can I get better?</label>
                                <div>
                                    <p>A: If you're playing free for alls or open alliances, you have the ability to see all remaining players and watch the game after you die. Observe what the bases look like for each player, specifically the building strategy and tactics of the player(s) who beat you. Furthermore, if you get stomped quickly, watch replays of those matches and note how your opening strategy differs from the player who defeated you.</p>
                                    <p>Be sure to carefully read all of the buttons and tooltips in the game. Care was taken to provide a lot of helpful information into the provided texts.</p>
                                    <p>Lastly, feel free to ask for tips from one of the many Ant War veterans who have thousands of matches of experience under their belts. Ant War has a <a href="https://discord.gg/x48au2x" target="_blank" rel="noopener noreferrer">community discord</a> that well help you find, play with, and learn from other Ant War players.</p>
                                </div>
                            </div>
                        </div>
                        <h2>Getting Started</h2>
                        <p>When the game first starts, you’ll have only one unit; a New Queen. The new queen is weak and easy to kill, so you’ll want to morph into a regular Queen as soon as you can, because regular queens have more health and are armed with a weapon.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img1} alt="Ant War Tutorial Larva"/>
                        </div>
                        <p>Use your new queen’s Dig ability to dig a tunnel into the dirt that populates the map. Dig as deep as you can, as being close to the surface is more dangerous than being deep underground. Tunnels are easier to defend than open rooms or chambers. Keep that in mind.</p>
                        <p>There are two types of dirt in the game, Dirt units which are like walls, and dirt floor which is called creep in Starcraft 2. Once you’re on creep (the dirt floor), the buttons on your new queen light up and you’re able to morph into a queen.</p>
                        <p>Choose to play as one of four ant races; Black, Wood, Fire, or Crazy. If you’re playing the Simplified game mode, you won’t be able to play as Crazy.</p>
                        <p>In simple terms, as a new player, Blacks are good for hiding and turtling as you learn to play. Wood is good at building walls to defend yourself. Fire is good if you’re confident in your micro ability and want to build soldiers right away, and Crazy is good for mid to late game aggression that favors army swarms over tactics.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img2} alt="Ant War Tutorial Queen Morph"/>
                        </div>
                        <p>No matter which race you pick, a great opener is to spend all of your starting food on worker nests.</p>
                        <p>It’s worth noting here, that a common mistake new players make, is to force their workers to travel deep underground to drop off food. Every single worker nest is a food drop off point, and the further your workers must travel to reach the nearest worker nest, the slower your economy’s income will be.</p>
                        <p>It is crucial to build a worker nest as close to the grass as possible to reduce the amount of time it takes to drop off food. If you're familiar with Starcraft, think of the plants as mineral fields and each worker nest a command center, nexus, or hatchery. You want to build your income drop-off structure as close to the mineral line (plants) as possible.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img3} alt="Ant War Tutorial Worker Nests"/>
                        </div>
                        <p>Construct worker nests to get your economy started. Once built, each nest will automatically spawn a worker unit that will find and harvest honeydew (food) from the nearest plant.</p>
                        <p>Although Honeydew is the name of the basic ant resource, take note of how the different workers from each ant race also visibly carry other resource types such as meat, wood, or leaves. These have no impact on gameplay, but aesthetically add to the richness of the world in which your ant battles take place. Wood Ants for example collect wood and leaves which help them build their walls.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img4} alt="Ant War Tutorial Workers"/>
                        </div>
                        <h2>Training a Military</h2>
                        <p>Now that you have an income coming in, it’s time to build soldier nests. Soldier nests will automatically produce 1 soldier and can be upgraded to produce more or to produce a greater soldier known as a major. Soldiers will respawn when they die, at the nest that produced them, and they are the backbone of your army.</p>
                        <p>It’s important to have soldiers as early as you can, so that they can patrol and protect your base and workers from enemy soldiers.</p>
                        <p>Once you begin constructing your military, do not neglect your economy. Keep building worker nests. If you're able, try to get to the limit of 100 worker nests and 100 soldier nests.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img5} alt="Ant War Tutorial Soldiers"/>
                        </div>
                        <p>Numerous units are cloaked in the game and need detectors to see them. Queens, Scouts, and Scout Nests are able to see invisible units. Train cloaked scouts to discretely find out where enemy bases are. Turn them into outposts in order to monitor enemy positions.</p>
                        <p>Outposts have a larger visibility radius than scouts do, but they aren't detectors. Decide for your needs wisely.</p>
                        <p>Note that Scout Nests have a short range radar on them, allowing them to detect incoming attacks or surprise dig-ins on your base. Place Scout Nests at the back of your base to avoid catastrophic surprise attacks. Scouts also have the ability to use a shorter range radar, allowing them to detect enemy positions hidden behind dirt and out of sight.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img6} alt="Ant War Tutorial Scouts"/>
                        </div>
                        <p>Each ant race has two specialist units available to it.</p>
                        <p>Soldiers and majors are often not sufficient to get the job done and specialists are required in order to defend your base or break enemy positions.</p>
                        <p>Train specialists at one of the unique specialist nests per race: Super Major Nest, Acid Sprayer Nest, Acid Shooter Nest, and Acid Bomber Nest.</p>
                        <p>Specialist units require a unique resource called supply. Supply is created by brood chambers. You get 50 available supply for each brood chamber, up to a maximum of 500 supply for 10 brood chambers. Note that workers, soldiers, and majors will automatically hatch from brood chambers rather than their respective nests. This can be disabled with a button on each individual brood chamber.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img8} alt="Ant War Tutorial Specialists"/>
                        </div>
                        <h2>Winning the War</h2>
                        <p>Once you've amassed a large army, attack! Victory is achieved when there are no enemy ant queens left alive. You'll be defeated if there are no friendly ant queens left alive.</p>
                        <div className="awg__howtoplaypage-image">
                            <img src={tutorialImages.img7} alt="Ant War Tutorial Attack"/>
                        </div>
                        <p>Be sure to stick around as an observer to watch the game after you've been defeated and review the in-game score board that appears at the end of the match to compare how you did with your opponents.</p>
                    </article>
                </main>
            </div>
        </div>
    )
}

export default Play