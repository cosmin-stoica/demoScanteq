<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_2');

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Leggi il corpo della richiesta come stringa
    $data = json_decode(file_get_contents('php://input'), true);

    // Assicurati che i campi necessari siano presenti nel JSON
    if (isset($data['Commessa'], $data['Codice'], $data['Seriale'], $data['Postazione'], $data['Utente'], $data['TotaleJob'], $data['TimestampInizio'], $data['TimestampFine'], $data['Pausa'], $data['Errore'], $data['Esito'])) {
        // Esegui le operazioni specifiche per le richieste HTTP POST qui
        // Inserisci i dati nella tabella "avvitature"
        $query = "INSERT INTO risultati (Commessa, Codice, Seriale, Postazione, Utente, TotaleJob, TimestampInizio, TimestampFine, Pausa, Errore, Esito ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $db->prepare($query);

        if ($stmt) {
            $stmt->bind_param("ssissississ", $data['Commessa'], $data['Codice'], $data['Seriale'], $data['Postazione'], $data['Utente'], $data['TotaleJob'], $data['TimestampInizio'], $data['TimestampFine'], $data['Pausa'], $data['Errore'], $data['Esito']);
            if ($stmt->execute()) {
                echo json_encode(['message' => 'Dati salvati con successo']);
            } else {
                echo json_encode(['error' => 'Errore nell\'inserimento dei dati nel database']);
            }
            $stmt->close();
        } else {
            echo json_encode(['error' => 'Errore nella preparazione della query']);
        }
    } else {
        echo json_encode(['error' => 'Campi mancanti nel JSON']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $idsToDelete = $data['idsToDelete'];

    if (!empty($idsToDelete)) {
        $placeholders = implode(',', array_fill(0, count($idsToDelete), '?'));
        $stmt = $db->prepare("DELETE FROM risultati WHERE ID IN ($placeholders)");

        // Bind dei parametri
        $stmt->bind_param(str_repeat('i', count($idsToDelete)), ...$idsToDelete);

        // Esecuzione della query
        $stmt->execute();

        echo json_encode(getPostazioni());

        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $modifiedData = $data['modifiedData'];

    foreach ($modifiedData as $row) {
        $id = $row['ID'];
        $commessa = $row['Commessa'];
        $codice = $row['Codice'];
        $seriale = $row['Seriale'];
        $postazione = $row['Postazione'];
        $utente = $row['Utente'];
        $totaleJob = $row['TotaleJob'];
        $timestampInizio = $row['TimestampInizio'];
        $timestampFine = $row['TimestampFine'];
        $pausa = $row['Pausa'];
        $errore = $row['Errore'];
        $esito = $row['Esito'];

        // Implementa la logica per aggiornare i dati nel database
        $stmt = $db->prepare("UPDATE risultati SET Commessa=?, Codice=?, Seriale=?, Postazione=?, Utente=?, TotaleJob=?, TimestampInizio=?, TimestampFine=?, Pausa=?, Errore=?, Esito=? WHERE ID=?");
        $stmt->bind_param('ssissississi', $commessa, $codice, $seriale, $postazione, $utente, $totaleJob, $timestampInizio, $timestampFine, $pausa, $errore, $esito, $id);
        $stmt->execute();
        echo json_encode(getPostazioni());
        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
echo json_encode(getPostazioni());

}

function getPostazioni() {
    global $db;
    $query = "SELECT * FROM risultati";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
