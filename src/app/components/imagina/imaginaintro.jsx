import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';


const ImaginaIntro = () => {

    const { t } = useTranslation("imagina");


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

            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">{t("intro.header")}</h1>
            </div>

            <div className="servizio-card-upper section-full wow fadeInDown" data-wow-duration="1500ms">
                <div className="servizio-card">
                    <ItodoImage className="circuitcard" src="images/circuit.png" alt="circuit"></ItodoImage>
                    <div className="servizio-card-secondaparte">

                        <div className="width100 perflex">
                            <ItodoImage className="servizio-card-img-imagina" src="images/case-study/automazione/scheda.jpg" alt="imagina-img"></ItodoImage>
                        </div>
                        {descriptions.map((desc, index) => (
                            <p className={index === 0 ? "margin-top50" : ''} key={index}>{desc}</p>
                        ))}
                    </div>

                </div>

                <div className="servizio-card-lista">
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">{t("intro.document_scanning")}</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">{t("intro.cheque_scanning")}</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">{t("intro.lottery_ticket_scanning")}</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">{t("intro.banknote_scanning")}</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">{t("intro.inkjet_printing")}</div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default ImaginaIntro;