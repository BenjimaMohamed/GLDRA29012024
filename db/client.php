<?php

// Connexion à la base de données
$servername = "localhost";
$username = "votre_nom_utilisateur";
$password = "votre_mot_de_passe";
$dbname = "admin";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Récupérez les données du formulaire
$inputUsername = $_POST['username'];
$inputPassword = $_POST['password'];

// Évitez les attaques par injection SQL en utilisant des déclarations préparées
$stmt = $conn->prepare("SELECT id FROM login WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $inputUsername, $inputPassword);
$stmt->execute();
$stmt->store_result();

// Vérifiez si les informations d'identification sont valides
if ($stmt->num_rows > 0) {
    echo "Connexion réussie";
} else {
    echo "Échec de la connexion";
}

// Fermez la connexion
$stmt->close();
$conn->close();

?>
