//import ItodoImage from "../../../elements/itodo-img";
import ItodoImage from "../../elements/itodo-img";
import mesData from "../../../globals/DataTEXT/Mes/mesData";

const MesCategoriePrequel = () => {
    return (
        <>
            <div className="container">

                <div className="categorie-div-row">

                    <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/lavorazioni.png"></ItodoImage>
                            <p>Lavorazioni</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/commesse.png"></ItodoImage>
                            <p>Commesse</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/componenti.png"></ItodoImage>
                            <p>Componenti</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInRight" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/info.png"></ItodoImage>
                            <p>Info Ausiliarie</p>
                        </div>
                    </div>

                </div>

                <div className="section-full wow fadeInDown" data-wow-delay="900ms" data-wow-duration="1500ms">
                    <div className="width100 perflex">
                        <div className="mes-descrizione">
                            <p>{mesData[1].descrizioneSottoIntro}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MesCategoriePrequel;