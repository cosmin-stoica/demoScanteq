<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Custom-Header");



// Retrieve the POST data
$postData = json_decode(file_get_contents("php://input"), true);

// Check if the required fields are present
if (isset($postData['to']) && isset($postData['subject']) && isset($postData['text'])) {
    // Extract data from the POST request
    $to = $postData['to'];
    $subject = $postData['subject'];
    $text = $postData['text'];

    // Set additional headers
    $headers = "From: infoticket@scanteq.com"; // Set your email address as the "from" address
    $headers .= "\r\n"; // Add a newline character

    // Send the email
    $success = mail($to, $subject, $text, $headers);

    // Check if the email was sent successfully
    if ($success) {
        echo json_encode(['message' => 'Email sent successfully']);
    } else {
        echo json_encode(['error' => 'Error sending email']);
    }
} else {
    echo json_encode(['error' => 'Missing required fields']);
}
?>
