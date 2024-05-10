<?php
// Consentire l'accesso da qualsiasi origine (notare il * che indica "qualsiasi")
header("Access-Control-Allow-Origin: *");
// Consentire i metodi HTTP specifici (GET, POST, PUT, DELETE, OPTIONS)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Consentire determinate intestazioni HTTP
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Connessione al database
$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_2');

// Verifica connessione al database
if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

// Imposta la postazione come parametro GET, fallback a 'Postazione11' se non presente
$postazione = isset($_GET['postazione']) ? $_GET['postazione'] : 'Postazione11';

// Utilizza un prepared statement per evitare SQL injection
$query = "SELECT * FROM risultati WHERE Postazione = ?";
$stmt = $db->prepare($query);
$stmt->bind_param('s', $postazione);
$stmt->execute();

$result = $stmt->get_result();

// Formatta i dati come un file di testo
$fileContent = "ID\tCommessa\tCodice\tSeriale\tPostazione\tStato\tUtente\tIdJob\tNomeJob\tTotaleJob\tTimestampInizio\tTimestampFine\tPausa\tErrore\tEsito\n";
while ($row = mysqli_fetch_assoc($result)) {
    $fileContent .= implode("\t", $row) . "\n";
}

// Chiudi la connessione al database
mysqli_close($db);

// Restituisci il file di testo
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment; filename="report.xlsx"');  // Cambiato da "report.txt" a "report.xlsx"
echo $fileContent;
?>
