import ItodoImage from "../../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const IntroSupervisor = () => {

    const { t } = useTranslation("supervisor");

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

            <div className="container">
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <h1 className="TitoloCapitolo">{t("intro.header")}</h1>
                </div>
                <div className="section-full wow fadeInRight" data-wow-duration="1500ms">

                    <div className="masp-prequel-div">
                        <div className="masp-prequel-div-img">
                            <ItodoImage src="/images/supervisor/SupervisorLogo.png"></ItodoImage>
                        </div>
                        <div className="masp-prequel-div-parteP">
                            <p className="upper-supervisor-p">{t("intro.title")}</p>
                            {descriptions.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </div>


            </div>


        </>
    );
};

export default IntroSupervisor;