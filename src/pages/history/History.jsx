import './history.scss';

const History = () => {
    return (
        <div className="awg__historypage awg__lightpage awg__articlepage">
            <div className='awg__lightpage-innercontainer'>
                <main>
                    <article>
                        <h1>History of Ant War</h1>
                        <h2>Introduction: Sim Zergling</h2>
                        <p>Before Ant War was even conceived of as an idea, before I (MDoulos) even joined the Starcraft 2 Arcade as a developer, a developer named Vanished laid the foundation for what would become Ant Colonies and then Ant War.</p>
                        <p>Vanished published Sim Zergling in 2015 and it did not enjoy much fanfare due to it’s complicated options, severe lag, and unresolved bugs. Despite its lack of success, Sim Zergling laid the foundation for later games with concepts such as: a map made out of dirt units that needed to be dug through, a queen that needed to be protected or else the player would lose, a map layout that is almost identical to “Standard” in Ant Colonies and “Basin” in Ant War, zerglings used as the primary fighting force, and specialist units including roaches and ultralisks.</p>
                        <h2>Ant Colonies, the first "ant game".</h2>
                        <p>Another developer named Kenoli played Sim Zergling after it launched in 2015. Kenoli took note of the problems he saw with Sim Zergling and seeing more potential for the game type, published an iteration of the game that was more elegant and relatively bug free, called Ant Colonies. Ant Colonies was first published in September of 2016 and went through a handful of iterations. In May of 2017, right before ending further development of Ant Colonies, Kenoli released a developer (dev) map of Ant Colonies so that other people could learn how to use the Starcraft 2 Galaxy editor and potentially make and publish their own iterations and ideas for ant maps if they’d like.</p>
                        <p>Kenoli made his map open source fairly quickly, even before he released the dev map, he allowed other players to have a copy such as a player named Moon who created an Ant Colonies modification (mod) called Ant Colonies – The Evolution. Unfortunately The Evolution did not differ much from Ant Colonies, was buggy and unbalanced, and the project was abandoned without leaving beta.</p>
                        <p>Among others who would go on to develop small mods of Ant Colonies, two developers in particular started working on their own versions of Ant Colonies. Metrick used the dev map to make Metrick’s Ant Colonies which featured different environmental elements such as hostile insects and weather events. Galsss (aka TheElephant) used the dev map to make Ant Colonies Ant Nob after his clan name Ant Nob, a play on the word Newb. Ant Colonies Ant Nob was primarily a graphical update to structures and units featuring real ant models instead of zerg drones and zerg zerglings. It also featured new map choices and team options.</p>
                        <h2>Learning to Develop Ant War</h2>
                        <p>Meanwhile, over the winter of 2017 and 2018, I played a lot of Ant Colonies and acquired a decent skill level by watching replays everytime I lost, in order to learn from the winner’s actions. In February of 2018, I was recruited by the Ant Nob clan and started playing Ant Colonies Ant Nob. On February 21st I began helping the developer Galsss design fun ant themed button art after I volunteered my Photoshop abilities. A few days later, after I showed interest in exploring the Starcraft 2 galaxy editor, I was given a copy of the Ant Colonies open-source dev map by Galsss to play around with.</p>
                        <p>Starting on February 24th of 2018, I began asking questions in the Ant Colonies and Ant Nob discord servers and received answers to extremely basic editor questions as I took my first steps into the overwhelming world of the galaxy editor. Developers such as Kenoli himself, Metrick, and Galsss were quick to reply to the different questions I had about the dev map and how to do the different things I wanted to do.</p>
                        <h2>Publishing Ant War for the first time</h2>
                        <p>After 3 weeks of learning a few things in the editor and modifying the existing Ant Colonies dev map, I published my first release of Ant War to the American Starcraft 2 Battlenet server on March 14th 2018.</p>
                        <p>The initial version of Ant War did not differ much from Ant Colonies and certainly wasn’t the full game replacement it is today, but it did feature some key changes still seen in Ant War today including: the addition of the Crazy Ant race (with an additional queen for the Crazy Ant, and more numerous soldiers), the ability for Black Ants to build fake dirt to hide their base, a more defense oriented Wood Ant queen (initially renamed to Weaver Ant), and a stronger Fire Ant queen.</p>
                        <p>A message in-game initially asked new Ant War players to join the Ant Nob discord, but after a short period of time, Ant War discussion grew to a point that it needed more space to grow and I launched the Ant War discord at some point in March of 2018.</p>
                        <h2>First Year of Development and Contributors</h2>
                        <p>Although Ant War is primarily the culmination of one designer’s vision, it was not created entirely without help. In addition to certain significant players contributing key ideas, other developers were decisively helpful in teaching me how to develop and even contributed key technical components along the way.</p>
                        <p>At some point in April or May of 2018, Galsss from Ant Colonies Ant Nob began contributing to Ant War’s development process going on to formally become a helping developer until August. Another helping developer named Glow joined in temporarily in May as well and did a couple of minor things that revealed to me that Ant War could get significantly better aesthetically. Glow did a few texture edits that changed the color of creep from purple to brown thus matching the color of dirt, and he changed the color of ant eggs and zerglings to be more realistic. Galsss had a key focus on model optimization and model editing. His contributions helped significantly to improve game performance, and his verbal feedback was helpful in understanding player desires in the realm of game design. Mostly in advisory roles, developers Kenoli of Ant Colonies and Owyn of Firewood Ant Colonies also contributed at different points along the way.</p>
                        <p>Galsss and I stopped working together in August 2018 due to differences in how we thought Ant War should be designed and developed. Galsss would go on to create a new mod of Ant Colonies called Ant Evolution with another player called Nazmin (aka DeepWrinkles), releasing it around March of 2019. Ant Evolution is a more ambitious edit of Ant Colonies than Ant Colonies Ant Nob was, but sadly development was later abandoned before completion.</p>
                        <p>Despite the loss of a developer, development charged forward at a feverish pace. The fall of 2018 saw the addition of many notable features including ant Majors, Scouts, Scout Nests, Specialist Attack Markers, Hidden Tunnels, Acid Bomber Nests, the Mutation System (featured temporarily in Ant War Evolution), new maps, dozens of bug fixes, and much more. Altogether a total of 17 patches made their way online featuring hundreds of minor edits and dozens of sizeable differences with many changes, especially new features, making their way into the final version of Ant War.</p>
                        <h2>Second Year of Development and Other Games</h2>
                        <p>The second year of Ant War development saw the removal of many unpopular features, the fixing of long standing bugs, the refactoring of the trigger (code) base, the reskinning of basically everything, and the overall tweaking and polishing of the entire game.</p>
                        <p>Numerous changes were made to simplify preexisting changes that had simply made Ant War too clunky and complex, such as normalizing structure costs for all races and removing superfluous buildings and environmental units that distracted from more than they added to the game. In addition, the complex mutation system that had been added in October was completely removed, although the popularity of that version of the game spawned the creation of Ant War Evolution which featured it (though this version was later deleted).</p>
                        <p>Other features which had long been requested had also been added to the game such as Artificial Intelligence in February 2019 and Custom Control Groups in October 2019.</p>
                        <p>Ant War Evolution which featured the mutation system introduced in October of 2018 and another mod called Ant Craft were both mods spawned out of Ant War as opposed to Ant Colonies. Ant Craft was made from an older version of Ant War and was released by permission by Edahsrevlis in May of 2019.</p>
                        <h2>The Wild Ride of Ant War Development</h2>
                        <p>If one sentence could be used to describe me as a developer during my first 2 years of making Ant War, it would be “a prolific and sometimes obnoxious changemaker”. Ant War players experienced at least 92 recorded game updates (patches) during that time. An exact number is difficult to determine, because records weren’t as neatly kept near the beginning of development. To put that in perspective, Ant Colonies has had only 30 patches. Furthermore, more than a handful of Ant War patches were so large that they could contain almost all of Ant Colonies’ 30 in a single one.</p>
                        <p>Many players were understandably put off by the speed of changes, finding it difficult to keep up. Others found it undesireable to learn Ant War to a skilled level knowing that a change may invalidate what they had learned only a few days later. I was of the mindset that the changes needed to keep coming until Ant War realized the intentions I had for it. Unfortunately, some of those intentions mutated and changed over time, giving rise to a handful of stark differences between versions of the game from one month to the next.</p>
                        <h2>Wrapping Up Development</h2>
                        <p>Over the course of 2020 and 2021, as I had time, Ant War was polished, polished some more, and polished some more. Major quality of life improvements were added, annoyances removed, bugs found and fixed. In addition there were numerous models swapped for better ones, optimized, and textures were reworked to look a lot better yet still maintain great performance. Overall, Ant War looked and performed better. As for balance, the subtle imbalances between races, especially in the late game and on different game modes, were critically examined and repaired.</p>
                        <p>A major development disruption occurred in February of 2021 that stopped development for 6 months. Basically I had no working computer capable of developing Ant War without crashing. Through the generosity of the Ant War active player base and with a small bribe of exclusive skin purchases for donors, enough money was raised to not only get a new computer, but a significant performance upgrade as well. Due to the gpu shortage, the computer could not be assembled completely until June, and active patches resumed in August. At which point skins were first introduced into the game, with only the exclusive Simulant design available to donors.</p>
                        <p>Ant War's last major developments occurred in 2022, in a year that saw numerous auxiliary features added to the game. For example, an in-game Map Editor was added in January, an end of the game custom score screen in February, and Achievements, skins, and localizations added in July.</p>
                        <p>Behind the scenes, cutting edge data encryption was also developed during this time in order to make features such as stats, achievements, and skins secure.</p>
                        <h2>Ongoing Maintenance</h2>
                        <p>Ant War still experiences the occassional patch, mostly to fix bugs if they're found, but also slight balance tweaks. New mechanics for some units are sometimes added to keep the game interesting, but the changes pale in comparison to the patches of the past, and these could be considered to be merely ongoing balance changes and bug fixes.</p>
                        <p>If you enjoy playing Ant War, thank you for your patronage and for reading this far!</p>
                    </article>
                </main>
                <aside className="awg__historypage-timeline">
                    <div>
                        <div>
                            <label></label>
                            <div>
                                <h3>2015</h3>
                                <p>Sim Zergling Published by Vanished, inspiring Kenoli</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>2016</h3>
                                <p>Kenoli begins development on Ant Colonies</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>September 25 2016</h3>
                                <p>Ant Colonies Published by Kenoli</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>May 2 2017</h3>
                                <p>Kenoli makes Ant Colonies open source</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>Summer - Winter 2017</h3>
                                <p>Metrick makes Metrick's Ant Colonies</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>Summer 17 - Spring 18</h3>
                                <p>Galsss makes Ant Colonies Ant Nob</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>February 2018</h3>
                                <p>MDoulos recruited to the Ant Nob clan and helps make Ant Nob UI artwork.</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>February 24 2018</h3>
                                <p>Development begins on Ant War</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>March 14 2018</h3>
                                <p>Ant War first draft published by MDoulos</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>Development Summary of 2018</h3>
                                <p>Many core gameplay mechanics created, map types, game modes, abilities, structures, and units.</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>April - August 2018</h3>
                                <p>Galsss of Ant Nob helping out as a co-developer, specializing in model optimization.</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>March 2019</h3>
                                <p>Ant Evolution published by Deepwrinkles and Galsss</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>May 2019</h3>
                                <p>Ant Craft published by Edahsrevlis, a mod of Ant War.</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>Development Summary of 2019</h3>
                                <p>Many core gameplay mechanics refined, map types, game modes, abilities, structures, and units.</p>
                                <p>Added AI Players (Artificial Intelligence) to fight against.</p>
                                <p>Added the ability to observe the rest of the game after being personally defeated.</p>
                                <p>Added custom Control Groups and other quality of life improvements.</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>Development Summary of 2020</h3>
                                <p>Many core gameplay features refined, performance increased, bugs fixed. New units, modes, and maps added.</p>
                                <p>Added Statistics, ie recording actions performed in game.</p>
                            </div>
                        </div>
                        <div>
                            <label></label>
                            <div>
                                <h3>Development Summary of 2021</h3>
                                <p>Development disruption for half of the year.</p>
                                <p>Major aesthetic improvements, better textures, model optizations, and bug fixes.</p>
                                <p>Game balanced refined and performance improved. Some features added such as Map Scrambling. Many mechanics still being reworked and tweaked with a focus on polishing off concepts.</p>
                            </div>
                        </div>
                        <div className="timeline-event-alt">
                            <label></label>
                            <div>
                                <h3>Development Summary of 2022</h3>
                                <p>Major features are added to the game, marking the end of core-gameplay development.</p>
                                <p>Major features that were added include: an in-game Map Editor, earnable and purchaseable Skins, Achievements, and localizations for 9 languages.</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default History