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

    // Assicurati che i campi necessari siano presenti nel JSON
    if (isset($data['Data'], $data['Offerta'], $data['Descrizione'], $data['Ore'])) {

            // La combinazione Linea e ID non esiste, procedi con l'inserimento
            $insertQuery = "INSERT INTO azione (Data, Offerta, Descrizione, Ore) VALUES (FROM_UNIXTIME(?), ?, ?, ?)";
            $stmt = $db->prepare($insertQuery);

            if ($stmt) {          
                $stmt->bind_param("issi", $data['Data'], $data['Offerta'], $data['Descrizione'], $data['Ore']);
                if ($stmt->execute()) {
                    echo json_encode(['message' => 'Dati salvati con successo']);
                } else {
                    echo json_encode(['error' => 'Errore nell\'inserimento dei dati nel database']);
                }
                $stmt->close();
            } else {
                echo json_encode(['error' => 'Errore nella preparazione della query']);
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
        $stmt = $db->prepare("DELETE FROM azione WHERE ID IN ($placeholders)");

        // Bind dei parametri
        $stmt->bind_param(str_repeat('i', count($idsToDelete)), ...$idsToDelete);

        // Esecuzione della query
        $stmt->execute();

        echo 'Dati modificati';

        // Chiusura dello statement
        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    global $db;

    // Verifica se il parametro 'Offerta' è presente nella stringa di query
    $offerta = isset($_GET['Offerta']) ? $_GET['Offerta'] : null;

    // Costruisci la query base
    $query = "SELECT * FROM azione";

    // Applica il filtro se 'Offerta' è presente
    if ($offerta !== null) {
        // Prepara la query con il filtro
        $query .= " WHERE Offerta = ?";
        $stmt = $db->prepare($query);

        if (!$stmt) {
            echo json_encode(['error' => 'Errore nella preparazione della query']);
            exit;
        }

        // Bind del parametro 'Offerta'
        $stmt->bind_param("s", $offerta);

        // Esecuzione della query
        $stmt->execute();

        // Ottiene il risultato della query
        $result = $stmt->get_result();

        // Estrae i dati in un array associativo
        $commesse = $result->fetch_all(MYSQLI_ASSOC);

        // Chiusura dello statement
        $stmt->close();
    } else {
        // Esegue la query senza filtro
        $result = $db->query($query);
        $commesse = $result->fetch_all(MYSQLI_ASSOC);
    }

    // Invia i dati al client
    echo json_encode($commesse);
}

$db->close();
?>
