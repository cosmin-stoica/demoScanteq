window.RobotJob = [
    {
        nome: "Nome job",
        tipo: "string",
        tooltip: "Il testo che apparirà nella parte alta dello schermo per indicare lo scopo dell’attuale job."
    },
    {
        nome: "Salta job",
        tipo: "boolean",
        tooltip: "Il job non verrà eseguito durante il ciclo. Per saltare il job impostare il valore a 1, invece lasciare il valore a 0 per la normale esecuzione."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Numero ripetizioni",
        tipo: "intero",
        tooltip: "Numero di tentativi a disposizione. Nel caso il job restituisca un risultato NOK si può ripetere per un determinato numero di volte, fino all’ottenimento di un risultato OK oppure allo scadere dei tentativi."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Cartella immagini",
        tipo: "string",
        tooltip: "Le immagini mostrate durante il job verranno prese dalla cartella specificata dentro a questo parametro."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Immagine",
        tipo: "string",
        tooltip: "L’immagine da mostrare a schermo nel corso del job."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Avvio senza conferma",
        tipo: "boolean",
        tooltip: "I comandi vengono inviati al robot ed esso li esegue automaticamente quando il job viene caricato, senza bisogno di intervento da parte dell’operatore."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Stringa di comando",
        tipo: "string",
        tooltip: "La stringa di comando che viene inviata al robot tramite protocollo TCP-IP."
    },
];
