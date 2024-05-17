import Arraydata from "../../../globals/DataTEXT/Supervisor/supervisorDataHubDeclaration";
import AnalysisOptionBox from "../maintenance/optionbox";
import { NavLink } from "react-router-dom";

const HubDeclaration = () => {
    return (
        <>

            <div className="container">
                {Arraydata.map((data, index) => (
                    <div className={`section-full wow fadeIn${data.fade}`} data-wow-duration="1500ms">
                        <div key={index} className={`servizio-card-upper ${data.margin ? 'margin-top100' : ''}`}>
                            <div className="servizio-card-title masp-card-title width100 perflex">
                                {data.titolo}
                            </div>
                            <div className="servizio-card">
                                <div className="masp-card-per-img">
                                    <i className={data.iconaSrc} />
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

                            {data.isControl &&
                                <>
                                    <div className="titolo-supervisor-preview width100 perflex margin-top50">
                                        Esempio di visualizzazione della postazione
                                    </div>
                                    <div className="postazioni-supervisorcomm-div-upper">

                                        <div
                                            className={`postazionediv attivo`}
                                        >
                                            <h5>Postazione 1</h5>
                                            <p>Codice Postazione: P001</p>
                                            <p>Stato: Attiva</p>
                                            <p>Operatore: OP1</p>
                                            <p>Operazione: OP001</p>

                                            <div>
                                                <p className='analisipred' style={{ backgroundColor: 'green' }}>
                                                    Analisi predittiva: OK
                                                </p>
                                            </div>
                                            <div>
                                                <p className='analisipred'>&nbsp;</p>
                                            </div>
                                            <p>Avanzamento: {Math.floor(100 / 60)} min / {Math.floor(650 / 60)} min</p>
                                            <div id={`progressBar${3}`} style={{ width: '100%', height: '100%' }}></div>


                                        </div>

                                        <div
                                            className={`postazionediv iserrore`}
                                        >
                                            <h5>Postazione 2</h5>
                                            <p>Codice Postazione: P002</p>
                                            <p>Stato: Errore</p>
                                            <p>Operatore: OP2</p>
                                            <p>Operazione: OP002</p>

                                            <div>
                                                <p className='analisipred' style={{ backgroundColor: 'red' }}>
                                                    Analisi predittiva: NOK
                                                </p>
                                            </div>
                                            <div>
                                                <p className='analisipred'>&nbsp;</p>
                                            </div>
                                            <p>Avanzamento: {Math.floor(1000 / 60)} min / {Math.floor(650 / 60)} min</p>
                                            <div id={`progressBar${3}`} style={{ width: '100%', height: '100%' }}></div>


                                        </div>

                                    </div>
                                </>}



                            {data.isTraceability &&
                                <>
                                    <div className="titolo-supervisor-preview width100 perflex margin-top50">
                                        Esempio di tabella
                                    </div>
                                    <div className="tracctable-preview-upper width100 overflow-auto">
                                        <table className='tracctable-preview overflow-auto'>
                                            <thead>
                                                <tr>
                                                    <th>Seleziona</th>
                                                    <th>Commessa</th>
                                                    <th>Codice</th>
                                                    <th>Seriale</th>
                                                    <th>Postazione</th>
                                                    <th>Utente</th>
                                                    <th>Id Job</th>
                                                    <th>Nome Job</th>
                                                    <th>Data e Ora</th>
                                                    <th>Corrente Nominale</th>
                                                    <th>Tolleranza Corrente</th>
                                                    <th>Corrente Misurata</th>
                                                    <th>Errore</th>
                                                    <th>Ripetizioni</th>
                                                    <th>Esito</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input className='checkboxreal' type="checkbox" /></td>
                                                    <td>A123a</td>
                                                    <td>ABC001a</td>
                                                    <td>11</td>
                                                    <td>Postazione 1</td>
                                                    <td>User 1</td>
                                                    <td>1011</td>
                                                    <td>Job 1</td>
                                                    <td>2023-12-16 14:54:38</td>
                                                    <td>10.51</td>
                                                    <td>11</td>
                                                    <td>10.81</td>
                                                    <td>Nessun errore</td>
                                                    <td>31</td>
                                                    <td>OK</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>}

                            {data.isMaintenance &&
                                <>
                                    <div className="titolo-supervisor-preview width100 perflex margin-top50">
                                        Esempi di analisi
                                    </div>
                                    <div className="paneanalisiscegli-preview">
                                        <div className='paneanalisiscegli'>
                                            <AnalysisOptionBox text="Avvitature" />
                                            <AnalysisOptionBox text="Termoforo" />
                                            <AnalysisOptionBox text="Coppia" />
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>

                ))}

<div className="width100 perflex margin-top100">
                    <NavLink to="/masp-tracciabilita"><button className="masp-btn-indietro">Indietro</button></NavLink>
                    <NavLink to="/mes"><button className="masp-btn-avanti">Avanti</button></NavLink>

                </div>

            </div>
        </>
    );
};

export default HubDeclaration;