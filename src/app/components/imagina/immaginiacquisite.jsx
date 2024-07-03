import Title from "../../elements/title";
import SectionCaseStudy2 from "./section-case-study2";
import { useTranslation } from 'react-i18next';

const ImmaginiAcquisite = () => {

    const { t } = useTranslation("imagina");

    return (
        <>
            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <Title title={t("immagini.header")}></Title>
            </div>

            <SectionCaseStudy2></SectionCaseStudy2>

    
        </>
    );
};

export default ImmaginiAcquisite;