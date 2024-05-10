<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

$db = new mysqli('31.11.39.136', 'Sql1749478', 'Scanteq123+', 'Sql1749478_1');

if ($db->connect_error) {
    die('Errore di connessione al database: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (is_array($data)) {
        updateRecord($data);
        echo 'Dati cambiati con successo!';
    } else {
        // Invia una risposta vuota nel caso in cui i dati non siano un array
        echo json_encode([]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(getPostazioni());
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $idsToDelete = $data['idsToDelete'];

    if (!empty($idsToDelete)) {
        $placeholders = implode(',', array_fill(0, count($idsToDelete), '?'));
        $stmt = $db->prepare("DELETE FROM postazioni WHERE ID IN ($placeholders)");

        // Bind dei parametri
        $stmt->bind_param(str_repeat('i', count($idsToDelete)), ...$idsToDelete);

        // Esecuzione della query
        $stmt->execute();

        echo json_encode(getPostazioni());

        $stmt->close();
    }
}elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $modifiedData = $data['modifiedData'];

    foreach ($modifiedData as $row) {
        $id = $row['ID'];
        $codice = $row['Codice'];
        $name = $row['Name'];
        $stato = $row['Stato'];
        $operatore = $row['Operatore'];
        $operazione = $row['Operazione'];

        // Implementa la logica per aggiornare i dati nel database
        $stmt = $db->prepare("UPDATE postazioni SET Codice=?, Name=?, Stato=?, Operatore=?, Operazione=? WHERE ID=?");
        $stmt->bind_param('sssssi', $codice, $name, $stato, $operatore, $operazione, $id);
        $stmt->execute();
        echo json_encode(getPostazioni());
        $stmt->close();
    }
}elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Estrai i dati dal corpo della richiesta
    $codice = $data['Codice'];
    $nome = $data['Nome'];
    $stato = $data['Stato'];
    $operatore = $data['Operatore'];
    $operazione = $data['Operazione'];

    // Prepara la query di inserimento
    $stmt = $db->prepare("INSERT INTO postazioni (Codice, Name, Stato, Operatore, Operazione, TempoTotale, TempoCorrente) VALUES (?, ?, ?, ?, ?, 0, 0)");

    // Bind dei parametri
    $stmt->bind_param('sssss', $codice, $nome, $stato, $operatore, $operazione);

    // Esecuzione della query
    $stmt->execute();

    // Ottieni l'ID dell'ultimo inserimento
    $lastInsertId = $stmt->insert_id;

    // Chiudi la query preparata
    $stmt->close();

    // Ottieni tutte le postazioni aggiornate e inviale come risposta
    echo json_encode(getPostazioni());
}


function updateRecord($data) {
    global $db;

    $id = (int)$data['ID'];

    // Inizializza gli array per i valori e i tipi dei parametri
    $values = array();
    $types = '';

    // Verifica e aggiungi i valori non vuoti
    if (!empty($data['Stato'])) {
        $values['Stato'] = $data['Stato'];
        $types .= 's';  // Tipo di parametro: stringa
    }

    if (!empty($data['Operatore'])) {
        $values['Operatore'] = $data['Operatore'];
        $types .= 's';  // Tipo di parametro: stringa
    }

    if (!empty($data['Operazione'])) {
        $values['Operazione'] = $data['Operazione'];
        $types .= 's';  // Tipo di parametro: stringa
    }

    if (!empty($data['TempoTotale'])) {
        $values['TempoTotale'] = $data['TempoTotale'];
        $types .= 'i';  // Tipo di parametro: stringa
    }

    if (!empty($data['TempoCorrente'])) {
        $values['TempoCorrente'] = $data['TempoCorrente'];
        $types .= 'i';  // Tipo di parametro: stringa
    }

    // Costruisci la parte SET della query SQL
    $setClause = implode(', ', array_map(function ($key) {
        return "$key=?";
    }, array_keys($values)));

    // Costruisci la query SQL completa
    $query = "UPDATE postazioni SET $setClause WHERE ID=?";
    $types .= 'i';  // Tipo di parametro: intero

    // Combina tutti i valori in un array per la funzione bind_param
    $bindValues = array_values($values);
    $bindValues[] = $id;

    $stmt = $db->prepare($query);

    // Aggiungi il tipo di parametro alla stringa di bind_param
    $bindParams = array_merge(array($types), $bindValues);

    // Prepara un array di parametri da passare a bind_param
    $params = array();
    foreach ($bindParams as $key => $value) {
        $params[$key] = &$bindParams[$key];
    }

    // Chiamata a bind_param con gli argomenti appropriati
    call_user_func_array(array($stmt, 'bind_param'), $params);

    if (!$stmt->execute()) {
        die('Errore nell\'aggiornamento del record: ' . $stmt->error);
    }

    $stmt->close();
}



function getPostazioni() {
    global $db;
    $query = "SELECT * FROM postazioni";
    $result = $db->query($query);

    if (!$result) {
        die('Errore nella query: ' . $db->error);
    }

    return $result->fetch_all(MYSQLI_ASSOC);
}

$db->close();
?>
