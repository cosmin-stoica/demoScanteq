import HomeSection from "../../elements/homeSection";
import { useTranslation } from 'react-i18next';

const MesHomeCard = () => {

    const { t } = useTranslation();

    const getIncrementalDescriptions = () => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`home.primo_piano.mes.desc_${i}`)) && desc !== `home.primo_piano.mes.desc_${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptionList = getIncrementalDescriptions();

    return (
        <>
            <div className="bg-gray-light perflex width100">
                <div className="perflex">
                    <div className="wow fadeInDown" data-wow-duration="2000ms">

                        
                    <HomeSection
                            title={t("home.primo_piano.mes.title")}
                            imgSrcList={t('home.primo_piano.mes.dataImg', { returnObjects: true })}
                            descriptionList={descriptionList}
                            putBackground={true}
                            buttonText={t("home.primo_piano.mes.button")}
                            buttonLink="/mes"
                            imgLogo={t("home.primo_piano.mes.logoImg")}
                        >
                        </HomeSection>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MesHomeCard;