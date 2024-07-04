<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');
ini_set('max_execution_time', 300); // estende il tempo di esecuzione a 5 minuti

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    global $db;

    // Imposta tutte le ore della tabella 'attivita' a 0
    $resetQuery = "UPDATE attivita SET Ore = 0";
    $resetResult = $db->query($resetQuery);

    if ($resetResult === false) {
        echo json_encode(['error' => 'Errore nel reset delle ore nella tabella attivita']);
        exit;
    }

    // Esegui la query per aggiornare i valori nella tabella 'attivita'
    $updateQuery = "
        UPDATE attivita
        JOIN (
            SELECT
                attivita.NumeroOfferta,
                SUM(azione.Ore) AS Ore_totali
            FROM
                attivita
            JOIN
                azione ON attivita.NumeroOfferta = azione.Offerta
            GROUP BY
                attivita.NumeroOfferta
        ) AS risultato ON attivita.NumeroOfferta = risultato.NumeroOfferta
        SET attivita.Ore = risultato.Ore_totali
    ";

    // Esegui la query di aggiornamento
    $updateResult = $db->query($updateQuery);

    // Verifica se la query di aggiornamento ha avuto successo
    if ($updateResult === false) {
        echo json_encode(['error' => 'Errore nell\'aggiornamento dei valori nella tabella attivita']);
        exit;
    }

    // Query di selezione per ottenere i dati aggiornati
    $selectQuery = "SELECT * FROM attivita";

    // Esegui la query di selezione
    $result = $db->query($selectQuery);

    // Estrae i dati in un array associativo
    $commesse = $result->fetch_all(MYSQLI_ASSOC);

    // Invia i dati aggiornati al client
    echo json_encode($commesse);
}

$db->close();
?>
