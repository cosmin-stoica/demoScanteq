<?php
// Consentire l'accesso da qualsiasi origine (notare il * che indica "qualsiasi")
header("Access-Control-Allow-Origin: *");
// Consentire i metodi HTTP specifici (GET, POST, PUT, DELETE, OPTIONS)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Consentire determinate intestazioni HTTP
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Leggi il corpo della richiesta come stringa
    $data = json_decode(file_get_contents('php://input'), true);

    // Assicurati che i campi necessari siano presenti nel JSON
    if (isset($data['Codice'], $data['Descrizione'], $data['Immagine'])) {
        $query = "INSERT INTO infoausiliarie (Codice, Descrizione, Immagine) VALUES (?, ?, ?)";
        $stmt = $db->prepare($query);
        
        if ($stmt) {          
            $stmt->bind_param("sss", $data['Codice'], $data['Descrizione'], $data['Immagine']);
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
}elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Leggi il corpo della richiesta come stringa
    $data = json_decode(file_get_contents('php://input'), true);

    // Assicurati che i campi necessari siano presenti nel JSON
    if (isset($data['Codice'], $data['Descrizione'], $data['Immagine'])) {
        $query = "INSERT INTO infoausiliarie (Codice, Descrizione, Immagine) VALUES (?, ?, ?)";
        $stmt = $db->prepare($query);
        
        if ($stmt) {          
            $stmt->bind_param("sss", $data['Codice'], $data['Descrizione'], $data['Immagine']);
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
        $stmt = $db->prepare("DELETE FROM infoausiliarie WHERE ID IN ($placeholders)");

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
        $codice = $row['Codice'];
        $descrizione = $row['Descrizione'];
        $immagine = $row['Immagine'];


        $stmt = $db->prepare("UPDATE infoausiliarie SET Codice=?, Descrizione=?, Immagine=? WHERE ID=?");
        $stmt->bind_param('sssi', $codice, $descrizione, $immagine, $id);
                   
        if ($stmt->execute()) {
            echo json_encode(getCommesse());
        } else {
            echo json_encode(['error' => 'Errore nell\'aggiornamento dei dati nel database']);
        }

        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Verifica se ci sono parametri nella query string
    $queryParams = $_GET;

    // Costruisci la query base
    $query = "SELECT * FROM infoausiliarie";

    // Rimuovi l'areaInteresse dalla lista di parametri per le condizioni
    unset($queryParams['areaInteresse']);

    // Resto del codice rimane invariato
    echo json_encode(getCommesse());
}

function getCommesse() {
    global $db;
    $query = "SELECT * FROM infoausiliarie";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
