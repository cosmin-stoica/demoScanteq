import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';

function IndCont6() {
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
                <div className="section-full wow fadeInLeft" data-wow-duration="2000ms">
        <div className="section-content">
                        <div className="sx-icon-bx-wrap">
                            <div className="row">
                                {/* Block one */}
                                <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                              
                                    <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                    <ItodoImage id="compimg" src="images/montaggio.jpg" alt="" />
                                    </div>
                                        <div id = "containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-data" /></span>
    </div>*/}
                                            <div id="panecomp" className="icon-content">
                                               <h4 className="sx-tilte">Operazioni di Montaggio</h4>
                                                <p>Le operazioni facenti parte di questa categoria vengono utilizzate durante le fasi di
montaggio.
Le prove di avvitatura possono misurare la coppia ed angolo con cui l’avvitatura è
stata eseguita, permettendo di verificare che ogni vite sia stata montata correttamente.
Nel caso vengano utilizzati sistemi che permettono di calcolare la posizione
dell’avvitatore, come braccio di reazione con encoder o sistemi ad ultrasuoni, è
possibile effettuare la verifica della posizione di avvitatura, scongiurando la possibilità
di sbagliare vite.
L’operazione robot permette di caricare delle stringhe di comando a quest’ultimo per
fargli eseguire determinati azioni con la massima precisione nel movimento o nella
velocità di esecuzione.
Il barcode, nonostante non abbia come diretto fine l’assemblaggio, serve spesso a
confermare i pezzi che si andranno ad utilizzare scannerizzando il barcode associato
ad essi, assicurando che vengano utilizzate le parti corrette per il lavoro.

</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                              
                              <div id="daje" className="sx-icon-bx-1">
                              <div id="divcomp">
                              <ItodoImage id="compimg" src="images/collaudo.jpg" alt="" />
                              </div>
                                  <div id = "containercomp2" className="sx-icon-box-wraper">
                                  {/*<div className="sx-icon-bx-icon ">
                                          <span className="sx-text-primary"><i className="flaticon-data" /></span>
</div>*/}
                                      <div id="panecomp2" className="icon-content">
                                         <h4 className="sx-tilte">Operazioni di Collaudo</h4>
                                          <p>Le operazioni facenti parte di questa categoria vengono utilizzate per verificare il
corretto funzionamento dei vari sistemi.
I controlli vengono spesso fatti verificando resistenze elettriche o correnti assorbite.
L’alto numero di operazioni è dovuto al fatto che queste operazioni presentano un
modo di funzionamento proprio ed ideato specificatamente per la prova da eseguire.

</p>
                                      </div>
                                  </div>
                              </div>
                          </div>


                          
                          <div id="containercompetenzedue" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                              
                              <div id="daje" className="sx-icon-bx-1">
                              <div id="divcomp">
                              <ItodoImage id="compimg" src="images/ausiliari.jpg" alt="" />
                              </div>
                                  <div id = "containercomp2" className="sx-icon-box-wraper">
                                  {/*<div className="sx-icon-bx-icon ">
                                          <span className="sx-text-primary"><i className="flaticon-data" /></span>
</div>*/}
                                      <div id="panecomp" className="icon-content">
                                         <h4 className="sx-tilte">Operazioni Ausiliari</h4>
                                          <p>Le operazioni che possono svolgere entrambe le categorie elencate oppure non
ricadano particolarmente in nessuna di esse sono dette “ausiliari”. <br></br>
- “Oggettivazione” può essere utilizzato per informare l’operatore che è
necessario effettuare un'azione manualmente, per esempio un montaggio
oppure un collaudo visivo. <br></br>
- “Bloccaggio” permette di cambiare lo stato delle uscite della scheda,
controllando di conseguenza attuatori gestiti da valvole o motori DC, ed al
tempo stesso verificare la corretta esecuzione delle operazioni desiderate
tramite lettura di sensori con ingressi digitali. <br></br>
- “Timer” è simile all’oggettivazione, ma permette di tenere traccia del tempo
trascorso. <br></br>
- “Visione” permette di scattare foto tramite una telecamera USB collegata al
computer e/o utilizzare algoritmi di pattern matching proprietari per effettuare
controlli visivi. <br></br>
- “Jump” permette di controllare la successione dei job, eseguendo la fine della
lavorazione o un salto ad un job con un index definito in base all’esito del job
precedente. <br></br>
- “Centraline CAN” sono una serie di job dedicati alla gestione di una
comunicazione che sfrutta la rete CAN bus (Central Area Network). <br></br>
- “Centraline LIN” simile a quelle CAN, ma che si basano sul bus LIN (Local
Interconnect Network).

</p>
                                      </div>
                                  </div>
                              </div>
                          </div>


                            </div>
                        </div>
                    </div>    
                </div>   

        </>
        
    )
    
}

export default IndCont6;