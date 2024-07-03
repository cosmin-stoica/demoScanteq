import { useTranslation } from 'react-i18next';
import Title from '../../elements/title';

const ImaginaCaratteristiche = () => {

    const { t } = useTranslation("imagina");

    return (
        <>

            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <Title title={t('caratteristiche.header')}></Title>
            </div>


            <div className="div-header-job-card">
                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card caratteristiche-card">
                        <i className="header-job-card-icona-primary flaticon-support" />
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
                        <i className="header-job-card-icona-primary flaticon-development" />
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