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

// Sélectionnez tous les utilisateurs depuis la table visiteur
$result = $conn->query("SELECT username, password FROM visiteur");

// Vérifiez si des utilisateurs sont présents
if ($result->num_rows > 0) {
    // Créez un tableau pour stocker les résultats
    $users = array();

    // Parcourez chaque ligne de résultat
    while ($row = $result->fetch_assoc()) {
        // Ajoutez chaque utilisateur au tableau
        $users[] = $row;
    }

    // Fermez la connexion
    $conn->close();

    // Renvoyez la réponse au format JSON
    header('Content-Type: application/json');
    echo json_encode($users);
} else {
    // Aucun utilisateur trouvé
    $response = array('message' => 'Aucun utilisateur trouvé');

    // Fermez la connexion
    $conn->close();

    // Renvoyez la réponse au format JSON
    header('Content-Type: application/json');
    echo json_encode($response);
}

?>
