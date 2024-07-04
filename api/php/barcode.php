<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

$customHeaderVariable = isset($_SERVER['HTTP_CUSTOM_HEADER']) ? $_SERVER['HTTP_CUSTOM_HEADER'] : '';

if ($customHeaderVariable !== "Sc38ahD38sW31Hshue") {
    echo json_encode(['error' => 'Accesso negato. Credenziali non valide.']);
    exit;
}
else{

    function getTickets() {
        global $db;
        $query = "SELECT * FROM barcode";
        $result = $db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_2');


if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Leggi il corpo della richiesta come stringa
    $data = json_decode(file_get_contents('php://input'), true);
    // Assicurati che i campi necessari siano presenti nel JSON
    if (isset($data['Commessa'], $data['Codice'], $data['Seriale'], $data['Postazione'], $data['Utente'], $data['NomeJob'], $data['IdJob'], $data['Timestamp'], $data['Componente'], $data['Descrizione'])) {
        // Esegui le operazioni specifiche per le richieste HTTP POST qui
        // Inserisci i dati nella tabella "avvitature"
        $query = "INSERT INTO barcode (Commessa, Codice, Seriale, Postazione, Utente, NomeJob, IdJob, Timestamp, Componente, Descrizione ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $db->prepare($query);

        if ($stmt) {
            $stmt->bind_param("ssisssisss", $data['Commessa'], $data['Codice'], $data['Seriale'], $data['Postazione'], $data['Utente'], $data['NomeJob'], $data['IdJob'], $data['Timestamp'], $data['Componente'], $data['Descrizione']);
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
        $stmt = $db->prepare("DELETE FROM barcode WHERE ID IN ($placeholders)");

        // Bind dei parametri
        $stmt->bind_param(str_repeat('i', count($idsToDelete)), ...$idsToDelete);

        // Esecuzione della query
        $stmt->execute();

        
        echo json_encode(getTickets());

        // Chiusura dello statement
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
        $nomeJob = $row['NomeJob'];
        $idJob = $row['IdJob'];
        $timestamp = $row['Timestamp'];
        $componente = $row['Componente'];
        $descrizione = $row['Descrizione'];

        // Implementa la logica per aggiornare i dati nel database
      // ...

$stmt = $db->prepare("UPDATE barcode SET Commessa=?, Codice=?, Seriale=?, Postazione=?, Utente=?, NomeJob=?, IdJob=?, Timestamp=?, Componente=?, Descrizione=? WHERE ID=?");
$stmt->bind_param('ssisssisssi', $commessa, $codice, $seriale, $postazione, $utente, $nomeJob, $idJob, $timestamp, $componente, $descrizione, $id);
                   
$stmt->execute();
echo json_encode(getTickets());

        $stmt->close();
    }
}  elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {

echo json_encode(getTickets());

}


$db->close();

}

?>
