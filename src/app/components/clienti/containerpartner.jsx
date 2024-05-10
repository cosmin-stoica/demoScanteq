import React from "react";
import ItodoImage from "../../elements/itodo-img";

function ContainerPartner() {

    return <>

        <div className="containerpartnergrosso">

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="cardPartner menomargin">
                    <div className="imageDivPartner">
                        <ItodoImage src="images/clienti/tecno.png" alt="" />
                    </div>
                    <div className="testoDivPartner">
                        Tecno Italia, situata a Orbassano, è specializzata nella distribuzione di bracci di reazione ed attrezzature
                        per la manipolazione nel settore industriale, offre servizi post-vendita completi, tra cui formazione, assistenza tecnica e un vasto inventario di
                        ricambi per ottimizzare la produzione industriale.
                    </div>
                </div>
            </div>

            <div className="section-full wow fadeInRight" data-wow-duration="1000ms">
                <div className="cardPartner">
                    <div className="imageDivPartner">
                        <ItodoImage id="mibawidth"src="images/clienti/miba.png" alt="" />
                    </div>
                    <div className="testoDivPartner">
                        Fondata nel 1984, Miba è l'unico detentore del marchio THOR e si specializza nella progettazione
                        e produzione di attrezzature industriali. Dal 2006, è il distributore esclusivo in Italia per i
                        prodotti Eepos, Liftkon e Vetter, collaborando con le principali aziende automotive europee.
                    </div>
                </div>

            </div>
        </div>


    </>

}

export default ContainerPartner;