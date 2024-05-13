

const JobHeaderMasp = () => {

    return (<>
        <div className="section-full wow fadeInRight" data-wow-duration="2000ms">
            <div className="titolocond ">
                <h1>Categorie di Operazioni</h1>
            </div>
        </div>

        <div className="desccond">
            <p>Le operazioni, denominate Job, possono essere divise rispettivamente in sei categorie:</p>
        </div>

        <div className="div-header-job-card">

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card">
                    <i className="header-job-card-icona flaticon-development" />
                    <h1>Automazione e Assemblaggio</h1>
                    <p>
                        Questi job comprendono tecnologie e processi progettati per automatizzare e ottimizzare le operazioni
                        di assemblaggio industriale, migliorando efficienza e precisione.</p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card">
                    <i className="header-job-card-icona flaticon-skills" />
                    <h1>Collaudo Componenti Automotive
                    </h1>
                    <p>
                        Questi job verificano la sicurezza e il funzionamento di elementi come cinture di sicurezza e airbag,
                        garantendo la conformità agli standard di sicurezza.</p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card">
                    <i className="header-job-card-icona flaticon-data" />
                    <h1>Controllo di Qualità e Verifica
                    </h1>
                    <p>
                        Questi job assicurano la qualità dei componenti con misurazioni, controllo del carico, verifica
                        della coppia e ispezione visiva, rilevando difetti con tecnologie avanzate.
                    </p>
                </div>

            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card">
                    <i className="header-job-card-icona flaticon-supply-chain" />
                    <h1>Gestione della Produzione e Logistica
                    </h1>
                    <p>

                        Questi job ottimizzano flussi e operazioni attraverso il monitoraggio logistico, la
                        gestione della manutenzione, la reportistica e la stampa di etichette personalizzate.</p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card">
                    <i className="header-job-card-icona flaticon-employee" />
                    <h1>Gestione delle Postazioni e delle Procedure
                    </h1>
                    <p>
                        Questi job automatizzano e coordinano le operazioni delle postazioni di
                        lavoro e delle procedure per ottimizzare l'efficienza e la produttività complessiva.</p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card">
                    <i className="header-job-card-icona flaticon-touch" />
                    <h1>Unità di Controllo Elettronico per Automotive
                    </h1>
                    <p>
                        Questi job gestiscono e verificano le centraline elettroniche con bus CAN/LIN delle autovetture, garantendone il
                        corretto funzionamento </p>
                </div>
            </div>
        </div>
    </>
    );

};

export default JobHeaderMasp;