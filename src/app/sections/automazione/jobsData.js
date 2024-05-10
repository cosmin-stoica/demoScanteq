const jobs = [
    {
        id: 1,
        title: "Visione",
        category: "Collaudo",
        description: "Il job visione è progettato per acquisire immagini del prodotto, che possono essere salvate o analizzate per estrarre dati utili attraverso l'impiego di algoritmi di riconoscimento.",
        imgSrc: "images/jobs/fotocamera.png"
    },
    {
        id: 2,
        title: "Assorbimento Motore DC",
        category: "Collaudo",
        description: " Il job motore misura la corrente di picco o media assorbita da un motore DC per un periodo specifico o fino al raggiungimento di limiti preimpostati",
        imgSrc: "images/jobs/motore.png"
    },
    {
        id: 3,
        title: "Cintura Automotive",
        category: "Collaudo",
        description: "Il job cintura serve a verificare che il ramo cintura funzioni correttamente, misurando i valori di resistenza e/o corrente assorbita con e senza la linguetta inserita",
        imgSrc: "images/jobs/cintura.png"
    },
    {
        id: 4,
        title: "Airbag Automotive",
        category: "Collaudo",
        description: "Il job airbag è un test impiegato per garantire che il sistema di sicurezza dell'airbag funzioni correttamente e la prontezza a intervenire in caso di necessità",
        imgSrc: "images/jobs/bag.png"
    },
    /*{
        id: 4,
        title: "Killer Switch Automotive",
        category: "Collaudo",
        description: "Il job killer-switch serve a verificare il corretto funzionamento di uno switch, controllando che esso passi da inattivo, ad attivo e viceversa",
        imgSrc: "images/jobs/killer.png"
    }*/




    {
        id: 5,
        title: "Robot Collaborativo",
        category: "Montaggio",
        description: "Il job robot viene utilizzato per effettuare delle operazioni su un robot collaborativo, inviando comandi tramite TCP-IP e richiamando i programmi a bordo del robot",
        imgSrc: "images/jobs/robot.png"
    },
    {
        id: 6,
        title: "Avvitatura",
        category: "Montaggio",
        description: " Il job avvitatura utilizza avvitatori controllati da centraline elettroniche Cleco o Kolver e Jolly per serrare viti, verificando la coppia e/o l'angolo di serraggio",
        imgSrc: "images/jobs/avvitatura.png"
    },
    {
        id: 7,
        title: "Rivettatura",
        category: "Montaggio",
        description: " Il job rivettatura effettua le rivettature e verifica l'esito, utilizzando il controllo della pressione dell'olio o la lettura diretta dalla centralina della rivettatrice, se disponibile",
        imgSrc: "images/jobs/rivettatura.png"
    },
    {
        id: 8,
        title: "Seeger",
        category: "Montaggio",
        description: "  Il job seeger viene eseguito con un attrezzo che spinge tramite cilindro pneumatico, controllando la forza e il tempo in base alla pressione dell'aria.",
        imgSrc: "images/jobs/seeger.png"
    },



    {
        id: 9,
        title: "Pick To Light",
        category: "Ausiliarie",
        description: "  Il job Pick To Light guida l'operatore nel prelievo o deposito manuale di componenti tramite spie luminose e fotocellule per verificare l'esecuzione.",
        imgSrc: "images/jobs/pick.png"
    },
    {
        id: 10,
        title: "Gestione Timer",
        category: "Ausiliarie",
        description: " Il job timer imposta un tempo durante il quale si può scegliere tra tre modalità di funzionamento: normale, background o normale con timeout.",
        imgSrc: "images/jobs/timer.png"
    },
    {
        id: 11,
        title: "Oggettivazione",
        category: "Ausiliarie",
        description: " Il job oggettivazione guida l'operatore nel montaggio e collaudo con visualizzazioni e verifica sensoriale o di peso, utilizzando diverse modalità.",
        imgSrc: "images/jobs/oggettivazione.png"
    },
];

export default jobs;
