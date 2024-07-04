<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$content = file_get_contents('php://input');
$decoded = json_decode($content, true);

if (isset($decoded['text'])) {
    $text = $decoded['text'];
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit();
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

     $url = 'https://api.openai.com/v1/threads';




     $data = [
        "messages" => [
            [
                "role" => "user",
                "content" => $text,
                //"file_ids" => [
                //    'file-icCjzeYw7jzx3iwx8JYqehOa'
               // ]
            ]
        ]
    ];


     // Impostazioni CURL per la chiamata POST
     $ch = curl_init($url);

     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
     curl_setopt($ch, CURLOPT_CAINFO, 'cacert.pem');

     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
     curl_setopt($ch, CURLOPT_POST, true);
     curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
     curl_setopt($ch, CURLOPT_HTTPHEADER, [
         'Content-Type: application/json',
         'Authorization: Bearer ' . $apiKey,
         'OpenAI-Beta: assistants=v1',
     ]);

     // Esecuzione della chiamata e raccolta della risposta
     $response = curl_exec($ch);
     $err = curl_error($ch);
     curl_close($ch);

     if ($err) {
        echo json_encode(['error' => "CURL Error: $err"]);
    } else {
        echo $response; // Direttamente l'output della risposta, assicurati che sia nel formato desiderato.
    }








    $responseArray = json_decode($response, true);
    $id = $responseArray['id'];
    
    /*$url = 'https://api.openai.com/v1/threads/' . $id . '/messages';


    $data = [
            "role" => "user",
            "content" =>  $text


    ];


     // Impostazioni CURL per la chiamata POST
     $ch = curl_init($url);

     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
     curl_setopt($ch, CURLOPT_CAINFO, 'cacert.pem');

     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
     curl_setopt($ch, CURLOPT_POST, true);
     curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
     curl_setopt($ch, CURLOPT_HTTPHEADER, [
         'Content-Type: application/json',
         'Authorization: Bearer ' . $apiKey,
         'OpenAI-Beta: assistants=v1',
     ]);

     // Esecuzione della chiamata e raccolta della risposta
     $response = curl_exec($ch);
     $err = curl_error($ch);
     curl_close($ch);

     if ($err) {
        echo json_encode(['error' => "CURL Error: $err"]);
    } else {
        echo $response; // Direttamente l'output della risposta, assicurati che sia nel formato desiderato.
    }*/



    $url = 'https://api.openai.com/v1/threads/' . $id . '/runs';


    $data = [
        "assistant_id" => "asst_yUT55QNirGyJ49WsmJdrPoxC"
    ];


     // Impostazioni CURL per la chiamata POST
     $ch = curl_init($url);

     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
     curl_setopt($ch, CURLOPT_CAINFO, 'cacert.pem');

     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
     curl_setopt($ch, CURLOPT_POST, true);
     curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
     curl_setopt($ch, CURLOPT_HTTPHEADER, [
         'Content-Type: application/json',
         'Authorization: Bearer ' . $apiKey,
         'OpenAI-Beta: assistants=v1',
     ]);

     // Esecuzione della chiamata e raccolta della risposta
     $response = curl_exec($ch);
     $err = curl_error($ch);
     curl_close($ch);

     if ($err) {
        echo json_encode(['error' => "CURL Error: $err"]);
    } else {
        echo $response; // Direttamente l'output della risposta, assicurati che sia nel formato desiderato.
    }




    $responseArray = json_decode($response, true);
    $idrun = $responseArray['id'];
    $id = $responseArray['thread_id'];


    $url = 'https://api.openai.com/v1/threads/' . $id . '/runs/' . $idrun;

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_CAINFO, 'cacert.pem');

    curl_setopt($ch, CURLOPT_HTTPGET, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
         'Content-Type: application/json',
         'Authorization: Bearer ' . $apiKey,
         'OpenAI-Beta: assistants=v1',
     ]);

     // Esecuzione della chiamata e raccolta della risposta
     $response = curl_exec($ch);
     $err = curl_error($ch);
     curl_close($ch);

     if ($err) {
        echo json_encode(['error' => "CURL Error: $err"]);
    } else {
        echo $response; // Direttamente l'output della risposta, assicurati che sia nel formato desiderato.
    }






    $url = 'https://api.openai.com/v1/threads/' . $id . '/messages';
    
    // Impostazioni CURL per la chiamata GET
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_CAINFO, 'cacert.pem');

    curl_setopt($ch, CURLOPT_HTTPGET, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
        'OpenAI-Beta: assistants=v1',
    ]);
    
    // Esecuzione della chiamata e raccolta della risposta
    $response = curl_exec($ch);
    $err = curl_error($ch);
    curl_close($ch);

    if ($err) {
        echo json_encode(['error' => "CURL Error: $err"]);
    } else {
        echo $response; // Direttamente l'output della risposta, assicurati che sia nel formato desiderato.
    }





}

?>