import tracciabilitaDataIntro from "../../../globals/DataTEXT/tracciabilitaDataIntro";
import ItodoImage from "../../elements/itodo-img";

const FormatiTraccia = () => {
    return (
        <>
            {tracciabilitaDataIntro.map((data, index) => (
                <div className={`section-full wow fadeIn${data.fade}`} data-wow-duration="1500ms">
                    <div key={index} className={`servizio-card-upper ${data.margin ? 'margin-top100' : ''}`}>
                        <div className="servizio-card-title masp-card-title width100 perflex">
                            {data.titolo}
                        </div>
                        <div className="servizio-card">
                            <div className="masp-card-per-img">
                                <ItodoImage className="masp-card-img-tracciabilita" src={data.immagineSrc} alt={data.immagineAlt} />
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

            <div className={`section-full wow fadeInRight`} data-wow-duration="1500ms">
                <div className={`servizio-card-upper margin-top100`}>
                    <div className="servizio-card-title masp-card-title width100 perflex">
                        Titolo
                    </div>
                    <div className="servizio-card">
                        <div className="masp-card-per-img">
                            <ItodoImage className="masp-card-img-tracciabilita" src="" alt="" />
                        </div>
                        <div className="servizio-card-secondapartemasp">
                            <div className="masp-card-secondaparte-div">
                                <ItodoImage src="images/masp/tracciabilita/16.png"></ItodoImage>
                                <ItodoImage src="images/masp/tracciabilita/17.png"></ItodoImage>
                                <ItodoImage src="images/masp/tracciabilita/18.png"></ItodoImage>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormatiTraccia;