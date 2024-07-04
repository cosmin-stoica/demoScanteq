<?php
$expectedKey = "daje";
$providedKey = $_SERVER['HTTP_AUTHORIZATION'];

// Verifica se il token è presente nell'intestazione di autorizzazione
if (empty($providedKey) || $providedKey !== "Bearer $expectedKey") {
    // Se il token non è valido, restituisci un errore 401 (Non autorizzato)
    header('HTTP/1.0 401 Unauthorized');
    header('WWW-Authenticate: Basic realm="Area protetta"');
    echo 'Accesso non autorizzato.';
    exit;
}

// Il resto del tuo script PHP...
