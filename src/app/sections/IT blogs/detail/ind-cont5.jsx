import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';

function IndCont5() {

    useEffect(() => {
        // Quando il componente viene montato
        const squares = document.querySelectorAll(".square");
        squares.forEach((square, index) => {
            setTimeout(() => {
                square.classList.add("show"); // Aggiunge la classe show per attivare l'animazione
            }, index * 200); // Aggiungi un ritardo crescente
        });
    }, []);

    return (
        <>

<div className="section-full wow fadeInRight" data-wow-duration="2000ms">
        <div className="titolocond ">
            <h1>Categorie di Operazioni</h1>
        </div>
        </div>

        <div className="desccond">
        <p>Le operazioni, denominate Job, possono essere divise rispettivamente in tre categorie:</p>
        </div>

         <div id="containerind" className="section-full wow fadeInLeft" data-wow-duration="1000ms">

        <div className="riga1">
            <div className="square">
            <span className="sx-text-primary"><i id="iconind" className="flaticon-technical-support"/></span>
            <h4 className="sx-tilte">Montaggio</h4>
            <p id="textind">I Job presenti in questa categoria hanno il compito di controllare
operazioni di avvitatura, rivettatura, montaggio seeger e utilizzo di robot
collaborativi. Il Pick to Light e il Barcode fanno parte di questa tipologia in
quanto il primo permette di prelevare i componenti con condotta guidata e il
secondo di controllare il codice prima che esso venga montato.</p>
            </div>
            <div className="square">
            <span className="sx-text-primary"><i id="iconind" className="flaticon-monitor-1" /></span>
            <h4 className="sx-tilte">Collaudo</h4>
            <p id="textind">Le prove facenti parte di questo spettro sono i test di carico e coppia,
la verifica di resistenze elettriche e correnti assorbite da componenti elettronici
come termofori, motorini DC, airbag, sensori TPS e di presenza, rami cintura e
killer-switch. L’ultima operazione effettua la verifica dimensionale.
</p>
            </div>
            <div className="square ">
            <span className="sx-text-primary"><i id="iconind" className="flaticon-data" /></span>
            <h4 className="sx-tilte">Ausiliari</h4>
            <p id="textind"> Qui sono racchiuse le operazioni che non hanno uno scopo strettamente di
montaggio o collaudo, per esempio il controllo di centraline con bus CAN/LIN,
oppure che servono per migliorare la condotta guidata, come l’oggettivazione,
il timer e il bloccaggio.
Avendo funzione sia di montaggio che collaudo, il Job visione permette di
effettuare controlli visivi automatici tramite gestione di telecamere montate
sulla postazione, grazie ad algoritmi di visione proprietari, con la possibilità di
archiviare l’immagine.
</p>
            </div>
        </div>
        </div>    



        </>
        
    )
    
}

export default IndCont5;