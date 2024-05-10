<?php
// Consentire l'accesso da qualsiasi origine (notare il * che indica "qualsiasi")
header("Access-Control-Allow-Origin: *");
// Consentire i metodi HTTP specifici (GET, POST, PUT, DELETE, OPTIONS)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Consentire determinate intestazioni HTTP
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');
//$db = new mysqli('localhost', 'root', 'scanteq', 'sito');

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
   
// Leggi il corpo della richiesta come JSON
$data = json_decode(file_get_contents('php://input'), true);
$nome = mysqli_real_escape_string($db, $data['Nome']);
$messaggio = mysqli_real_escape_string($db, $data['Messaggio']);
$autore = mysqli_real_escape_string($db, $data['Autore']);
$email = mysqli_real_escape_string($db, $data['Email']);
$cellulare = mysqli_real_escape_string($db, $data['Cellulare']);
$stato = mysqli_real_escape_string($db, $data['Stato']);

$query = "INSERT INTO ticket (Autore, Email, Nome, Cell, Messaggio, Stato) VALUES ('$autore', '$email', '$nome', '$cellulare', '$messaggio', '$stato')";

if ($db->query($query) === TRUE) {
    echo json_encode(['message' => 'Dati inseriti con successo nel database']);
} else {
    echo json_encode(['error' => 'Errore nell inserimento dei dati nel database']);
}


}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $nome = mysqli_real_escape_string($db, $data['Nome']);
    $messaggio = mysqli_real_escape_string($db, $data['Messaggio']);
    $autore = mysqli_real_escape_string($db, $data['Autore']);
    $email = mysqli_real_escape_string($db, $data['Email']);
    $cellulare = mysqli_real_escape_string($db, $data['Cellulare']);
    $stato = mysqli_real_escape_string($db, $data['Stato']);

    $query = "INSERT INTO ticket (Autore, Email, Nome, Cell, Messaggio, Stato) VALUES ('$autore', '$email', '$nome', '$cellulare', '$messaggio', '$stato')";

    if ($db->query($query) === TRUE) {
        echo json_encode(['message' => 'Dati inseriti con successo nel database']);
    } else {
        echo json_encode(['error' => 'Errore nell inserimento dei dati nel database']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $ticketId = $data['ticketId'];
    $query = "UPDATE ticket SET Stato = 1 WHERE id = $ticketId";

    if ($db->query($query) === TRUE) {
        echo json_encode(['message' => 'Ticket contrassegnato come "Concluso"']);
    } else {
        echo json_encode(['error' => 'Errore nell\'aggiornamento dello stato del ticket']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents('php://input'), true);
    $ticketId = $data['ticketId'];

    $query = "DELETE FROM ticket WHERE id = $ticketId";

    if ($db->query($query) === TRUE) {
        echo json_encode(['message' => 'Ticket eliminato con successo']);
    } else {
        echo json_encode(['error' => 'Errore nell\'eliminazione del ticket']);
    }
} else {
    echo json_encode(getTickets());
}

function getTickets() {
    global $db;
    $query = "SELECT * FROM ticket";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>