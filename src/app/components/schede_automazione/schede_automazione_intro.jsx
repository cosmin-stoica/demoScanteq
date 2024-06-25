import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const SchedeAutomazioneIntro = () => {

    const { t } = useTranslation("schede_automazione");

    
    const getIncrementalDescriptions = (variabile) => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`${variabile}${i}`)) && desc !== `${variabile}${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptions = getIncrementalDescriptions("intro.desc_");

    return (
        <>


            <div className="">
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <h1 className="TitoloCapitolo">{t("intro.header")}</h1>
                </div>


                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <div className="introunita-div">

                        <div>
                            <ItodoImage src="images/hardware/schedeautomazione/schede_insieme.png" alt="schede_image"></ItodoImage>
                        </div>
                        {descriptions.map((desc, index) => (
                                <div className="text-container" key={index}>{desc}</div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );

};

export default SchedeAutomazioneIntro;
