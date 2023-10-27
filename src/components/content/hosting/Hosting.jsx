import hostingImages from '../../../assets/hosting';
import './hosting.scss';

const captions = [
    "Choose Custom (1), and see if an Ant War lobby (3) is already open with Lobbies (2) selected.",
    "If no Ant War lobby exists, with Custom selected (1), click Arcade (2) instead of Lobbies.",
    "With Arcade selected (1), put your cursor in the search bar (2).",
    "Search Ant War in the search bar (1) and the Ant War game option will come to the top (2).",
    "With Ant War selected (1), click Create Lobby in the bottom left (2).",
    "Click Make Public (circled) to allow other players to join the lobby."
  ];

const Hosting = () => {
    return (
        <div className="awg__hosting" id="host-lobby">
            <div className="awg__hosting-innercontainer">
                {Object.keys(hostingImages).map((key, index) => (
                    <figure key={index}>
                        <img src={hostingImages[key]} alt={`Image ${index + 1}`} />
                        <figcaption>{captions[index]}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}

export default Hosting