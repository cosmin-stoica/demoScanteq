<?php
// Consentire l'accesso da qualsiasi origine (notare il * che indica "qualsiasi")
header("Access-Control-Allow-Origin: *");
// Consentire i metodi HTTP specifici (GET, POST, PUT, DELETE, OPTIONS)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Consentire determinate intestazioni HTTP
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_2');

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $postazioneFilter = isset($_GET['postazione']) ? $_GET['postazione'] : null;
    $areaInteresseFilter = isset($_GET['areaInteresse']) ? $_GET['areaInteresse'] : null;

    // Utilizza una dichiarazione preparata per migliorare la sicurezza
    $stmt = $db->prepare("SELECT * FROM workers WHERE (? IS NULL OR Postazione = ?) AND (? IS NULL OR AreaInteresse = ?)");
    $stmt->bind_param('ssss', $postazioneFilter, $postazioneFilter, $areaInteresseFilter, $areaInteresseFilter);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result) {
        $workers = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($workers);
    } else {
        die('Errore nella query: ' . $db->error);
    }

    $stmt->close();
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Estrai i dati dal corpo della richiesta
    $idToUpdate = $data['ID'];
    $newState = $data['Stato'];

    // Prepara la query di aggiornamento
    $stmt = $db->prepare("UPDATE workers SET Stato = ? WHERE ID = ?");

    // Bind dei parametri
    $stmt->bind_param('si', $newState, $idToUpdate);

    // Esecuzione della query
    $stmt->execute();

    // Ottieni tutti i workers aggiornati e inviali come risposta
    echo json_encode(getWorkers());

    // Chiudi la query preparata
    $stmt->close();
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $idsToDelete = $data['idsToDelete'];

    if (!empty($idsToDelete)) {
        $placeholders = implode(',', array_fill(0, count($idsToDelete), '?'));
        $stmt = $db->prepare("DELETE FROM workers WHERE ID IN ($placeholders)");

        // Bind dei parametri
        $stmt->bind_param(str_repeat('i', count($idsToDelete)), ...$idsToDelete);

        // Esecuzione della query
        $stmt->execute();

        echo json_encode(getWorkers());

        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Estrai i dati dal corpo della richiesta
    $tipo = $data['Tipo'];
    $postazione = $data['Postazione'];
    $areaInteresse = $data['AreaInteresse'];
    $valore = $data['Valore'];
    $tolleranza = $data['Tolleranza'];

    // Prepara la query di inserimento
    $stmt = $db->prepare("INSERT INTO workers (Tipo, Postazione, AreaInteresse, Valore, Tolleranza) VALUES (?, ?, ?, ?, ?)");

    // Bind dei parametri
    $stmt->bind_param('sssii', $tipo, $postazione, $areaInteresse, $valore, $tolleranza);

    // Esecuzione della query
    $stmt->execute();

    // Ottieni l'ID dell'ultimo inserimento
    $lastInsertId = $stmt->insert_id;

    // Chiudi la query preparata
    $stmt->close();

    // Ottieni tutti i workers aggiornati
    $stmt = $db->prepare("SELECT * FROM workers");
    $stmt->execute();
    $result = $stmt->get_result();
    $workers = $result->fetch_all(MYSQLI_ASSOC);

    // Chiudi la query preparata
    $stmt->close();

    // Aggiungi l'ID dell'ultimo inserimento alla risposta
    echo json_encode(['message' => 'Dati salvati con successo', 'lastInsertId' => $lastInsertId, 'workers' => $workers]);
}


function getWorkers($postazioneFilter = null, $areaInteresseFilter = null) {
    global $db;

    $query = "SELECT * FROM workers";

    // Aggiungi condizioni WHERE se sono forniti i filtri
    if ($postazioneFilter !== null || $areaInteresseFilter !== null) {
        $query .= " WHERE";
        $conditions = [];

        if ($postazioneFilter !== null) {
            $conditions[] = " Postazione = '$postazioneFilter'";
        }

        if ($areaInteresseFilter !== null) {
            $conditions[] = " AreaInteresse = '$areaInteresseFilter'";
        }

        $query .= implode(" AND", $conditions);
    }

    $result = $db->query($query);

    if (!$result) {
        die('Errore nella query: ' . $db->error);
    }

    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
