<?php

// Enable CORS (Cross-Origin Resource Sharing)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "admin";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Récupérez les données du formulaire
$inputUsername = isset($_POST['username']) ? $_POST['username'] : '';
$inputPassword = isset($_POST['password']) ? $_POST['password'] : '';

// Évitez les attaques par injection SQL en utilisant des déclarations préparées
$stmt = $conn->prepare("SELECT id FROM login WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $inputUsername, $inputPassword);
$stmt->execute();
$stmt->store_result();

// Vérifiez si les informations d'identification sont valides
if ($stmt->num_rows > 0) {
    $response = array('message' => 'Connexion réussie');
} else {
    $response = array('message' => 'Échec de la connexion');
}

// Fermez la connexion
$stmt->close();
$conn->close();

// Renvoyez la réponse au format JSON
header('Content-Type: application/json');
echo json_encode($response);


?>
