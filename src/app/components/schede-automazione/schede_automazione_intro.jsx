import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const SchedeAutomazioneIntro = () => {

    const { t } = useTranslation("schede_automazione");

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
                        <div className="text-container">
                            {t("intro.desc")}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default SchedeAutomazioneIntro;
