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
          "L'interfaccia utente è progettata per visualizzare tutte le informazioni operative nella finestra principale, usando pannelli sovrapposti di tipo Tab per le operazioni specifiche, una schermata Home per l'accesso rapido alle funzioni principali e una schermata Log per monitorare e analizzare le attività di sistema.",
      },
      {
        iconaClasse: "flaticon-web-plugin",
        descrizione:
          "La configurazione dell'interfaccia utente è gestita tramite file che permettono di attivare o disattivare i vari pannelli e controlli, offrendo flessibilità e personalizzazione per adattare l'applicazione alle esigenze specifiche degli utenti..",
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
          "L'applicativo MASP App suddivide il personale in tre categorie: User, Coord e Admin, ciascuna con permessi specifici per soddisfare le esigenze operative. La gestione degli accessi è implementata tramite una funzione di login, assicurando la tracciabilità degli operatori e impedendo l'uso non autorizzato delle postazioni.",
      },
      {
        iconaClasse: "flaticon-programmer",
        descrizione:
          "Dalla schermata principale, cliccando su Login, si apre il pannello con la lista degli utenti registrati. Per accedere, bisogna selezionare l'utente, inserire il PIN a schermo e premere Login. In alternativa, il login può avvenire leggendo il codice badge dell'operatore con il lettore barcode mentre la finestra Login è aperta.",
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
          "Una prima possibilità prevede l'inserimento manuale del codice, in cui l'utente immette direttamente il codice del ciclo di lavorazione tramite tastiera.",
      },
      {
        iconaClasse: "flaticon-image",
        descrizione:
          "Un'alternativa è la lettura del barcode, che permette di velocizzare il processo di selezione. Utilizzando un lettore di codici a barre, l'utente può scansionare il barcode associato al ciclo di lavorazione, garantendo un inserimento rapido e privo di errori.",
      },
      {
        iconaClasse: "flaticon-layers",
        descrizione:
          "Un'altra opzione è la selezione da una lista preimpostata. In questo caso, l'utente può scegliere il ciclo di lavorazione desiderato da un elenco predefinito, visualizzando tutte le opzioni disponibili in modo chiaro e organizzato.",
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
          "I pannelli della diagnostica visualizzano lo stato delle periferiche per ogni operazione o funzionalità della postazione, permettendo la gestione manuale. Forniscono informazioni dettagliate sul funzionamento delle periferiche collegate.",
      },
      {
        iconaClasse: "flaticon-computer-hardware",
        descrizione:
          "Si aprono tramite il pulsante 'Diagnostica' nella schermata principale, che apre una finestra di selezione dei pannelli specifici per ogni job o funzionalità della postazione.",
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
