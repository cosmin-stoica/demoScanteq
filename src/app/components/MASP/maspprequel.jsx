import HomeSection from "../../elements/homeSection";
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


  /*const maspDataIntro = t('intro.data', { returnObjects: true });

  if (Array.isArray(maspDataIntro) && maspDataIntro !== null) {
    maspDataIntro.forEach(item => {
    });
  } else {
    console.error('La lista non è disponibile o non è un array.');
  }

  
  const CardListJob = [
    {
      src: "/images/jobs/jobs/1.png",
      width: "47%",
      widthLower: "40%",
      color1: "rgba(255, 142, 142, 0.3)",
      color2: "rgba(238, 53, 42, 0.3)",
      colorBackGround: "rgb(0,12,84)",
      transitionSeconds: "1000",
      transitionSecondsCss: "1s",
      fixedSeconds: "500",
      totalSeconds: "4000"
    },
    {
      src: "/images/jobs/jobs/2.png",
      width: "47%",
      widthLower: "40%",
      color1: "rgba(142, 255, 142, 0.4)",
      color2: "rgba(238, 53, 42, 0.6)",
      colorBackGround: "rgb(240,240,240)",
      transitionSeconds: "1000",
      transitionSecondsCss: "1s",
      fixedSeconds: "500",
      totalSeconds: "4000"
    },
    {
      src: "/images/jobs/jobs/3.png",
      width: "47%",
      widthLower: "40%",
      color1: "rgba(142, 142, 142, 0.4)",
      color2: "rgba(238, 255, 42, 0.6)",
      colorBackGround: "rgb(220,220,220)",
      transitionSeconds: "1000",
      transitionSecondsCss: "1s",
      fixedSeconds: "500",
      totalSeconds: "4000"
    },
    {
      src: "/images/jobs/jobs/4.png",
      width: "47%",
      widthLower: "40%",
      color1: "rgba(142, 142, 142, 0.4)",
      color2: "rgba(238, 255, 42, 0.6)",
      colorBackGround: "rgb(220,220,220)",
      transitionSeconds: "1000",
      transitionSecondsCss: "1s",
      fixedSeconds: "500",
      totalSeconds: "4000"
    }
  ]*/


  return (
    <>

      {/* maspDataIntro.map((data, index) => (
        <>
          {data.titolo === "Implementazione delle Operazioni tramite Job" &&
            <HomeSection
              title={t("prequel.header")}
              imgSrcList={CardListJob}
              putBackground={true}
              descriptionList={descriptions}>
            </HomeSection>}
        </>
      ))*/ }

      <HomeSection
        title={t("prequel.header")}
        imgSrcList={CardList}
        putBackground={true}
        descriptionList={descriptions}>
      </HomeSection>

      {/*<div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
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
          </div>*/}
    </>
  );
};

export default MaspPrequel;
