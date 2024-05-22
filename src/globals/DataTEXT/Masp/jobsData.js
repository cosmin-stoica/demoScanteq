const jobs = [
  /********************Automazione e Assemblaggio*****************************/

  {
    id: 1,
    title: "Barcode",
    category: "Automazione e Assemblaggio",
    description_Home:
      "Il Job Barcode consente la lettura di codici a barre dei componenti da assemblare, sia in formati standard sia bidimensionali come PDF417, Datamatrix o QR Code, tramite l’uso di un lettore barcode.      ",
    description_MASP: "",
    imgSrc: "images/jobs/barcode.png",
    home: false,
    screenSrc: "images/jobs/barcodemasp.png",
  },
  {
    id: 2,
    title: "Pick To Light",
    category: "Automazione e Assemblaggio",
    description_Home:
      "Il Job Pick To Light assiste l'operatore nelle operazioni di prelievo o deposito di componenti, utilizzando spie luminose e fotocellule che controllano e confermano la corretta esecuzione del compito.",
    imgSrc: "images/jobs/pick.png",
    home: false,
    screenSrc: "images/jobs/pickmasp.png",
  },
  {
    id: 1,
    title: "Avvitatura",
    category: "Automazione e Assemblaggio",
    description_Home:
      "Il Job Avvitatura impiega avvitatori con centraline elettroniche per serrare viti, controllando la coppia e l'angolo, con l’opzione di aggiungere un braccio di reazione per gestire le posizioni.",
    description_MASP: "",
    imgSrc: "images/jobs/avvitatura.png",
    home: true,
    screenSrc: "images/jobs/avvitaturamasp.png",
  },
  {
    id: 1,
    title: "Avvitatura a chiave",
    category: "Automazione e Assemblaggio",
    description_Home:
      "Il Job Avvitatura a Chiave impiega chiavi dinamometriche elettroniche per realizzare avvitature monitorando coppia e angolo, eventualmente controllando le posizioni con dispositivi ad ultrasuoni.      ",
    description_MASP: "",
    imgSrc: "images/jobs/avvitatura.png",
    home: false,
    screenSrc: "images/jobs/avvitaturachiavemasp.png",
  },
  {
    title: "Rivettatura",
    category: "Automazione e Assemblaggio",
    description_Home:
      "Il Job Rivettatura consiste nel montare rivetti e verificare i risultati monitorando la pressione dell'olio nell'impianto pneumatico o attraverso lettura esiti dalla centralina della rivettatrice, se presente.",
    imgSrc: "images/jobs/rivettatura.png",
    home: false,
    screenSrc: "images/jobs/rivettaturamasp.png",
  },
  {
    title: "Seeger",
    category: "Automazione e Assemblaggio",
    description_Home:
      "Il Job Seeger impiega uno strumento dotato di cilindro pneumatico, con impostazione del tempo di esecuzione e monitoraggio della forza applicata, rilevata tramite una cella di carico.",
    imgSrc: "images/jobs/seeger.png",
    home: false,
    screenSrc: "images/jobs/seegermasp.png",
  },

  {
    id: 3,
    title: "Robot Collaborativo",
    category: "Automazione e Assemblaggio",
    description_Home:
      "Il Job Robot impiega un robot collaborativo che esegue in modo efficiente e preciso delle operazioni specifiche preconfigurate e selezionate con comandi via protocollo TCP-IP.",
    imgSrc: "images/jobs/robot.png",
    home: true,
    screenSrc: "images/jobs/robotmasp.png",
  },

  /********************Collaudo Componenti Automotive*****************************/

  {
    title: "Cintura",
    category: "Collaudo Componenti Automotive",
    description_Home:
      "Il Job Cintura verifica il corretto funzionamento delle cinture di sicurezza automobilistiche misurando la resistenza o la corrente assorbita dalla stessa, sia con che senza la linguetta inserita.",
    imgSrc: "images/jobs/cintura.png",
    home: false,
    screenSrc: "images/jobs/cinturamasp.png",
  },
  {
    title: "Rilascio Cintura",
    category: "Collaudo Componenti Automotive",
    description_Home:
      "Il Job Rilascio Cintura verifica le cinture di sicurezza automobilistiche applicando una tensione controllata attraverso una slitta con motore stepper e cella di carico. Un tastatore misura la forza di sgancio.",
    imgSrc: "images/jobs/cintura.png",
    home: false,
    screenSrc: "images/jobs/rilasciocinturamasp.png",
  },
  {
    title: "Airbag",
    category: "Collaudo Componenti Automotive",
    description_Home:
      "Il Job Airbag controlla airbag automotive iniettando una bassa corrente nel circuito per prevenire detonazioni accidentali e misurando la tensione sulla resistenza per verificare che rispetti valori prestabiliti.",
    imgSrc: "images/jobs/bag.png",
    home: true,
    screenSrc: "images/jobs/bagmasp.png",
  },
  {
    title: "Termoforo",
    category: "Collaudo Componenti Automotive",
    description_Home:
      "Il Job Termoforo controlla il termoriscaldatore, verificando se la corrente assorbita o la resistenza del riscaldatore, assieme alla resistenza del sensore di temperatura siano validi.",
    imgSrc: "images/jobs/heater.png",
    home: false,
    screenSrc: "images/jobs/termoforomasp.png",
  },
  {
    title: "Killer-Switch",
    category: "Collaudo Componenti Automotive",
    description_Home:
      "Il Job Killer-Switch controlla il corretto funzionamento di questo dispositivo di sicurezza automobilistico, assicurandosi che passi correttamente dallo stato inattivo a quello attivo e viceversa.",
    imgSrc: "images/jobs/killer.png",
    home: false,
    screenSrc: "images/jobs/killermasp.png",
  },
  {
    title: "TPS",
    category: "Collaudo Componenti Automotive",
    description_Home:
      "Il Job TPS verifica questo dispositivo previsto di sensore ad effetto Hall, utilizzato per monitorare la posizione dei sedili delle automobili lungo le guide, controllando il corretto passaggio di stato da OFF a ON e poi di nuovo a OFF.",
    imgSrc: "images/jobs/tps.png",
    home: false,
    screenSrc: "images/jobs/tpsmasp.png",
  },
  {
    title: "Sensore di presenza DPD-SBR",
    category: "Collaudo Componenti Automotive",
    description_Home:
      "Il Job DPD-SBR controlla il corretto funzionamento del sensore di presenza passeggero dei sedili auto, verificando che lo stato di attivazione sia quello corretto in base al peso caricato.",
    imgSrc: "images/jobs/dpd-sbr.png",
    home: true,
    screenSrc: "images/jobs/dpd-sbrmasp.png",
  },

  /********************Controllo di Qualità e Verifica****************************/

  {
    title: "Dimensionale",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Dimensionale controlla le quote di un componente posizionandolo su un calibro dotato di boccole d'appoggio. Utilizza un tastatore pneumatico con potenziometro lineare per effettuare misurazioni nei punti specifici.",
    imgSrc: "images/jobs/dimensionale.png",
    home: false,
    screenSrc: "images/jobs/dimensionalemasp.png",
  },
  {
    title: "Carico Manuale",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Carico Manuale controlla che la forza di picco, misurata mediante uno strumento con funzionalità dinamometrica con cella di carico, resti all'interno di un intervallo di valori prestabiliti.",
    imgSrc: "images/jobs/caricomanuale.png",
    home: false,
    screenSrc: "images/jobs/caricomanualemasp.png",
  },
  {
    title: "Carico",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Carico verifica se la forza di picco, misurata tramite una cella di carico collocata nella parte anteriore di una slitta motorizzata, resti all'interno di un intervallo di riferimento predefinito.",
    imgSrc: "images/jobs/caricomanuale.png",
    home: false,
    screenSrc: "images/jobs/caricomasp.png",
  },
  {
    title: "Coppia",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il job Coppia si occupa di verificare e assicurare che la coppia prodotta da un motoriduttore, azionato da un motore stepper per ruotare un asse o una manopola, non superi limiti predefiniti.",
    imgSrc: "images/jobs/coppia.png",
    home: false,
    screenSrc: "images/jobs/coppiamasp.png",
  },
  {
    title: "Motore",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Motore consiste nel monitorare la corrente di picco e/o media assorbita da un motore DC durante un periodo di tempo definito, controllando che i valori ottenuti rientrino nei limiti prestabiliti.",
    imgSrc: "images/jobs/motore.png",
    home: true,
    screenSrc: "images/jobs/motoremasp.png",
  },
  {
    title: "Visione",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Visione cattura immagini del prodotto utilizzando fino a quattro telecamere LAN. Le immagini sono archiviate e/o analizzate per estrarre dati utili con algoritmi di riconoscimento.",
    imgSrc: "images/jobs/fotocamera.png",
    home: true,
    screenSrc: "images/jobs/visionemasp.png",
  },
  {
    title: "Oggettivazione",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Oggettivazione aiuta l'operatore a eseguire compiti specifici, come la conferma di operazioni su monitor o tramite sensori, la misurazione del peso con bilance elettroniche e il controllo mediante visione artificiale.",
    imgSrc: "images/jobs/oggettivazione.png",
    home: false,
    screenSrc: "images/jobs/oggettivazionemasp.png",
  },
  {
    title: "Qualità",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Qualità abilita gli operatori a identificare difetti durante il controllo qualità del prodotto, selezionando le anomalie da una lista preimpostata, migliorando l'efficacia del processo.",
    imgSrc: "images/jobs/qualita.png",
    home: false,
    screenSrc: "images/jobs/qualitamasp.png",
  },
  {
    title: "Quality Wall",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Quality-Wall valuta la qualità del prodotto con un'immagine e un messaggio per guidare l'operatore nel dare un voto e scegliere la categoria di non conformità da registrare in un report.",
    imgSrc: "images/jobs/qualita.png",
    home: false,
    screenSrc: "images/jobs/qualitywallmasp.png",
  },
  {
    title: "Scarto",
    category: "Controllo di Qualità e Verifica",
    description_Home:
      "Il Job Scarto facilita l'identificazione e la segnalazione di eventuali difetti nei componenti destinati al montaggio, dando la possibilità agli operatori di selezionare le anomalie da una elenco preimpostato.",
    imgSrc: "images/jobs/scarto.png",
    home: false,
    screenSrc: "images/jobs/scartomasp.png",
  },

  /********************Gestione della Produzione e Logistica****************************/

  {
    title: "Logistica",
    category: "Gestione Produzione e Logistica",
    description_Home:
      "Il Job Logistica consente agli operatori di segnalare la scarsità di materiali per la lavorazione, agevolando la richiesta di rifornimento alla postazione di lavoro e garantendo la continuità produttiva.",
    imgSrc: "images/jobs/logistica.png",
    home: true,
    screenSrc: "images/jobs/logisticamasp.png",
  },
  {
    title: "Manutenzione",
    category: "Gestione Produzione e Logistica",
    description_Home:
      "Il Job Manutenzione consente la segnalazione di problemi alla postazione, indicati come 'Macchina operativa', che permette ancora lavorazione o 'Macchina ferma', che blocca il ciclo produttivo.",
    imgSrc: "images/jobs/manutenzione.png",
    home: true,
    screenSrc: "images/jobs/manutenzionemasp.png",
  },
  {
    title: "Report",
    category: "Gestione Produzione e Logistica",
    description_Home:
      "Il Job Report visualizza un'immagine e un messaggio per guidare l'operatore nel inserire la descrizione di un parametro o di selezionarla da una lista preimpostata per poi registrare in un report.",
    imgSrc: "images/jobs/report.png",
    home: false,
    screenSrc: "images/jobs/reportmasp.png",
  },
  {
    title: "Stampa",
    category: "Gestione Produzione e Logistica",
    description_Home:
      "Il Job Stampa consente di creare etichette personalizzate, configurabili in termini di dimensione, disposizione di bordi o linee, testi semplici o con dati di lavorazione, codici a barre e loghi caricati da file.",
    imgSrc: "images/jobs/stampa.png",
    home: false,
    screenSrc: "images/jobs/stampamasp.png",
  },

  /********************Gestione delle Postazioni e delle Procedure****************************/

  {
    title: "Bloccaggio",
    category: "Gestione Postazioni e Procedure",
    description_Home:
      "Il Job Bloccaggio gestisce flessibilmente lo spostamento di un cilindro pneumatico usando elettrovalvole per controllare il movimento avanti e indietro, monitorando le due posizioni con sensori proximity.",
    imgSrc: "images/jobs/bloccaggio.png",
    home: false,
    screenSrc: "images/jobs/bloccaggiomasp.png",
  },
  {
    title: "Paranco",
    category: "Gestione Postazioni e Procedure",
    description_Home:
      "Il Job Paranco controlla automaticamente la movimentazione di un paranco, attivando le elettrovalvole di salita, discesa e bloccaggio. La posizione è monitorata tramite due sensori proximity di finecorsa.",
    imgSrc: "images/jobs/paranco.png",
    home: true,
    screenSrc: "images/jobs/parancomasp.png",
  },
  {
    title: "Input Output",
    category: "Gestione Postazioni e Procedure",
    description_Home:
      "Il Job Input-Output gestisce l'attivazione e la disattivazione sequenziale e temporizzata delle uscite di controllo della postazione basata sullo stato degli ingressi e sui parametri di configurazione.",
    imgSrc: "images/jobs/inputoutput.png",
    home: false,
    screenSrc: "images/jobs/inputoutputmasp.png",
  },
  {
    title: "Jump",
    category: "Gestione Postazioni e Procedure",
    description_Home:
      "Il job jump permette di passare a un altro job nel file di configurazione in modo indipendente o in base all’esito del job precedente. E’ possibile inoltre chiudere la lavorazione, simulando la fine.",
    imgSrc: "images/jobs/jump.png",
    home: false,
    screenSrc: "images/jobs/jumpmasp.png",
  },
  {
    title: "Timer",
    category: "Gestione Postazioni e Procedure",
    description_Home:
      "Il Job Timer può interrompere il ciclo per un periodo impostato o permettere la continuazione del lavoro mentre il tempo viene conteggiato in background, modificando alla fine lo stato di un'uscita.",
    imgSrc: "images/jobs/timer.png",
    home: false,
    screenSrc: "images/jobs/timermasp.png",
  },

  /********************Unità di Controllo Elettronico per Automotive****************************/

  {
    title: "SCU",
    category: "Unità di Controllo Elettronico",
    description_Home:
      "Il Job SCU configura e verifica i sedili auto gestiti da centraline elettroniche con bus CAN. Esegue diagnostiche avanzate, analizza i Serial Number hardware e software e calibra le movimentazioni.",
    imgSrc: "images/jobs/scu.png",
    home: false,
    screenSrc: "images/jobs/scumasp.png",
  },
  {
    title: "OCS Bodysense",
    category: "Unità di Controllo Elettronico",
    description_Home:
      "Il Job OCS-Bodysense gestisce centraline elettroniche per sedili auto con tecnologia OCS (Occupant Classification Sensing), eseguendo configurazioni, calibrazioni e verifiche della corretta rilevazione di pesi.",
    imgSrc: "images/jobs/ocsbodysense.png",
    home: false,
    screenSrc: "images/jobs/ocsbodysensemasp.png",
  },
  {
    title: "ECU Heater",
    category: "Unità di Controllo Elettronico",
    description_Home:
      "Il Job ECU-Heater verifica termofori automotive gestiti da centraline elettroniche con interfaccia LIN, inviando comandi di attivazione con l’ulteriore controllo della corrente assorbita.",
    imgSrc: "images/jobs/heater.png",
    home: true,
    screenSrc: "images/jobs/heatermasp.png",
  },
  {
    title: "ECU Massaggiante",
    category: "Unità di Controllo Elettronico",
    description_Home:
      "Il Job ECU-Massaggiante controlla centraline elettroniche con interfaccia LIN per il sistema di massaggio dei sedili auto, trasmettendo comandi di attivazione e monitorando le risposte ricevute.",
    imgSrc: "images/jobs/ecumassaggiante.png",
    home: false,
    screenSrc: "images/jobs/ecumassaggiantemasp.png",
  },
];

export default jobs;
