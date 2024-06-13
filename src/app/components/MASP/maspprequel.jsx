import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const MaspPrequel = () => {

  const { t } = useTranslation("masp_caratteristiche");

  return (
    <>
      <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
        <h1 className="TitoloCapitolo">{t("prequel.header")}</h1>
      </div>

      <div className="section-full wow fadeInRight" data-wow-duration="1500ms">

        <div className="masp-prequel-div">
          <div className="masp-prequel-div-img">
            <ItodoImage src="/images/masp/masp.png"></ItodoImage>
          </div>
          <div className="masp-prequel-div-parteP">
            <p>{t("prequel.desc_1")}</p>
            <p>{t("prequel.desc_2")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaspPrequel;
