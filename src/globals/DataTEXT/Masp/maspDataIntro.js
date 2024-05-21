const maspDataIntro = [
  {
    margin: false,
    fade: "Left", 
    titolo: "Interfaccia Utente",
    immagineSrc: "images/masp/principale.png",
    altSrc: "Interfaccia Utente",
    dettagli: [
      {
        iconaClasse: "flaticon-layers",
        descrizione:
          "L'interfaccia utente è progettata per visualizzare tutte le informazioni delle operazioni all'interno della finestra principale, usando finestre sovrapposte di tipo Tab. Include pannelli per operazioni specifiche, la schermata Home, e la schermata Log.",
      },
      {
        iconaClasse: "flaticon-web-plugin",
        descrizione:
          "La configurazione dell'interfaccia utente avviene tramite file che consente di attivare o disattivare i vari pannelli e controlli presenti nell'applicazione.",
      },
    ],
  },
  {
    margin: true,
    fade: "Right", 
    titolo: "Autenticazione degli Utenti",
    immagineSrc: "images/masp/login.png",
    altSrc: "Autenticazione degli Utenti",
    dettagli: [
      {
        iconaClasse: "flaticon-promotion",
        descrizione:
          "MASP App consente di differenziare il personale in tre categorie: User, Coord, e Admin, ciascuna con permessi specifici.",
      },
      {
        iconaClasse: "flaticon-programmer",
        descrizione:
          "La gestione degli accessi avviene tramite un pannello di login che permette l'autenticazione tramite PIN o lettura di un badge barcode",
      },
    ],
  },
  {
    margin: true,
    fade: "Left", 
    titolo: "Avvio della Lavorazione",
    immagineSrc: "images/masp/avviolavorazione.png",
    altSrc: "Avvio della Lavorazione",
    dettagli: [
      {
        iconaClasse: "flaticon-laptop",
        descrizione:
          "Inserimento manuale del codice, dove l'utente inserisce direttamente il codice del ciclo di lavorazione tramite tastiera.",
      },
      {
        iconaClasse: "flaticon-image",
        descrizione:
          "Lettura del barcode, che permette di velocizzare il processo di selezione. Utilizzando un lettore di codici a barre, l'utente può scansionare il barcode associato al ciclo di lavorazione, garantendo un inserimento rapido e privo di errori.",
      },
      {
        iconaClasse: "flaticon-layers",
        descrizione:
          "Selezione da una lista preimpostata. In questo caso, l'utente può scegliere il ciclo di lavorazione desiderato da un elenco predefinito, visualizzando tutte le opzioni disponibili in modo chiaro e organizzato.",
      },
    ],
  },
  {
    margin: true,
    fade: "Right",
    titolo: "Pannelli della Diagnostica",
    immagineSrc: "images/masp/diagnostica.png",
    altSrc: "Pannelli della Diagnostica",
    dettagli: [
      {
        iconaClasse: "flaticon-category",
        descrizione:
          "I pannelli della diagnostica visualizzano lo stato delle periferiche e permettono di gestirle manualmente. Offrono informazioni dettagliate sulle condizioni e sul funzionamento delle periferiche collegate.",
      },
      {
        iconaClasse: "flaticon-computer-hardware",
        descrizione:
          "Si aprono tramite il pulsante “Diagnostica” nella schermata principale che apre una finestra di selezione di panelli specifici per ogni job o funzionalità della postazione.",
      },
      {
        iconaClasse: "flaticon-development",
        descrizione:
          "L'interfaccia dettagliata dei pannelli diagnostici permette il controllo e la manutenzione delle periferiche. Gli utenti possono eseguire operazioni avanzate di diagnostica e monitoraggio per mantenere l'efficienza del sistema.",
      },
    ],
  },
  {
    margin: true,
    fade: "Left", 
    titolo: "Implementazione delle Operazioni tramite Job",
    immagineSrc: "images/masp/lavorazione.png",
    altSrc: "Implementazione delle Operazioni tramite Job",
    dettagli: [
      {
        iconaClasse: "flaticon-touch",
        descrizione:
          "Il software MASP App utilizza il concetto di 'Job' per personalizzare i cicli di lavoro, con ogni job che rappresenta una funzione specifica. La configurazione avviene tramite file di testo .ini, che definiscono le impostazioni per ogni fase del ciclo.",
      },
      {
        iconaClasse: "flaticon-profit",
        descrizione:
          "I file .ini contengono sezioni generali e specifiche per ogni job, permettendo di impostare numerosi parametri. Questo consente un alto grado di personalizzazione e controllo, adattando il software alle esigenze specifiche degli utenti.",
      }
    ],
  },
];

export default maspDataIntro;
