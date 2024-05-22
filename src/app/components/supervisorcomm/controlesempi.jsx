const ControlEsempi = () => {
    return (
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

                <div
                    className={`postazionediv stopppee`}
                >
                    <h5>Postazione 3</h5>
                    <p>Codice Postazione: P003</p>
                    <p>Stato: Errore</p>
                    <p>Operatore: OP3</p>
                    <p>Operazione: Stop</p>


                    <div>
                        <p className='analisipred'>&nbsp;</p>
                    </div>
                    <p>Avanzamento: {Math.floor(1000 / 60)} min / {Math.floor(650 / 60)} min</p>
                    <div id={`progressBar${3}`} style={{ width: '100%', height: '100%' }}></div>


                </div>

            </div>
        </>
    );
};

export default ControlEsempi;