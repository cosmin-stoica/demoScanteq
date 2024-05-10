<?php
// Connessione al database
$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_2');

// Verifica della connessione
if ($db->connect_error) {
    die("Connessione fallita: " . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Ottieni il contenuto del file
    $file_content = file_get_contents("php://input");

    // Separare la prima e la seconda riga dal resto del contenuto
    $lines = explode("\n", $file_content);
    $code = trim($lines[0]);
    $data = trim($lines[1]);
    $clean_lines = array_slice($lines, 2); // Ottieni tutte le righe successive alla seconda

    // Unisci le righe in un'unica stringa separata da un carattere di nuova riga
    $clean_line = implode("\n", $clean_lines);

    // Prepara la query di inserimento con la colonna "Data"
    $insert_query = "INSERT INTO log (ID, Log, Data) VALUES ('$code', '$clean_line', '$data')";

    // Esegui la query
    $result = $db->query($insert_query);

    // Verifica se la query è stata eseguita con successo
    if (!$result) {
        echo "Errore nell'inserimento della riga: " . $db->error;
    } else {
        echo "Inserimento completato con successo!";
    }

} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(getPostazioni());

} else {
    // Se la richiesta non è POST o GET, restituisci un errore
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Metodo non consentito";
}

function getPostazioni() {
    global $db;
    $query = "SELECT * FROM log";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
