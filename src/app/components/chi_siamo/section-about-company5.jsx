import Title from "../../elements/title";
import SectionAboutCompany2Inner from "../chi_siamo_home/section-about-company2-inner";
import { useTranslation } from 'react-i18next';

function SectionAboutCompany5() {
    const { t } = useTranslation();


    return (
        <>
            <div id="aboutpane" className="section-full  p-t110 p-b80 bg-white sx-about-bx3-outer">
                <Title title={t('home.chi_siamo.title')}></Title>
                <div className="container">
                    <div className="section-content margin-top50">
                        <SectionAboutCompany2Inner />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany5;