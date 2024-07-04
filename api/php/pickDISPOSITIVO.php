<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data && isset($data['ID'], $data['Linea'], $data['Postazione'], $data['Contenuto'], $data['Numero'], $data['Stato'], $data['Soglia'], $data['WatchDog'])) {
        $id = $data['ID'];
        $linea = $data['Linea'];
        $postazione = $data['Postazione'];
        $contenuto = $data['Contenuto'];
        $numero = $data['Numero'];
        $stato = $data['Stato'];
        $soglia = $data['Soglia'];
        $watchdog = $data['WatchDog'];
    
        $stmt = $db->prepare("UPDATE picktoimage SET Contenuto=?, Numero=?, Stato=?, Soglia=?, WatchDog=? WHERE ID=? AND Linea=? AND Postazione=? ");
        $stmt->bind_param('siiiiiss', $contenuto, $numero, $stato, $soglia, $watchdog, $id, $linea, $postazione);
    
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Dati salvati con successo']);
        } else {
            echo json_encode(['success' => false, 'error' => 'Errore nell\'aggiornamento dei dati nel database']);
        }
    
        $stmt->close();
    } else {
        echo json_encode(['success' => false, 'error' => 'JSON non valido o campi mancanti']);
    }    
}

$db->close();
?>
