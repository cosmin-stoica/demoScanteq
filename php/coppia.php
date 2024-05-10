<?php
// Consentire l'accesso da qualsiasi origine (notare il * che indica "qualsiasi")
header("Access-Control-Allow-Origin: *");
// Consentire i metodi HTTP specifici (GET, POST, PUT, DELETE, OPTIONS)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Consentire determinate intestazioni HTTP
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, X-Data");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_2');

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Leggi il corpo della richiesta come stringa
    $data = json_decode(file_get_contents('php://input'), true);

    // Assicurati che i campi necessari siano presenti nel JSON
    if (isset($data['Commessa'], $data['Codice'], $data['Seriale'], $data['Postazione'], $data['Utente'], $data['NomeJob'], $data['IdJob'], $data['Timestamp'], $data['CoppiaNominale'], $data['TolleranzaCoppia'], $data['CoppiaMisurata'], $data['Errore'], $data['Ripetizioni'], $data['Esito'])) {
        // Esegui le operazioni specifiche per le richieste HTTP POST qui
        // Inserisci i dati nella tabella "avvitature"
        $query = "INSERT INTO coppia (Commessa, Codice, Seriale, Postazione, Utente, NomeJob, IdJob, Timestamp, CoppiaNominale, TolleranzaCoppia, CoppiaMisurata, Errore, Ripetizioni, Esito  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $db->prepare($query);

        if ($stmt) {
            $stmt->bind_param("ssisssisdddsis", $data['Commessa'], $data['Codice'], $data['Seriale'], $data['Postazione'], $data['Utente'], $data['NomeJob'], $data['IdJob'], $data['Timestamp'], $data['CoppiaNominale'], $data['TolleranzaCoppia'], $data['CoppiaMisurata'], $data['Errore'], $data['Ripetizioni'], $data['Esito']);
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
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $idsToDelete = $data['idsToDelete'];

    if (!empty($idsToDelete)) {
        $placeholders = implode(',', array_fill(0, count($idsToDelete), '?'));
        $stmt = $db->prepare("DELETE FROM coppia WHERE ID IN ($placeholders)");

        // Bind dei parametri
        $stmt->bind_param(str_repeat('i', count($idsToDelete)), ...$idsToDelete);

        // Esecuzione della query
        $stmt->execute();
        echo json_encode(getPostazioni());
        // Chiusura dello statement
        $stmt->close();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $modifiedData = $data['modifiedData'];

    foreach ($modifiedData as $row) {
        $id = $row['ID'];
        $commessa = $row['Commessa'];
        $codice = $row['Codice'];
        $seriale = $row['Seriale'];
        $postazione = $row['Postazione'];
        $utente = $row['Utente'];
        $idJob = $row['IdJob'];
        $nomeJob = $row['NomeJob'];
        $timestamp = $row['Timestamp'];
        $correnteNominale = $row['CoppiaNominale'];
        $tolleranzaCorrente = $row['TolleranzaCoppia'];
        $correnteMisurata = $row['CoppiaMisurata'];
        $errore = $row['Errore'];
        $ripetizioni = $row['Ripetizioni'];
        $esito = $row['Esito'];

        // Implementa la logica per aggiornare i dati nel database
        $stmt = $db->prepare("UPDATE coppia SET Commessa=?, Codice=?, Seriale=?, Postazione=?, Utente=?, IdJob=?, NomeJob=?, Timestamp=?, CoppiaNominale=?, TolleranzaCoppia=?, CoppiaMisurata=?, Errore=?, Ripetizioni=?, Esito=? WHERE ID=?");
        $stmt->bind_param('ssississdddsisi', $commessa, $codice, $seriale, $postazione, $utente, $idJob, $nomeJob, $timestamp, $correnteNominale, $tolleranzaCorrente, $correnteMisurata, $errore, $ripetizioni, $esito, $id);
        $stmt->execute();
        echo json_encode(getPostazioni());
        $stmt->close();
    }
}elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Verifica se ci sono parametri nella query string
    $queryParams = $_GET;
    $dataFromHeader = isset(getallheaders()['X-Data']) ? json_decode(getallheaders()['X-Data'], true) : null;

    $query = "SELECT ";

    if (
    $dataFromHeader) {
    
        $query .= "CoppiaMisurata AS ValoreFinale FROM coppia";

    if (!empty($queryParams)) {
        $conditions = array();

        // Aggiungi condizioni alla query per ciascun parametro ricevuto
        foreach ($queryParams as $key => $value) {
            // Esempio: gestisci Timestamp separatamente
            if ($key === 'tempoInizio' || $key === 'tempoFine') {
                $value = date('Y-m-d H:i:s', $value / 1000);
                continue; // Salta l'aggiunta alla lista di condizioni
            }
    
            $conditions[] = "$key = '$value'";
        }
    
        // Aggiungi le condizioni alla query principale
        $query .= !empty($conditions) ? " WHERE " . implode(" AND ", $conditions) : '';
    
        // Aggiungi la condizione per l'intervallo di tempo
        if (isset($queryParams['tempoInizio']) && isset($queryParams['tempoFine'])) {
            $tempoInizio = date('Y-m-d H:i:s', $queryParams['tempoInizio'] / 1000);
            $tempoFine = date('Y-m-d H:i:s', $queryParams['tempoFine'] / 1000);
    
            $query .= !empty($conditions) ? " AND " : " WHERE ";
            $query .= "Timestamp BETWEEN '$tempoInizio' AND '$tempoFine'";
        }
    }
}

else{
    $query .= "* FROM coppia";
}
    
    // Esegui la query e restituisci i risultati
    $result = $db->query($query);
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    }


function getPostazioni() {
    global $db;
    $query = "SELECT * FROM coppia";
    $result = $db->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
