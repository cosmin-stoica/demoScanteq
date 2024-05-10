import React from "react";
import ClientiFinali from "./clientifinali";
import ContainerPartner from './containerpartner';

function NewClienti() {

    return <>
        <div id="clienti">
            <div className="container section-full wow fadeInDown" data-wow-duration="1000ms">
                {/* TITLE START */}
                <div className="section-head center">
                    <h1 className="TitoloCapitolo">I nostri partner</h1>
                </div>
                <ContainerPartner></ContainerPartner>
                <div className="section-head center margin-top100">
                    <h1 className="TitoloCapitolo">I nostri clienti  finali</h1>
                </div>
                <ClientiFinali></ClientiFinali>
            </div>
        </div>
    </>

}

export default NewClienti;