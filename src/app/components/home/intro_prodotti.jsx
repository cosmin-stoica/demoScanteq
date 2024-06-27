import CardViewer from "../../elements/cardviewer";
import Title from "../../elements/title";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdAdfScanner } from "react-icons/md";
import { FaIndustry } from "react-icons/fa6";

const Intro_Prodotti = () => {

    const cardData = [
        {
            iconFa: <FaIndustry />,
            title: "Masp",
            desc: "MASP è una soluzione integrata per la gestione avanzata delle operazioni produttive, tracciabilità e controllo qualità. Ottimizza i processi con monitoraggio in tempo reale, gestione dettagliata delle operazioni e tracciabilità completa dei materiali.",
            link: "/masp-caratteristiche"
        },
        {
            iconFa: <MdOutlineSupervisorAccount />,
            title: "Supervisor",
            desc: "Supervisor è una soluzione software per il monitoraggio e il controllo della produzione industriale. Offre funzionalità di monitoraggio in tempo reale, analisi predittiva e gestione dei dati per ottimizzare i processi produttivi e migliorare l'efficienza operativa.",
            link: "/supervisor"
        },
        {
            iconFa: <MdManageAccounts />,
            title: "Mes",
            desc: "Il sistema MES di Scanteq è una soluzione completa per la gestione della produzione, che integra il controllo e la supervisione dei processi industriali. Consente di ottimizzare la produttività, migliorare la qualità e garantire la tracciabilità in tempo reale.",
            link: "/mes"
        },
        {
            iconFa: <MdAdfScanner />,
            title: "Imagina",
            desc: "Imagina di Scanteq è una soluzione hardware e software per la scansione ed elaborazione di documenti, assegni, biglietti di lotteria e banconote, con capacità di stampa a getto d'inchiostro. Riduce i costi di sviluppo, accelera il time-to-market e garantisce un alto ROI.",
            link: "/imagina"
        }
    ];
    

    return (
        <>
            <div className="card-viewer-div">
                <Title
                    title="Innovazione e controllo per la tua industria"
                    description=" Le soluzioni Scanteq supportano la transizione verso l'industria 4.0, migliorando efficienza, qualità della produzione e includendo la scansione ed elaborazione documentale.">
                </Title>

                <CardViewer cards={cardData} buttonText="Vedi di più" isFa={true}></CardViewer>
            </div>
        </>
    );
};

export default Intro_Prodotti;