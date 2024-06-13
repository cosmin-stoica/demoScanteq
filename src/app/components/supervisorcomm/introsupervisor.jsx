import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const IntroSupervisor = () => {

    const { t } = useTranslation("supervisor");

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
                            <p>{t("intro.desc")}</p>
                        </div>
                    </div>
                </div>


            </div>


        </>
    );
};

export default IntroSupervisor;