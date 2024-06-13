import SectionCaseStudy2 from "../../sections/home/index2/section-case-study2";
import { useTranslation } from 'react-i18next';

const ImmaginiAcquisite = () => {

    const { t } = useTranslation("imagina");

    return (
        <>
            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">{t("immagini.header")}</h1>
            </div>

            <SectionCaseStudy2></SectionCaseStudy2>

    
        </>
    );
};

export default ImmaginiAcquisite;