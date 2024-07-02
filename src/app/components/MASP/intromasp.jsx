import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import HomeSection from "../../elements/homeSection";

const IntroMasp = () => {

    const { t } = useTranslation("masp_caratteristiche");
    const maspDataIntro = t('intro.data', { returnObjects: true });

    if (Array.isArray(maspDataIntro) && maspDataIntro !== null) {
        maspDataIntro.forEach(item => {
        });
    } else {
        console.error('La lista non è disponibile o non è un array.');
    }

    console.log(maspDataIntro);

    return (
        <>


            {maspDataIntro.map((data, index) => (
                <HomeSection
                    title={data.titolo}
                    imgSrcList={data.data}
                    putBackground={true}
                    descriptionList={data.dettagli.map(item => item.descrizione)}
                    backgroundColor={index % 2 === 0 ? 'white' : 'rgb(245,245,245)'}
                    flip={index % 2 === 0}
                />
            ))}
            <div className="width100 perflex margin-top100">
                <NavLink to="/masp-operazioni"><button className="masp-btn-avanti">{t("intro.button")}</button></NavLink>
            </div>
        </>
    );
};

export default IntroMasp;