import installingImages from '../../../assets/installing';
import './installing.scss';

const captions = [
    "Click the installer link above, or one of the play free now links on starcraft2.com.",
    "Unzip Starcraft 2 Setup and double click it to open the installer.",
    "Click Install with Starcraft 2 selected. Approximate size: 40 – 50GB.",
    "Click Play in the Battle.net launcher to launch Starcraft 2."
  ];

const Installing = () => {
    return (
        <div className="awg__installing">
            <div className="awg__installing-innercontainer">
                {Object.keys(installingImages).map((key, index) => (
                    <figure key={index}>
                        <img src={installingImages[key]} alt={`Image ${index + 1}`} />
                        <figcaption>{captions[index]}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}

export default Installing