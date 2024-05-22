const tracciabilitaDataIntro = [
  {
    margin: true,
    fade: "Left", 
    titolo: "File CSV",
    immagineSrc: "images/masp/tracciabilita/csv.png",
    altSrc: "File CSV",
    dettagli: [
      {
        iconaClasse: "flaticon-layers",
        descrizione:
          "Il salvataggio dei risultati su file CSV è gestito tramite un file di configurazione che contiene parametri per controllare vari aspetti della creazione del report. Questi includono l'abilitazione del report, la generazione di log e l'inclusione di informazioni specifiche come il nome dello stabilimento e della postazione.",
      },
      {
        iconaClasse: "flaticon-web-plugin",
        descrizione:
          "I report CSV generati includono dettagli su ogni fase del ciclo di lavoro. Un esempio tipico di file CSV contiene dati relativi allo stabilimento, alla postazione, alla data e ora, all'operatore e ai risultati delle operazioni di collaudo, consentendo una tracciabilità precisa e ordinata delle operazioni svolte.",
      },
    ],
  },
  {
    margin: true,
    fade: "Right", 
    titolo: "Database MySql, SQL Server",
    immagineSrc: "images/masp/tracciabilita/database.webp",
    altSrc: "Database MySql, SQL Server",
    dettagli: [
      {
        iconaClasse: "flaticon-rss ",
        descrizione:
          "Il salvataggio dei risultati su database MySQL e SQL Server avviene tramite chiamate SQL configurate in un file specifico. Questo file contiene parametri per l'indirizzo del server, l'utente e la password, permettendo un'interfaccia diretta tra il software e il database.",
      },
      {
        iconaClasse: "flaticon-monitor",
        descrizione:
          "I dati vengono registrati nel database per garantire una tracciabilità completa delle operazioni. Le informazioni archiviate includono dettagli sulle operazioni di montaggio e collaudo, assicurando che tutti i dati siano facilmente accessibili e organizzati per future analisi e revisioni.",
      },
    ],
  },
  {
    margin: true,
    fade: "Left", 
    titolo: "Sistemi Mes",
    immagineSrc: "images/masp/tracciabilita/mes.webp",
    altSrc: "Sistemi Mes",
    dettagli: [
      {
        iconaClasse: "flaticon-laptop",
        descrizione:
          "Il software MASP supporta l'interfacciamento con i sistemi MES per il controllo della produzione. Questo avviene tramite due modalità principali: l'architettura REST basata su TCP-IP e l'uso di cartelle condivise per i file CSV.",
      },
      {
        iconaClasse: "flaticon-security",
        descrizione:
          "Nell'interfacciamento HTTPS, i dati vengono trasmessi utilizzando chiamate e formattati in JSON, mentre nella modalità con cartelle condivise, i dati vengono salvati come file CSV in una rete condivisa. Entrambe le modalità assicurano una tracciabilità precisa e una facile integrazione con i sistemi di gestione della produzione.",
      }
    ],
  },
  {
    margin: true,
    fade: "Right",
    titolo: "Stampa su carta termica",
    immagineSrc: "images/masp/tracciabilita/printer.webp",
    altSrc: "Stampa su carta termica",
    dettagli: [
      {
        iconaClasse: "flaticon-chart",
        descrizione:
          "Al termine di ogni ciclo di lavoro, il sistema stampa un'etichetta su carta termica che riporta i dati raccolti. La configurazione della stampa è gestita tramite un file specifico che permette di personalizzare il formato dell'etichetta, inclusi testo, linee, codici a barre 2D e immagini.",
      },
      {
        iconaClasse: "flaticon-survey",
        descrizione:
          "Le etichette stampate includono informazioni dettagliate sulle operazioni eseguite, garantendo una tracciabilità visiva immediata e precisa. Questa funzione permette di avere una documentazione fisica che accompagna il prodotto durante tutte le fasi della produzione e della logistica.",
      }
    ],
  }
  
];

export default tracciabilitaDataIntro;
