import HomeSection from "../../elements/homeSection";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const MaspHomeCard = () => {

    const { t } = useTranslation();

    const getIncrementalDescriptions = () => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`home.primo_piano.piattaforma_masp.desc_${i}`)) && desc !== `home.primo_piano.piattaforma_masp.desc_${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptionList = getIncrementalDescriptions();

    return (
        <>
        <HomeSection
        title={t("home.primo_piano.piattaforma_masp.title")}
        descriptionList= {descriptionList}
        buttonText={t("home.primo_piano.piattaforma_masp.button")}
        buttonLink="/masp-caratteristiche"
        imgSrc="images/masp/principale_home.png"
        > 
        </HomeSection>
        </>
    );
};

export default MaspHomeCard;