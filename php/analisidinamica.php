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

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(getPostazioni());
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $idsToDelete = $data['idsToDelete'];

    if (!empty($idsToDelete)) {
        $placeholders = implode(',', array_fill(0, count($idsToDelete), '?'));
        $stmt = $db->prepare("DELETE FROM analisi_dinamica WHERE ID IN ($placeholders)");

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
        $tipo = $row['Tipo'];
        $postazione = $row['Postazione'];
        $idJob = $row['IdJob'];
        $idVite = $row['IdVite'];
        $gp = $row['GP'];
        $interesse = $row['Interesse'];

        // Implementa la logica per aggiornare i dati nel database
        $stmt = $db->prepare("UPDATE analisi_dinamica SET Tipo=?, Postazione=?, IdJob=?, IdVite=?, GP=?, Interesse=? WHERE ID=?");
        $stmt->bind_param('ssssssi', $tipo, $postazione, $idJob, $idVite, $gp, $interesse, $id);
        $stmt->execute();
        echo json_encode(getPostazioni());
        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Estrai i dati dal corpo della richiesta
    $tipo = $data['Tipo'];
    $postazione = $data['Postazione'];
    $idJob = $data['IdJob'];
    $idVite = $data['IdVite'];
    $gp = $data['GP'];
    $interesse = $data['Interesse'];

    // Prepara la query di inserimento
    $stmt = $db->prepare("INSERT INTO analisi_dinamica (Tipo, Postazione, IdJob, IdVite, GP, Interesse, TempoTotale, TempoCorrente) VALUES (?, ?, ?, ?, ?, ?, 0, 0)");

    // Bind dei parametri
    $stmt->bind_param('ssssss', $tipo, $postazione, $idJob, $idVite, $gp, $interesse);

    // Esecuzione della query
    $stmt->execute();

    // Ottieni l'ID dell'ultimo inserimento
    $lastInsertId = $stmt->insert_id;

    // Chiudi la query preparata
    $stmt->close();

    // Ottieni tutte le postazioni aggiornate e inviale come risposta
    echo json_encode(getPostazioni());
}

function getPostazioni()
{
    global $db;
    $query = "SELECT * FROM analisi_dinamica";
    $result = $db->query($query);

    if (!$result) {
        die('Errore nella query: ' . $db->error);
    }

    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
