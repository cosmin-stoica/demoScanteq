<?php
$customHeaderVariable = isset($_SERVER['HTTP_CUSTOM_HEADER']) ? $_SERVER['HTTP_CUSTOM_HEADER'] : '';

if ($customHeaderVariable !== "daje") {
    echo json_encode(['error' => 'Accesso negato. Credenziali non valide.']);
    exit;
}

?>
