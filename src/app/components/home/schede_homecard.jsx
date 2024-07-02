import HomeSection from "../../elements/homeSection";
import { useTranslation } from 'react-i18next';

const SchedeHomeCard = () => {

    const { t } = useTranslation();

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

    const descriptionsio24 = getIncrementalDescriptions("home.primo_piano.schede_automazione.io24_desc_");
    const descriptionsencoder = getIncrementalDescriptions("home.primo_piano.schede_automazione.encoder_desc_");
    const descriptionscora = getIncrementalDescriptions("home.primo_piano.schede_automazione.cora_desc_");

    const descriptionList = [...descriptionsio24, ...descriptionsencoder, ...descriptionscora];

    return (
        <>
            <div className="bg-white perflex width100">
                <div className="perflex">
                    <div className="wow fadeInDown" data-wow-duration="2000ms">

                        <HomeSection
                            title={t("home.primo_piano.schede_automazione.header")}
                            imgSrcList={t('home.primo_piano.schede_automazione.dataImg', { returnObjects: true })}
                            descriptionList={descriptionList}
                            putBackground={true}
                            buttonText={t("home.primo_piano.schede_automazione.button")}
                            buttonLink="/schede-automazione"
                            flip={true}
                        >
                        </HomeSection>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchedeHomeCard;