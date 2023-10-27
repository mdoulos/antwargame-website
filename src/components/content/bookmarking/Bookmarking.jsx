import bookmarkingImages from '../../../assets/bookmarking';
import './bookmarking.scss';

const captions = [
    "With Ant War selected (1) in the Arcade search, click Map Info (2)",
    "Click Pin (1) and Bookmark (2) in the top right.",
    "When Ant War is pinned, it will show on the same bar as Lobbies and Arcade (circled)",
    "When Ant War is bookmarked, it will show prominently in the Arcade screen. It will also be highlighted when in the lobby list to spot faster.",
    "It’s worth also clicking Join Chat at this point (circled). This will make it easier to find other Ant War players and it will be easier for them to find you."
  ];

const Bookmarking = () => {
    return (
        <div className="awg__bookmarking" id="bookmark">
            <div className="awg__bookmarking-innercontainer">
                {Object.keys(bookmarkingImages).map((key, index) => (
                    <figure key={index}>
                        <img src={bookmarkingImages[key]} alt={`Image ${index + 1}`} />
                        <figcaption>{captions[index]}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}

export default Bookmarking