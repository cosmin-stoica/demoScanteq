<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');
ini_set('max_execution_time', 300); // estende il tempo di esecuzione a 5 minuti

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['Versione'])) {
        $versione = $data['Versione'];

        $stmt = $db->prepare("UPDATE documentazione SET Versione=? WHERE ID=1");
        $stmt->bind_param('s', $versione);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Dati aggiornati con successo']);
        } else {
            echo json_encode(['error' => 'Errore nell\'aggiornamento dei dati nel database']);
        }

        $stmt->close();
    } else {
        echo json_encode(['error' => 'Nessun dato inviato']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $db->prepare("SELECT Versione FROM documentazione WHERE ID=1");
    $stmt->execute();
    $stmt->bind_result($versione);

    if ($stmt->fetch()) {
        echo json_encode(['ID' => 1, 'Versione' => $versione]);
    } else {
        echo json_encode(['error' => 'Nessun dato trovato']);
    }

    $stmt->close();
}

$db->close();
?>
