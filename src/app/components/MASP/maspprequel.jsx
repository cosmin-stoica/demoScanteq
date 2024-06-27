import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const MaspPrequel = () => {

  const { t } = useTranslation("masp_caratteristiche");

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

  const descriptions = getIncrementalDescriptions("prequel.desc_");

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
            {descriptions.map((desc, index) => (
              <p className="font-primary" key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MaspPrequel;
