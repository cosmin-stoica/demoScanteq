window.PickToLightJob = [
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
        tooltip: "Il nome dell’immagine mostrata a schermo durante il job."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Messaggio",
        tipo: "string",
        tooltip: "Il messaggio mostrato a schermo all’operatore durante il job."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "ID contenitore",
        tipo: "intero",
        tooltip: "Numero identificativo della fotocellula da dover attivare per proseguire con la lavorazione. Ci sono un massimo di 16 diverse fotocellule, le quali possono essere impostate nel file 'HAL Config Pick To Light.ini'."
    },
];
