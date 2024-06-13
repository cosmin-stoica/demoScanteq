import { useTranslation } from 'react-i18next';

const NewTracciabilita = () => {

    const { t } = useTranslation("masp_tracciabilita");

    return (
        <>
            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">{t("header")}</h1>
            </div>

            <div className="tracciabilita-div">
                <div className="tracciabilita-div-inner">
                    <i className="flaticon-smart-contracts"></i>
                    <p>
                        {t("desc_1")}
                    </p>
                </div>
                <div className="tracciabilita-div-inner">
                    <i className="flaticon-cloud-computing"></i>
                    <p>
                        {t("desc_2")}
                    </p>
                </div>
            </div>

        </>
    );
};

export default NewTracciabilita;