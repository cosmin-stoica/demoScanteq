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

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data === null) {
        // Errore nella decodifica del JSON
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Errore nella decodifica del JSON']);
    } elseif (isset($data['linea'][0], $data['tipo'][0], $data['descrizione'][0])) {
        // Esegui le operazioni specifiche per le richieste HTTP POST qui
        // Inserisci i dati nella tabella "avvitature"
        $linea = $data['linea'][0];
        $tipo = $data['tipo'][0];
        $descrizione = $data['descrizione'][0];
        
        $query = "INSERT INTO supervisor (linea, tipo, descrizione) VALUES (?, ?, ?)";
        $stmt = $db->prepare($query);

        if ($stmt) {
            $stmt->bind_param("sss", $linea, $tipo, $descrizione);
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
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = file_get_contents('php://input');
    echo $data;
} else {
    echo json_encode(getTickets());
}


function getTickets() {
    global $db;
    $query = "SELECT * FROM supervisor";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
