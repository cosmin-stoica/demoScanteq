<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');

// Verifica la connessione al database
if ($db->connect_errno) {
    die("Connessione al database fallita: " . $db->connect_error);
}

// Loop infinito
$elapsed_time = 0;
while ($elapsed_time < 295) { // Esegui per 300 secondi (5 minuti)
    // Esegui la query per aggiornare il valore della colonna WatchDog
    $query = "UPDATE picktoimage SET WatchDog = WatchDog - 1 WHERE WatchDog > 0";
    if ($db->query($query) === TRUE) {
        echo "Valore di WatchDog aggiornato con successo.\n";
    } else {
        echo "Errore durante l'aggiornamento del valore di WatchDog: " . $db->error . "\n";
    }
    
    sleep(1);
    $elapsed_time += 1;
}


// Dopo 5 minuti, esegui il secondo script
$second_script_url = "https://www.scanteq.com/php/threads/threadWatchDog.php";
$response = file_get_contents($second_script_url);

// Controlla se la richiesta è andata a buon fine
if ($response === FALSE) {
    echo "Errore durante l'esecuzione dello script secondo.php.";
} else {
    echo "Lo script primo.php è stato eseguito con successo.";
}
?>
