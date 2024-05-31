window.AvvitaturaJob = [
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
        nome: "Programma avvitatura",
        tipo: "string",
        tooltip: "Il programma che gestirà la fase di avvitatura. Questo programma si trova nel file chiamato 'Programmi di avvitatura.ini'. In questo file vengono elencate le specifiche di ogni fase di avvitatura, come il numero di viti, la coppia di chiusura e il gruppo di produzione della centralina."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Numero immagini",
        tipo: "intero",
        tooltip: "Il numero di immagini che verranno mostrate a schermo durante l’avvitatura. Quasi sempre il numero deve essere uguale al numero di viti che si devono avvitare, in quanto ogni vite può avere una sua immagine."
    },
    {
        tipo: 'divisore',
    },
    {
        nome: "Immagine vite (1, 2, (n))",
        tipo: "string",
        tooltip: "L’immagine da mostrare a schermo quando si sta avvitando la vite (n)."
    },
];
