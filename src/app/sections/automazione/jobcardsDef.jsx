import React from "react";
import ItodoImage from "../../elements/itodo-img";
import BannerJob from "./BannerJob";
import jobs from './jobsData'

function JobCardsDef() {
    return (
        <>
            <div className="perflexcolumn marginmenotop200">

                <BannerJob
                    icon="flaticon-development"
                    title="Automazione e Assemblaggio"
                    primoP="
                    Questi job comprendono tecnologie e processi progettati per automatizzare e ottimizzare le operazioni di assemblaggio industriale. L'obiettivo è ridurre il tempo e gli sforzi manuali richiesti, integrando soluzioni avanzate come robotica e intelligenza artificiale."
                    secondoP="Migliorando efficienza e precisione, queste tecnologie aumentano la produttività e riducono gli errori. L'automazione dell'assemblaggio industriale porta a una produzione più fluida e affidabile, rispondendo meglio alle esigenze del mercato."
                ></BannerJob>

                {jobs.filter(job => job.category === "Automazione e Assemblaggio").map(job => (
                    <div className="perflex">
                        <div className="JobCardDiv">
                            <div className="primapartejob">
                                <ItodoImage className="imgmaspjob" src={job.screenSrc}></ItodoImage>
                                <div className="cerchioJob">
                                    <ItodoImage src={job.imgSrc}></ItodoImage>
                                </div>
                            </div>
                            <div className="divisore"></div>
                            <div className="secondapartejob wow fadeInDown">
                                <h1>{job.title}</h1>
                                <p>{job.description_Home}</p>
                            </div>
                        </div>
                    </div>
                ))}




                <BannerJob
                    icon="flaticon-skills"
                    title="Collaudo Componenti Automotive"
                    primoP="
                    Questi job verificano la sicurezza e il funzionamento di elementi come cinture di sicurezza e airbag. L'obiettivo è assicurarsi che tutti i componenti critici funzionino correttamente."
                    secondoP="Inoltre, garantiscono la conformità agli standard di sicurezza, assicurando che i veicoli rispettino le normative e offrano la massima protezione ai passeggeri."
                ></BannerJob>


                {jobs.filter(job => job.category === "Collaudo Componenti Automotive").map(job => (
                    <div className="perflex">
                        <div className="JobCardDiv">
                            <div className="primapartejob">
                                <ItodoImage className="imgmaspjob" src={job.screenSrc}></ItodoImage>
                                <div className="cerchioJob">
                                    <ItodoImage src={job.imgSrc}></ItodoImage>
                                </div>
                            </div>
                            <div className="divisore"></div>
                            <div className="secondapartejob wow fadeInDown">
                                <h1>{job.title}</h1>
                                <p>{job.description_Home}</p>
                            </div>
                        </div>
                    </div>
                ))}



                <BannerJob
                    icon="flaticon-touch"
                    title="Unità di Controllo Elettronico per Automotive"
                    primoP="Questi job gestiscono e verificano le centraline elettroniche con bus CAN/LIN delle autovetture. Assicurano che tutti i sistemi elettronici siano correttamente integrati e comunicino in modo efficace."
                    secondoP="Inoltre, garantiscono il corretto funzionamento delle centraline, monitorando le prestazioni e identificando eventuali anomalie. Questo contribuisce a mantenere elevati standard di sicurezza e affidabilità del veicolo."
                ></BannerJob>

                {jobs.filter(job => job.category === "Unità di Controllo Elettronico per Automotive").map(job => (
                    <div className="perflex">
                        <div className="JobCardDiv">
                            <div className="primapartejob">
                                <ItodoImage className="imgmaspjob" src={job.screenSrc}></ItodoImage>
                                <div className="cerchioJob">
                                    <ItodoImage src={job.imgSrc}></ItodoImage>
                                </div>
                            </div>
                            <div className="divisore"></div>
                            <div className="secondapartejob wow fadeInDown">
                                <h1>{job.title}</h1>
                                <p>{job.description_Home}</p>
                            </div>
                        </div>
                    </div>
                ))}



                <BannerJob
                    icon="flaticon-data"
                    title="Controllo di Qualità e Verifica"
                    primoP="Questi job assicurano la qualità dei componenti con misurazioni, controllo del carico, verifica della coppia e ispezione visiva. Utilizzano procedure rigorose per garantire che ogni componente soddisfi gli standard richiesti."
                    secondoP="Rilevano difetti con tecnologie avanzate, permettendo di identificare e correggere problemi in modo tempestivo. Questo assicura che i prodotti finali siano affidabili e di alta qualità."
                ></BannerJob>

                {jobs.filter(job => job.category === "Controllo di Qualità e Verifica").map(job => (
                    <div className="perflex">
                        <div className="JobCardDiv">
                            <div className="primapartejob">
                                <ItodoImage className="imgmaspjob" src={job.screenSrc}></ItodoImage>
                                <div className="cerchioJob">
                                    <ItodoImage src={job.imgSrc}></ItodoImage>
                                </div>
                            </div>
                            <div className="divisore"></div>
                            <div className="secondapartejob wow fadeInDown">
                                <h1>{job.title}</h1>
                                <p>{job.description_Home}</p>
                            </div>
                        </div>
                    </div>
                ))}






                <BannerJob
                    icon="flaticon-supply-chain"
                    title="Gestione della Produzione e Logistica"
                    primoP="Questi job ottimizzano flussi e operazioni attraverso il monitoraggio logistico, la gestione della manutenzione e la reportistica. Queste attività garantiscono un funzionamento efficiente e organizzato."
                    secondoP="Inoltre, includono la stampa di etichette personalizzate, facilitando l'identificazione e la tracciabilità dei prodotti. Questo contribuisce a migliorare la gestione complessiva e la precisione operativa."
                ></BannerJob>

                {jobs.filter(job => job.category === "Gestione della Produzione e Logistica").map(job => (
                    <div className="perflex">
                        <div className="JobCardDiv">
                            <div className="primapartejob">
                                <ItodoImage className="imgmaspjob" src={job.screenSrc}></ItodoImage>
                                <div className="cerchioJob">
                                    <ItodoImage src={job.imgSrc}></ItodoImage>
                                </div>
                            </div>
                            <div className="divisore"></div>
                            <div className="secondapartejob wow fadeInDown">
                                <h1>{job.title}</h1>
                                <p>{job.description_Home}</p>
                            </div>
                        </div>
                    </div>
                ))}



                <BannerJob
                    icon="flaticon-employee"
                    title="Gestione delle Postazioni e delle Procedure"
                    primoP="
                    Questi job automatizzano e coordinano le operazioni delle postazioni di lavoro. Implementano tecnologie avanzate per gestire in modo efficiente le attività quotidiane."
                    secondoP="Inoltre, ottimizzano le procedure per migliorare l'efficienza e la produttività complessiva. Questo approccio sistematico garantisce un funzionamento più fluido e risultati migliori."
                ></BannerJob>

                {jobs.filter(job => job.category === "Gestione delle Postazioni e delle Procedure").map(job => (
                    <div className="perflex">
                        <div className="JobCardDiv">
                            <div className="primapartejob">
                                <ItodoImage className="imgmaspjob" src={job.screenSrc}></ItodoImage>
                                <div className="cerchioJob">
                                    <ItodoImage src={job.imgSrc}></ItodoImage>
                                </div>
                            </div>
                            <div className="divisore"></div>
                            <div className="secondapartejob wow fadeInDown">
                                <h1>{job.title}</h1>
                                <p>{job.description_Home}</p>
                            </div>
                        </div>
                    </div>
                ))}




            </div>
        </>
    )
}
export default JobCardsDef;