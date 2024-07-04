<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');
ini_set('max_execution_time', 300); // estende il tempo di esecuzione a 5 minuti


if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Leggi il corpo della richiesta come stringa
    $data = json_decode(file_get_contents('php://input'), true);

    // Assicurati che ci siano dati nel JSON
    if (!empty($data)) {
        // Costruisci la stringa dei segnaposto per la query SQL
        $placeholders = str_repeat('?, ', count($data) - 1) . '?';
        
        // Costruisci la stringa dei tipi di dati per bind_param
        $types = str_repeat('s', count($data));

        // Costruisci l'array dei valori per bind_param
        $values = array_values($data);

        // Aggiungi i valori nella query SQL
        $insertQuery = "INSERT INTO attivita (" . implode(", ", array_keys($data)) . ") VALUES (" . $placeholders . ")";
        $stmt = $db->prepare($insertQuery);

        if ($stmt) {
            // Dynamically bind parameters
            $bind_params = array_merge(array($types), $values);
            $stmt->bind_param(...$bind_params);
            
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
        echo json_encode(['error' => 'Nessun dato inviato']);
    }
}  elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $idsToDelete = $data['idsToDelete'];

    if (!empty($idsToDelete)) {
        $placeholders = implode(',', array_fill(0, count($idsToDelete), '?'));
        $stmt = $db->prepare("DELETE FROM attivita WHERE ID IN ($placeholders)");

        // Bind dei parametri
        $stmt->bind_param(str_repeat('i', count($idsToDelete)), ...$idsToDelete);

        // Esecuzione della query
        $stmt->execute();

        echo json_encode(getCommesse());

        // Chiusura dello statement
        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $modifiedData = $data['modifiedData'];

    foreach ($modifiedData as $row) {

        $id = $row['ID'];
        $creazione = $row['Creazione'];
        $numeroofferta = $row['NumeroOfferta'];
        $titolo = $row['Titolo'];
        $cliente = $row['Cliente'];
        $committente = $row['Committente'];
        $ordine = $row['Ordine'];
        $descrizione = $row['Descrizione'];
        $stato = $row['Stato'];
        $orepreviste = $row['OrePreviste'];

        $stmt = $db->prepare("UPDATE attivita SET Creazione=?, NumeroOfferta=?, Titolo=?, Cliente=?, Committente=?, Ordine=?, Descrizione=?, Stato=?, OrePreviste=? WHERE ID=?");
        $stmt->bind_param('ssssssssii', $creazione, $numeroofferta, $titolo, $cliente, $committente, $ordine, $descrizione, $stato, $orepreviste, $id);
                   
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Dati salvati con successo']);
        } else {
            echo json_encode(['error' => 'Errore nell\'aggiornamento dei dati nel database']);
        }

        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Verifica se ci sono parametri nella query string
    $queryParams = $_GET;

    // Costruisci la query base
    $query = "SELECT * FROM attivita";

    // Rimuovi l'areaInteresse dalla lista di parametri per le condizioni
    unset($queryParams['areaInteresse']);

    // Resto del codice rimane invariato
    echo json_encode(getCommesse());
}

function getCommesse() {
    global $db;
    $query = "SELECT * FROM attivita";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
