import React from "react";
import ItodoImage from "../../elements/itodo-img";

function ClientiFinali() {

    return <>
        <div className="riquadroTestoClientiFinali wow fadeInDown" data-wow-duration="2000ms">
            Nel settore dell'Automotive, della Componentistica per Automotive e delle Lavorazioni Meccaniche, la nostra azienda ha fornito le tecnologie per la creazione di banchi di montaggio e collaudo. Questi sistemi utilizzano le operazioni disponibili nella Piattaforma MASP e sono in grado di interfacciarsi con i sistemi MES (Manufacturing Execution System) e ERP (Enterprise Resources Planning) dei nostri clienti.
        </div>
        <div className="clientifinalipane">

            <div className="clientefinalediv menomarginclienti wow fadeInLeft" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/autoprodotti.png"></ItodoImage>
                <div className="primapartecliente">
                    Automotive e Componentistica per Automotive
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/lamborghini.png"></ItodoImage>
                    <ItodoImage src="images/clienti/sabelt.png"></ItodoImage>
                    <ItodoImage src="images/clienti/lear.png"></ItodoImage>
                    <ItodoImage src="images/clienti/aras.png"></ItodoImage>
                    <ItodoImage src="images/clienti/same.png"></ItodoImage>
                    <ItodoImage src="images/clienti/tristone.png"></ItodoImage>
                </div>

            </div>


            <div className="clientefinalediv wow fadeInRight" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/processo.png"></ItodoImage>
                <div className="primapartecliente">
                    Lavorazioni Meccaniche
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/proma.png"></ItodoImage>
                    <ItodoImage src="images/clienti/cellino.png"></ItodoImage>
                    <ItodoImage src="images/clienti/tmb.png"></ItodoImage>
                    <ItodoImage src="images/clienti/gkn.png"></ItodoImage>
                    <ItodoImage src="images/clienti/komatsu.png"></ItodoImage>
                    <ItodoImage src="images/clienti/steparava.png"></ItodoImage>
                </div>
            </div>


            <div className="riquadroTestoClientiFinali margin-top50 wow fadeInDown" data-wow-duration="2000ms">
                Scanteq ha fornito la soluzione hardware e software per l'imaging e la stampa digitale, agevolando lo sviluppo rapido dello scanner multifunzione denominato scAn4 per il cliente. Questo dispositivo è impiegato per la digitalizzazione e l'elaborazione di documenti e assegni, il riconoscimento della codeline magnetica E13B e CMC7, la lettura dei biglietti di lotteria, la verifica delle banconote e la stampa a getto d'inchiostro sul retro degli articoli di carta.
            </div>



            <div className="clientefinalediv wow fadeInLeft" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/ufficio.png"></ItodoImage>
                <div className="primapartecliente">
                    Automazione d’ufficio
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/musafree.png"></ItodoImage>
                </div>
            </div>


            <div className="riquadroTestoClientiFinali margin-top50 wow fadeInDown" data-wow-duration="2000ms">
                Il "Dipartimento di Ingegneria Elettrica" del "Politecnico di Torino" ha scelto la nostra soluzione di Controllo Digitale come scheda elettronica per controllare in tempo reale i convertitori elettronici di potenza in un sistema di ricarica senza fili per le batterie delle auto elettriche. Finanziato con fondi europei, questo progetto è parte di una collaborazione internazionale con istituti di ricerca e università.
            </div>



            <div className="clientefinalediv wow fadeInRight" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/ricerca.png"></ItodoImage>
                <div className="primapartecliente">
                    Istruzione e ricerca
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/polito.png"></ItodoImage>
                </div>
               
            </div>

        </div>

    </>

}

export default ClientiFinali;