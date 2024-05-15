import ItodoImage from "../../elements/itodo-img";
import maspDataIntro from "../../../globals/DataTEXT/maspDataIntro";

const IntroMasp = () => {
    return (
        <>
            <h1 className="TitoloCapitolo">Funzionalità e Configurazione </h1>


            {maspDataIntro.map((data, index) => (
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
                                        <i className={dettaglio.iconaClasse} />
                                    </div>
                                    <p>{dettaglio.descrizione}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default IntroMasp;