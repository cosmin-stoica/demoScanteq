const jobs= [
  {
    id: 1,
    title: "Avvitatura",
    category: "Automazione e Assemblaggio",
    description:
      "Il Job Avvitatura impiega avvitatori con centraline elettroniche per serrare viti, controllando la coppia e l'angolo, con l’opzione di aggiungere un braccio di reazione con gestione delle posizioni.",
    imgSrc: "images/jobs/avvitatura.png",
  },
  /*{
    id: 2,
    title: "Pick To Light",
    category: "Automazione e Assemblaggio",
    description:
      "Il Job Pick To Light assiste l'operatore nelle operazioni di prelievo o deposito di componenti, utilizzando spie luminose e fotocellule che controllano e confermano la corretta esecuzione del compito.",
    imgSrc: "images/jobs/pick.png",
  },
  {
    id: 3,
    title: "Robot Collaborativo",
    category: "Automazione e Assemblaggio",
    description:
      "Il Job Robot impiega un robot collaborativo che esegue in modo efficiente e preciso delle operazioni specifiche preconfigurate e selezionate con comandi via protocollo TCP-IP.",
    imgSrc: "images/jobs/robot.png",
  },*/
  /*{
    id: 4,
    title: "Cintura",
    category: "Collaudo Componenti Automobilistici",
    description:
      "Il Job Cintura verifica il corretto funzionamento delle cinture di sicurezza automobilistiche misurando la resistenza o la corrente assorbita dalla stessa, sia con che senza la linguetta inserita.",
    imgSrc: "images/jobs/cintura.png",
  },*/
  {
    id: 2,
    title: "Airbag",
    category: "Collaudo Componenti Automotive",
    description:
      "Il Job Airbag controlla l'impianto airbag iniettando una bassa corrente nel circuito per prevenire detonazioni accidentali e misurando la tensione sulla resistenza per verificare che rispetti valori prestabiliti.        ",
    imgSrc: "images/jobs/bag.png",
  },
  /*{
    id: 6,
    title: "Sensore di presenza DPD-SBR",
    category: "Collaudo Componenti Automobilistici",
    description:
      "Il Job DPD-SBR controlla il corretto funzionamento del sensore di presenza passeggero dei  sedili auto, verificando che lo stato di attivazione sia quello corretto in base al peso caricato.        ",
    imgSrc: "images/jobs/dpd-sbr.png",
  },*/
  /*{
    id: 7,
    title: "Dimensionale",
    category: "Controllo di Qualità e Verifica",
    description:
      "Il Job Dimensionale controlla le quote di un componente posizionandolo su un calibro dotato di boccole d'appoggio. Utilizza un tastatore pneumatico con potenziometro lineare per effettuare misurazioni nei punti specifici. ",
    imgSrc: "images/jobs/dimensionale.png",
  },
  {
    id: 8,
    title: "Assorbimento Motore DC",
    category: "Controllo di Qualità e Verifica",
    description:
      "Il Job Motore consiste nel monitorare la corrente di picco o media che un motore DC assorbe durante un periodo di tempo definito, controllando che i valori ottenuti rientrino nei limiti prestabiliti.  ",
    imgSrc: "images/jobs/motore.png",
  },*/
  {
    id: 3,
    title: "Visione",
    category: "Controllo di Qualità e Verifica",
    description:
      "Il Job Visione cattura immagini del prodotto utilizzando fino a quattro telecamere LAN. Queste immagini sono archiviate e analizzate per estrarre dati utili con algoritmi di riconoscimento.      ",
    imgSrc: "images/jobs/fotocamera.png",
  },
  {
    id: 10,
    title: "Logistica",
    category: "Gestione della Produzione e Logistica",
    description:
      "Il Job Logistica consente agli operatori di segnalare la scarsità di materiali per la lavorazione, agevolando la richiesta di rifornimento alla postazione di lavoro, garantendo la continuità produttiva.",
    imgSrc: "images/jobs/logistica.png",
  },
  {
    id: 11,
    title: "Manutenzione",
    category: "Gestione della Produzione e Logistica",
    description:
      "Il Job Manutenzione consente la segnalazione di problemi alla postazione, indicati come 'Macchina operativa', che permette ancora lavorazione o 'Macchina ferma', che blocca il ciclo produttivo.      ",
    imgSrc: "images/jobs/manutenzione.png",
  },
  /*{
    id: 12,
    title: "Stampa",
    category: "Gestione della Produzione e Logistica",
    description:
      "Il Job Stampa consente di creare etichette personalizzate, configurabili in termini di dimensione, disposizione di bordi o linee, testi semplici o con dati di lavorazione, codici a barre e loghi caricati da file.      ",
    imgSrc: "images/jobs/stampa.png",
  },*/
  {
    id: 13,
    title: "Bloccaggio",
    category: "Gestione delle Postazioni e delle Procedure",
    description:
      "Il Job Bloccaggio gestisce flessibilmente lo spostamento di un cilindro pneumatico usando elettrovalvole per controllare il movimento avanti e indietro, monitorando le due posizioni con sensori proximity.      ",
    imgSrc: "images/jobs/bloccaggio.png",
  },
 /* {
    id: 14,
    title: "Paranco",
    category: "Gestione delle Postazioni e delle Procedure",
    description:
      "Il Job Paranco controlla automaticamente la movimentazione di un paranco, attivando le elettrovalvole di salita, discesa e bloccaggio. La posizione è monitorata tramite due sensori proximity di finecorsa. ",
    imgSrc: "images/jobs/paranco.png",
  },
  {
  id: 15,
  title: "Input Output",
  category: "Gestione delle Postazioni e delle Procedure",
  description:
    "Il Job Input-Output gestisce l'attivazione e la disattivazione sequenziale e temporizzata delle uscite di controllo della postazione basata sullo stato degli ingressi e sui parametri di configurazione.    ",
  imgSrc: "images/jobs/inputoutput.png",
},*/
{
    id: 16,
    title: "ECU-Sedili",
    category: "Sistemi di Controllo Elettronico per Sedili",
    description:
      "Il Job SCU configura e verifica i sedili auto gestiti da centraline elettroniche con bus CAN. Esegue diagnostiche avanzate, analizza i Serial Number hardware e software e calibra le movimentazioni",
    imgSrc: "images/jobs/sedili.png",
  },
 /* {
    id: 17,
    title: "OCS-Bodysense",
    category: "Sistemi di Controllo Elettronico per Sedili",
    description:
      "Il Job OCS-Bodysense gestisce centraline elettroniche per sedili auto con tecnologia OCS (Occupant Classification Sensing), eseguendo configurazioni, calibrazioni e verifiche della corretta rilevazione di pesi.      ",
    imgSrc: "images/jobs/bodysense.png",
  },
  {
    id: 18,
    title: "ECU-Heater",
    category: "Sistemi di Controllo Elettronico per Sedili",
    description:
      "Il Job ECU-Heater gestisce centraline elettroniche dotate di interfaccia LIN per termofori automotive, inviando comandi per l'attivazione e, successivamente, verificando la corrente assorbita.",
    imgSrc: "images/jobs/heater.png",
  },*/
];

export default jobs;
