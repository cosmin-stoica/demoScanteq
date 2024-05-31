window.BarcodeJob = [
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
        nome: "Barcode VIN-SN",
        tipo: "boolean",
        tooltip: "Il barcode letto non verrà trattato come gli altri ma verrà scritto in testa all’etichetta, come descrizione del pezzo sul quale si sta lavorando attualmente. NOTA: Si può avere un solo Barcode VIN-SN."
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
        nome: "Numero barcode",
        tipo: "intero",
        tooltip: "Il numero di barcode che devono essere letti. Questo numero deve combaciare con quanti barcode da leggere vengono elencati all’interno del job."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Descrizione (1, 2, (n))",
        tipo: "string",
        tooltip: "La descrizione, fornita a schermo, quando si deve leggere il barcode."
    },
    {
        nome: "Barcode (1, 2, (n))",
        tipo: "string",
        tooltip: "Indica il codice che si vuole leggere tramite il lettore barcode. Il codice letto deve contenere questo codice nella parte iniziale."
    },
    {
        nome: "Immagine (1, 2, (n))",
        tipo: "string",
        tooltip: "Il nome del file immagine mostrata a schermo per il barcode che si deve leggere. L’immagine viene presa dalla cartella descritta in 'Cartella immagini'."
    },
    {
        nome: "Lunghezza min (1, 2, (n))",
        tipo: "intero",
        tooltip: "Lunghezza minima che il barcode attuale deve avere per passare la prova."
    },
    {
        nome: "Lunghezza max (1, 2, (n))",
        tipo: "intero",
        tooltip: "Lunghezza massima che il barcode attuale può avere per passare la prova."
    },
    {
        nome: "ID stoccaggio (1, 2, (n))",
        tipo: "intero",
        tooltip: "Questo valore indica che il barcode deve essere memorizzato in un vettore all’interno dell’applicativo per poter essere utilizzato successivamente, come riferimento per altri job barcode o per stamparlo su carta termica. Il valore descritto qui è 'globale' quindi 2 job barcode non dovrebbero utilizzare lo stesso valore di 'ID stoccaggio'."
    },
];
