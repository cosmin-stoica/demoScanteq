import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import schedeDescrizioneData from "../../../globals/DataTEXT/Hardware/Schede_Automazione/schedeDescrizioneData";

const Schede_Descrizione = () => {
    return (
        <>
            <div>
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <h1 className="TitoloCapitolo">Le nostre schede</h1>
                </div>

                {schedeDescrizioneData.map((data, index) => (
                    <div className={`section-full wow fadeIn${data.fade}`} data-wow-duration="1500ms">
                        <div key={index} className={`servizio-card-upper ${data.margin ? 'margin-top100' : ''}`}>
                            <div className="servizio-card-title masp-card-title width100 perflex">
                                {data.titolo}
                            </div>
                            <div className="servizio-card">
                                <div className="masp-card-per-img">
                                    <ItodoImage className="masp-card-img-hardware-unitadicontrollo" src={data.immagineSrc} alt={data.immagineAlt} />
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
                    </div>
                ))}

                <div className="width100 perflex margin-top100">
                    <NavLink to="/unitadicontrollo"><button className="masp-btn-indietro">Indietro</button></NavLink>
                    <NavLink to="/scheda-controllo-digitale"><button className="masp-btn-avanti">Avanti</button></NavLink>
                </div>

            </div>
        </>
    );
};

export default Schede_Descrizione;