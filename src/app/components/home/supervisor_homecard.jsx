import CardViewer from "../../elements/cardviewer";
import HomeSection from "../../elements/homeSection";
import { useTranslation } from 'react-i18next';

const SupervisorHomeCard = () => {

    const { t } = useTranslation();

    const getIncrementalDescriptions = () => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`home.primo_piano.supervisor.desc_${i}`)) && desc !== `home.primo_piano.supervisor.desc_${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptionList = getIncrementalDescriptions();


    const cardData = [
        {
            icon: "flaticon-data",
            title: t("home.primo_piano.supervisor.control_title"),
            desc: t("home.primo_piano.supervisor.control_desc"),
            link: "/masp-caratteristiche"
        },
        {
            icon: "flaticon-monitor-1",
            title: t("home.primo_piano.supervisor.traceability_title"),
            desc: t("home.primo_piano.supervisor.traceability_desc"),
            link: "/masp-caratteristiche"
        },
        {
            icon: "flaticon-technical-support",
            title: t("home.primo_piano.supervisor.maintenance_title"),
            desc: t("home.primo_piano.supervisor.maintenance_desc"),
            link: "/masp-caratteristiche"
        },
    ]


    const supervisorData = t("home.primo_piano.supervisor.dataImg");
    console.log("supervisorData", supervisorData);
    return (
        <>
            <div className="perflex width100">
                <div className="perflex">
                    <div className="wow fadeInDown" data-wow-duration="2000ms">



                        <HomeSection
                            title={t("home.primo_piano.supervisor.title")}
                            imgSrcList={t('home.primo_piano.supervisor.dataImg', { returnObjects: true })}
                            descriptionList={descriptionList}
                            putBackground={true}
                            buttonText={t("home.primo_piano.supervisor.button")}
                            buttonLink="/supervisor"
                            backgroundColor={'white'}
                            flip={true}
                        >
                        </HomeSection>
                        
                        <CardViewer cards={cardData} isFa={false}></CardViewer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupervisorHomeCard;