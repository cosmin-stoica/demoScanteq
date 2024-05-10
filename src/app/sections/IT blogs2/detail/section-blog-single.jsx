import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function SectionBlogSingle() {
    return (
        <>
            <div className="blog-single-space">
                {/* BLOG START */}
                <div className="sx-post-media sx-img-effect img-reflection m-b30">
                    <NavLink to="/blogs/detail-with-sidebar"><ItodoImage className ="valentinleader" src="images/our-team5/1.jpg" alt="Image" /></NavLink>
                </div>
                <div className="single-blog-post blog-detail m-b30">
                    {/*<div className="sx-post-meta ">
                        <ul>
                            <li className="post-date"><NavLink to="/blogs/detail-with-sidebar"><i className="fa fa-calendar" />05 Jan 2023</NavLink></li>
                            <li className="post-author"><NavLink to="/blogs/detail-with-sidebar"><i className="fa fa-comments" />0 Comments</NavLink></li>
                        </ul>
                    </div>*/}
                    <div className="sx-post-title ">
                        <h2 className="post-title">La nostra leadership</h2>
                    </div>
                    <div className="sx-post-text">
                        <p>In qualità di fondatore di Scanteq, l’ingegner Valentin Drogoreanu ha ricoperto il ruolo di Chief Technology Officer fin dall'inizio di questa start-up, nel 2010, mentre dal 2022 è diventato l’Amministratore Delegato della Scanteq Srl, in seguito a una riorganizzazione aziendale motivata dal processo di crescita.

</p>
                        <p>Dopo aver conseguito la laurea in Ingegneria Elettronica, nel 1992, presso l'Università “Politehnica” di Bucarest, in Romania, Valentin Drogoreanu ha avviato la sua carriera lavorativa come ricercatore presso lo stesso istituto, specializzandosi nei settori del controllo digitale e della simulazione di convertitori elettronici di potenza. Successivamente ha ottenuto una borsa di studio Tempus presso il “Politecnico“ di Torino, dove ha condotto ricerche nel campo del Controllo Vettoriale con DSP (Digital Signal Processor) per azionamenti a corrente alternata.
</p>
                        {/*<blockquote className="author-quote"></blockquote>*/}                     <p>
Durante questo periodo di lavoro proficuo presso le università, Valentin Drogoreanu ha contribuito come coautore a più di venti articoli e a due libri scientifici. Inoltre, ha svolto attività di insegnamento e ricerca presso l'Università “Politehnica” di Bucarest e il Politecnico di Torino nei settori dell'elettronica industriale, dell'elettronica di potenza, dell'ingegneria del software e del controllo digitale, utilizzando computer e microprocessori.
</p>
                        <p>
                        Valentin Drogoreanu ha conseguito nel 2000 un Dottorato di Ricerca in Ingegneria Elettronica presso l'Università “Politehnica“ di Bucarest, ottenendo il qualificativo “Summa Cum Laude”. Successivamente, nel 2002, ha completato un ulteriore Dottorato di Ricerca in Ingegneria Elettrica presso il Politecnico di Torino.
</p>
                        <p>
                        {/*<blockquote className="author-quote"></blockquote>*/}
                        Ulteriormente Valentin Drogoreanu ha intrapreso una carriera nell'industria a Torino, concentrando il suo lavoro sull'implementazione di soluzioni hardware e software per attrezzature destinate ai settori dell'automazione d'ufficio e industriale. Nel 1998, ha assunto la posizione di Senior Design Engineer presso Panini Spa, leader mondiale nella digitalizzazione degli assegni. Durante questo periodo ha sviluppato una profonda conoscenza delle tecnologie hardware, software e firmware per l'acquisizione di immagini, che è diventata una nuova passione alla quale si è dedicato con entusiasmo.

                        </p>
                        <p>Nel 2010, spinto dalla sua vasta competenza tecnologica e dalla comprensione del mercato, Valentin Drogoreanu ha fondato Scanteq, una start-up specializzata nella ricerca e nello sviluppo, con focus su tecnologie elettroniche e informatiche. L'obiettivo primario era non solo continuare a progettare e produrre sistemi di acquisizione di immagini, ma anche espandere il campo di interesse ad altri settori come la stampa digitale e l'automazione industriale.
</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBlogSingle;