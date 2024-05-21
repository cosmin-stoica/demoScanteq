import ItodoImage from "../../elements/itodo-img";
import mesData from "../../../globals/DataTEXT/Mes/mesData";

const MesIntro = () => {
    return (
        <>
            <div className="container">
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <h1 className="TitoloCapitolo">Gestione Integrata della Produzione</h1>
                </div>
                <div className="section-full wow fadeInRight" data-wow-duration="1500ms">

                    <div className="masp-prequel-div">
                        <div className="masp-prequel-div-img">
                            <ItodoImage src="/images/mes/mesLogo.png"></ItodoImage>
                        </div>
                        <div className="masp-prequel-div-parteP">
                            <p className="upper-supervisor-p">{mesData[0].descrizione1Intro}</p>
                            <p>{mesData[0].descrizione2Intro}</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default MesIntro;