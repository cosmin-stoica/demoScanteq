window.dataDoc = [
  {
    Name: "Avvitatura",
    Hal: [
      { nome: "bIsUsedAvv1", tipo: "boolean", tooltip: "desc" },
      { nome: "bIsUsedAvv2", tipo: "boolean", tooltip: "desc" },
    ],
    Hal_Aux1: [
      {nome: "Nome programma", tipo: "boolean", tooltip:"Indica il numero di programmi di avvitatura presenti all’interno del file."},
      {nome: "Modello avvitatore",tipo: "boolean",tooltip:"Indica il modello dell’avvitatore che deve essere una tra i seguenti: Cleco, Cleco LW, Jolly e Kolver.",},
      {nome: "Numero viti",tipo: "boolean",tooltip: "Numero di vitto da serrare durante il job.",},
      {nome: "Gruppo produzione",tipo: "boolean", tooltip:"Parametro da inviare alla centralina per indicare la configurazione da utilizzare contenente ad esempio la coppia di serraggio e gli angoli finali con le relative tolleranza etc.",},
      {nome: "Coppia chiusura", tipo: "boolean", tooltip:"Coppia di chiusura da visualizzare nel pannello principale. Deve essere uguale al parametro con cui viene programmata la centralina",},
      {nome: "Bussola", tipo: "boolean", tooltip: "La posizione della bussola prelevare,",},
      {nome: "Numero ripetizioni",tipo: "boolean", tooltip:"Numero di ripetizioni consentite in caso di serraggio con errore sulla stessa vite prima di finire il ciclo con esito NOK.",},
      {nome: "Controllo posizione", tipo: "boolean",tooltip: "Indica se il controllo della posizione di serraggio con braccio con encoder è abilitato.",},
      {nome: "Tolleranza X",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse X",},
      {nome: "Tolleranza Y",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse Y",},
      {nome: "Tolleranza Z",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse Z",},
    ],
    Hal_Aux2: [{ nome: "bIsUsed2", tipo: "boolean", tooltip: "desc" }],
    Hal_Aux3: [{ nome: "bIsUsed2", tipo: "boolean", tooltip: "desc" }],
    Job: [
      { nome: "bIsUsedAvv1", tipo: "boolean", tooltip: "desc" },
      { nome: "bIsUsedAvv2", tipo: "boolean", tooltip: "desc" },
    ],
    Diagnostica: [
      { nome: "bIsUsedAvv1", descrizione: "desc" },
      { nome: "bIsUsedAvv2", descrizione: "desc" },
    ]
  },
  {
    Name: "Rivettatura",
    Hal: [
      { nome: "bIsUsedRiv", tipo: "boolean", tooltip: "desc" },
      { nome: "bIsUsedRiv2", tipo: "boolean", tooltip: "desc" },
    ],
    Hal_Aux1: [
      {nome: "Nome programma", tipo: "boolean", tooltip:"Indica il numero di programmi di avvitatura presenti all’interno del file."},
      {nome: "Modello avvitatore",tipo: "boolean",tooltip:"Indica il modello dell’avvitatore che deve essere una tra i seguenti: Cleco, Cleco LW, Jolly e Kolver.",},
      {nome: "Numero viti",tipo: "boolean",tooltip: "Numero di vitto da serrare durante il job.",},
      {nome: "Gruppo produzione",tipo: "boolean", tooltip:"Parametro da inviare alla centralina per indicare la configurazione da utilizzare contenente ad esempio la coppia di serraggio e gli angoli finali con le relative tolleranza etc.",},
      {nome: "Coppia chiusura", tipo: "boolean", tooltip:"Coppia di chiusura da visualizzare nel pannello principale. Deve essere uguale al parametro con cui viene programmata la centralina",},
      {nome: "Bussola", tipo: "boolean", tooltip: "La posizione della bussola prelevare,",},
      {nome: "Numero ripetizioni",tipo: "boolean", tooltip:"Numero di ripetizioni consentite in caso di serraggio con errore sulla stessa vite prima di finire il ciclo con esito NOK.",},
      {nome: "Controllo posizione", tipo: "boolean",tooltip: "Indica se il controllo della posizione di serraggio con braccio con encoder è abilitato.",},
      {nome: "Tolleranza X",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse X",},
      {nome: "Tolleranza Y",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse Y",},
      {nome: "Tolleranza Z",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse Z",},
    ],
    Hal_Aux2: [{ nome: "bIsUsedRiv1", tipo: "boolean", tooltip: "desc" }],
    Hal_Aux3: [{ nome: "bIsUsedRiv2", tipo: "boolean", tooltip: "desc" }],
    Job: [
      { nome: "bIsUsedRiv1", tipo: "boolean", tooltip: "desc" },
      { nome: "bIsUsedRiv2", tipo: "boolean", tooltip: "desc" },
    ],
    Diagnostica: [
      { nome: "bIsUsedRiv1", descrizione: "desc" },
      { nome: "bIsUsedRiv2", descrizione: "desc" },
    ]
  },
  {
    Name: "Jump",
    Hal: [
      { nome: "bIsUsedJump1", tipo: "boolean", tooltip: "desc" },
      { nome: "bIsUsedJump2", tipo: "boolean", tooltip: "desc" },
    ],
    Hal_Aux1: [
      {nome: "Nome programma", tipo: "boolean", tooltip:"Indica il numero di programmi di avvitatura presenti all’interno del file."},
      {nome: "Modello avvitatore",tipo: "boolean",tooltip:"Indica il modello dell’avvitatore che deve essere una tra i seguenti: Cleco, Cleco LW, Jolly e Kolver.",},
      {nome: "Numero viti",tipo: "boolean",tooltip: "Numero di vitto da serrare durante il job.",},
      {nome: "Gruppo produzione",tipo: "boolean", tooltip:"Parametro da inviare alla centralina per indicare la configurazione da utilizzare contenente ad esempio la coppia di serraggio e gli angoli finali con le relative tolleranza etc.",},
      {nome: "Coppia chiusura", tipo: "boolean", tooltip:"Coppia di chiusura da visualizzare nel pannello principale. Deve essere uguale al parametro con cui viene programmata la centralina",},
      {nome: "Bussola", tipo: "boolean", tooltip: "La posizione della bussola prelevare,",},
      {nome: "Numero ripetizioni",tipo: "boolean", tooltip:"Numero di ripetizioni consentite in caso di serraggio con errore sulla stessa vite prima di finire il ciclo con esito NOK.",},
      {nome: "Controllo posizione", tipo: "boolean",tooltip: "Indica se il controllo della posizione di serraggio con braccio con encoder è abilitato.",},
      {nome: "Tolleranza X",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse X",},
      {nome: "Tolleranza Y",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse Y",},
      {nome: "Tolleranza Z",tipo: "boolean",tooltip: "Tolleranza in mm sull’asse Z",},
    ],
    Hal_Aux2: [{ nome: "bIsUsedJump1", tipo: "boolean", tooltip: "desc" }],
    Hal_Aux3: [{ nome: "bIsUsedJump2", tipo: "boolean", tooltip: "desc" }],
    Job: [
      { nome: "bIsUsedJump1", tipo: "boolean", tooltip: "desc" },
      { nome: "bIsUsedJump2", tipo: "boolean", tooltip: "desc" },
    ],
    Diagnostica: [
      { nome: "bIsUsedJump1", descrizione: "desc" },
      { nome: "bIsUsedJump2", descrizione: "desc" },
    ]
  },
];
