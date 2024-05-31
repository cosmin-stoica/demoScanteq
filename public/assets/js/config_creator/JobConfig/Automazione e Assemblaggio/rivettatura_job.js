window.RivettaturaJob = [
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
        tooltip: "Numero di tentativi a disposizione. Nel caso il job restituisca un risultato NOK si può ripetere per un determinato numero di volte, fino all’ottenimento di un risultato OK oppure, allo scadere dei tentativi, il ciclo finisce con errore."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Numero rivetti",
        tipo: "intero",
        tooltip: "Indica il numero di rivetti che si andranno ad utilizzare durante il job."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Rivettatrice",
        tipo: "intero",
        tooltip: "L’ID della rivettatrice che si andrà ad utilizzare per il job."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Soglia rivettatura",
        tipo: "intero",
        tooltip: "Soglia minima della pressione dell'olio nell'impianto pneumatico della rivettatrice, sopra la quale si inizia l’acquisizione della forma d’onda necessaria per la verifica della correttezza dell'operazione."
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
        nome: "Immagine rivetto (1, 2, (n))",
        tipo: "string",
        tooltip: "Il nome dell’immagine mostrata a schermo durante l’attuale rivetto da montare."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Verifica numero campioni",
        tipo: "boolean",
        tooltip: "Se questo parametro è 1, la verifica non utilizza la forma d’onda della pressione dell'olio, bensì controlla se il numero di campioni sopra la soglia è compreso tra un numero minimo e massimo."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Numero campioni minimo",
        tipo: "intero",
        tooltip: "Numero di campioni minimo per il modo di funzionamento sopraindicato."
    },
    {
        nome: "Numero campioni massimo",
        tipo: "intero",
        tooltip: "Numero di campioni massimo per il modo di funzionamento sopraindicato."
    },
];
