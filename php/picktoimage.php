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
    $data = json_decode(file_get_contents("php://input"), true);

    // Verifica se il JSON è valido e contiene i campi richiesti
    if ($data && isset($data['ID'], $data['Linea'], $data['Postazione'], $data['Contenuto'], $data['Numero'], $data['Stato'])) {
        $id = $data['ID'];
        $linea = $data['Linea'];
        $postazione = $data['Postazione'];
        $contenuto = $data['Contenuto'];
        $numero = $data['Numero'];
        $stato = $data['Stato'];
    
        $stmt = $db->prepare("UPDATE picktoimage SET Contenuto=?, Numero=?, Stato=? WHERE ID=? AND Linea=? AND Postazione=? ");
        $stmt->bind_param('siiiss', $contenuto, $numero, $stato, $id, $linea, $postazione);
    
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Dati salvati con successo']);
        } else {
            echo json_encode(['error' => 'Errore nell\'aggiornamento dei dati nel database']);
        }
    
        $stmt->close();
    } else {
        echo json_encode(['error' => 'JSON non valido o campi mancanti']);
    }    
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Leggi il corpo della richiesta come stringa
    $data = json_decode(file_get_contents('php://input'), true);

    // Assicurati che i campi necessari siano presenti nel JSON
    if (isset($data['ID'], $data['Linea'], $data['Postazione'])) {
        // Verifica se esiste già una riga con la stessa Linea e ID
        $checkQuery = "SELECT COUNT(*) as count FROM picktoimage WHERE Linea = ? AND ID = ?";
        $checkStmt = $db->prepare($checkQuery);
        $checkStmt->bind_param("si", $data['Linea'], $data['ID']);
        $checkStmt->execute();
        $checkResult = $checkStmt->get_result();
        $row = $checkResult->fetch_assoc();
        
        if ($row['count'] == 0) {
            // La combinazione Linea e ID non esiste, procedi con l'inserimento
            $insertQuery = "INSERT INTO picktoimage (ID, Linea, Postazione) VALUES (?, ?, ?)";
            $stmt = $db->prepare($insertQuery);

            if ($stmt) {          
                $stmt->bind_param("iss", $data['ID'], $data['Linea'], $data['Postazione']);
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
            // La combinazione Linea e ID esiste già, restituisci un messaggio di errore
            echo json_encode(['error' => 'La combinazione Linea e ID esiste già nel database']);
        }

        $checkStmt->close();
    } else {
        echo json_encode(['error' => 'Campi mancanti nel JSON']);
    }
}  elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $idsToDelete = $data['idsToDelete'];

    if (!empty($idsToDelete)) {
        $placeholders = implode(',', array_fill(0, count($idsToDelete), '?'));
        $stmt = $db->prepare("DELETE FROM picktoimage WHERE IDTAB IN ($placeholders)");

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
        $idtab = $row['IDTAB'];
        $linea = $row['Linea'];
        $postazione = $row['Postazione'];
        $contenuto = $row['Contenuto'];
        $numero = $row['Numero'];
        $stato = $row['Stato'];

        $stmt = $db->prepare("UPDATE picktoimage SET Linea=?, Postazione=?, Contenuto=?, Numero=?, Stato=? WHERE IDTAB=?");
        $stmt->bind_param('sssiii', $linea, $postazione, $contenuto, $numero, $stato, $idtab);
                   
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
    $query = "SELECT * FROM picktoimage";

    // Rimuovi l'areaInteresse dalla lista di parametri per le condizioni
    unset($queryParams['areaInteresse']);

    // Resto del codice rimane invariato
    echo json_encode(getCommesse());
}

function getCommesse() {
    global $db;
    $query = "SELECT * FROM picktoimage";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
