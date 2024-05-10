import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";

function CarouselJobs() {
    return (
        <>
            <div id="carouseljobsdiv" className="container">
                {/* TITLE START 
                <div className="section-head center">
                    <div className="sx-head-s-title">Le Operazioni</div>
                   
                </div>*/}

                <h1 className="leoperazionititolo">Le operazioni della piattaforma</h1>

                {/* TITLE END */}
                <div className="section-content">
                    <div className="owl-carousel sx-why-choose-carousel m-b30">
                        {/*One block*/}
                        <div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary">
                                            <ItodoImage className="iconahomejobs" src="images/jobs/cintura.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                      <h4 className="sx-tilte">Cintura</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Collaudo</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p>Il job cintura serve a verificare che il ramo cintura funzioni correttamente, misurando i
                                                valori di resistenza e/o corrente assorbita con e senza la linguetta inserita</p>
                                        </div>
                                        {/*<NavLink className="sx-circle-btn" to="/services"><i className="fa fa-long-arrow-right" /></NavLink>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*One two*/}
                        <div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/motore.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                       <h4 className="sx-tilte">Motore</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Collaudo</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p>
                                                Il job motore misura la corrente di picco o media assorbita da un motore DC per un
                                                periodo specifico o fino al raggiungimento di limiti preimpostati</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*One three*/}
                        <div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/bag.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="sx-tilte">Airbag</h4>+
                                        <NavLink to="/masp" className="sx-why-ch-category">Collaudo</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p>Il job airbag è un test impiegato per garantire che il sistema di sicurezza dell'airbag funzioni correttamente
                                                e la prontezza a intervenire in caso di necessità</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*One four*/}
                        <div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/killer.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="sx-tilte">Killer Switch</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Collaudo</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p >Il job killer-switch serve a verificare il corretto funzionamento di uno switch,
                                                controllando che esso passi da inattivo, ad attivo e viceversa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*One five*/}
                        <div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/robot.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                       <h4 className="sx-tilte">Robot </h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Montaggio</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p >Il job robot viene utilizzato per effettuare delle operazioni su un robot collaborativo,
                                                inviando comandi tramite TCP-IP e richiamando i programmi a bordo del robot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*One six*/}
                        <div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/avvitatura.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                       <h4 className="sx-tilte">Avvitatura </h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Montaggio</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p > Il job avvitatura utilizza avvitatori controllati da centraline elettroniche
                                                Cleco o Kolver e Jolly per serrare viti, verificando la coppia e/o l'angolo di serraggio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*One seven*/}
                        {<div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/rivettatura.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                       <h4 className="sx-tilte">Rivettatura</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Montaggio</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p>
                                                Il job rivettatura effettua le rivettature e verifica l'esito, utilizzando
                                                il controllo della pressione dell'olio o la lettura diretta dalla centralina
                                                della rivettatrice, se disponibile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {/*One eight*/}
                        {<div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/seeger.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="sx-tilte">Seeger</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Montaggio</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p>
                                                Il job seeger viene eseguito con un attrezzo che spinge tramite cilindro pneumatico,
                                                controllando la forza e il tempo in base alla pressione dell'aria.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}

                        {<div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/pick.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="sx-tilte">Pick To Light</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Ausiliarie</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p >
                                                Il job Pick To Light guida l'operatore nel prelievo o deposito manuale di componenti
                                                tramite spie luminose e fotocellule per verificare l'esecuzione.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}


                        {<div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/timer.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                      <h4 className="sx-tilte">Timer</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Ausiliarie</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p >
                                                Il job timer imposta un tempo durante il quale si può scegliere tra tre modalità di funzionamento:
                                                normale, background o normale con timeout.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}

                        {<div className="item">
                            <div className="sx-icon-bx-4">
                                <div className="sx-icon-box-wraper">
                                    <div className="sx-icon-bx-icon ">
                                        <span className="sx-text-primary"><ItodoImage className="iconahomejobs" src="images/jobs/oggettivazione.png"></ItodoImage></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="sx-tilte">Oggettivazione</h4>
                                        <NavLink to="/masp" className="sx-why-ch-category">Ausiliarie</NavLink>
                                        <div className="sx-about-bx3-content">
                                            <p >
                                                Il job oggettivazione guida l'operatore nel montaggio e collaudo con visualizzazioni e verifica sensoriale o di peso, utilizzando diverse modalità.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselJobs;