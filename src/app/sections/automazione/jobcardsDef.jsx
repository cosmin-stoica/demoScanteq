import React from "react";
import ItodoImage from "../../elements/itodo-img";
import BannerJob from "./BannerJob";
import jobs from './jobsData'

function JobCardsDef() {
    return (
        <>
            <div className="perflexcolumn marginmenotop200">

                <BannerJob
                    img="images/banner/automazione.png"
                    icon="images/jobs/collaudoICON.png"
                    title="Automazione e Assemblaggio"
                    primoP="Le operazioni facenti parte di questa categoria vengono utilizzate per verificare il corretto funzionamento dei vari sistemi. I controlli vengono spesso fatti verificando resistenze elettriche o correnti assorbite."
                    secondoP="L’alto numero di operazioni è dovuto al fatto che queste operazioni presentano un modo di funzionamento proprio ed ideato specificatamente per la prova da eseguire."
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
                    img="images/collaudo2.jpg"
                    icon="images/jobs/montaggioICON.png"
                    title="Collaudo Componenti Automotive"
                    primoP="Queste operazioni includono prove di avvitatura per garantire l'installazione corretta delle viti, misurando coppia e angolo. Sistemi come bracci di reazione con encoder o ultrasuoni assicurano l'accuratezza della posizione dell'avvitatura."
                    secondoP="L'impiego di robot permette azioni precise e veloci, mentre i codici a barre verificano l'uso corretto dei componenti tramite scansione."
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
                    img="images/collaudo2.jpg"
                    icon="images/jobs/ausiliarieICON.png"
                    title="Controllo di Qualità e Verifica"
                    primoP="Le operazioni che possono svolgere entrambe le categorie elencate oppure non ricadano particolarmente in nessuna di esse sono dette “ausiliari”."
                    secondoP="Le operazioni ausiliari, che possono essere trasversali alle categorie principali o non rientrare specificamente in nessuna di esse, aggiungono flessibilità e supporto al processo complessivo."
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
                    img="images/collaudo2.jpg"
                    icon="images/jobs/ausiliarieICON.png"
                    title="Gestione della Produzione e Logistica"
                    primoP="Le operazioni che possono svolgere entrambe le categorie elencate oppure non ricadano particolarmente in nessuna di esse sono dette “ausiliari”."
                    secondoP="Le operazioni ausiliari, che possono essere trasversali alle categorie principali o non rientrare specificamente in nessuna di esse, aggiungono flessibilità e supporto al processo complessivo."
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
                    img="images/collaudo2.jpg"
                    icon="images/jobs/ausiliarieICON.png"
                    title="Gestione delle Postazioni e delle Procedure"
                    primoP="Le operazioni che possono svolgere entrambe le categorie elencate oppure non ricadano particolarmente in nessuna di esse sono dette “ausiliari”."
                    secondoP="Le operazioni ausiliari, che possono essere trasversali alle categorie principali o non rientrare specificamente in nessuna di esse, aggiungono flessibilità e supporto al processo complessivo."
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


                <BannerJob
                    img="images/collaudo2.jpg"
                    icon="images/jobs/ausiliarieICON.png"
                    title="Unità di Controllo Elettronico per Automotive"
                    primoP="Le operazioni che possono svolgere entrambe le categorie elencate oppure non ricadano particolarmente in nessuna di esse sono dette “ausiliari”."
                    secondoP="Le operazioni ausiliari, che possono essere trasversali alle categorie principali o non rientrare specificamente in nessuna di esse, aggiungono flessibilità e supporto al processo complessivo."
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



            </div>
        </>
    )
}
export default JobCardsDef;