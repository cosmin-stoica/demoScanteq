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

    echo json_encode(getPostazioni());


function getPostazioni() {
    global $db;
    $query = "SELECT * FROM errori";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);

    if (!$result) {
        die('Errore nella query: ' . $db->error);
    }
    
}

$db->close();
?>
