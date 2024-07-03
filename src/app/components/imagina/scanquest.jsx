import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';
import Title from "../../elements/title";

const ScanQuest = () => {

    const { t } = useTranslation("imagina");

    return (
        <>
            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <Title title={t("scanquest.header")}></Title>
            </div>

            <div className="scanquest-div">
                <p className="font-primary">{t("scanquest.title")}</p>
                <div className="row sx-single-small-media">
                    <div className="col-md-6 col-sm-4">
                        <div className="sx-box m-b30">
                            <div className="sx-media">
                                <ItodoImage src="images/case-study/automazione/prima.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-4">
                        <div className="sx-box m-b30">
                            <div className="sx-media">
                                <ItodoImage src="images/case-study/automazione/seconda.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
        </>
    );
};

export default ScanQuest;