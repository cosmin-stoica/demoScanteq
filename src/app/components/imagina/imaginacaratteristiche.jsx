import { useTranslation } from 'react-i18next';

const ImaginaCaratteristiche = () => {

    const { t } = useTranslation("imagina");

    return (
        <>

            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">{t("caratteristiche.header")}</h1>
            </div>


            <div className="div-header-job-card">
                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card caratteristiche-card">
                        <i className="header-job-card-icona flaticon-support" />
                        <h1>
                            {t("caratteristiche.title_1")}
                        </h1>
                        <p>
                            {t("caratteristiche.desc_1")}
                        </p>
                    </div>
                </div>
                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card caratteristiche-card">
                        <i className="header-job-card-icona flaticon-development" />
                        <h1>
                            {t("caratteristiche.title_2")}
                        </h1>
                        <p>
                            {t("caratteristiche.desc_2")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImaginaCaratteristiche;