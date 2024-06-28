import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const IntroMasp = () => {

    const { t } = useTranslation("masp_caratteristiche");
    const maspDataIntro = t('intro.data', { returnObjects: true });

    if (Array.isArray(maspDataIntro) && maspDataIntro !== null) {
        maspDataIntro.forEach(item => {
        });
    } else {
        console.error('La lista non è disponibile o non è un array.');
    }
    
    const CardList = [
        {
          src: "/images/masp/masp_white.png",
          width: "50%",
          widthLower: "40%",
          color1: "rgba(255, 142, 142, 0.3)",
          color2: "rgba(238, 53, 42, 0.3)",
          colorBackGround: "rgb(0,12,84)",
          transitionSeconds: "1000",
          transitionSecondsCss: "1s",
          fixedSeconds: "500",
          totalSeconds: "4000"
        }
      ]

    return (
        <>


            {maspDataIntro.map((data, index) => (
                <div className={`section-full wow fadeIn${data.fade}`} data-wow-duration="1500ms">
                    <div key={index} className={`servizio-card-upper ${data.margin ? 'margin-top100' : ''}`}>
                        <div className="servizio-card-title masp-card-title width100 perflex">
                            {data.titolo}
                        </div>
                        <div className="servizio-card">
                            <div className="masp-card-per-img">
                                <ItodoImage className="masp-card-img" src={data.immagineSrc} alt={data.immagineAlt} />
                            </div>
                            <div className="servizio-card-secondapartemasp">
                                {data.dettagli.map((dettaglio, dettaglioIndex) => (
                                    <div key={dettaglioIndex} className="masp-card-secondaparte-div">
                                        <div className="masp-card-secondaparte-div-divi">
                                            <div className="orange-circle">
                                            <i className={dettaglio.iconaClasse} />
                                            </div>
                                        </div>
                                        <p>{dettaglio.descrizione}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="width100 perflex margin-top100">
                <NavLink to="/masp-operazioni"><button className="masp-btn-avanti">{t("intro.button")}</button></NavLink>
            </div>
        </>
    );
};

export default IntroMasp;