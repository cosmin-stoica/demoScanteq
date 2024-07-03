import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';
import Title from "../../elements/title";

const MesIntro = () => {

    const { t } = useTranslation("mes");

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
            <div className="container">
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <Title title={t("intro.header")}></Title>
                </div>
                <div className="section-full wow fadeInRight" data-wow-duration="1500ms">

                    <div className="masp-prequel-div">
                        <div className="masp-prequel-div-img">
                            <ItodoImage src="/images/mes/mesLogo.png"></ItodoImage>
                        </div>
                        <div className="masp-prequel-div-parteP">
                            <p className="upper-supervisor-p font-primary">{t("intro.title")}</p>
                            {descriptions.map((desc, index) => (
                                <p className="font-primary" key={index}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default MesIntro;