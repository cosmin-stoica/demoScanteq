import { useTranslation } from 'react-i18next';
import NewHeaderTitle from "../../elements/common/newHeaderTitle";

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


    <NewHeaderTitle
    title={t("prequel.header")}
    descList={descriptions}
    buttonText="Contattaci"
    imgSrc="/images/masp/masp.png"
    />

    </>
  );
};

export default MaspPrequel;
