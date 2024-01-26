<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Répondre aux requêtes OPTIONS sans effectuer le traitement habituel
    exit(0);
}

// Connexion à la base de données (à adapter selon votre configuration)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "admin";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$data = json_decode(file_get_contents("php://input"));

// Assurez-vous que les données ne sont pas vides
if (!empty($data->username) && !empty($data->password)) {
    $username = $data->username;
    $password = $data->password;

    // Préparer la requête SQL
    $sql = "INSERT INTO login (username, password) VALUES ('$username', '$password')";

    // Exécuter la requête
    if ($conn->query($sql) === TRUE) {
        // Retourner une réponse JSON avec succès
        echo json_encode(["status" => "success"]);
    } else {
        // Retourner une réponse JSON avec l'erreur
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }
} else {
    // Retourner une réponse JSON si les données sont vides
    echo json_encode(["status" => "error", "message" => "Veuillez fournir un nom d'utilisateur et un mot de passe"]);
}

// Fermer la connexion à la base de données
$conn->close();
?>
